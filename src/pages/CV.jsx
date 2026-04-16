import cvimage from '../assets/milad-fakurian-y_biCdZ5atA-unsplash.jpg';

export default function () {
    return (
         <main>
            <div className="cv-container">
                <div className="print-action-container">
                    <button onclick="window.print()" className="cta-button">
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
                            <h3>.NET Fullstack Developer</h3>
                            <p><em>Chas Academy, 2025 - Current</em></p>

                            <h3>Bachelor of Computer & Data Science</h3>
                            <p><em>Stockholm University, 2019 - 2022</em></p>

                            <h3>STI-Ingenjör Elinstallation</h3>
                            <p><em>Stockholms Tekniska Institut, 2013 - 2015</em></p>

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

                            <h3>BIM Specialist & Junior Developer</h3>
                            <p><em>AEC/COWI, March 2024 - February 2026</em></p>
                            <p>My role involved developing and implementing efficient work processes and methodologies,
                                leading project coordination, and ensuring the quality assurance of technical
                                documentation. I maintain continuous communication with clients while developing and
                                managing BIM models for multidisciplinary infrastructure projects. My experience
                                includes data coordination for major projects such as Västlänken and TSK30, the
                                establishment and management of coordination models, and collaborating with development
                                teams to test in-house software using Azure DevOps.</p>

                            <h3>BIM Consultant</h3>
                            <p><em>AFRY, June 2023 - March 2024</em></p>
                            <p>I have extensive experience leading coordination in multidisciplinary infrastructure
                                projects and producing documentation in accordance with client requirements. My
                                expertise also includes CAD and data coordination.</p>

                            <h3> CAD & Datacoordinator and Electrical Designer</h3>
                            <p><em>AFRY, January 2017 - June 2023</em></p>
                            <p>My experience includes designing a wide range of electrical drawings for infrastructure
                                projects and taking responsibility for developing coordination models in accordance with
                                client requirements. I have extensive expertise in electrical engineering, as well as
                                CAD and data coordination within infrastructure projects, including advanced 3D
                                modeling.</p>

                            <h3>Electrical Consultant</h3>
                            <p><em>AB Teknoplan, August 2015 - January 2017</em></p>
                            <p>During my time at AB Teknoplan, I gained extensive experience designing various
                                electrical drawings for infrastructure projects. I was responsible for developing
                                coordination models in accordance with client requirements, with a primary focus on
                                electrical engineering, CAD and data coordination, and advanced 3D modeling.</p>
                            <h3>Sales Representative, Nespresso Ambassador</h3>
                            <p><em>Nespresso, February 2012 - January 2017</em></p>
                            <p>Experienced in identifying customer needs and presenting the most suitable solutions. As
                                a Nespresso Ambassador, I specialized in high-end sales of Nespresso machines within the
                                B2C segment, delivering premium customer service and brand representation.</p>
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