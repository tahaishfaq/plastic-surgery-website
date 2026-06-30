function doctorImage(photoId) {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=900&h=1125&q=80`;
}

export const doctorsPageContent = {
  isFinalized: false,
  hero: {
    title: "Our Clinical Team",
    description:
      "Meet the surgeons and specialists behind Rahman Plastic Surgery in Islamabad.",
  },
  placeholderNote:
    "Team portraits below use provisional photography until client-approved images are supplied.",
};

export const doctors = [
  {
    id: "zahid-latif",
    name: "Dr. Zahid Latif",
    role: "Medical Director",
    credentials: "Rahman Plastic Surgery",
    bio: "Provides medical leadership across surgical planning, clinical standards, and patient care at Rahman Plastic Surgery.",
    image: {
      src: doctorImage("1612349317150-e413f6a5b16d"),
      alt: "Dr. Zahid Latif, Medical Director at Rahman Plastic Surgery.",
    },
  },
  {
    id: "zahid-khan",
    name: "Dr. Zahid Khan",
    role: "Plastic Surgeon",
    credentials: "",
    bio: "Supports body contouring and reconstructive consultations with a focus on clear planning and natural-looking outcomes.",
    image: {
      src: doctorImage("1537368910025-700350fe46c7"),
      alt: "Dr. Zahid Khan, Plastic Surgeon at Rahman Plastic Surgery.",
    },
  },
  {
    id: "nadiya-tariq",
    name: "Dr. Nadiya Tariq",
    role: "Plastic Surgeon",
    credentials: "",
    bio: "Works with patients across aesthetic and restorative procedures with careful attention to comfort, privacy, and follow-up care.",
    image: {
      src: doctorImage("1594824476967-48c8b964273f"),
      alt: "Dr. Nadiya Tariq, Plastic Surgeon at Rahman Plastic Surgery.",
    },
  },
  {
    id: "tariq-shah",
    name: "Dr. Tariq Shah",
    role: "Plastic Surgeon",
    credentials: "",
    bio: "Contributes to surgical assessment and treatment planning across the clinic's plastic surgery services.",
    image: {
      src: doctorImage("1576091160399-112ba8d25d1d"),
      alt: "Dr. Tariq Shah, Plastic Surgeon at Rahman Plastic Surgery.",
    },
  },
  {
    id: "rasheed-ullah-khan-khattak",
    name: "Dr. Rasheed Ullah Khan Khattak",
    role: "Assistant Professor, Anesthesia",
    credentials: "",
    bio: "Supports safe anesthesia planning and perioperative care for surgical patients at Rahman Plastic Surgery.",
    image: {
      src: doctorImage("1559839734-2b71ea197ec2"),
      alt: "Dr. Rasheed Ullah Khan Khattak, Assistant Professor Anesthesia at Rahman Plastic Surgery.",
    },
  },
  {
    id: "shah-zahid",
    name: "Dr. Shah Zahid",
    role: "Consultant",
    credentials: "",
    bio: "Provides specialist consultation support within the Rahman Plastic Surgery clinical team.",
    image: {
      src: doctorImage("1573496359142-b8d87734a5a2"),
      alt: "Dr. Shah Zahid, Consultant at Rahman Plastic Surgery.",
    },
  },
];
