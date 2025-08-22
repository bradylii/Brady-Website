import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const fillerProjects = [
    {
      title: "VR Cybersickness (link soon!)",
      associations: ["First Author IEEE ISMAR Conference Paper 2025", "Research Project"],
      tools: "Unity3D, C#, Python, LaTex, User Studies",
      description: "Researching ways to predict and mitigate motion sickness in VR. Developed and managed a 50+ participant study consisting of roller coaster and psychological tests in VR.",
      image: "/images/CyberPaper.png", 
      video: "/Paper.mp4",
    },
    {
      title: "The Stars Below",
      associations: ["XR Master's Course", "Mixed Reality App"],      
      tools: "C#, Unity3D, Blender, Meta All-in-One SDK",
      description: "An immersive XR game that bridges the realms of AR and VR. Players get lost in a sea of stars world underneath them, flying to collect stars and bring them back to the real world.",
      image: "/images/StarsPic.jpg",
      video: "/StarsVideo.mp4",
      link: "https://github.com/bradylii/The-Stars-Below"
    },
        {
      title: "CONTEXT",
      associations: ["Belgium Study Abroad", "Full-Stack"],      
      tools: "Python, SQL, MySQL, Flask, Docker, Streamlit, Machine Learning",
      description: "A data-driven platform that finds personalized travel destinations, providing the much needed context and support by connecting users to moving companies with appropriate routes and costs.",
      image: "/images/context.png",
      video: "/ContextVideo.mp4", 
      link: "https://github.com/bradylii/CONTEXT"
    },
    {
      title: "Eye Tracking and Scene Visualizer (link soon!)",
      associations: ["Co-Author IEEE ISMAR Poster 2025", "Research Project"],      
      tools: "Unity3D, C#, Python, CSV data, LaTex",
      description: "A 3D visualization tool for scene recontruction with eye tracking data, allowing analysis of user behavior and outlier detection to better understand connection to cybersickness.",
      image: "/images/eyetracking.png",
      video: "/Empty Room.mp4"
    },
      {
      title: "Personal Website",
      associations: ["Frontend"],
      tools: "React, JavaScript, CSS, HTML, Node.js, Vercel",
      description: "The site you are on right now! A personal portfolio to showcase my projects, experiences, and skills. This site allows me to show you the person behind the one page resume!",
      image: "/images/website.png", 
      link: "https://github.com/bradylii/Brady-Website"
    },
        {
      title: "AR Art Gallery",
      associations: ["67th HFES Conference Demo", "New Music Blacksburg Concert"],
      tools: "Vuforia image tracking, C#, Unity3D, HoloLens 2",
      description: "A more immersive way of experiencing art by bringing each piece to life. Using audio and image tracking to create unique experiences for each piece of art, while keeping the focus on the piece. (GitLab unpon request)",
      image: "/images/Painting.png", 
      video: "/Painting.MOV",
    },
            {
      title: "HARMONY",
      associations: ["HackMIT", "Mixed Reality App"],
      tools: "Python, C#, Unity3D, Flask, Webhook, Terra API, Apple Health SDK",
      description: "Letting users dance to their own heart beat! A music therapy app that conforms the music to the user's body and emotions. Exploring possibilities to bring users closer together through shared experiences.",
      image: "/images/Harmony.jpg",
      link: "github.com/bradylii/Music-by-Biodata"
    },
            {
      title: "LightEmAll",
      associations: ["Class Project"],
      tools: "Java, Swing",
      description: "A 2D maze game where the player rotates individual tiles on a randomized board to allow a power source to flow through the whole maze. Utlizing Kruskal's Algorithm and Prim's Algorithm.",
      image: "/images/lightem.jpg", 
      // video: "/Paper.mp4",
      link: "https://github.com/bradylii/LightEmAll"
    },
                {
      title: "ReadyXR",
      associations: ["MIT Reality Hack", "Mixed Reality App"],
      tools: "Unreal, Blueprints, C++, MR, Meta",
      description: "Learn and practice emergency preparedness guides and tips with a gamified approach. Enabling users to be exposed to dangerous situations and turn life saving decisions into habits.",
      video: "/ReadyXR.mp4",
      image: "/images/ReadyXR.png",
      link: "https://devpost.com/software/readyxr"
    },
    {
      title: "Flow Fitness Redesign",
      associations: ["UX in Seattle", "Figma Prototype"],
      tools: "Figma, User Research, Usability testing",
      description: "Rethinking the signup process for Flow Fitness, a local gym in Seattle with best practices in mind and allowing the users to design their own memberships!",
      image: "/images/Flow.png",
      link: "https://www.figma.com/proto/wNFQTQQZuqnaLdqq6yH4YB/Flow-Fitness?page-id=0%3A1&node-id=49-132&viewport=-755%2C563%2C0.07&t=dJYv6DJN3Dqb9VOF-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=49%3A132"
    },
        {
      title: "A Review of Shor's Algorithm",
      associations: ["University of Oxford", "Final Paper"],
      tools: "Quantum Computing, LaTeX",
      description: "A review of one of the most famous quantum algorithms that has implications to unravel our digital world. Covering conceptual foundations, mathematical structures, and quantum methodologies.",
      image: "/images/Shors.png", 
      link: "https://github.com/example/dashboard"
    },
    
  ];

  return (
    <section className="projects-grid">
      <h2>Projects</h2>
      <p className="hero-subtext">From published research work and hackathon projects to a quantum computing paper</p>
      {fillerProjects.map((proj, i) => (
        <ProjectCard key={i} {...proj} />
      ))}
    </section>
  );
}
