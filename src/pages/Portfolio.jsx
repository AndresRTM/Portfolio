import { useState } from 'react';
import projectpicture from '../assets/milad-fakurian-y_biCdZ5atA-unsplash.jpg';
export default function Portfolio() {

    const [activeModal, setActiveModal] = useState(null);

    return (
        <main>
            <section className="portfolio-section">
                <h1>My Projects</h1>
                <p className="portfolio-intro">Here are some of the projects I've been working on recently.</p>

                <div className="portfolio-grid">

                    <article className="project-card">
                        <img src={projectpicture} alt="Preview of Project 1" />
                        <div className="project-content">
                            <h3>Personal Portfolio</h3>
                            <p>A responsive and modern portfolio website built from scratch to showcase my skills
                                and journey as a developer.</p>
                            <div className="project-tags">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>React</span>
                            </div>
                            <button className="open-modal-btn" onClick={() => setActiveModal('modal-1')}>
                                View Project
                            </button>
                        </div>
                    </article>

                    <article className="project-card">
                        <img src={projectpicture} alt="Preview of Project 2" />
                        <div className="project-content">
                            <h3>C# Banking app</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum eos illo,
                                consequatur dignissimos, cupiditate, maiores iusto fuga incidunt placeat officiis!
                                Asperiores minus quos animi aliquid. Sed eaque aut corrupti.</p>
                            <div className="project-tags">
                                <span>C#</span>
                                <span>.NET</span>
                                <span>SQL</span>
                            </div>
                            <button className="open-modal-btn" onClick={() => setActiveModal('modal-2')}>
                                View Project
                            </button>
                        </div>
                    </article>

                    <article className="project-card">
                        <img src={projectpicture} alt="Preview of Project 3" />
                        <div className="project-content">
                            <h3>REST API</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum expedita cum, non
                                iste est debitis, quidem cumque consequatur aut ab ex molestiae voluptatum similique
                                dolorum commodi, nisi voluptas rem. Alias.</p>
                            <div className="project-tags">
                                <span>Entity Framework</span>
                                <span>ASP.NET Core</span>
                                <span>SQL Server</span>
                                <span>C#</span>
                                <span>LINQ</span>
                            </div>
                            <button className="open-modal-btn">
                                Coming Soon
                            </button>
                        </div>
                    </article>
                </div>
            </section>
            {activeModal === 'modal-1' && (
                <div className="modal-overlay" onClick={() => setActiveModal(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-btn" onClick={() => setActiveModal(null)}>&times;</span>
                        <h2>Personal Portfolio</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, iure!</p>
                    </div>
                </div>
            )}

            {activeModal === 'modal-2' && (
                <div className="modal-overlay" onClick={() => setActiveModal(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-btn" onClick={() => setActiveModal(null)}>&times;</span>
                        <h2>C# Banking App</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, iure!</p>
                    </div>
                </div>
            )}

        </main>
    )
}