from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime, timezone
import uuid


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


# --- Models ---

class EnquiryCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    date: Optional[str] = None
    partySize: Optional[str] = None
    message: Optional[str] = None
    type: Optional[str] = "General Enquiry"


class Enquiry(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = None
    date: Optional[str] = None
    partySize: Optional[str] = None
    message: Optional[str] = None
    type: Optional[str] = "General Enquiry"
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


# --- Routes ---

@api_router.get("/")
async def root():
    return {"message": "Charm Thai Restaurant API", "status": "online"}


@api_router.post("/enquiry", response_model=Enquiry)
async def create_enquiry(data: EnquiryCreate):
    enquiry = Enquiry(**data.model_dump())
    doc = enquiry.model_dump()
    await db.enquiries.insert_one(doc)
    return enquiry


@api_router.get("/enquiries", response_model=List[Enquiry])
async def get_enquiries():
    docs = await db.enquiries.find({}, {"_id": 0}).to_list(100)
    return docs


# Legacy status endpoints
class StatusCheckCreate(BaseModel):
    client_name: str

class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    obj = StatusCheck(**input.model_dump())
    await db.status_checks.insert_one(obj.model_dump())
    return obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    return await db.status_checks.find({}, {"_id": 0}).to_list(1000)


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
