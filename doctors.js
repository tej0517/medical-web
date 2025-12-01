// Doctors data by specialty (your big object)
const doctorsBySpecialty = {
  "Cardiology": [
    {
      name: "Dr. Y K Mishra",
      location: "New Delhi, India",
      hospital: "Manipal Hospitals Dwarka, Delhi",
      position: "Chairmen",
      experience: "44+ Year of experience",
      description:
        "Dr. Y.K. Mishra is a distinguished Cardiac Surgeon, recognised as a pioneer in minimally invasive cardiac surgery with over four decades of experience improving heart health. He has successfully performed over 19,000 open-heart and robotic surgeries.",
      specialty: "Cardiology",
      image: "/images/Cardiac Surgeon-1.svg",
    },
    {
      name: "Dr. T S Kler",
      location: "New Delhi, India",
      hospital: "BLK-Max Super Specialty Hospital, Delhi",
      position: "Chairmen",
      experience: "48+ Year of experience",
      description:
        "Dr. T.S. Kler is a pioneer in electrophysiology with 48+ years of experience and 35,000+ angioplasties completed.",
      specialty: "Cardiology",
      image: "/images/Cardiac Surgeon-2.svg",
    },
    {
      name: "Dr. Ajay Kaul",
      location: "Noida, India",
      hospital: "Fortis Hospital, Noida",
      position: "Chairmen",
      experience: "38+ Year of experience",
      description:
        "Recognized among the top cardiac surgeons with 38+ years of experience. Over 20,000 cardiac surgeries performed.",
      specialty: "Cardiology",
      image: "/images/Cardiac Surgeon-3.svg",
    },
    {
      name: "Dr. Naresh Trehan",
      location: "Gurgaon, India",
      hospital: "Medanta - The Medicity, Gurgaon",
      position: "Chairmen",
      experience: "56+ Year of experience",
      description:
        "India’s distinguished Cardiothoracic Surgeon with 56+ years and 48,000+ surgeries successfully completed.",
      specialty: "Cardiology",
      image: "/images/Cardiac Surgeon-4.svg",
    },
    {
      name: "Dr. Z S Meharwal",
      location: "New Delhi, India",
      hospital: "Fortis Escorts Heart Institute, New Delhi",
      position: "Chairmen",
      experience: "42+ Year of experience",
      description:
        "Over 42 years of experience, 30,000+ cardiac surgeries. Expert in coronary artery bypass.",
      specialty: "Cardiology",
      image: "/images/Cardiac Surgeon-5.svg",
    },
  ],

  "Cosmetics": [
    {
      name: "Dr. Anil Behl",
      location: "Gurgaon, India",
      hospital: "Fortis Memorial Research Institute",
      position: "Chairmen",
      experience: "48+ Year of experience",
      description:
        "Dr. Anil Behl is one of the best plastic surgeons with 44 years of experience. He was awarded the Ati Vishisht Seva Medal (AVSM) by the President of India in 2010 and was later appointed Honorary Surgeon to the President of India in 2013.",
      specialty: "Cosmetics",
      image: "images/Cosmetics-1.svg",
    },
    {
      name: "Dr. Indrapati Singh",
      location: "New Delhi, India",
      hospital: "Indraprastha Apollo Hospital, New Delhi",
      position: "Chairmen",
      experience: "57+ Year of experience",
      description:
        "Dr. Indrapati Singh is a well-known and experienced Plastic Surgeon with a vast experience of 51 years in this field. He is the founder member of the Aesthetic Society of India and a member of the Australasian Craniofacial Society.",
      specialty: "Cosmetics",
      image: "images/Cosmetics-2.svg",
    },
    {
      name: "Dr. Vipul Nanda",
      location: "Gurgaon, India",
      hospital: "Fortis Memorial Research Institute",
      position: "Chairmen",
      experience: "38+ Year of experience",
      description:
        "Dr. Vipul Nanda is one of India's best Plastic & Cosmetic Surgeons with 23 years of experience. He trained in AIIMS, PGI Chandigarh, and completed advanced fellowships in Spain, Japan, and the UK.",
      specialty: "Cosmetics",
      image: "images/Cosmetics-3.svg",
    },
    {
      name: "Dr.Senthil Kumaran",
      location: "Chennai, India",
      hospital: "MIOT International, Chennai",
      position: "Chairmen",
      experience: "56+ Year of experience",
      description:
        "Dr. Senthil Kumaran is a Plastic Surgeon with 24 years of experience. He specializes in hand & wrist surgery, limb reconstruction, and developmental abnormality correction.",
      specialty: "Cosmetics",
      image: "images/Cosmetics-4.svg",
    },
    {
      name: "Dr. Charu Sharma",
      location: "New Delhi, India",
      hospital:
        "Gorzeous Looks Cosmetic / Plastic Surgery & Hair Transplant Centre",
      position: "Chairmen",
      experience: "28+ Year of experience",
      description:
        "Dr. Charu Sharma is a recognized Cosmetic Surgeon with 28 years of experience, offering advanced non-surgical and surgical procedures for face and body.",
      specialty: "Cosmetics",
      image: "images/Cosmetics-5.svg",
    },
  ],

  "Gynaecologist":[
  {
    name: "Dr. Aruna Kalra",
    location: "Gurgaon, India",
    hospital: "CK Birla Hospital, Gurgaon",
    position: "Director",
    experience: "28+ Year of experience",
    description:
      "Dr. Aruna Kalra is a distinguished obstetrician, gynaecologist, and robotic surgeon with over three decades of experience. A champion of patient-centred care, she is renowned for her expertise in minimally invasive and scarless surgical techniques, enabling women to achieve optimal health.",
    specialty: "Gynaecologist and Obstetrician",
    image: "images/Gynaecologist -1.svg"
  },
  {
    name: "Dr. Sulbha Arora",
    location: "Mumbai, India",
    hospital: "NOVA IVI Fertility, Mumbai",
    position: "Director",
    experience: "26+ Year of experience",
    description:
      "Dr. Sulbha Arora is a distinguished Gynaecologist and Fertility Specialist with over 26 years of experience dedicated to IVF and Assisted Reproductive Technologies. Trained by pioneers in India and abroad, Dr. Arora brings a wealth of knowledge and compassionate care to help individuals and couples achieve their dreams of parenthood.",
    specialty: "Gynaecologist and Obstetrician",
    image: "images/Gynaecologist -2.svg"
  },
  {
    name: "Dr. Shakti Bhan Khanna",
    location: "Noida, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    position: "Senior Consultant",
    experience: "66+ Year of experience",
    description:
      "Dr. Shakti Bhan Khanna is a highly respected Obstetrician and Gynaecologist in Delhi with an impressive six decades dedicated to women's health. A luminary in her field, Dr. Khanna is renowned for her clinical expertise, contributions to surgical innovation, and unwavering commitment to women's health across generations.",
    specialty: "Gynaecologist and Obstetrician",
    image: "images/Gynaecologist -3.svg"
  },
  {
    name: "Dr. Alka Kriplani",
    location: "Gurgaon, India",
    hospital: "Paras Hospitals, Gurgaon",
    position: "Head of Department",
    experience: "44+ Year of experience",
    description:
      "Dr. Alka Kriplani is a distinguished gynaecologist, gyne-lap surgeon, and fertility expert with over 40 years of experience. A recipient of the Padma Shri, the fourth highest civilian award of India, Dr. Kriplani is a beacon of excellence in women's healthcare, renowned for her expertise, leadership, and dedication to advancing the field.",
    specialty: "Gynaecologist and Obstetrician",
    image: "images/Gynaecologist -4.svg"
  }
],

"Hematologist":[
  {
    name: "Dr. Rahul Bhargava",
    location: "Gurgaon, India",
    hospital: "Fortis Memorial Research Institute, Gurgaon",
    position: "Director",
    experience: "24+ Year of experience",
    description:
      "Dr. Rahul Bhargava is a renowned Haematologist and Stem Cell Transplant specialist in India. With over 24 years of extensive experience, he has successfully performed over 1500 stem cell transplants, offering renewed hope and life-saving treatments to patients facing complex haematological conditions.",
    specialty: "Pediatric Hematologist",
    image: "images/Hematologist-1.svg"
  },
  {
    name: "Dr. Ashish Dixit",
    location: "Bangalore, India",
    hospital: "Manipal Hospital (Old Airport Road), Bangalore",
    position: "Consultant",
    experience: "30+ Year of experience",
    description:
      "Dr. Ashish Dixit is a renowned Haematologist with more than 30 years of expertise in Haemato-Oncology and Bone Marrow Transplantation. He has treated a wide range of benign and malignant haematological conditions, offering life-saving treatments and hope to countless patients.",
    specialty: "Hematologist",
    image: "images/Hematologist-2.svg"
  },
  {
    name: "Dr. Satya Prakash Yadav",
    location: "Gurgaon, India",
    hospital: "Medanta - The Medicity, Gurgaon",
    position: "Director",
    experience: "37+ Year of experience",
    description:
      "Dr. Satya Prakash Yadav is one of the leading hematologists with specialization in the field of pediatrics and oncology with bone marrow transplant. With over 30 years of experience, he has carried out more than 400 blood marrow transplants, among which 50 were unrelated donor/cord transplants and 50 were haploidentical bone marrow transplants.",
    specialty: "Hematologist",
    image: "images/Hematologist-3.svg"
  },
  {
    name: "Dr. TPR Bharadwaj",
    location: "Chennai, India",
    hospital: "Apollo Hospitals, Greams Road, Chennai",
    position: "Consultant",
    experience: "58+ Year of experience",
    description:
      "Dr. TPR Bharadwaj is a renowned Haematologist, with over 52 years of dedicated service and leadership in the field of Haematology. He has become a cornerstone of haematological care, providing expert diagnosis and treatment for a wide range of blood disorders.",
    specialty: "Hematologist",
    image: "images/Hematologist-4.svg"
  },
  {
    name: "Dr. Gaurav Dixit",
    location: "Gurgaon, India",
    hospital: "Artemis Hospital, Gurgaon",
    position: "Consultant",
    experience: "15+ Year of experience",
    description:
      "Dr. Gaurav Dixit is a leading haematologist with over 15 years of experience in haemato-oncology. He is dedicated to providing outstanding care and innovative treatments for patients with blood disorders and is particularly known for his expertise in bone marrow transplantation and his commitment to improving patient lives.",
    specialty: "Hematologist",
    image: "images/Hematologist-5.svg"
  }
],

"IVFSpecialist":[
  {
    name: "Dr. Shakti Bhan Khanna",
    location: "New Delhi, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    position: "Senior Consultant",
    experience: "66+ Year of experience",
    description:
      "Dr. Shakti Bhan Khanna is a highly respected Obstetrician and Gynaecologist in Delhi with an impressive six decades dedicated to women's health. A luminary in her field, Dr. Khanna is renowned for her clinical expertise, contributions to surgical innovation, and unwavering commitment to women's health across generations.",
    specialty: "IVF Specialist",
    image: "images/IVF Specialist-1.svg"
  },
  {
    name: "Dr. Sulbha Arora",
    location: "Mumbai, India",
    hospital: "NOVA IVI Fertility, Mumbai",
    position: "Director",
    experience: "26+ Year of experience",
    description:
      "Dr. Sulbha Arora is a distinguished Gynaecologist and Fertility Specialist with over 26 years of experience dedicated to IVF and Assisted Reproductive Technologies. Trained by pioneers in India and abroad, Dr. Arora brings a wealth of knowledge and compassionate care to help individuals and couples achieve their dreams of parenthood.",
    specialty: "IVF Specialist",
    image: "images/IVF Specialist-2.svg"
  },
  {
    name: "Dr. Aswati Nair",
    location: "New Delhi, India",
    hospital: "NOVA IVI Fertility, New Delhi",
    position: "Director",
    experience: "20+ Year of experience",
    description:
      "Dr. Aswati Nair is a well-known Infertility Specialist and Reproductive Health Specialist dedicated to helping couples achieve their dreams of parenthood. With 20 years of expertise, Dr. Nair brings a wealth of knowledge and a compassionate approach to every patient’s journey.",
    specialty: "IVF Specialist",
    image: "images/IVF Specialist-3.svg"
  },
  {
    name: "Dr. Alka Kriplani",
    location: "Gurgaon, India",
    hospital: "Paras Hospitals, Gurgaon",
    position: "Head of Department",
    experience: "44+ Year of experience",
    description:
      "Dr. Alka Kriplani is a distinguished gynaecologist, gyne-lap surgeon, and fertility expert with over 40 years of experience. A recipient of the Padma Shri, the fourth highest civilian award of India, Dr. Kriplani is a beacon of excellence in women's healthcare, renowned for her expertise, leadership, and dedication to advancing the field.",
    specialty: "IVF Specialist",
    image: "images/IVF Specialist-4.svg"
  },
  {
    name: "Dr. Ramya Mishra",
    location: "New Delhi, India",
    hospital: "Apollo Fertility Center, Lajpat Nagar",
    position: "Head of Department",
    experience: "16+ Year of experience",
    description:
      "Dr. Ramya Mishra is a dedicated Obstetrician and Gynaecologist based in Delhi, specialising in IVF and reproductive medicine. With over 16 years of experience, she is committed to providing comprehensive and personalised care, supporting women in achieving their motherhood goals and maintaining optimal gynaecological health.",
    specialty: "IVF Specialist",
    image: "images/IVF Specialist-5.svg"
  }
],

"Neurosurgeon":[
  {
    name: "Dr. Sandeep Vaishya",
    location: "Gurgaon, India",
    hospital: "Fortis Memorial Research Institute, Gurgaon",
    position: "Director",
    experience: "38+ Year of experience",
    description:
      "Dr. Sandeep Vaishya is a distinguished neurosurgeon with over 36 years of experience, recognised for his expertise in complex brain and spine surgeries. Having performed over 15,000 successful surgeries and treated patients from over 110 countries, Dr. Vaishya brings a world-class level of skill and dedication to his patients.",
    specialty: "Neurosurgeon",
    image: "images/Neurosurgeon-1.svg"
  },
  {
    name: "Dr. Sudhir Tyagi",
    location: "New Delhi, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    position: "Consultant",
    experience: "38+ Year of experience",
    description:
      "Dr. Sudhir Kumar Tyagi is a renowned Neurosurgeon in New Delhi with over 32 years of experience dedicated to providing cutting-edge neurosurgical care. With over 15,000 successful brain and spine surgeries to his credit, he brings unparalleled skill and precision to every procedure.",
    specialty: "Neurosurgeon",
    image: "images/Neurosurgeon-2.svg"
  },
  {
    name: "Dr. Aditya Gupta",
    location: "Gurgaon, India",
    hospital: "Artemis Hospital, Gurgaon",
    position: "Director",
    experience: "30+ Year of experience",
    description:
      "Dr. Aditya Gupta is a highly respected brain surgeon in India, bringing over 30 years of experience to his practice. Renowned for his expertise in complex brain tumour surgeries and advanced radiosurgery techniques, Dr. Gupta has transformed the lives of thousands of patients.",
    specialty: "Neurosurgeon",
    image: "images/Neurosurgeon-3.svg"
  },
  {
    name: "Dr. Ravi Bhatia",
    location: "New Delhi, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    position: "Senior Consultant",
    experience: "55+ Year of experience",
    description:
      "Dr. Ravi Bhatia is a highly respected neurosurgeon with a remarkable 55-year career dedicated to advancing neurosurgical care. His experience encompasses a wide spectrum of complex neurosurgical procedures, offering specialised treatments and improved outcomes for patients.",
    specialty: "Neurosurgeon",
    image: "images/Neurosurgeon-4.svg"
  },
  {
    name: "Dr. Siddhartha Ghosh",
    location: "Chennai, India",
    hospital: "Apollo Proton Cancer Centre, Chennai",
    position: "Senior Consultant",
    experience: "40+ Year of experience",
    description:
      "Dr. Siddhartha Ghosh is one of India’s most distinguished neurosurgeons, bringing over 40 years of unparalleled experience to his practice. He is renowned for performing over 20,000 successful neurosurgeries on the brain, spine, and peripheral nerves and is especially celebrated for his expertise in complex brain and spine tumour removal.",
    specialty: "Neurosurgeon",
    image: "images/Neurosurgeon-5.svg"
  }
],

"Oncologist":[
  {
    name: "Dr. Niranjan Naik",
    location: "Gurgaon, India",
    hospital: "Fortis Memorial Research Institute, Gurgaon",
    position: "Director",
    experience: "31+ Year of experience",
    description:
      "Dr. Niranjan Naik is a highly experienced surgical oncologist with over 27 years of expertise in cancer surgery. He is considered one of the best GI, Thoracic & Head and Neck Cancer Surgeons in India.",
    specialty: "Surgical Oncologist",
    image: "images/Oncologist-1.svg"
  },
  {
    name: "Dr. Vinod Raina",
    location: "Gurgaon, India",
    hospital: "Fortis Memorial Research Institute, Gurgaon",
    position: "Chairman",
    experience: "40+ Year of experience",
    description:
      "Dr. Vinod Raina is one of India's foremost Medical Oncologists, bringing over 40 years of experience to the fight against cancer.",
    specialty: "Medical Oncologist",
    image: "images/Oncologist-2.svg"
  },
  {
    name: "Dr. Ramesh Sarin",
    location: "New Delhi, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    position: "Senior Consultant",
    experience: "62+ Year of experience",
    description:
      "Dr. Ramesh Sarin is a prominent Surgical Oncology Expert in New Delhi with an extraordinary career spanning over 40 years, dedicated to providing compassionate care and pioneering advancements in the fight against cancer.",
    specialty: "Surgical Oncologist",
    image: "images/Oncologist-3.svg"
  },
  {
    name: "Dr. Vikram Pratap Singh",
    location: "New Delhi, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    position: "Senior Consultant",
    experience: "50+ Year of experience",
    description:
      "Dr. Vikram Pratap Singh is one of the best Surgical Oncologists in India, bringing over 50 years of experience to the field.",
    specialty: "Surgical Oncologist",
    image: "images/Oncologist-4.svg"
  },
  {
    name: "Dr. Kaustubh Patel",
    location: "Ahmedabad, India",
    hospital: "HCG Cancer Centre, Ahmedabad",
    position: "Senior Consultant",
    experience: "50+ Year of experience",
    description:
      "Dr. Kaustubh Patel is a highly experienced and certified Surgical Oncologist dedicated to providing cutting-edge care for patients with Head & Neck cancers. He is particularly recognised for his expertise in thyroid, parathyroid, and salivary gland surgeries, as well as advanced organ-preserving techniques for cancers of the mandible (jaw) and larynx (voice box), including TOLS (Trans Oral Laser Surgery) in complex situations.",
    specialty: "Surgical Oncologist",
    image: "images/Oncologist-5.svg"
  }
],

"Orthopaedic":[
  {
    name: "Dr. (Prof) Raju Vaishya",
    location: "New Delhi, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    position: "Senior Consultant",
    experience: "42+ Year of experience",
    description:
      "Dr. (Prof) Raju Vaishya is a distinguished Orthopaedic and Joint Replacement Specialist in New Delhi, bringing over 42 years of expertise as a hip and knee replacement surgeon. He is a renowned expert in arthroscopic surgery and sports medicine.",
    specialty: "Shoulder Surgery",
    image: "images/Orthopaedic-1.svg"
  },
  {
    name: "Dr. IPS Oberoi",
    location: "Gurgaon, India",
    hospital: "Artemis Hospital, Gurgaon",
    position: "Chairman",
    experience: "31+ Year of experience",
    description:
      "Dr. IPS Oberoi is a leading Orthopaedic and Joint Replacement Surgeon in India and a pioneer in advanced orthopaedic procedures. With over three decades of experience, Dr. Oberoi has successfully performed over 7,000 joint replacement surgeries with a remarkable 97% success rate, offering renewed mobility and improved quality of life to patients. He is renowned as one of the best ligament tear surgeons in India, specialising in complex knee ligament reconstruction.",
    specialty: "Orthopaedic and Joint Replacement Surgeon",
    image: "images/Orthopaedic-2.svg"
  },
  {
    name: "Dr. Jayant Arora",
    location: "Gurgaon, India",
    hospital: "Fortis Memorial Research Institute, Gurgaon",
    position: "Director",
    experience: "29+ Year of experience",
    description:
      "Dr. Jayant Arora is a renowned Orthopaedic Specialist in Gurgaon and a leading Joint Replacement Surgeon with over 29 years of experience. He is recognised for his expertise in minimally invasive, robot-assisted, and computer-navigated orthopaedic surgeries.",
    specialty: "Orthopaedic and Joint Replacement Surgeon",
    image: "images/Orthopaedic-3.svg"
  },
  {
    name: "Dr. Manoj Miglani",
    location: "New Delhi, India",
    hospital: "Fortis Flt. Lt. Rajan Dhall Hospital, Vasant Kunj, New Delhi",
    position: "Director",
    experience: "29+ Year of experience",
    description:
      "Dr. Manoj Miglani is a senior consultant Orthopaedic Surgeon with extensive experience in performing a wide range of spinal and joint replacement surgeries, from the simple to the most complex. This renowned surgeon is highly regarded by his patients for his expertise and his approachable manner.",
    specialty: "Shoulder Surgery",
    image: "images/Orthopaedic-4.svg"
  },
  {
    name: "Dr. Billy Paul Wilson",
    location: "Chennai, India",
    hospital: "Apollo Hospitals, Chennai",
    position: "Senior Consultant",
    experience: "29+ Year of experience",
    description:
      "Dr. Billy Paul Wilson is a well-known Orthopaedic and Joint Replacement Specialist in Chennai having more than 26 years of experience. He specialises in treating limited mobility in the knee, hips, elbow, shoulder, and other joints and is a top orthopaedic doctor for meniscus injuries in Chennai.",
    specialty: "Orthopaedic and Joint Replacement Surgeon",
    image: "images/Orthopaedic-5.svg"
  }
],

"Dermatologist":[
  {
    name: "Dr. Ravichandran G",
    location: "Chennai, India",
    hospital: "Apollo Hospitals, Greams Road, Chennai",
    position: "Consultant",
    experience: "38+ Year of experience",
    description:
      "Dr. Ravichandran G is a dermatologist with 32+ years of experience. He specializes in treating Vitiligo and has conducted more than 2000 operations. He is a member of IADVL, Association of Cutaneous Surgeons India, Indian Medical Association and Indian Association of Dermatologists.",
    specialty: "Dermatologist",
    image: "images/Dermatologist-1.svg"
  },
  {
    name: "Dr. Murlidhar Rajagopalan",
    location: "Chennai, India",
    hospital: "Apollo Hospitals, Greams Road, Chennai",
    position: "Head of Department",
    experience: "36+ Year of experience",
    description:
      "Dr. Murlidhar Rajagopalan is a dermatologist with 30+ years of experience. He is a member of Tamil Nadu Medical Council; Indian Association of Dermatologists, Venereologists and Leprologists (IADVL); INT Member EADV and INT Member EAACI. He has expertise in skin checks, skin care, hardening of the skin and skin polishing.",
    specialty: "Dermatologist",
    image: "images/Dermatologist-2.svg"
  },
  {
    name: "Dr. Anil K. Agarwal",
    location: "Gurgaon, India",
    hospital: "Marengo Asia Hospitals, Formerly W Pratiksha Hospital, Gurgaon",
    position: "Head of Department",
    experience: "34+ Year of experience",
    description:
      "Dr. Anil K. Agarwal is a well-known dermatologist in Delhi NCR & Gurgaon with 30+ years’ experience. Only Fraxel certified physician outside Delhi NCR. One of the few doctors who started Laser in his practice. He is also an immunologist and a Cosmetic surgeon.",
    specialty: "Dermatologist",
    image: "images/Dermatologist-3.svg"
  },
  {
    name: "Dr. Jyotirmay Bharti",
    location: "Gurgaon, India",
    hospital: "Square Root Hair Transplant & Skin Clinic, Gurgaon",
    position: "Director",
    experience: "15+ Year of experience",
    description:
      "Dr. Jyotirmay Bharti is an eminent Dermatologist, Cosmetologist & Hair Transplant Surgeon. She is an active member of the Cosmetology Society of India (CSI), International Society of Dermatology, Indian Academy of Dermatology, Venereology & Leprologist, and the American Academy of Dermatology. Dr. Bharti has expertise over the Dermatology, Venereology & Leprosy.",
    specialty: "Dermatologist",
    image: "images/Dermatologist-4.svg"
  },
  {
    name: "Dr. Pooja Aggarwal",
    location: "Gurgaon, India",
    hospital: "Artemis Hospital, Gurgaon",
    position: "Senior Consultant",
    experience: "15+ Year of experience",
    description:
      "Dr. Pooja Aggarwal is a well-established dermatologist, trichologist, dermatosurgeon and cosmetologist with an experience of 9 years. She deals with all kinds of skin, hair and nail issues and has successfully managed extremely difficult cases of clinical dermatology. Dr. Pooja has attended numerous seminars and conferences globally to keep herself updated with latest developments of the field. She did her MBBS from College of Medical Sciences, Bharatpur, Nepal, and MD in Dermatology, Leprosy and Venereology from AIIMS, New Delhi.",
    specialty: "Dermatologist",
    image: "images/Dermatologist-5.svg"
  }
],

"SpineSurgeon":[
  {
    name: "Dr. Sandeep Vaishya",
    location: "Gurgaon, India",
    hospital: "Fortis Memorial Research Institute, Gurgaon",
    position: "Director",
    experience: "38+ Year of experience",
    description:
      "Dr. Sandeep Vaishya is a distinguished neurosurgeon with over 36 years of experience, recognised for his expertise in complex brain and spine surgeries. Having performed over 15,000 successful surgeries and treated patients from over 110 countries, Dr. Vaishya brings a world-class level of skill and dedication to his patients.",
    specialty: "Spine Surgeon",
    image: "images/Spine Surgeon-1.svg"
  },
  {
    name: "Dr. Ravi Bhatia",
    location: "New Delhi, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    position: "Senior Consultant",
    experience: "55+ Year of experience",
    description:
      "Dr. Ravi Bhatia is a highly respected neurosurgeon with a remarkable 55-year career dedicated to advancing neurosurgical care. His experience encompasses a wide spectrum of complex neurosurgical procedures, offering specialised treatments and improved outcomes for patients.",
    specialty: "Spine Surgeon",
    image: "images/Spine Surgeon-2.svg"
  },
  {
    name: "Dr. Sajan K Hegde",
    location: "Chennai, India",
    hospital: "Apollo Hospitals, Greams Road, Chennai",
    position: "Senior Consultant",
    experience: "44+ Year of experience",
    description:
      "Dr. Sajan K Hegde is a leading Spine Surgeon in India and a pioneer in robotic-assisted spinal procedures. With 44 years of experience, Dr. Hegde is revolutionising spinal care, offering hope and improved mobility to patients.",
    specialty: "Spine Surgeon",
    image: "images/Spine Surgeon-3.svg"
  },
  {
    name: "Dr. Arun Saroha",
    location: "Gurgaon, India",
    hospital: "Max Super Specialty Hospital, Gurgaon",
    position: "Director",
    experience: "29+ Year of experience",
    description:
      "Dr. Arun Saroha is a renowned neurosurgeon in Gurgaon, boasting over 29 years of experience. As a highly skilled brain and spine surgeon, Dr. Saroha has successfully performed over 8,000 surgeries, offering expert care and improved outcomes for his patients.",
    specialty: "Spine Surgeon",
    image: "images/Spine Surgeon-4.svg"
  },
  {
    name: "Dr. Hitesh Garg",
    location: "Gurgaon, India",
    hospital: "Artemis Hospital, Gurgaon",
    position: "HOD",
    experience: "23+ Year of experience",
    description:
      "Dr. Hitesh Garg is a highly regarded Spine Surgeon in India with over 23 years of experience. As a top doctor for scoliosis surgery, he has performed over 8,800 spine surgeries, offering a comprehensive range of solutions, including spinal fusions, artificial disc replacements, and deformity corrections.",
    specialty: "Spine Surgeon",
    image: "images/Spine Surgeon-5.svg"
  }
],

"Transplant Specialist":[
  {
    name: "Dr. S. V. Kotwal",
    location: "Gurgaon, India",
    hospital: "Artemis Hospital, Gurgaon",
    position: "HOD",
    experience: "47+ Year of experience",
    description:
      "Dr. S. V. Kotwal is an esteemed Urologist in India, known for his significant expertise and pioneering contributions to the area. With nearly four decades of dedicated service, he has performed hundreds of complicated urological surgeries, including one of the largest personal series of PCNL (Percutaneous Nephrolithotomy) in North India and 300 renal transplants.",
    specialty: "Urologist and Renal Transplant Specialist",
    image: "images/Transplant Specialist-1.svg"
  },
  {
    name: "Dr. Vivek Vij",
    location: "Gurgaon, India",
    hospital: "Fortis Hospital, Noida",
    position: "Chairman",
    experience: "27+ Year of experience",
    description:
      "Dr. Vivek Vij is a leading Liver Transplant Surgeon in India, transforming lives with over three decades of experience. He has successfully performed over 2500 liver transplants, handling both critical and sub-critical cases, establishing himself as a top surgeon in the field.",
    specialty: "Liver Transplant Surgeon",
    image: "images/Transplant Specialist-2.svg"
  },
  {
    name: "Dr. Murugan N",
    location: "Chennai, India",
    hospital: "Apollo Hospitals, Greams Road, Chennai",
    position: "Consultant",
    experience: "46+ Year of experience",
    description:
      "Dr. Murugan N is a prominent Hepatologist and Liver Transplant Surgeon renowned for his expertise in treating a wide range of hepatic conditions, including autoimmune hepatitis, hemochromatosis, and hepatocellular carcinoma. With nearly four decades of experience, Dr. Murugan N is dedicated to providing comprehensive and advanced care for patients with liver diseases.",
    specialty: "Liver Transplant Surgeon",
    image: "images/Transplant Specialist-3.svg"
  },
  {
    name: "Dr. Shailendra Lalwani",
    location: "New Delhi, India",
    hospital: "Sanar International Hospital",
    position: "Consultant",
    experience: "23+ Year of experience",
    description:
      "Dr. Shailendra Lalwani is a well-known Surgical Gastroenterologist in Gurgaon, famous for his skills in Liver Transplantation and HPB Surgery. With more than 23 years of experience, he is committed to delivering careful surgical solutions to complicated gastrointestinal and liver conditions.",
    specialty: "Liver Transplant Surgeon",
    image: "images/Transplant Specialist-4.svg"
  },
  {
    name: "Dr. Deepak Dubey",
    location: "Bangalore, India",
    hospital: "Manipal Hospital (Old Airport Road), Bangalore",
    position: "HOD",
    experience: "30+ Year of experience",
    description:
      "Dr. Deepak Dubey is an accomplished Urologist and Renal Transplant Surgeon. With over 35 years of experience, he has helped many people by performing innovative urological surgeries and kidney transplants. He has carried out over 700 laparoscopic urological procedures, 50 robotic urological procedures, and over 500 laparoscopic live donor nephrectomies and renal transplants.",
    specialty: "Urologist and Renal Transplant Specialist",
    image: "images/Transplant Specialist-5.svg"
  }
],

"Vascular Surgeon":[
  {
    name: "Dr. Raghuram Sekhar",
    location: "Mumbai, India",
    hospital: "Kokilaben Dhirubhai Ambani Hospital, Mumbai",
    position: "Consultant",
    experience: "33+ Year of experience",
    description:
      "Dr. Raghuram Sekhar is a highly experienced Vascular and Endovascular Surgeon, bringing over 33 years of expertise to his practice. He is dedicated to providing advanced and comprehensive care for patients with vascular diseases, with a focus on restoring circulation and preventing limb loss.",
    specialty: "Vascular Surgeon",
    image: "images/Vascular Surgeon-1.svg"
  },
  {
    name: "Dr. Rakesh Mahajan",
    location: "New Delhi, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    position: "Senior Consultant",
    experience: "40+ Year of experience",
    description:
      "Dr. Rakesh Mahajan is a top doctor for Vascular Surgery in New Delhi, having 40+ years of experience. He is skilled in managing arterial disease, spider veins, vascular trauma, ischemic and cardiac vascular problems. His expertise includes treating deep vein thrombosis, hyperhidrosis, Raynaud’s syndrome, and upper and lower limb pain. He completed his MBBS and MS (Surgery) from AIIMS, New Delhi.",
    specialty: "Vascular Surgeon",
    image: "images/Vascular Surgeon-2.svg"
  },
  {
    name: "Dr. Rajiv Parakh",
    location: "Gurgaon, India",
    hospital: "Medanta - The Medicity, Gurgaon",
    position: "Chairman",
    experience: "42+ Year of experience",
    description:
      "Dr. Rajiv Parakh is among the most well-known Vascular Specialists in India, with 42+ years of experience in endovascular interventions. His expertise includes arterial bypass, carotid artery stenting, varicose veins laser treatment, embolisation of vascular deformity, and peripheral & endovascular interventions. He also started the first government-recognised teaching program in vascular surgery in India.",
    specialty: "Vascular Surgeon",
    image: "images/Vascular Surgeon-3.svg"
  },
  {
    name: "Dr. Venkatesh Reddy",
    location: "Bangalore, India",
    hospital: "Manipal Hospital (Old Airport Road), Bangalore",
    position: "Consultant",
    experience: "38+ Year of experience",
    description:
      "Dr. Venkatesh Reddy is an eminent Vascular Surgeon with more than 29 years of experience. He has expertise in vascular surgery and endovascular surgery. He completed his MBBS from Sri Siddhartha Medical College, Karnataka, and later pursued an MS from the International College of Surgeons, Chicago.",
    specialty: "Vascular Surgeon",
    image: "images/Vascular Surgeon-4.svg"
  },
  {
    name: "Dr. Suhail Naseem Bukhari",
    location: "New Delhi, India",
    hospital: "BLK-Max Super Speciality Hospital, Delhi",
    position: "Director",
    experience: "22+ Year of experience",
    description:
      "Dr. Suhail Naseem Bukhari is a well-known Vascular Surgeon in New Delhi with an experience of 18+ years. He is proficient in procedures such as Spinal and Cerebral Tumor Embolization, Angioplasty and Stenting, Embolization for Fibroid, Head and Neck Tumour Embolization, and Acute Stroke Thrombectomy. He was awarded the Best Postgraduate Student Award in 2002 at Sir Ganga Ram Hospital, New Delhi.",
    specialty: "Vascular Surgeon",
    image: "images/Vascular Surgeon-5.svg"
  }
],

"Urologist":[
  {
    name: "Dr. Deepak Dubey",
    location: "Bangalore, India",
    hospital: "Manipal Hospital (Old Airport Road), Bangalore",
    position: "HOD",
    experience: "31+ Year of experience",
    description:
      "Dr. Deepak Dubey is an accomplished Urologist and Renal Transplant Surgeon. With over 35 years of experience, he has helped many people by performing innovative urological surgeries and kidney transplants. He has carried out over 700 laparoscopic urological procedures, 50 robotic urological procedures, and over 500 laparoscopic live donor nephrectomies and renal transplants.",
    specialty: "Urologist",
    image: "images/Urologist-1.svg"
  },
  {
    name: "Dr. Vikram Sharma",
    location: "Gurgaon, India",
    hospital: "Fortis Memorial Research Institute, Gurgaon",
    position: "Director",
    experience: "36+ Year of experience",
    description:
      "At Fortis Hospital, Dr. Vikram Sharma is a renowned Urologist, Andrologist, Kidney Transplant Surgeon, and pioneer in Endourology. With more than 36 years of experience, Dr. Sharma has transformed male sexual dysfunction treatment and urological care in India.",
    specialty: "Urologist",
    image: "images/Urologist-2.svg"
  },
  {
    name: "Dr. Ashish Sabharwal",
    location: "New Delhi, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    position: "Director",
    experience: "36+ Year of experience",
    description:
      "Dr. Ashish Sabharwal is a famous Urology specialist in New Delhi, known for his skill in robotic urology surgery and urologic cancer treatment. He has over 24 years of experience. After performing over 2,000 successful robotic prostate procedures, he provides patients with advanced options and renewed hope.",
    specialty: "Urologist",
    image: "images/Urologist-3.svg"
  },
  {
    name: "Dr. Vikram Barua Kaushik",
    location: "Gurgaon, India",
    hospital: "Manipal Hospital, Formerly Columbia Asia, Palam Vihar, Gurgaon",
    position: "Consultant",
    experience: "29+ Year of experience",
    description:
      "Leading Urologist Dr. Vikram Barua Kaushik has over 29 years of experience and is committed to offering top-notch treatment and creative solutions for a variety of urological issues. Dr. Kaushik has a successful track record and practices endo-urology, laparoscopic urology, and renal transplantation.",
    specialty: "Urologist",
    image: "images/Urologist-4.svg"
  },
  {
    name: "Dr. Rajesh Taneja",
    location: "New Delhi, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    position: "Senior Consultant",
    experience: "31+ Year of experience",
    description:
      "Dr. Rajesh Taneja is one of the most experienced and respected Urologists in India with an experience of over 27 years. He has a professional membership of Review Panel Indian Journal of Urology and Executive Council of Delhi Tumor Board. Along with this, he is also a Founder Fellow of the Geriatric Society of India and received felicitation for special achievement awards by the Health Minister of Government of NCT Delhi at the annual conference of IMA in 2008.",
    specialty: "Urologist",
    image: "images/Urologist-5.svg"
  }
],

"Internal Medicine":[
  {
    name: "Dr. R M Kumudha",
    location: "Chennai, India",
    hospital: "Apollo Specialty Hospital, OMR",
    position: "Consultant",
    experience: "28+ Year of experience",
    description:
      "Dr. R M Kumudha is a leading, well-experienced Internal Medicine practitioner practicing for more than 25 years. She holds expertise in Diabetes Management, Filaria Treatment, Skin Tag Treatment, etc. After completing MBBS in 1996, she pursued DNB in General Medicine from the National Board of Examinations in 2006. She is professionally affiliated with the Indian Medical Association.",
    specialty: "Internal Medicine",
    image: "images/Internal Medicine-1.svg"
  },
  {
    name: "Dr. Srinivas Yadavalli",
    location: "Hyderabad, India",
    hospital: "Apollo Hospitals, Jubilee Hills Hyderabad",
    position: "Consultant",
    experience: "36+ Year of experience",
    description:
      "Dr. Srinivas Yadavalli is a dynamic General Physician practicing for more than 19 years. He holds expertise in Diabetes Management, Insulin Treatment, Congenital disorders, foot infections, and many more. After completing MBBS from JJM Medical College in 1995, he pursued MD in General Medicine from Kuvempu University in 1999. He is an active member of the Indian Medical Association.",
    specialty: "Internal Medicine",
    image: "images/Internal Medicine-2.svg"
  },
  {
    name: "Dr. Suninder Singh Arora",
    location: "New Delhi, India",
    hospital: "Batra Hospital & Medical Research Centre, New Delhi",
    position: "Consultant",
    experience: "33+ Year of experience",
    description:
      "Dr. Suninder Singh Arora is a well-known Internal Medicine Specialist with 30+ years of experience. He holds expertise in Internal Medicine, Pulmonology, Critical Care Medicine, etc. After graduation in 1986, he pursued MD in General Medicine from Aligarh Muslim University in 1989. He also attained a fellowship of AARC (Chest), and a Diploma in Interventional Pulmonology from the University of Barcelona, Spain in 2002.",
    specialty: "Internal Medicine",
    image: "images/Internal Medicine-3.svg"
  },
  {
    name: "Dr. Indira Ramasahayam Reddy",
    location: "Hyderabad, India",
    hospital: "Apollo Hospitals, Jubilee Hills Hyderabad",
    position: "Consultant",
    experience: "33+ Year of experience",
    description:
      "Dr. Indira Ramasahayam Reddy is a 30+ years experienced Internal Medicine Specialist. She specializes in Head and Neck infection, Insulin Treatment, Filaria Treatment, Rheumatic heart disease, and many more. After her MBBS from Bangalore Medical College in 1987, she pursued DNB in General Medicine from Salem Hospital in 1994.",
    specialty: "Internal Medicine",
    image: "images/Internal Medicine-4.svg"
  },
  {
    name: "Dr. Ganesh Yadala",
    location: "Hyderabad, India",
    hospital: "Apollo Hospitals, Jubilee Hills Hyderabad",
    position: "Consultant",
    experience: "38+ Year of experience",
    description:
      "Dr. Ganesh Yadala is a well-known Internal Medicine Specialist practicing for more than 35 years. He specializes in Diabetes, Insulin treatment, congenital disorders, piles, filaria, etc. After completing MBBS from Kurnool Medical College in 1978, he pursued MD in General Medicine from Osmania Medical College, Hyderabad in 1983.",
    specialty: "Internal Medicine",
    image: "images/Internal Medicine-5.svg"
  }
],

"Rheumatologist":[
  {
    name: "Dr. Ramakrishnan S",
    location: "Chennai, India",
    hospital: "Apollo Hospitals, Greams Road, Chennai",
    position: "Senior Consultant",
    experience: "44+ Year of experience",
    description:
      "Dr. Ramakrishnan S is a rheumatologist with 38+ years of experience. He has been awarded multiple gold medals and recognitions throughout his academic career including IRA Boots Best Paper Award. He completed MBBS from Madras University, MD, and DM from The Tamil Nadu Dr. M.G.R. Medical University (TNMGRMU). He also served as an Associate Editor in the Journal of Indian Rheumatology Association and has 38+ article publications in reputed journals.",
    specialty: "Rheumatologist",
    image: "images/Rheumatologist-1.svg"
  },
  {
    name: "Dr. Naval Mendiratta",
    location: "Gurgaon, India",
    hospital: "Fortis Memorial Research Institute, Gurgaon",
    position: "Senior Consultant",
    experience: "17+ Year of experience",
    description:
      "Dr. Naval Mendiratta is a leading rheumatology specialist in Gurgaon with over 17 years of experience. He specializes in treating rheumatoid arthritis, osteoarthritis, scleroderma, and gout. His expertise also covers acute and chronic pain management, joint swelling, and preventive care.",
    specialty: "Rheumatologist",
    image: "images/Rheumatologist-2.svg"
  },
  {
    name: "Dr. Sandeep Kumar Upadhyaya",
    location: "New Delhi, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    position: "Senior Consultant",
    experience: "28+ Year of experience",
    description:
      "Dr. Sandeep Kumar Upadhyaya is a renowned Rheumatologist with over 20 years of experience. Among the first in India to use Biologic agents for various disorders including Rheumatoid Arthritis, Inflammatory Spondylitis & Ankylosing Spondylitis. Played a vital role in clinical research of new Biologic agents in Rheumatology.",
    specialty: "Rheumatologist",
    image: "images/Rheumatologist-3.svg"
  },
  {
    name: "Dr. Ashit Syngle",
    location: "Mohali, India",
    hospital: "Fortis Hospital, Mohali",
    position: "Principal Consultant",
    experience: "28+ Year of experience",
    description:
      "Dr. Ashit Syngle is a Rheumatologist with 24+ years of experience. His expertise covers Rheumatic Diseases, Rheumatoid Arthritis, Ankylosing Spondylitis, Gout, SLE (Lupus), Osteoporosis, Diabetes, Hypertension, Coronary Artery Disease (CAD), and other autoimmune conditions.",
    specialty: "Rheumatologist",
    image: "images/Rheumatologist-4.svg"
  },
  {
    name: "Dr. Bimlesh Dhar Pandey",
    location: "Noida, India",
    hospital: "Fortis Hospital, Noida",
    position: "Senior Consultant",
    experience: "23+ Year of experience",
    description:
      "Dr. Bimlesh Dhar Pandey is an eminent Rheumatologist with over 19 years of expertise. His areas of interest include Rheumatology Emergencies and Clinical Examination. He has expertise in Psoriatic Arthritis, Polymyalgia Rheumatica, Giant Cell disorders, Myotonia Congenita, Paget’s Disease, CAPS Syndrome, and Spheroid Body Myopathy.",
    specialty: "Rheumatologist",
    image: "images/Rheumatologist-5.svg"
  }
],

"Pulmonologist":[
  {
    name: "Dr. Manoj Kumar Goel",
    location: "Gurgaon, India",
    hospital: "Fortis Memorial Research Institute, Gurgaon",
    position: "Director",
    experience: "36+ Year of experience",
    description:
      "Dr. Manoj Kumar Goel is among the best Pulmonologists for respiratory diseases in India, with more than 36 years of experience. He provides treatment for pulmonary fibrosis, COPD, aspergillosis, asthma, pneumonia, obstructive sleep apnea and lung diseases. He was among the first Pulmonologists in India to introduce noninvasive ventilation and sleep medicine.",
    specialty: "Pulmonologist",
    image: "images/Pulmonologist-1.svg"
  },
  {
    name: "Dr. V K Maini",
    location: "Mohali, India",
    hospital: "Fortis Hospital, Mohali",
    position: "Consultant",
    experience: "47+ Year of experience",
    description:
      "Dr. V K Maini is a well-known Pulmonologist with over 43 years of experience. His expertise includes Bronchitis Treatment, Chest Disease Treatment, Tuberculosis (TB), Bronchoscopy, Critical Care, Lung Abscess, De-addiction for Nicotine/Tobacco, and lung infection management. He completed MBBS and MD from Government Medical College, Amritsar.",
    specialty: "Pulmonologist",
    image: "images/Pulmonologist-2.svg"
  },
  {
    name: "Dr. Mrinal Sircar",
    location: "Noida, India",
    hospital: "Fortis Hospital, Noida",
    position: "Director",
    experience: "38+ Year of experience",
    description:
      "Dr. Mrinal Sircar is a renowned Pulmonologist with more than 34 years of experience. He specializes in emphysema, chronic bronchitis, cystic fibrosis, interstitial lung disease, pulmonary hypertension, obstructive sleep apnea, and Tuberculosis (TB). He is recognized for advanced bronchoscopic procedures and management of respiratory failure.",
    specialty: "Pulmonologist",
    image: "images/Pulmonologist-3.svg"
  },
  {
    name: "Dr. Digambar Behera",
    location: "Mohali, India",
    hospital: "Fortis Hospital, Mohali",
    position: "Director",
    experience: "43+ Year of experience",
    description:
      "Dr. Digambar Behera is an eminent Pulmonologist with more than 40 years of experience and recipient of the prestigious Padma Shri award. His expertise includes Tuberculosis (TB) Treatment, Bronchitis Management, Chest Diseases, Mediastinoscopy, Decortication, Lung Abscess, Lobectomy, and other respiratory conditions.",
    specialty: "Pulmonologist",
    image: "images/Pulmonologist-4.svg"
  },
  {
    name: "Dr. Anand Jaiswal",
    location: "Gurgaon, India",
    hospital: "Medanta - The Medicity, Gurgaon",
    position: "Director",
    experience: "36+ Year of experience",
    description:
      "Dr. Anand Jaiswal is a senior Pulmonologist and Chest Specialist with over 30 years of experience. He currently serves as Director of Respiratory Diseases and Sleep Medicine at Medanta Hospital. He was awarded a gold medal for his MD and has been involved in research with international pharmaceutical groups.",
    specialty: "Pulmonologist",
    image: "images/Pulmonologist-5.svg"
  }
],

"Endocrinologist":[
  {
    name: "Dr. Subhash Wangnoo",
    location: "New Delhi, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    position: "Senior Consultant",
    experience: "36+ Year of experience",
    description:
      "Dr. Subhash Wangnoo is one of the most well-known Endocrinologists with 31+ years of experience. He is a member of the Endocrine Society (USA), International Diabetes Federation, Royal College of Physicians of London (UK), Thyroid Society of India, and others. He also received an Honorary Fellowship of the Royal College of Physicians, London (FRCP) in 2011 and has been influential in training DNB Endocrinology students for over 8 years at Apollo hospitals.",
    specialty: "Endocrinologist",
    image: "images/Endocrinologist-1.svg"
  },
  {
    name: "Dr. Atul Luthra",
    location: "Gurgaon, India",
    hospital: "Fortis Memorial Research Institute, Gurgaon",
    position: "Additional Director",
    experience: "34+ Year of experience",
    description:
      "Dr. Atul Luthra is an Additional Director in Endocrinology at Fortis Memorial Research Institute, Gurgaon. He has keen interest in the management of diabetes, obesity, hypertension, and lipid disorders. He has received several prestigious awards including the 'Rashtriya Rattan Award', 'Coeur D’or Award', and 'Arch of Excellence Award'.",
    specialty: "Endocrinologist",
    image: "images/Endocrinologist-2.svg"
  },
  {
    name: "Dr. Chandar Mohan Batra",
    location: "New Delhi, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    position: "Senior Consultant",
    experience: "34+ Year of experience",
    description:
      "Dr. Chandar Mohan Batra is a renowned Endocrinologist with over 30 years of experience. He is a member of the American Endocrine Society, Endocrine Society of India, and Indian Society of Pediatric & Adolescent Endocrinology. He is also Academic Coordinator for DNB (Endocrinology) at Apollo. Dr. Batra has received several awards, including Best Paper Awards at Research Society of Diabetes in India meetings and recognition by Apollo Hospital for published research.",
    specialty: "Endocrinologist",
    image: "images/Endocrinologist-3.svg"
  },
  {
    name: "Dr. Vineet Kumar Surana",
    location: "New Delhi, India",
    hospital: "Manipal Hospitals Dwarka, Delhi",
    position: "Consultant",
    experience: "16+ Year of experience",
    description:
      "Dr. Vineet Kumar Surana is a reputed Endocrinologist and Diabetologist. He specializes in diabetes, obesity, thyroid and hormonal disorders, metabolic bone diseases, pediatric growth disorders, PCOS, male infertility, and hirsutism.",
    specialty: "Endocrinologist",
    image: "images/Endocrinologist-4.svg"
  },
  {
    name: "Dr. Mohan Y. Badgandi",
    location: "Bangalore, India",
    hospital: "Manipal Hospital (Old Airport Road), Bangalore",
    position: "Consultant",
    experience: "48+ Year of experience",
    description:
      "Dr. Mohan Y. Badgandi is an accomplished Endocrinologist with 48+ years of experience. His expertise includes insulin analog treatments for diabetes, cholesterol-related treatments, CA disorder management, endocrine glands disorders, thyroid diseases, osteoporosis, hypertension, and obesity. He is regarded as one of the senior-most experts in Endocrinology in India.",
    specialty: "Endocrinologist",
    image: "images/Endocrinologist-5.svg"
  }
],

"Dentist":[
  {
    name: "Dr. Neha Mall Garg",
    location: "Gurgaon, India",
    hospital: "The Dental Hub, Gurgaon",
    position: "Director",
    experience: "18+ Year of experience",
    description:
      "Dr. Neha Mall Garg is a leading Implantologist for dental implants as well as an Endodontist for root canals in Gurgaon, with over 18 years of experience. She is one of the best laser teeth whitening surgeons in India, while also specialising in dental implant restoration and bright smile treatment. Dr. Garg completed BDS in 2006 and MD (Prosthodontics) in 2011 at Manipal College of Dental Sciences.",
    specialty: "Dentist",
    image: "images/Dentist-1.svg"
  },
  {
    name: "Dr. Anjana Satyajit",
    location: "Gurgaon, India",
    hospital: "Artemis Hospital, Gurgaon",
    position: "Senior Consultant",
    experience: "29+ Year of experience",
    description:
      "Dr. Anjana is a dedicated dentist with 23 years of experience. She has a team of specialists that include Endodontists, Orthodontist, Periodontist, Pedodontist, Prosthodontist, Oral Surgeon, and Implantologist. She has published papers both nationally and internationally and is a member of several medical associations. She completed her BDS from Maulana Azad Medical College, Delhi, and further studied at Bellevue Hospital Centre, NYU.",
    specialty: "Dentist",
    image: "images/Dentist-2.svg"
  },
  {
    name: "Dr. Ravi S. Batra",
    location: "Gurgaon, India",
    hospital: "Fortis Memorial Research Institute, Gurgaon",
    position: "Senior Consultant",
    experience: "29+ Year of experience",
    description:
      "Dr. Ravi S. Batra is a renowned Consultant Dentist with more than 17 years of experience. He specializes in Oral and Maxillofacial Surgery and Implantology. He served as Clinical Professor in SGT Dental College, Gurgaon, and was a Post Graduate Guide for 8 years.",
    specialty: "Dentist",
    image: "images/Dentist-3.svg"
  },
  {
    name: "Dr. Rajni Sharma",
    location: "Gurgaon, India",
    hospital: "Fortis Memorial Research Institute, Gurgaon",
    position: "Senior Consultant",
    experience: "17+ Year of experience",
    description:
      "Dr. Rajni Sharma is a renowned Consultant Dentist with over 12 years of experience. Her expertise includes General and Cosmetic Dentistry. She has participated in many CDA Programs and is a Life Member of the Indian Dental Association.",
    specialty: "Dentist",
    image: "images/Dentist-4.svg"
  },
  {
    name: "Dr. Parag M. Khatri",
    location: "Mumbai, India",
    hospital: "Dental Square, Mumbai",
    position: "Director",
    experience: "28+ Year of experience",
    description:
      "Dr. Parag M. Khatri is a Periodontist with over 23 years of experience. He is a life member of Indian Society of Periodontology, Indian Society of Oral Implantologists, Indian Dental Association, and several other dental associations. He graduated and completed post-graduation from Nair Hospital Dental College (NHDC), Mumbai.",
    specialty: "Dentist",
    image: "images/Dentist-5.svg"
  }
],

"ENT Surgeon":[
  {
    name: "Dr. P. L. Dhingra",
    location: "Gurgaon, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    position: "Senior Consultant",
    experience: "51+ Year of experience",
    description:
      "Dr. P. L. Dhingra is a well-experienced ENT Surgeon, practicing for more than 45 years. He holds expertise in Head, Ear, Throat, Nose and Neck Surgery. He has special interest in surgery of the ear for alleviation of deafness, FESS (Functional Endoscopic Sinus Surgery), Microsurgery of the larynx for voice disorders, and LASER surgery.",
    specialty: "ENT Surgeon",
    image: "images/ENT Surgeon-1.svg"
  },
  {
    name: "Dr. Atul Kumar Mittal",
    location: "Gurgaon, India",
    hospital: "Fortis Memorial Research Institute, Gurgaon",
    position: "Director",
    experience: "34+ Year of experience",
    description:
      "Dr. Atul Kumar Mittal is one of India’s most well-known ENT specialists with more than 34 years of expertise. He is an expert in surgeries for vocal cord disorders, hearing loss treatment, tonsils, ear tube placement, and balloon sinus surgery. He performs over 800 ENT surgeries annually, including pediatric ENT and sleep disorder surgeries, using minimally invasive techniques.",
    specialty: "ENT Surgeon",
    image: "images/ENT Surgeon-2.svg"
  },
  {
    name: "Dr. Sanjay Kumar Gudwani",
    location: "New Delhi, India",
    hospital: "Fortis Escorts Heart Institute, New Delhi",
    position: "Director",
    experience: "24+ Year of experience",
    description:
      "Dr. Sanjay Kumar Gudwani is a senior ENT Surgeon with over 24 years of experience. He completed his MBBS at Maulana Azad Medical College in 1992 and MS in ENT at Safdarjung Hospital in 1997. His areas of expertise include a wide range of ear, nose, and throat surgeries with special interest in complex ENT and airway disorders.",
    specialty: "ENT Surgeon",
    image: "images/ENT Surgeon-3.svg"
  },
  {
    name: "Dr. E.V. Raman",
    location: "Bangalore, India",
    hospital: "Manipal Hospital (Old Airport Road), Bangalore",
    position: "Consultant",
    experience: "42+ Year of experience",
    description:
      "Dr. E.V. Raman is one of the top ENT Surgeons with over 38 years of experience. His expertise covers otoplasty, congenital ear problems, ear reconstruction, endoscopic skull base surgery, cochlear implants, and endoscopic sinus surgery. He received the Guest Oration Award from Pakistan ENT Association, Karachi.",
    specialty: "ENT Surgeon",
    image: "images/ENT Surgeon-4.svg"
  },
  {
    name: "Dr. Sabir Hussain Ansari",
    location: "New Delhi, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    position: "Senior Consultant",
    experience: "53+ Year of experience",
    description:
      "Dr. Sabir Hussain Ansari is a senior ENT and Otolaryngologist with over 47 years of practice. He has vast experience treating patients suffering from ear, nose, and throat illnesses. A member of the Association of OTO-Rhinolaryngology and Head & Neck Surgery, he earned his MBBS from University of Pune in 1971 and MS ENT in 1982, followed by a DLO ENT.",
    specialty: "ENT Surgeon",
    image: "images/ENT Surgeon-5.svg"
  }
],

"Gastroenterologist":[
  {
    name: "Dr. Arvind Khurana",
    location: "Gurgaon, India",
    hospital: "Fortis Memorial Research Institute, Gurgaon",
    position: "Director",
    experience: "39+ Year of experience",
    description:
      "Dr. Arvind Khurana is a highly respected Medical Gastroenterologist in Gurgaon, renowned for his expertise in diagnosing and treating digestive system disorders. With over three decades of experience, he has transformed countless lives through his dedication to patient care and advanced endoscopic techniques.",
    specialty: "Medical Gastroenterologist",
    image: "images/Gastroenterologist-1.svg"
  },
  {
    name: "Dr. Deepak Govil",
    location: "New Delhi, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    position: "Senior Consultant",
    experience: "42+ Year of experience",
    description:
      "Dr. Deepak Govil is a leading Surgical Gastroenterologist in New Delhi, renowned as a GI cancer surgery specialist. With over four decades of experience, he has successfully performed over 1000 surgeries, including complex liver, gastrointestinal, and laparoscopic procedures, providing advanced surgical solutions for a wide range of digestive disorders.",
    specialty: "Surgical Gastroenterologist",
    image: "images/Gastroenterologist-2.svg"
  },
  {
    name: "Dr. Pawan Rawal",
    location: "Gurgaon, India",
    hospital: "Artemis Hospital, Gurgaon",
    position: "HOD",
    experience: "25+ Year of experience",
    description:
      "Dr. Pawan Rawal is recognised as one of the best Medical Gastroenterologists in India, bringing over 25 years of experience in diagnosing and treating digestive disorders. Dr. Rawal is a leading expert in his field, dedicated to providing compassionate and comprehensive care to patients.",
    specialty: "Surgical Gastroenterologist",
    image: "images/Gastroenterologist-3.svg"
  },
  {
    name: "Dr. Vivek Vij",
    location: "New Delhi, India",
    hospital: "Fortis Hospital, Noida",
    position: "Chairman",
    experience: "27+ Year of experience",
    description:
      "Dr. Vivek Vij is a leading Liver Transplant Surgeon in India with more than 30 years of experience. He has successfully performed over 2500 liver transplants, managing critical and sub-critical cases and establishing himself as a top surgeon in the field.",
    specialty: "Liver Transplant Surgeon",
    image: "images/Gastroenterologist-4.svg"
  },
  {
    name: "Dr. Murugan N",
    location: "Chennai, India",
    hospital: "Apollo Hospitals, Greams Road, Chennai",
    position: "Consultant",
    experience: "46+ Year of experience",
    description:
      "Dr. Murugan N is a prominent Hepatologist and Liver Transplant Surgeon with nearly four decades of experience. He specializes in treating hepatic conditions such as autoimmune hepatitis, hemochromatosis, and hepatocellular carcinoma. Dr. Murugan is known for delivering compassionate and advanced care for liver-related diseases.",
    specialty: "Liver Transplant Surgeon",
    image: "images/Gastroenterologist-5.svg"
  }
],

"Nephrology":[
  {
    name: "Dr. Arvind Khurana",
    location: "Gurgaon, India",
    hospital: "Fortis Memorial Research Institute, Gurgaon",
    position: "Director",
    experience: "39+ Year of experience",
    description:
      "Dr. Arvind Khurana is a highly respected Medical Gastroenterologist in Gurgaon, renowned for his expertise in diagnosing and treating digestive system disorders. With over three decades of experience, he has transformed countless lives through his dedication to patient care and advanced endoscopic techniques.",
    specialty: "Medical Nephrology",
    image: "images/Gastroenterologist-1.svg"
  },
  {
    name: "Dr. Deepak Govil",
    location: "New Delhi, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    position: "Senior Consultant",
    experience: "42+ Year of experience",
    description:
      "Dr. Deepak Govil is a leading Surgical Gastroenterologist in New Delhi, renowned as a GI cancer surgery specialist. With over four decades of experience, he has successfully performed over 1000 surgeries, including complex liver, gastrointestinal, and laparoscopic procedures, providing advanced surgical solutions for a wide range of digestive disorders.",
    specialty: "Surgical Nephrology",
    image: "images/ENT Surgeon-4.svg"
  },
  {
    name: "Dr. Pawan Rawal",
    location: "Gurgaon, India",
    hospital: "Artemis Hospital, Gurgaon",
    position: "HOD",
    experience: "25+ Year of experience",
    description:
      "Dr. Pawan Rawal is recognised as one of the best Medical Gastroenterologists in India, bringing over 25 years of experience in diagnosing and treating digestive disorders. Dr. Rawal is a leading expert in his field, dedicated to providing compassionate and comprehensive care to patients.",
    specialty: "Surgical Nephrology",
    image: "images/Urologist-4.svg"
  },
  {
    name: "Dr. Vivek Vij",
    location: "New Delhi, India",
    hospital: "Fortis Hospital, Noida",
    position: "Chairman",
    experience: "27+ Year of experience",
    description:
      "Dr. Vivek Vij is a leading Liver Transplant Surgeon in India with more than 30 years of experience. He has successfully performed over 2500 liver transplants, managing critical and sub-critical cases and establishing himself as a top surgeon in the field.",
    specialty: "Nephrology",
    image: "images/Vascular Surgeon-3.svg"
  },
  {
    name: "Dr. Murugan N",
    location: "Chennai, India",
    hospital: "Apollo Hospitals, Greams Road, Chennai",
    position: "Consultant",
    experience: "46+ Year of experience",
    description:
      "Dr. Murugan N is a prominent Hepatologist and Liver Transplant Surgeon with nearly four decades of experience. He specializes in treating hepatic conditions such as autoimmune hepatitis, hemochromatosis, and hepatocellular carcinoma. Dr. Murugan is known for delivering compassionate and advanced care for liver-related diseases.",
    specialty: "Liver Transplant Surgeon",
    image: "images/Pulmonologist-4.svg"
  }
],

"Hepatology":[
  {
    name: "Dr. Arvind Khurana",
    location: "Gurgaon, India",
    hospital: "Fortis Memorial Research Institute, Gurgaon",
    position: "Director",
    experience: "39+ Year of experience",
    description:
      "Dr. Arvind Khurana is a highly respected Medical Gastroenterologist in Gurgaon, renowned for his expertise in diagnosing and treating digestive system disorders. With over three decades of experience, he has transformed countless lives through his dedication to patient care and advanced endoscopic techniques.",
    specialty: "Medical Gastroenterologist",
    image: "images/ENT Surgeon-4.svg"
  },
  {
    name: "Dr. Deepak Govil",
    location: "New Delhi, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    position: "Senior Consultant",
    experience: "42+ Year of experience",
    description:
      "Dr. Deepak Govil is a leading Surgical Gastroenterologist in New Delhi, renowned as a GI cancer surgery specialist. With over four decades of experience, he has successfully performed over 1000 surgeries, including complex liver, gastrointestinal, and laparoscopic procedures, providing advanced surgical solutions for a wide range of digestive disorders.",
    specialty: "Surgical Gastroenterologist",
    image: "images/Gastroenterologist-1.svg"
  },
  {
    name: "Dr. Pawan Rawal",
    location: "Gurgaon, India",
    hospital: "Artemis Hospital, Gurgaon",
    position: "HOD",
    experience: "25+ Year of experience",
    description:
      "Dr. Pawan Rawal is recognised as one of the best Medical Gastroenterologists in India, bringing over 25 years of experience in diagnosing and treating digestive disorders. Dr. Rawal is a leading expert in his field, dedicated to providing compassionate and comprehensive care to patients.",
    specialty: "Surgical Gastroenterologist",
    image: "images/Urologist-4.svg"
  },
  {
    name: "Dr. Vivek Vij",
    location: "New Delhi, India",
    hospital: "Fortis Hospital, Noida",
    position: "Chairman",
    experience: "27+ Year of experience",
    description:
      "Dr. Vivek Vij is a leading Liver Transplant Surgeon in India with more than 30 years of experience. He has successfully performed over 2500 liver transplants, managing critical and sub-critical cases and establishing himself as a top surgeon in the field.",
    specialty: "Liver Transplant Surgeon",
    image: "images/Oncologist-2.svg"
  },
  {
    name: "Dr. Murugan N",
    location: "Chennai, India",
    hospital: "Apollo Hospitals, Greams Road, Chennai",
    position: "Consultant",
    experience: "46+ Year of experience",
    description:
      "Dr. Murugan N is a prominent Hepatologist and Liver Transplant Surgeon with nearly four decades of experience. He specializes in treating hepatic conditions such as autoimmune hepatitis, hemochromatosis, and hepatocellular carcinoma. Dr. Murugan is known for delivering compassionate and advanced care for liver-related diseases.",
    specialty: "Liver Transplant Surgeon",
    image: "images/Vascular Surgeon-3.svg"
  }
],

"Opthalmology":[
  {
    name: "Dr. Arvind Khurana",
    location: "Gurgaon, India",
    hospital: "Fortis Memorial Research Institute, Gurgaon",
    position: "Director",
    experience: "39+ Year of experience",
    description:
      "Dr. Arvind Khurana is a highly respected Medical Gastroenterologist in Gurgaon, renowned for his expertise in diagnosing and treating digestive system disorders. With over three decades of experience, he has transformed countless lives through his dedication to patient care and advanced endoscopic techniques.",
    specialty: "Medical Gastroenterologist",
    image: "images/Oncologist-3.svg"
  },
  {
    name: "Dr. Deepak Govil",
    location: "New Delhi, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    position: "Senior Consultant",
    experience: "42+ Year of experience",
    description:
      "Dr. Deepak Govil is a leading Surgical Gastroenterologist in New Delhi, renowned as a GI cancer surgery specialist. With over four decades of experience, he has successfully performed over 1000 surgeries, including complex liver, gastrointestinal, and laparoscopic procedures, providing advanced surgical solutions for a wide range of digestive disorders.",
    specialty: "Surgical Gastroenterologist",
    image: "images/Oncologist-4.svg"
  },
  {
    name: "Dr. Pawan Rawal",
    location: "Gurgaon, India",
    hospital: "Artemis Hospital, Gurgaon",
    position: "HOD",
    experience: "25+ Year of experience",
    description:
      "Dr. Pawan Rawal is recognised as one of the best Medical Gastroenterologists in India, bringing over 25 years of experience in diagnosing and treating digestive disorders. Dr. Rawal is a leading expert in his field, dedicated to providing compassionate and comprehensive care to patients.",
    specialty: "Surgical Gastroenterologist",
    image: "images/Oncologist-5.svg"
  },
  {
    name: "Dr. Vivek Vij",
    location: "New Delhi, India",
    hospital: "Fortis Hospital, Noida",
    position: "Chairman",
    experience: "27+ Year of experience",
    description:
      "Dr. Vivek Vij is a leading Liver Transplant Surgeon in India with more than 30 years of experience. He has successfully performed over 2500 liver transplants, managing critical and sub-critical cases and establishing himself as a top surgeon in the field.",
    specialty: "Liver Transplant Surgeon",
    image: "images/Vascular Surgeon-3.svg"
  },
  {
    name: "Dr. Murugan N",
    location: "Chennai, India",
    hospital: "Apollo Hospitals, Greams Road, Chennai",
    position: "Consultant",
    experience: "46+ Year of experience",
    description:
      "Dr. Murugan N is a prominent Hepatologist and Liver Transplant Surgeon with nearly four decades of experience. He specializes in treating hepatic conditions such as autoimmune hepatitis, hemochromatosis, and hepatocellular carcinoma. Dr. Murugan is known for delivering compassionate and advanced care for liver-related diseases.",
    specialty: "Liver Transplant Surgeon",
    image: "images/Vascular Surgeon-5.svg"
  }
],

"Pediatric cardiology":[
  {
    name: "Dr. Arvind Khurana",
    location: "Gurgaon, India",
    hospital: "Fortis Memorial Research Institute, Gurgaon",
    position: "Director",
    experience: "39+ Year of experience",
    description:
      "Dr. Arvind Khurana is a highly respected Medical Gastroenterologist in Gurgaon, renowned for his expertise in diagnosing and treating digestive system disorders. With over three decades of experience, he has transformed countless lives through his dedication to patient care and advanced endoscopic techniques.",
    specialty: "Medical Gastroenterologist",
    image: "images/Vascular Surgeon-2.svg"
  },
  {
    name: "Dr. Deepak Govil",
    location: "New Delhi, India",
    hospital: "Indraprastha Apollo Hospital, New Delhi",
    position: "Senior Consultant",
    experience: "42+ Year of experience",
    description:
      "Dr. Deepak Govil is a leading Surgical Gastroenterologist in New Delhi, renowned as a GI cancer surgery specialist. With over four decades of experience, he has successfully performed over 1000 surgeries, including complex liver, gastrointestinal, and laparoscopic procedures, providing advanced surgical solutions for a wide range of digestive disorders.",
    specialty: "Surgical Gastroenterologist",
    image: "images/Vascular Surgeon-1.svg"
  },
  {
    name: "Dr. Pawan Rawal",
    location: "Gurgaon, India",
    hospital: "Artemis Hospital, Gurgaon",
    position: "HOD",
    experience: "25+ Year of experience",
    description:
      "Dr. Pawan Rawal is recognised as one of the best Medical Gastroenterologists in India, bringing over 25 years of experience in diagnosing and treating digestive disorders. Dr. Rawal is a leading expert in his field, dedicated to providing compassionate and comprehensive care to patients.",
    specialty: "Surgical Gastroenterologist",
    image: "images/Urologist-2.svg"
  },
  {
    name: "Dr. Vivek Vij",
    location: "New Delhi, India",
    hospital: "Fortis Hospital, Noida",
    position: "Chairman",
    experience: "27+ Year of experience",
    description:
      "Dr. Vivek Vij is a leading Liver Transplant Surgeon in India with more than 30 years of experience. He has successfully performed over 2500 liver transplants, managing critical and sub-critical cases and establishing himself as a top surgeon in the field.",
    specialty: "Liver Transplant Surgeon",
    image: "images/Urologist-4.svg"
  },
  {
    name: "Dr. Murugan N",
    location: "Chennai, India",
    hospital: "Apollo Hospitals, Greams Road, Chennai",
    position: "Consultant",
    experience: "46+ Year of experience",
    description:
      "Dr. Murugan N is a prominent Hepatologist and Liver Transplant Surgeon with nearly four decades of experience. He specializes in treating hepatic conditions such as autoimmune hepatitis, hemochromatosis, and hepatocellular carcinoma. Dr. Murugan is known for delivering compassionate and advanced care for liver-related diseases.",
    specialty: "Liver Transplant Surgeon",
    image: "images/Urologist-5.svg"
  }
],

};

