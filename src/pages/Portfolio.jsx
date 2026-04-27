import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const PROJECTS_PER_PAGE = 6;

const projects = [
    {
        id: 1,
        title: 'Personal Portfolio',
        description: 'A responsive portfolio built with React and Vite.',
        tags: ['HTML', 'CSS', 'JavaScript', 'React'],
        url: '',
        status: 'available',
    },
    {
        id: 2,
        title: 'C# Banking App',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum eos illo, consequatur dignissimos, cupiditate, maiores iusto fuga incidunt placeat officiis!',
        tags: ['C#', '.NET', 'SQL'],
        url: '',
        status: 'available',
    },
    {
        id: 3,
        title: 'REST API',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum expedita cum, non iste est debitis, quidem cumque consequatur aut ab ex molestiae voluptatum similique dolorum commodi.',
        tags: ['Entity Framework', 'ASP.NET Core', 'SQL Server', 'C#', 'LINQ'],
        url: '',
        status: 'coming-soon',
    },
];

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
    const visibleProjects = projects.slice(
        (currentPage - 1) * PROJECTS_PER_PAGE,
        currentPage * PROJECTS_PER_PAGE
    );

    return (
        <main>
            <section className="portfolio-section">
                <h1>My Projects</h1>
                <p className="portfolio-intro">Here are some of the projects I've been working on recently.</p>

                <div className="portfolio-grid">
                    {visibleProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="pagination">
                        <button onClick={() => setCurrentPage((p) => p - 1)} disabled={currentPage === 1}>
                            &larr; Prev
                        </button>
                        <span>{currentPage} / {totalPages}</span>
                        <button onClick={() => setCurrentPage((p) => p + 1)} disabled={currentPage === totalPages}>
                            Next &rarr;
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}
