import heroprofileimg from '../assets/yuri-krupenin-wSRuljSPrwQ-unsplash.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <main>
            <section className="hero-section">
                <div className="hero-container">

                    <div className="hero-text">
                        <h1>Andrés Llano Duran</h1>
                        <p className="hero-subtitle">BIM Specialist & Fullstack .NET Developer</p>

                        <p>Welcome! With a solid background in BIM and data coordination from some of Sweden's largest
                            infrastructure projects, I am currently transitioning into the IT sector. I’m leveraging my
                            experience in managing complex data to build a new foundation in software development.</p>

                        <p>This portfolio marks the beginning of my journey as a developer. Explore my work as I
                            document my progress and apply my technical background to the world of programming.</p>
                        <div className="hero-buttons">
                            <Link to="/Portfolio" className="cta-button">View My Projects</Link>
                            <Link to="/CV" className="cta-button secondary">Read My CV</Link>
                        </div>
                    </div>

                    <div className="hero-image-container">
                        <img src={heroprofileimg} alt="Portrait of Andres Llano"
                            className="hero-profile-img" />
                    </div>

                </div>
            </section>

            <section className="home-brief">
                <div className="brief-item">
                    <h3>BIM & Data</h3>
                    <p>Expertise in coordinating multidisciplinary infrastructure projects.</p>
                </div>
                <div className="brief-item">
                    <h3>Development</h3>
                    <p>
                        With a Bachelor's degree in Computer Science, I have a solid foundation in
                        Java, C++, and systems theory. I am now further specializing in .NET, C#,
                        and modern backend development.
                    </p>
                </div>
            </section>
        </main>
    )
}