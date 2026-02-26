import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestAPI:
    """Charm Thai Restaurant API tests"""

    def test_api_root(self):
        r = requests.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "online"
        print("API root OK")

    def test_enquiry_post(self):
        payload = {
            "name": "TEST_User",
            "email": "test@example.com",
            "phone": "01225000000",
            "date": "2026-03-01",
            "partySize": "4",
            "message": "Test enquiry",
            "type": "Table Reservation"
        }
        r = requests.post(f"{BASE_URL}/api/enquiry", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data["name"] == "TEST_User"
        assert data["email"] == "test@example.com"
        assert "id" in data
        assert "created_at" in data
        print(f"Enquiry created: {data['id']}")

    def test_enquiry_minimal(self):
        """Test enquiry with only required fields"""
        payload = {"name": "TEST_Min", "email": "min@example.com"}
        r = requests.post(f"{BASE_URL}/api/enquiry", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data["name"] == "TEST_Min"
        print("Minimal enquiry OK")

    def test_enquiry_missing_required(self):
        """Should return 422 for missing required fields"""
        r = requests.post(f"{BASE_URL}/api/enquiry", json={"name": "NoEmail"})
        assert r.status_code == 422
        print("Validation error for missing email OK")

    def test_get_enquiries(self):
        r = requests.get(f"{BASE_URL}/api/enquiries")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        print(f"Got {len(data)} enquiries")
