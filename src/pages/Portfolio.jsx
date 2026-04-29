import { useState, useEffect } from 'react';
import usePageTitle from '../hooks/usePageTitle';
import ProjectCard from '../components/ProjectCard';

const PROJECTS_PER_PAGE = 6;

export default function Portfolio() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    usePageTitle('Portfolio')
    useEffect(() => {
        fetch('https://api.github.com/users/AndresRTM/repos')
            .then(res => res.json())
            .then(data => {
                if (!Array.isArray(data)) { setError('Could not load projects from GitHub.'); return; }
                setProjects(data.map(repo => ({
                    id: repo.id,
                    title: repo.name,
                    description: repo.description || 'No description available.',
                    tags: repo.language ? [repo.language] : [],
                    url: repo.html_url,
                    status: 'available',
                })));
            })
            .catch(() => setError('Could not load projects from GitHub.'))
            .finally(() => setLoading(false));
    }, []);

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

                {loading && (
                    <div className="loading-container">
                        <div className="spinner"></div>
                        <p className="loading-text">Fetching projects from GitHub...</p>
                    </div>
                )}
                {error && <p className="fetch-error">{error}</p>}

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
