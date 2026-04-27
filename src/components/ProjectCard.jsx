import { useState } from 'react';
import projectpicture from '../assets/milad-fakurian-y_biCdZ5atA-unsplash.jpg';

export default function ProjectCard({ project }) {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <article className="project-card">
                <img src={projectpicture} alt={`Preview of ${project.title}`} />
                <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                        {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    {project.status === 'available' ? (
                        <button className="open-modal-btn" onClick={() => setModalOpen(true)}>
                            View Project
                        </button>
                    ) : (
                        <button className="open-modal-btn">Coming Soon</button>
                    )}
                </div>
            </article>

            {modalOpen && (
                <div className="modal-overlay" onClick={() => setModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-btn" onClick={() => setModalOpen(false)}>&times;</span>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        {project.url && (
                            <a href={project.url} target="_blank" rel="noreferrer">
                                View on GitHub
                            </a>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
