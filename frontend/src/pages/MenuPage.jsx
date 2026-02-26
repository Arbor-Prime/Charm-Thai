import { useState } from "react";
import { Link } from "react-router-dom";

const ORDER_URL = "https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=charm-thai-menu";
const WIXBASE = "https://static.wixstatic.com/media";

// ===== FULL MENU DATA =====
const MENU_CATEGORIES = [
  {
    id: "starters",
    name: "Starters",
    thai: "อาหารเคียง",
    desc: "Variety of delicious Thai starters",
    items: [
      { code: "A", name: "Thai Prawn Cracker", thai: "ข้าวเกรียบ", desc: "Served with sweet chilli sauce", price: "£3.95", tags: ["GF"], spice: 1 },
      { code: "B", name: "Sake Gyoza (4)", thai: "เกี้ยวซ่า", desc: "Crispy fried chicken and vegetables dumpling, served with sake ginger sauce", price: "£6.75", tags: ["S"] },
      { code: "C", name: "Chicken Satay (4)", thai: "ไก่สะเต๊ะ", desc: "Grilled chicken skewer marinated with curry powder and herbs, served with peanut sauce", price: "£6.75", tags: ["N", "GF"] },
      { code: "D", name: "Prawn Tempura (4)", thai: "กุ้งเทมปุระ", desc: "Japanese style King prawns deep-fried in a light batter served with sweet chilli sauce", price: "£6.95" },
      { code: "E", name: "Vegetarian Gyoza (4)", thai: "เกี้ยวซ่าผัก", desc: "Crispy fried vegetables dumplings, served with sake ginger sauce", price: "£6.75", tags: ["V"] },
      { code: "F", name: "Tofu Pad", thai: "เต้าหู้ผัดถั่วงอก", desc: "Deep fried Tofu stir-fried with bean paste, beansprout and spring onions. *Dine-in only*", price: "£6.50", tags: ["V"] },
      { code: "G", name: "Tagarashi Pepper Squid (5)", thai: "ปลาหมึกพริกเกลือ", desc: "Crispy fried squid in a light batter seasoned with chilli and garlic, served with sriracha chilli sauce", price: "£6.95", spice: 2 },
      { code: "H", name: "Shitake Spring Roll (4)", thai: "ปอเปี้ยทอด", desc: "Crispy spring roll filled with vegetable and vermicelli, served with sweet chilli sauce", price: "£6.50", tags: ["V", "S"] },
      { code: "I", name: "Kanoom Jeep (6)", thai: "ขนมจีบ", desc: "Steamed pork dumpling, water chestnut, mushroom, sesame oil, served with garlic and dark sweet soya sauce", price: "£6.95", tags: ["S"] },
      { code: "J", name: "Som Tum", thai: "ส้มตำ", desc: "A spicy salad with green papaya, carrots, peanut, fine beans, cherry tomato and chilli lime dressing", price: "£9.95", tags: ["V", "N", "GF"], spice: 2 },
      { code: "K", name: "Pad Pak", thai: "ผัดผัก", desc: "Stir fried mixed vegetables with oyster garlic and soya sauce", price: "£6.50", tags: ["V"] },
      { code: "L", name: "Fish Cake (4)", thai: "ทอดมัน", desc: "Medallion of Thai River fish blended in red curry paste and deep fried, served with sweet chilli & peanut sauce", price: "£6.50", tags: ["N"] },
      { code: "M", name: "Spare Ribs in Red Wine Sauce", thai: "ซี่โครงหมูซอสไวน์", desc: "Thai-style deep fried spare ribs marinated in Thai red wine sauce, served with fried shallot", price: "£7.50", tags: ["S"], spice: 1 },
      { code: "N", name: "Spare Ribs Salt & Chilli", thai: "ซี่โครงหมูอ่อนพริกเกลือ", desc: "Crispy fried spare ribs, seasoned with chilli, garlic, pepper, and Thai Sriracha chilli sauce", price: "£7.50", tags: ["GF"], spice: 2 },
    ]
  },
  {
    id: "noodles",
    name: "Noodles",
    thai: "ก๋วยเตี๋ยว",
    desc: "Thai noodle dishes — soup noodles and stir fried noodles",
    items: [
      { code: "1", name: "Kuey Teow Tom Yum", thai: "ก๋วยเตี๋ยวต้มยำ", desc: "Choice of Prawn or Chicken. Thin rice noodle in hot and sour soup, beansprout, spring green, coriander, spring onion, ground peanut, fried garlic, Thai chilli oil, dried chilli and lime", price: "£16.75", tags: ["N", "GF"], spice: 2 },
      { code: "2", name: "Kuey Teow Nam Tok", thai: "ก๋วยเตี๋ยวน้ำตก", desc: "Choice of Pork or Beef. Vermicelli rice noodle in Traditional Thai Nam Tok cinnamon soup, beansprout, spring green, coriander, spring onion, ground peanut, fried garlic, sweet basil and dried chilli", price: "£15.95", tags: ["N"], spice: 1 },
      { code: "3", name: "Kuey Teow Nam Sai", thai: "ก๋วยเตี๋ยวน้ำใส", desc: "Choice of Pork, Beef or Chicken. Vermicelli rice noodle in clear soya broth soup, spring green, beansprout, coriander, spring onions, fried garlic, fried shallot and ground pepper. *Dine-in only*", price: "£15.95" },
      { code: "4", name: "Rad Nah", thai: "ราดหน้า", desc: "Choice of Pork, Chicken or Prawn. Wide rice noodle stir fried with bean paste, baby corn, broccoli, carrot, spring green, topped with Rad Nah Gravy and ground pepper", price: "£16.75" },
      { code: "5", name: "Khao Soi", thai: "ข้าวซอย", desc: "Choice of Chicken or Prawn. Coconut curry noodle soup from Northern Thailand. Egg noodles in thick rich coconut broth, beansprout, coriander, fresh red shallot, fried shallot, lime and Thai pickles", price: "£17.50", tags: ["GF"] },
      { code: "6", name: "Sukiyaki Nam", thai: "สุกี้น้ำ", desc: "Glass noodles in Sukiyaki sauce and chicken broth soup, mixed Chicken, Prawn & Squid, egg, soy sauce, sesame oil, mushroom, carrot, Chinese leaves, celery and coriander. *Dine-in only*", price: "£16.75", spice: 2 },
      { code: "7", name: "Sukiyaki Hang", thai: "สุกี้แห้ง", desc: "Glass noodles stir fried with Sukiyaki sauce, mixed Chicken, Prawn & Squid, egg, soy sauce, sesame oil, mushroom, carrot, Chinese leaves, celery and coriander", price: "£16.50", spice: 2 },
      { code: "8", name: "Pad Sie Eiw", thai: "ผัดซีอิ้ว", desc: "Choice of Chicken, Prawn or Beef. Wide rice noodle stir fried with egg, Soy sauce, carrot, beansprout, baby corn, spring green, topped with ground pepper", price: "£15.50" },
      { code: "9", name: "Pad Thai", thai: "ผัดไทย", desc: "Choice of Chicken or Prawn. Thin rice noodle stir fried with egg, crushed Tamarind, beansprout, carrot, spring onion, served with lime and ground peanut", price: "£15.50", tags: ["GF", "N"] },
      { code: "10", name: "Pad Kee Moa", thai: "ผัดขี้เมา", desc: "Choice of Chicken, Prawn, Duck or Beef. Egg noodle stir fried with Kee Moa sauce, fresh chilli and garlic, beansprout, broccoli, carrot, baby corn, spring green and basil", price: "£15.50", spice: 3 },
      { code: "11", name: "Pad Singapore", thai: "ผัดสิงคโปร์", desc: "Choice of Chicken, Prawn or Beef. Vermicelli rice noodle stir fried with egg, beansprout, carrot, baby corn, broccoli, fresh chilli, spring onion, turmeric and cumin powder", price: "£15.75" },
      { code: "12", name: "Teow Pad", thai: "เตี๋ยวผัด", desc: "Choice of Roasted Duck or Belly Pork. Egg noodle stir fried with beansprout, carrot, spring onions, spring green, coriander, topped with Roasted Duck or Belly Pork and marinated Thai gravy sauce", price: "£17.95" },
    ]
  },
  {
    id: "fried-rice",
    name: "Fried Rice",
    thai: "ข้าวผัด",
    desc: "Thai style stir fried rice",
    items: [
      { code: "33", name: "Khoa Pad Sub Pa Rod", thai: "ข้าวผัดสัปะรด", desc: "Rice stir fried with Prawn and Chicken, egg, soya sauce, onion, carrot, pineapple, spring onion, raisin, cashewnut and cherry tomato, turmeric, served with cucumber and lime", price: "£15.50" },
      { code: "34", name: "Khao Pad", thai: "ข้าวผัด", desc: "Choice of Chicken or Prawn. Rice stir fried with egg, Soy sauce, onion, carrot, spring onion, spring green and cherry tomato, served with cucumber and lime", price: "£14.50", tags: ["GF"] },
      { code: "35", name: "Khao Pad Kra Pow", thai: "ข้าวผัดกระเพา", desc: "Choice of Chicken, Pork, Prawn or Beef. Spicy rice stir fried with Kra Pow sauce, blended fresh chilli and garlic, basil, onion, green bean, red and green pepper, served with cucumber and lime", price: "£14.50", spice: 2 },
    ]
  },
  {
    id: "stir-fry",
    name: "Stir Fry",
    thai: "ผัด",
    desc: "Served with Jasmine Rice",
    items: [
      { code: "13", name: "Pad Kra Pow Moo Sub / Gai Sub / Neua Sub", thai: "กระเพาหมูสับ", desc: "Choice of Minced Pork, Minced Chicken or Minced Beef. Stir fried with Kra Pow sauce, fresh chilli and garlic, green bean, onion, red and green pepper and basil", price: "£15.75", spice: 3 },
      { code: "14", name: "Pad Kra Pow Moo Grob", thai: "กระเพาหมูกรอบ", desc: "Stir fried triple cooked crispy pork belly with Kra Pow sauce, blended fresh chilli and garlic, green bean, onion, red and green pepper and basil", price: "£16.50", spice: 3 },
      { code: "15", name: "Pak Keaw Moo Grob", thai: "ผักเขียวหมูกรอบ", desc: "Stir fried triple cooked crispy pork belly in Oyster sauce, blended fresh chilli and garlic, green leaves, baby corn, carrot and bean paste", price: "£16.50", spice: 2 },
      { code: "16", name: "Pad Kra Tiam Prik Thai", thai: "ผัดกระเทียมพริกไทย", desc: "Choice of Chicken, Pork, Prawn or Beef. Stir fried with Garlic and Black Pepper sauce, coriander, onion, carrot, red & green pepper, spring onion and spring green", price: "£15.95" },
      { code: "17", name: "Pad Khing", thai: "ผัดขิง", desc: "Choice of Chicken, Prawn or Beef. Stir fried with Ginger sauce, onions, garlic, red and green pepper, mushroom, baby corn, ginger, celery, carrot and spring onion", price: "£14.95" },
      { code: "18", name: "Pad Med Ma Maung Gai Tod", thai: "ผัดเม็ดมะม่วงไก่ทอด", desc: "Stir fried light battered Chicken in Cashew nut sauce, onion, red and green pepper, mushroom, baby corn, carrot and spring onion", price: "£16.75", tags: ["N"] },
      { code: "19", name: "Pad Nam Mon Hoy", thai: "ผัดน้ำมันหอย", desc: "Choice of Chicken, Prawn or Beef. Stir fried with Oyster sauce, blended garlic, sesame oil, onions, red and green peppers, mushroom, baby corn, carrot, broccoli, spring green and spring onion", price: "£14.95", tags: ["S"] },
      { code: "20", name: "Pad Prik Ped", thai: "ผัดพริกเป็ด", desc: "Roasted duck breast topped with chilli oyster sauce, blended dried chilli and garlic, fresh chilli, onions, spring onions, red and green pepper", price: "£17.95", spice: 1 },
      { code: "21", name: "Khaw Kling", thai: "คั่วกลิ้ง", desc: "Choice of Minced Pork or Minced Chicken. Spicy dry stir fried, a traditional Southern Thai flavour with Kaffir leaves, chilli, shrimp paste, red and green pepper", price: "£15.95", tags: ["GF"], spice: 4 },
      { code: "22", name: "Green Curry Belly Pork", thai: "แกงเขียวหวานหมูกรอบ", desc: "Crispy Belly Pork with green curry paste, coconut milk, red and green pepper, bamboo shoot strip, onions and basil leaves", price: "£16.95", tags: ["GF"], spice: 2 },
      { code: "23", name: "Red Curry Belly Pork", thai: "แกงแดงหมูกรอบ", desc: "Crispy Belly Pork with red curry paste, coconut milk, red and green pepper, bamboo shoot strip, onions and basil leaves", price: "£16.95", tags: ["GF"], spice: 2 },
      { code: "25", name: "Khao Rad", thai: "ข้าวราด", desc: "Choice of Pork Belly or Roasted Duck. Topped with traditional Thai homemade gravy sauce and bean paste; served with cucumber, spring green, coriander, half boiled egg and dark soya dip with fresh chilli", price: "£17.95", tags: ["S"] },
      { code: "27", name: "Sweet & Sour", thai: "ผัดเปรี้ยวหวาน", desc: "Choice of Chicken or Prawn. Stir fried with sweet and sour sauce, onions, cucumber, pineapple, baby corn, carrot and tomato", price: "£15.95" },
    ]
  },
  {
    id: "curry",
    name: "Curry",
    thai: "แกง",
    desc: "Served with Jasmine Rice",
    items: [
      { code: "26", name: "Kang Keaw Kai", thai: "แกงเขียวหวาน", desc: "Traditional Chicken Thai Green curry, cooked in coconut milk, green curry paste, bamboo shoot strip, courgette, red and green pepper, fresh chilli and basil", price: "£15.95", tags: ["GF"], spice: 2 },
      { code: "27", name: "Kang Panang", thai: "แกงแพนง", desc: "Choice of Chicken, Duck, Prawn or Beef. Panang curry paste, cooked in thick coconut milk, fresh chilli, green bean, lime leave and basil", price: "£15.95", tags: ["GF"], spice: 2 },
      { code: "28", name: "Kang Massaman", thai: "แกงมัสมั่น", desc: "Choice of Chicken, Prawn or Beef. Massaman curry paste, cooked in coconut milk, carrot, onion, potato, topped with ground peanut and fried shallot", price: "£15.95", tags: ["N", "GF"], spice: 1 },
      { code: "29", name: "Kang Dang", thai: "แกงแดง", desc: "Choice of Chicken, Duck, Prawn or Beef. Traditional Thai Red curry, cooked in coconut milk, red curry paste, bamboo shoot strip, courgette, red and green pepper, fresh chilli and basil", price: "£15.95", tags: ["GF"], spice: 2 },
    ]
  },
  {
    id: "fish",
    name: "Fish",
    thai: "ปลา",
    desc: "Served with Jasmine Rice",
    items: [
      { code: "30", name: "Pla Pad Med Ma Maung", thai: "ปลาผัดเม็ดมะม่วง", desc: "Deep fried Tilapia fillet, stir fried with cashew nut sauce, onion, red and green pepper, mushroom, baby corn, carrot and spring onion", price: "£19.95", tags: ["N"], spice: 2 },
      { code: "31", name: "Pla Neung See Eiw", thai: "ปลานึ่งราดซีอิ้ว", desc: "Steamed Tilapia fillet cooked in oyster and soya sauce, garlic, onion, carrot, fresh chilli, celery, spring green and spring onion", price: "£20.95" },
      { code: "32", name: "Pla Chuchee", thai: "ปลาฉู่ฉี่", desc: "Steamed Seabass fillet topped with a traditional Chuchee curry sauce, red and green pepper and lime leaves", price: "£20.95", tags: ["GF"], spice: 2 },
    ]
  },
  {
    id: "vegetarian",
    name: "Vegetarian",
    thai: "ผัก",
    desc: "All vegetarian options",
    items: [
      { code: "43", name: "Panang Aubergine", thai: "แพนงมะเขือ", desc: "Thick Panang curry with Aubergine in coconut milk, red chilli, green beans, lime leave and sweet basil", price: "£14.95", tags: ["V", "GF"], spice: 2 },
      { code: "44", name: "Kang Keaw Pak", thai: "แกงเขียวผัก", desc: "Thai Green curry paste in coconut milk, bamboo shoot, courgette, red and green pepper, mushroom, baby corn, carrot, broccoli, green bean, fried tofu, fresh chilli and basil", price: "£14.95", tags: ["V", "GF"], spice: 2 },
      { code: "45", name: "Kang Massaman Pak", thai: "แกงมัสมั่นผัก", desc: "Massaman curry paste in coconut milk, carrot, onion, potato, courgette, mushroom, baby corn, broccoli, fried tofu, topped with ground peanut and fried shallot", price: "£14.95", tags: ["V", "N", "GF"], spice: 1 },
      { code: "46", name: "Kang Dang Pak", thai: "แกงแดงผัก", desc: "Thai Red curry paste in coconut milk, bamboo shoot, courgette, mushroom, baby corn, carrot, broccoli, green bean, fried tofu, fresh chilli and basil", price: "£14.95", tags: ["V", "GF"], spice: 2 },
      { code: "47", name: "Kang Phet Pak", thai: "แกงผัก", desc: "Vegetables with fried Tofu in red curry paste and coconut milk, onions, bamboo shoot, courgettes, peppers, mushrooms, baby corns, carrots, broccoli, fresh chilli, lime leaves and basil", price: "£14.95", tags: ["V"], spice: 2 },
      { code: "48", name: "Pad Kra Pow Pak", thai: "ผัดกระเพาผัก", desc: "Stir fried with Kra Pow sauce, blended fresh chilli and garlic, green beans, onions, red and green peppers, mushroom, baby corn, carrot, broccoli, bamboo shoot, fried tofu and basil", price: "£13.95", tags: ["V"], spice: 3 },
      { code: "49", name: "Pad Nam Mon Hoy Pak", thai: "ผัดผักน้ำมันหอย", desc: "Stir fried with Oyster sauce, blended garlic, sesame oil, onions, red and green pepper, mushroom, baby corn, carrot, broccoli, fried tofu, spring green and spring onion", price: "£13.95", tags: ["V", "S"] },
      { code: "50", name: "Rad Nah Pak", thai: "ราดหน้าผัก", desc: "Rice noodle cooked with Rad Nah Gravy, ground pepper, mushroom, baby corn, broccoli, carrot, fried tofu, bean paste, half boiled egg, spring green", price: "£14.95", tags: ["V"] },
      { code: "54", name: "Pad Sie Eiw Pak", thai: "ผัดซีอิ้วผัก", desc: "Rice noodle stir fried with Sweet Soy sauce, egg, carrot, beansprouts, baby corn, broccoli, spring green, fried tofu and ground pepper", price: "£14.95", tags: ["V"] },
      { code: "55", name: "Pad Kee Mao Pak", thai: "ผัดขี้เมาผัก", desc: "Egg noodle stir fried with Kee Mao sauce, blended fresh chilli and garlic, beansprout, bamboo shoot, broccoli, carrot, green bean, mushroom, baby corn, spring green and basil", price: "£14.95", tags: ["V"], spice: 2 },
      { code: "56", name: "Pad Thai Pak", thai: "ผัดไทยผัก", desc: "Thin rice noodle stir fried with egg, crushed Tamarind, mixed vegetables, beansprout, carrot, spring onion, fried tofu, served with lime and ground peanut", price: "£14.95", tags: ["V", "GF"] },
    ]
  },
  {
    id: "soup",
    name: "Soup",
    thai: "ต้ม",
    desc: "Traditional Thai soups",
    items: [
      { code: "36", name: "Tom Yum Goong", thai: "ต้มยำกุ้ง", desc: "Thai famous hot and sour soup with Prawn, mushroom, onion, chilli and Thai herbs", price: "£8.95", tags: ["GF"], spice: 2 },
      { code: "37", name: "Tom Kah Kai", thai: "ต้มข่าไก่", desc: "A coconut cream soup with Chicken, galangal, onions, chilli, lime leaves and mushroom", price: "£7.95", tags: ["GF"], spice: 1 },
      { code: "38", name: "Tom Yum Hed", thai: "ต้มยำเห็ด", desc: "Thai famous hot and sour soup with mushroom, onion, chilli, tomato, spring onion and Thai herbs", price: "£7.95", tags: ["V", "GF"], spice: 2 },
    ]
  },
  {
    id: "specials",
    name: "Chef's Special",
    thai: "เมนูพิเศษ",
    desc: "Monthly specials from our award-winning chef",
    items: [
      { code: "41", name: "Laab", thai: "ลาบ", desc: "Choice of Minced Pork or Minced Chicken. E-Sarn famous hot and sour salad with minced meat, coriander, spring onions, red shallot, limes, chilli and roasted rice powder", price: "£12.95", tags: ["GF"], spice: 2 },
      { code: "S32", name: "Red Duck Curry", thai: "แกงแดงเป็ด", desc: "Roasted Duck cooked in red curry paste, bamboo shoots, red and green pepper, courgette, pineapple, cherry tomato and basil leaves. Served with Egg Fried Rice", price: "£14.50", tags: ["GF"], spice: 2 },
      { code: "01", name: "Kuey Teow Tom Yum Moo Sub", thai: "ก๋วยเตี๋ยวต้มยำ", desc: "Choice of Chicken or Prawn. Thin rice noodle in hot and sour soup, beansprout, spring green, spring onion, garlic, dry chilli, blended peanuts, coriander, Thai chilli oil and lime", price: "£16.75", tags: ["GF"], spice: 3 },
      { code: "S19", name: "Moo Sub Pad Kra Tiam", thai: "หมูสับกระเทียมพริกไทย", desc: "Dry stir fried Minced Pork with Garlic and Black Pepper sauce, coriander, onion and ground pepper. Served with Jasmine Rice", price: "£13.95" },
    ]
  },
  {
    id: "kids",
    name: "Kids Menu",
    thai: "เมนูเด็ก",
    desc: "For our younger guests",
    items: [
      { code: "O", name: "Khoa Pad Goong + Kai", thai: "ข้าวผัดกุ้งไก่", desc: "Rice stir fried with Prawn and Chicken, egg, onion, carrot, spring onion, cashew nut and cherry tomato, served with cucumber and lime", price: "£8.95" },
      { code: "P", name: "Pad Mee Pla Tod", thai: "ผัดหมี่ปลาทอด", desc: "Egg noodle stir fried with Soy sauce, beansprout, carrot, spring onion, topped with deep fried Tilapia fillet and plum sauce", price: "£8.95" },
      { code: "Q", name: "Pad Mee Kai Tod", thai: "ผัดหมี่ไก่ทอด", desc: "Egg noodle stir fried with Soy sauce, beansprout, carrot, spring onion, topped with deep fried marinated chicken and sweet light chilli sauce", price: "£8.95" },
      { code: "R", name: "Khoa Nah Satay", thai: "ข้าวหน้าสะเต๊ะ", desc: "Grilled chicken skewer marinated with curry powder and herbs, topped with peanut sauce and served with small jasmine rice", price: "£8.95", tags: ["N", "GF"] },
    ]
  },
  {
    id: "extras",
    name: "Extras & Drinks",
    thai: "เพิ่มเติม",
    desc: "Side dishes and drinks",
    items: [
      { code: "S", name: "Prik Nam Pla", thai: "พริกน้ำปลา", desc: "Fresh chilli mixed with fish sauce and lime", price: "£1.50", tags: ["GF"], spice: 3 },
      { code: "T", name: "Kai Dow", thai: "ไข่ดาว", desc: "Fried egg in Thai style (recommended with stir fried Kapow dishes)", price: "£2.50", tags: ["V", "GF"] },
      { code: "U", name: "Cab Moo", thai: "แคบหมู", desc: "Deep fried pork's skin", price: "£3.75", tags: ["GF"] },
      { code: "V", name: "Khoa Seuy", thai: "ข้าวสวย", desc: "Steamed jasmine rice", price: "£3.95", tags: ["V", "GF"] },
      { code: "W", name: "Khoa Khai", thai: "ข้าวไข่", desc: "Fried rice with egg", price: "£4.50", tags: ["V", "GF"] },
      { code: "X", name: "Stir Fried Mixed Vegetables", thai: "", desc: "Mixed vegetables with oyster sauce", price: "£9.95" },
      { code: "D1", name: "Coke (330ml)", thai: "โค้ก", desc: "Chilled can of Coca-Cola", price: "£4.75" },
      { code: "D2", name: "Diet Coke (330ml)", thai: "ไดเอทโค้ก", desc: "Chilled can of Diet Coke", price: "£4.75" },
      { code: "D3", name: "Still Water (330ml)", thai: "น้ำเปล่า", desc: "Still mineral water", price: "£3.50" },
      { code: "D4", name: "Sparkling Water (330ml)", thai: "น้ำอัดลม", desc: "Sparkling mineral water", price: "£3.50" },
    ]
  },
];

