import React from "react";
import ProjectCard from "../components/ProjectCard";
console.log(ProjectCard);

export default function Projects() {
  const projects = [
    {
      title: "Hackathon AR Demo",
      type: "Hackathon",
      tools: "Unity, C#, ARKit",
      description: "Built an AR tool for real-time object placement.",
      media: "https://www.youtube.com/embed/mAeTRCT0qZg"
    },
    {
      title: "Personal Portfolio",
      type: "Personal Project",
      tools: "React, CSS",
      description: "This very website you're looking at!",
      media: "/images/portfolio.png"
    }
  ];

  return (
    <section>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
