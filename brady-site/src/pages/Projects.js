import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const fillerProjects = [
    {
      title: "VR Cybersickness (IEEE ISMAR 2025 Conference Paper)",
      type: "Research Project",
      tools: "Unity3D, C#, Python, R, User Studies",
      description: "A chatbot that answers questions with natural language. daskdjasdjask dsakdjaksjdksajdaskljdaskldjsakldjsakldjaskldjaskldjaskldjaskldjaskldjaskdljaskdlasjdkasjdaskldjfkdsajdkasjd aksldjas kdjaskdjaskdjas kdljlas ",
      media: "https://via.placeholder.com/600x350", // placeholder image
      link: "https://github.com/example/chatbot"
    },
    {
      title: "CONTEXT",
      type: "Full stack",
      tools: "React, Tailwind, Vercel",
      description: "A chatbot that answers questions with natural language. daskdjasdjask dsakdjaksjdksajdaskljdaskldjsakldjsakldjaskldjaskldjaskldjaskldjaskldjaskdljaskdlasjdkasjdaskldjfkdsajdkasjd aksldjas kdjaskdjaskdjas kdljlas ",
      media: "https://www.youtube.com/embed/dQw4w9WgXcQ", // placeholder video
      link: "https://github.com/example/portfolio"
    },
    {
      title: "The Stars Below",
      type: "Mixed Reality App",
      tools: "D3.js, Node.js",
      description: "An interactive dashboard with graphs and real-time updates.",
      media: "https://via.placeholder.com/600x350",
      link: "https://github.com/example/dashboard"
    },
    {
      title: "Eye Tracking and Scene Visualizer",
      type: "Research Project",
      tools: "D3.js, Node.js",
      description: "An interactive dashboard with graphs and real-time updates.",
      media: "https://via.placeholder.com/600x350",
      link: "https://github.com/example/dashboard"
    },
      {
      title: "Personal Website",
      type: "Web Application",
      tools: "React, CSS, Vercel",
      description: "An interactive dashboard with graphs and real-time updates.",
      media: "https://via.placeholder.com/600x350",
      link: "https://github.com/example/dashboard"
    },
        {
      title: "AR Art Gallery",
      type: "Research Project",
      tools: "D3.js, Node.js",
      description: "An interactive dashboard with graphs and real-time updates.",
      media: "https://via.placeholder.com/600x350",
      link: "https://github.com/example/dashboard"
    },
            {
      title: "HARMONY",
      type: "Mixed Reality App",
      tools: "D3.js, Node.js",
      description: "An interactive dashboard with graphs and real-time updates.",
      media: "https://via.placeholder.com/600x350",
      link: "https://github.com/example/dashboard"
    },
            {
      title: "LightEmAll",
      type: "2D Game",
      tools: "D3.js, Node.js",
      description: "An interactive dashboard with graphs and real-time updates.",
      media: "https://via.placeholder.com/600x350",
      link: "https://github.com/example/dashboard"
    },
                {
      title: "ReadyXR",
      type: "Mixed Reality App",
      tools: "D3.js, Node.js",
      description: "An interactive dashboard with graphs and real-time updates.",
      media: "https://via.placeholder.com/600x350",
      link: "https://github.com/example/dashboard"
    },
    {
      title: "Flow Fitness Redesign",
      type: "Figma Prototype",
      tools: "D3.js, Node.js",
      description: "An interactive dashboard with graphs and real-time updates.",
      media: "https://via.placeholder.com/600x350",
      link: "https://github.com/example/dashboard"
    },
        {
      title: "A Review of Shor's Algorithm",
      type: "Paper",
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