const TAG_STYLES = {
  V: { label: "V", bg: "bg-green-900/50", text: "text-green-400", title: "Vegetarian" },
  GF: { label: "GF", bg: "bg-amber-900/30", text: "text-amber-400", title: "Gluten Free" },
  N: { label: "N", bg: "bg-orange-900/30", text: "text-orange-400", title: "Contains Nuts" },
  S: { label: "S", bg: "bg-yellow-900/30", text: "text-yellow-400", title: "Contains Sesame" },
};

function SpiceLevel({ level = 0 }) {
  if (!level) return null;
  const chillies = ["🌶","🌶🌶","🌶🌶🌶","🌶🌶🌶🌶"];
  return <span className="text-xs ml-1" title={`Spice level ${level}`}>{chillies[level - 1] || ""}</span>;
}

function MenuItem({ item }) {
  return (
    <div className="flex justify-between items-start gap-4 border-b border-[#262626] pb-5 hover:border-[#C9A96E]/30 transition-colors group" data-testid={`menu-item-${item.code}`}>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h4 className="font-playfair text-[#F5F0E8] font-bold text-base group-hover:text-[#C9A96E] transition-colors">{item.name}</h4>
          {item.thai && <span className="text-[#C9A96E]/50 text-sm">{item.thai}</span>}
          <SpiceLevel level={item.spice} />
          {(item.tags || []).map(tag => {
            const s = TAG_STYLES[tag];
            return s ? (
              <span key={tag} className={`text-[9px] px-1.5 py-0.5 font-bold tracking-wide ${s.bg} ${s.text}`} title={s.title}>{s.label}</span>
            ) : null;
          })}
        </div>
        <p className="text-[#F5F0E8]/50 text-sm leading-relaxed">{item.desc}</p>
      </div>
      <span className="text-[#C9A96E] font-bold text-base shrink-0 mt-0.5">{item.price}</span>
    </div>
  );
}

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("starters");

  const activeCategory = MENU_CATEGORIES.find(c => c.id === activeTab);

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* Header */}
      <div
        className="relative pt-32 pb-20 text-center overflow-hidden"
        style={{
          backgroundImage: `url(https://static.wixstatic.com/media/1d1e7c_d01517ae269b4c8f8090d8791874e7a2~mv2_d_5874_3921_s_4_2.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-testid="menu-header"
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/80" />
        <div className="relative z-10 px-4">
          <p className="font-script text-[#C9A96E] text-3xl mb-2">Our</p>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#F5F0E8] uppercase tracking-widest mb-4">Full Menu</h1>
          <div className="gold-divider" />
          <p className="text-[#F5F0E8]/60 text-sm mt-4 max-w-lg mx-auto tracking-wide">
            V = Vegetarian &nbsp;·&nbsp; GF = Gluten Free &nbsp;·&nbsp; N = Contains Nuts &nbsp;·&nbsp; S = Contains Sesame
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-[60px] z-30 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#262626]" data-testid="menu-tabs">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex overflow-x-auto scrollbar-hide gap-0 -mb-px">
            {MENU_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                data-testid={`tab-${cat.id}`}
                className={`shrink-0 px-4 py-4 text-[11px] font-bold tracking-widest uppercase transition-all duration-200 border-b-2 whitespace-nowrap ${
                  activeTab === cat.id
                    ? "text-[#C9A96E] border-[#C9A96E]"
                    : "text-[#F5F0E8]/50 border-transparent hover:text-[#F5F0E8]/80"
                }`}
              >
                {cat.name}
                <span className="ml-1 text-[9px] opacity-60 hidden md:inline">{cat.thai}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {activeCategory && (
          <div>
            <div className="mb-10">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#F5F0E8] uppercase tracking-widest">
                {activeCategory.name} <span className="text-[#C9A96E]">{activeCategory.thai}</span>
              </h2>
              <p className="text-[#F5F0E8]/50 text-sm mt-2">{activeCategory.desc}</p>
              <div className="w-12 h-px bg-[#C9A96E]/40 mt-4" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
              {activeCategory.items.map((item, i) => (
                <div key={`${item.code}-${i}`} className="py-5">
                  <MenuItem item={item} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Order CTA */}
      <div className="bg-[#111111] border-t border-[#C9A96E]/10 py-16 text-center">
        <h3 className="font-playfair text-2xl md:text-3xl font-bold text-[#F5F0E8] uppercase tracking-widest mb-4">
          Ready to <span className="text-[#C9A96E]">Order?</span>
        </h3>
        <p className="text-[#F5F0E8]/50 text-sm mb-8 max-w-md mx-auto">
          Order online for collection or delivery, or call us to reserve your table.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-gold text-sm py-4 px-12" data-testid="menu-order-btn">
            Order Online Now
          </a>
          <Link to="/contact" className="btn-outline-gold text-sm py-4 px-12" data-testid="menu-book-btn">
            Book a Table
          </Link>
        </div>
        <p className="text-[#F5F0E8]/30 text-xs mt-6">
          Free delivery within 2 miles · Min. £20 for delivery within 3 miles
        </p>
      </div>
    </div>
  );
}