// ---- flatten doctors into one array ----
let allDoctors = [];

// Loop through specialties
for (const specialty in doctorsBySpecialty) {
  allDoctors = allDoctors.concat(doctorsBySpecialty[specialty]);
}

// ---- paginate data: chunk into arrays of 12 ----
const doctorsPerPage = 12;
const doctorPages = []; // will be [{page1: []}, {page2: []}, ...]

for (let i = 0; i < allDoctors.length; i += doctorsPerPage) {
  doctorPages.push(allDoctors.slice(i, i + doctorsPerPage));
}

let currentPage = 1;
const totalPages = doctorPages.length;

// ---- create doctor card ----
function createDoctorCard(doctor) {
  return `
    <div class="col-lg-4 col-md-6 mb-4 d-flex">
      <div class="doctor-card p-3 d-flex flex-column shadow-sm rounded w-100">

        <!-- Top Info Row -->
        <div class="d-flex">
          <!-- Image -->
          <img src="${doctor.image}" alt="${doctor.name}" 
               class="doctor-img rounded-circle me-3" />

          <!-- Name + location -->
          <div>
            <h5 class="doctor-name fw-bold mb-1">
              ${doctor.name} <i class="bi bi-patch-check-fill text-primary"></i>
            </h5>
            <p class="text-muted small mb-1">${doctor.location}</p>
            <span class="badge rounded-pill bg-light text-primary border">
              ${doctor.specialty}
            </span>
          </div>
        </div>

        <!-- Details -->
        <div class="doctor-meta mt-3">
          <p class="mb-1">
            <i class="bi bi-hospital text-primary"></i>
            <span class="text-primary fw-semibold">${doctor.hospital}</span>
          </p>
          <p class="mb-1">
            <i class="bi bi-briefcase text-primary"></i> ${doctor.position}
          </p>
          <p class="mb-1">
            <i class="bi bi-award text-primary"></i> ${doctor.experience}
          </p>
        </div>

        <!-- Description -->
        <p class="doctor-desc mt-2">${doctor.description}</p>

        <!-- CTA -->
        <div class="hospital-actions">
              <button class="btn btn-book">Book Appointment</button>
              <button class="btn btn-whatsapp">
                <i class="bi bi-whatsapp"></i> WhatsApp Us
              </button>
        </div>
      </div>
    </div>
  `;
}

