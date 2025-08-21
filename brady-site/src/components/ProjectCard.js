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
      <div className="project-info">
        <h3>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p><strong>{type}</strong> | {tools}</p>
        <p className="project-desc">{description}</p>
      </div>
    </div>
  );
}
