import React from "react";
import ExperienceCard from "../components/ExperienceCard";

export default function Experiences() {
  const fillerExperiences = [
        {
      company: "Handshake AI",
      position: "AI Research Fellow",
      description: "Contract work to refine real AI models and applications through validations and testing."
    },
    {
      company: "Reality Design Studio",
      position: "Spatial Computing Researcher",
      description: "Senior member of Northeastern lab focused on AR/VR research under Dr. Wallace Lages. Many projects!"
    },
    {
      company: "Khoury College of Computer Sciences",
      position: "CS 3000 Teaching Assistant",
      description: "Algorithms and Data Structures. Assisting with course material, grading, and student support."
    },
    {
      company: "Babel Street",
      position: "Software Engineer Co-op",
      description: "Developed for NLP Software (SDK, API, Plugins, DevOps, MVPs) used by S&P 500 and Gov organizations."
      // description: "Developed for NLP SDK, API, DevOps (Jenkins, Maven), MongoDB server migration to AWS, and Python and Shell scripting"
    },
    {
      company: "Northeastern Virtual Reality",
      position: "President and Tech Lead",
      description: "Transformed club with Agile infrastructure, 6x increase in tech supply, workshops, gamenights, speaker events."
    },
    {
      company: "Flow Fitness",
      position: "UX Research Intern",
      description: "Streamlined the signup process for potential customers through research and data-driven designs."
    },
    {
      company: "Northeastern University",
      position: "Orientation Leader",
      description: "Supported Foundation Year students, a first year program designed for predominantly first-gen Boston high schoolers."
    },
    {
      company: "The Calculus Project",
      position: "Math Tutor",
      description: "Taught disadvantaged high school students calculus and geometry."
    },
    {
      company: "Center For Student Involvement (Northeastern)",
      position: "Office Assistant",
      description: "Part time work during my first year! Grew my communication skills while learning about university clubs."
    },
    
    
  ];

  return (
    <section className="experience-grid">
      <h2>Experiences</h2>
      <p className="hero-subtext">It’s the quiet lessons, not just the loud achievements, that shape who we are.</p>
      {fillerExperiences.map((exp, i) => (
        <ExperienceCard key={i} {...exp} />
      ))}
    </section>
  );
}
