// ✏️ EDIT THIS FILE to personalise your portfolio. No other file needs to change.

export const profile = {
  name: "Tejswi Dixit",
  role: "MCA student and aspiring full stack developer",
  intro:
    "I build web apps and small AI tools with Python, TypeScript and Angular, and I am learning to make them fast, accessible and easy to use.",
  about: [
    "I am a first-semester MCA student who enjoys turning ideas into working software. My public projects so far include a resume screening tool built with Python and NLP, and a live weather app built with Angular.",
    "I completed my bachelor's degree at Lovely Professional University, Phagwara, and I am now strengthening my fundamentals in DBMS, data structures and web development, one project at a time.",
  ],
  location: "India",
  email: "your.email@example.com", // ← replace with the email you want visitors to use
  github: "https://github.com/TejswiDixit",
  linkedin: "https://www.linkedin.com/in/tejswi-dixit-413a8634b",
  resume: "", // put resume.pdf inside /public and set "/resume.pdf"
};

export const projects = [
  {
    title: "Resume Analyzer",
    lang: "Python",
    summary:
      "Screens a resume against a job description and rates the match out of 10.",
    details:
      "Upload a resume as PDF or DOCX and paste or upload a job description. The app extracts the candidate's name, email, phone number and skills, matches them against the skills in the job description using fuzzy matching, and shows a detailed analysis table. Results can be downloaded as a CSV report.",
    stack: ["Python", "Streamlit", "spaCy", "RapidFuzz", "Pandas"],
    link: "https://github.com/TejswiDixit/resume_analyser",
  },
  {
    title: "SkyCast Pro",
    lang: "TypeScript",
    summary:
      "A weather app with live conditions for cities around the world and an interactive map.",
    details:
      "Search any city to see its temperature, humidity, wind speed, pressure and current conditions, pulled live from a weather API. Locations are shown on an interactive Leaflet map, and the interface is responsive across phones and desktops.",
    stack: ["Angular", "TypeScript", "SCSS", "Leaflet.js", "Weather API"],
    link: "https://github.com/TejswiDixit/Skycast-pro",
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL"] },
  { group: "Frameworks", items: ["Angular", "React", "Streamlit"] },
  { group: "Libraries and APIs", items: ["spaCy", "Pandas", "Leaflet.js", "REST APIs"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code"] },
];

export const education = [
  {
    title: "Master of Computer Applications (MCA)",
    place: "Currently in 1st semester",
    when: "2026 to present",
    note: "Coursework: DBMS, data structures, web technologies.",
  },
  {
    title: "Bachelor's degree",
    place: "Lovely Professional University, Phagwara, Punjab",
    when: "Completed",
    note: "", // optional: add your degree name and years, e.g. "B.Sc. Computer Science, 2021 to 2024"
  },
];
