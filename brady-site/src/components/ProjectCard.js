import React, { useState } from "react";
import "../ProjectCard.css";

export default function ProjectCard({
  title,
  type,
  tools,
  description,
  image,
  video, // NEW: pass .mp4/.mov path if available
  link,
  associations,
}) {
  const [hovered, setHovered] = useState(false);

  const toArray = (val) =>
    Array.isArray(val)
      ? val
      : typeof val === "string"
      ? val.split(",").map((s) => s.trim()).filter(Boolean)
      : [];

  const toolsList = toArray(tools);
  const assocList = toArray(associations);

  const combinedList = [
    ...assocList.map((a) => ({ label: a, type: "assoc" })),
    ...toolsList.map((t) => ({ label: t, type: "tool" })),
  ];

  return (
    <div
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
        

    <div className="project-media">
        {/* Always show image */}
        <img src={image} alt={title} className="project-image" />

        {/* Always render video if it exists */}
        {video && (
          <video
            src={video}
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
            className={`project-video ${hovered ? "show" : ""}`}
          />
        )}
    </div>


      {/* Info Section */}
      <div className="project-info">
        <h3>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>

        {type && <p className="project-type"><strong>{type}</strong></p>}

        {/* Unified bubbles */}
        {combinedList.length > 0 && (
          <div className="project-bubbles">
            {combinedList.map((item, i) => (
              <span
                key={i}
                className={item.type === "assoc" ? "assoc-tag" : "tool-bubble"}
              >
                {item.label}
              </span>
            ))}
          </div>
        )}

        {description && <p className="project-desc">{description}</p>}
      </div>
    </div>
  );
}