// ---- load doctors by page ----
function loadDoctors(page) {
  const doctorGrid = document.getElementById('hospitalGrid');
  doctorGrid.innerHTML = ""; // clear old cards

  const doctors = doctorPages[page - 1];

  if (doctors) {
    doctors.forEach(doctor => {
      doctorGrid.innerHTML += createDoctorCard(doctor);
    });
  }

  // Toggle Nav Buttons
  document.getElementById('backBtn').style.display = (page > 1) ? "inline-block" : "none";
  document.getElementById('showMoreBtn').style.display = (page < totalPages) ? "inline-block" : "none";
}

// ---- Initial Load ----
loadDoctors(currentPage);

// Show More
document.getElementById('showMoreBtn').addEventListener('click', function() {
  if (currentPage < totalPages) {
    currentPage++;
    loadDoctors(currentPage);
  }
});

// Back
document.getElementById('backBtn').addEventListener('click', function() {
  if (currentPage > 1) {
    currentPage--;
    loadDoctors(currentPage);
  }
});

// Button actions
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('btn-book')) {
    alert('Booking appointment with Doctor... (demo)');
  }
  if (e.target.classList.contains('btn-whatsapp') || e.target.closest('.btn-whatsapp')) {
    alert('Opening WhatsApp... (demo)');
  }
});



