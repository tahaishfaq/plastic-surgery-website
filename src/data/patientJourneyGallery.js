const journeyImage = (filename) =>
  `/images/patient journey/${filename}`.replace(/ /g, "%20");

export const patientJourneyGalleryContent = {
  title: "Patient Journey Gallery",
  description:
    "A visual walkthrough of the patient experience, from consultation and arrival to recovery, follow-up, and return-home planning.",
  steps: [
    {
      id: "consultation-day",
      number: "01",
      title: "Consultation Day",
      description:
        "Your journey begins with a private consultation where goals, medical history, and treatment expectations are discussed.",
      src: journeyImage("Consultation Day.png"),
      alt: "Private consultation for plastic surgery planning.",
      width: 1122,
      height: 1402,
    },
    {
      id: "arrival-welcome",
      number: "02",
      title: "Arrival and Clinic Welcome",
      description:
        "On arrival, patients are welcomed by the team and guided through the clinic experience with comfort and privacy in mind.",
      src: journeyImage("Clinic Welcome .png"),
      alt: "Patient arrival and welcome at the clinic.",
      width: 1122,
      height: 1402,
    },
    {
      id: "pre-operative-review",
      number: "03",
      title: "Pre-operative Review",
      description:
        "Before surgery, final assessments and preparation steps are completed to ensure clarity, safety, and readiness.",
      src: journeyImage("Pre-operative Review.png"),
      alt: "Pre-operative review and surgical preparation.",
      width: 1122,
      height: 1402,
    },
    {
      id: "recovery-support",
      number: "04",
      title: "Recovery Support",
      description:
        "After the procedure, patients receive immediate recovery guidance, rest support, and post-operative care instructions.",
      src: journeyImage("Recovery Support .png"),
      alt: "Post-operative recovery support and rest.",
      width: 1122,
      height: 1402,
    },
    {
      id: "follow-up-visit",
      number: "05",
      title: "Follow-up Visit",
      description:
        "The follow-up stage helps monitor healing progress and allows the surgeon to guide next recovery steps.",
      src: journeyImage("Follow-up Visit .png"),
      alt: "Follow-up visit to monitor healing progress.",
      width: 1122,
      height: 1402,
    },
    {
      id: "return-home",
      number: "06",
      title: "Return Home Planning",
      description:
        "Before returning home, patients receive aftercare guidance, travel advice, and recovery instructions for the weeks ahead.",
      src: journeyImage("Return Home Planning.png"),
      alt: "Return home planning and aftercare guidance.",
      width: 1122,
      height: 1402,
    },
  ],
};
