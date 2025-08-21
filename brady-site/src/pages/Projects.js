import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const fillerProjects = [
    {
      title: "AI Chatbot",
      type: "Web App",
      tools: "React, Flask, OpenAI",
      description: "A chatbot that answers questions with natural language. daskdjasdjask dsakdjaksjdksajdaskljdaskldjsakldjsakldjaskldjaskldjaskldjaskldjaskldjaskdljaskdlasjdkasjdaskldjfkdsajdkasjd aksldjas kdjaskdjaskdjas kdljlas ",
      media: "https://via.placeholder.com/600x350", // placeholder image
      link: "https://github.com/example/chatbot"
    },
    {
      title: "Portfolio Website",
      type: "Frontend",
      tools: "React, Tailwind, Vercel",
      description: "A chatbot that answers questions with natural language. daskdjasdjask dsakdjaksjdksajdaskljdaskldjsakldjsakldjaskldjaskldjaskldjaskldjaskldjaskdljaskdlasjdkasjdaskldjfkdsajdkasjd aksldjas kdjaskdjaskdjas kdljlas ",
      media: "https://www.youtube.com/embed/dQw4w9WgXcQ", // placeholder video
      link: "https://github.com/example/portfolio"
    },
    {
      title: "Data Dashboard",
      type: "Visualization",
      tools: "D3.js, Node.js",
      description: "An interactive dashboard with graphs and real-time updates.",
      media: "https://via.placeholder.com/600x350",
      link: "https://github.com/example/dashboard"
    },
  ];

  return (
    <section className="projects-grid">
      <h2>Projects</h2>
      {fillerProjects.map((proj, i) => (
        <ProjectCard key={i} {...proj} />
      ))}
    </section>
  );
}