// search function

document.querySelector('.search-btn').addEventListener('click', function () {
  const keyword = document.querySelector('input[placeholder="Hospitals, Keyword..."]').value.trim().toLowerCase();
  const location = document.querySelector('input[placeholder="Location"]').value.trim().toLowerCase();
  const department = document.querySelector('select').value;

  // Now filter
  searchDoctors(keyword, location, department);
});



function searchDoctors(keyword, location, department) {
  let filtered = allDoctors;

  // Specialty filter (skip “Select Department”)
  if (department && department !== "Select Department") {
    filtered = filtered.filter(doc => doc.specialty.toLowerCase().includes(department.toLowerCase()));
  }

  // Keyword filter
  if (keyword) {
    filtered = filtered.filter(doc =>
      doc.name.toLowerCase().includes(keyword) ||
      doc.hospital.toLowerCase().includes(keyword) ||
      doc.description.toLowerCase().includes(keyword)
    );
  }

  // Location filter
  if (location) {
    filtered = filtered.filter(doc =>
      doc.location.toLowerCase().includes(location)
    );
  }

  // Show results
  displayFilteredDoctors(filtered);
} 



function displayFilteredDoctors(doctors) {
  const doctorGrid = document.getElementById('hospitalGrid');
  doctorGrid.innerHTML = "";

  if (doctors.length === 0) {
    doctorGrid.innerHTML = "<p class='text-center text-muted my-4'>No doctors found 😢</p>";
    document.getElementById('backBtn').style.display = "none";
    document.getElementById('showMoreBtn').style.display = "none";
    return;
  }

  doctors.forEach(doc => {
    doctorGrid.innerHTML += createDoctorCard(doc);
  });

  // hide pagination buttons when filtering
  document.getElementById('backBtn').style.display = "none";
  document.getElementById('showMoreBtn').style.display = "none";
}



