import React from "react";
import "../ProjectCard.css";

export default function ProjectCard({ title, type, tools, description, media, link }) {
  return (
    <div className="project-card">
      {media && (
        <div className="project-media">
          {media.includes("youtube.com") ? (
            <iframe src={media} title={title} allowFullScreen></iframe>
          ) : (
            <img src={media} alt={title} />
          )}
        </div>
      )}
      <div className="project-content">
        <h3 className="project-title">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p className="project-meta">
          <strong>{type}</strong> | {tools}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}
