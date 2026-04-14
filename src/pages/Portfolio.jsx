
 export default function Portfolio() {
    return (
        <main>
            <section className="portfolio-section">
                <h1>My Projects</h1>
                <p className="portfolio-intro">Here are some of the projects I've been working on recently.</p>

                <div className="portfolio-grid">

                    <article className="project-card">
                        <img src="../images/milad-fakurian-y_biCdZ5atA-unsplash.jpg" alt="Preview of Project 1" />
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
                            <a href="#" className="open-modal-btn" data-target="modal-1">View Project</a>
                        </div>
                    </article>

                    <article className="project-card">
                        <img src="../images/milad-fakurian-y_biCdZ5atA-unsplash.jpg" alt="Preview of Project 2" />
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
                            <a href="#" className="open-modal-btn" data-target="modal-2">View Project</a>
                        </div>
                    </article>

                    <article className="project-card">
                        <img src="../images/milad-fakurian-y_biCdZ5atA-unsplash.jpg" alt="Preview of Project 3" />
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
                            <a href="#" className="open-modal-btn" data-target="modal-3">Coming Soon</a>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    )
}