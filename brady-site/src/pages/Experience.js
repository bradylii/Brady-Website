import React from "react";
import ExperienceCard from "../components/ExperienceCard";

export default function Experiences() {
  const fillerExperiences = [
    {
      company: "TechCorp",
      position: "Software Engineer Intern",
      description: "Built internal tools to automate workflows and reduce manual effort."
    },
    {
      company: "Research Lab",
      position: "Undergraduate Researcher",
      description: "Explored applications of computer vision in medical imaging."
    },
    {
      company: "StartupX",
      position: "Frontend Developer",
      description: "Designed and implemented user-facing features for MVP launch."
    },
  ];

  return (
    <section className="experience-grid">
      <h2>Experiences</h2>
      {fillerExperiences.map((exp, i) => (
        <ExperienceCard key={i} {...exp} />
      ))}
    </section>
  );
}
