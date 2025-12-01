const doctors = [
  {
    name: "Dr. Y K Mishra",
    location: "New Delhi, India",
    hospital: "Manipal Hospitals Dwarka, Delhi",
    position: "Chairmen",
    experience: "44+ Year of experience",
    description:
      "Dr. Y.K. Mishra is a distinguished Cardiac Surgeon, recognised as a pioneer in minimally invasive cardiac surgery with over four decades of experience improving heart health. He has successfully performed over 19,000 open-heart and robotic surgeries.",
    specialty: "Cardiac Surgeon",
    image: "https://i.ibb.co/HzMbMsT/yk-mishra.png" // Replace with local or your image src
  },
  {
    name: "Dr. T S Kler",
    location: "New Delhi, India",
    hospital: "BLK-Max Super Specialty Hospital, Delhi",
    position: "Chairmen",
    experience: "48+ Year of experience",
    description:
      "Dr. T.S. Kler is a pioneer in electrophysiology with 48+ years of experience and 35,000+ angioplasties completed.",
    specialty: "Interventional Cardiologist",
    image: "https://i.ibb.co/YTW9m33/kler.png"
  },
  {
    name: "Dr. Ajay Kaul",
    location: "Noida, India",
    hospital: "Fortis Hospital, Noida",
    position: "Chairmen",
    experience: "38+ Year of experience",
    description:
      "Recognized among the top cardiac surgeons with 38+ years of experience. Over 20,000 cardiac surgeries performed.",
    specialty: "Cardiac Surgeon",
    image: "https://i.ibb.co/vD0X7C6/ajay-kaul.png"
  },
  {
    name: "Dr. Naresh Trehan",
    location: "Gurgaon, India",
    hospital: "Medanta - The Medicity, Gurgaon",
    position: "Chairmen",
    experience: "56+ Year of experience",
    description:
      "India’s distinguished Cardiothoracic Surgeon with 56+ years and 48,000+ surgeries successfully completed.",
    specialty: "Cardiac Surgeon",
    image: "https://i.ibb.co/phCxPfz/naresh-trehan.png"
  },
  {
    name: "Dr. Z S Meharwal",
    location: "New Delhi, India",
    hospital: "Fortis Escorts Heart Institute, New Delhi",
    position: "Chairmen",
    experience: "42+ Year of experience",
    description:
      "Over 42 years of experience, 30,000+ cardiac surgeries. Expert in coronary artery bypass.",
    specialty: "Cardiac Surgeon",
    image: "https://i.ibb.co/PjTHzmH/meharwal.png"
  }
];

// Render doctor avatars
const avatarContainer = document.querySelector(".doctor-avatars");
const card = document.querySelector(".doctor-card");

doctors.forEach((doc, index) => {
  const wrapper = document.createElement("div");
  wrapper.className = "avatar-frame";
  wrapper.dataset.index = index;

  const img = document.createElement("img");
  img.src = doc.image;
  img.alt = doc.name;

  // Hover Events on wrapper
  wrapper.addEventListener("mouseenter", () => showDoctorCard(index));
  wrapper.addEventListener("mouseleave", () => hideDoctorCard());

  wrapper.appendChild(img);
  avatarContainer.appendChild(wrapper);
});

const cardImg = document.querySelector(".doctor-card-img");
const docName = document.getElementById("doc-name");
const docLocation = document.getElementById("doc-location");
const docHospital = document.getElementById("doc-hospital");
const docPosition = document.getElementById("doc-position");
const docExperience = document.getElementById("doc-experience");
const docDescription = document.getElementById("doc-description");

function showDoctorCard(index) {
  const doc = doctors[index];
  cardImg.src = doc.image;
  docName.textContent = doc.name;
  docLocation.textContent = doc.location;
  docHospital.textContent = doc.hospital;
  docPosition.textContent = doc.position;
  docExperience.textContent = doc.experience;
  docDescription.textContent = doc.description;
  card.classList.remove("d-none");
}

function hideDoctorCard() {
  // Optional: keep card open or add timeout to hide
  // card.classList.add("d-none");
}