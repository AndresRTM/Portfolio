import cvimage from '../assets/milad-fakurian-y_biCdZ5atA-unsplash.jpg';
import cvData from '../data/cvData.json';
import usePageTitle from '../hooks/usePageTitle';

export default function CV() {
    usePageTitle('CV')
    return (
         <main>
            <div className="cv-container">
                <div className="print-action-container">
                    <button onClick={() => window.print()} className="cta-button">
                        <i className="fa-solid fa-print"></i> Print CV
                    </button>
                </div>
                <h1 className="cv-name">Andrés Llano Duran</h1>

                <div className="cv-layout">
                    <aside className="cv-sidebar">
                        <img className="cv-image" src={cvimage} alt="Portrait of Andrés Llano Duran"/>

                        <div className="cv-contact-info">
                            <h3>Contact Info</h3>
                            <p><i className="fa-solid fa-envelope"></i> <a
                                    href="mailto:andresdev@duck.com">andresdev@duck.com</a></p>
                            <p><i className="fa-solid fa-phone"></i> Available upon request</p>
                            <p><i className="fa-solid fa-location-dot"></i> Stockholm, Sweden</p>
                            <p><i className="fa-brands fa-linkedin"></i> <a
                                    href="https://www.linkedin.com/in/andres-llano-9b8a1b1b3/">Andrés Llano</a></p>

                            <h3>Summary</h3>
                            <p>Solution oriented developer with a strong foundation in system development (Java, C++)
                                and current studies in .NET Fullstack (C#). With a background as a BIM Specialist and
                                Consultant, I have extensive experience in data and CAD coordination, .</p>

                            <h3>Key Competencies</h3>
                            <p>Software Engineering</p>
                            <p>BIM, Data & CAD Coordination</p>
                        </div>
                    </aside>

                    <div className="cv-main-content">
                        <section className="education-section">
                            <h2>Education</h2>
                            {cvData.education.map((entry) => (
                                <div key={entry.degree}>
                                    <h3>{entry.degree}</h3>
                                    <p><em>{entry.institution}, {entry.period}</em></p>
                                </div>
                            ))}
                        </section>

                        <section className="skills-section">
                            <h2>Technical Skills</h2>

                            <h3>Programming Languages</h3>
                            <ul>
                                <li>C#, .NET, Java, C++, Python</li>
                                <li>HTML, CSS, JavaScript</li>
                                <li>SQL, T-SQL</li>
                            </ul>

                            <h3>Tools & Methods</h3>
                            <ul>
                                <li>Git, GitHub</li>
                                <li>SSMS, Visual Studio, VS Code, Eclipse, IntelliJ IDEA</li>
                                <li>OOP, OOAD, UML, Class Diagrams</li>
                                <li>Navisworks, AutoCAD, Revit, Cadium</li>
                            </ul>
                        </section>

                        <section className="experience-section">
                            <h2>Experience</h2>
                            {cvData.experience.map((entry) => (
                                <div key={entry.title + entry.company}>
                                    <h3>{entry.title}</h3>
                                    <p><em>{entry.company}, {entry.period}</em></p>
                                    <p>{entry.description}</p>
                                </div>
                            ))}
                        </section>

                        <section className="languages-section">
                            <h2>Languages</h2>
                            <ul>
                                <li><strong>Swedish:</strong> Native</li>
                                <li><strong>Spanish:</strong> Native</li>
                                <li><strong>English:</strong> Fluent</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
}   