// Department Map: maps dropdown labels → matching specialty keywords
const departmentMap = {
  Cardiology: "cardio",          // matches "Cardiology"
  Cosmetics: "cosmetic",    
  Gynaecologist: "gynae",
  Hematologist: "hemat",
  "IVF Specialist": "ivf",       // <-- FIX (added space)
  Neurology: "neuro",            // matches Neurosurgeon
  Oncology: "onco",              // matches Oncologist
  Orthopedics: "ortho",          // matches Orthopaedic
  Dermatologist: "derma",
  "Spine Surgeon": "spine",      // <-- FIX (added space)
  "Transplant Specialist": "transplant",
  "Vascular Surgeon": "vascular",
  Urologist: "urologist",
  "Internal Medicine": "internal medicine",
  Rheumatologist: "rheumat",
  Pulmonologist: "pulmon",
  Endocrinologist: "endocrin",
  Dentist: "dentist",
  "ENT Surgeon": "ent",
  Gastroenterologist: "gastro",
  Nephrology: "nephro",
  Hepatology: "hepato",
  Opthalmology: "opthal",
  "Pediatric Cardiology": "cardio"
};

// ---------------- Search Function ----------------
function searchDoctors() {
  const keyword = document.getElementById('keywordInput').value.trim().toLowerCase();
  const location = document.getElementById('locationInput').value.trim().toLowerCase();
  const department = document.getElementById('departmentSelect').value;

  let filtered = allDoctors;

  // Department filter (using mapping)
 if (department && department !== "Select Department") {
  const keywordDept = departmentMap[department];
  if (keywordDept) {
    filtered = filtered.filter(doc =>
      doc.specialty.toLowerCase().includes(keywordDept)
    );
  }
}

  // Keyword filter
  if (keyword) {
    filtered = filtered.filter(doc =>
      doc.name.toLowerCase().includes(keyword) ||
      doc.hospital.toLowerCase().includes(keyword) ||
      doc.description.toLowerCase().includes(keyword)
    );
  }

  // Location filter
  if (location) {
    filtered = filtered.filter(doc =>
      doc.location.toLowerCase().includes(location)
    );
  }

  displayFilteredDoctors(filtered);
}

// ---------------- Event Listeners ----------------
document.querySelector('.search-btn').addEventListener('click', searchDoctors);