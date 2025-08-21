import React from "react";
import "../ExperienceCard.css";

export default function ExperienceCard({ company, position, description }) {
  return (
    <div className="experience-card">
      <h3 className="experience-company">{company}</h3>
      <p className="experience-position">{position}</p>
      <p className="experience-description">{description}</p>
    </div>
  );
}
