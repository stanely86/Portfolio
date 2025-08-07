import React, { useState } from "react";

const TABS = [
  { key: "frontend", label: "UI/UX/Frontend" },
  { key: "datascience", label: "Data Science" },
  { key: "marketing", label: "Content Marketing" },
];

export default function ProjectsTabs({ projects }) {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <div>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        {TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              padding: "0.5rem 1rem",
              borderBottom: activeTab === tab.key ? "2px solid #0070f3" : "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontWeight: activeTab === tab.key ? "bold" : "normal"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {activeTab === "frontend" && (
          <div>
            {/* Render all existing projects here */}
            {projects.map(project => (
              <div key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {/* Add more project details as needed */}
              </div>
            ))}
          </div>
        )}
        {activeTab === "datascience" && (
          <div>
            {/* Data Science projects will go here */}
            <p>No projects yet.</p>
          </div>
        )}
        {activeTab === "marketing" && (
          <div>
            {/* Content Marketing projects will go here */}
            <p>No projects yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}