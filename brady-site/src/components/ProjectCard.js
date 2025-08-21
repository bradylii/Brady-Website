import React from "react";
export default function ProjectCard({ title, type, tools, description, media }) {
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
      <h3>{title}</h3>
      <p><strong>{type}</strong> | {tools}</p>
      <p>{description}</p>
    </div>
  );
}
