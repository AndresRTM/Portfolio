import heroprofileimg from '../assets/yuri-krupenin-wSRuljSPrwQ-unsplash.jpg';
import { Link } from 'react-router-dom'
import BriefItem from '../components/BriefItem';
import usePageTitle from '../hooks/usePageTitle';

const briefItems = [
    {
        title: 'BIM & Data',
        description: 'Expertise in coordinating multidisciplinary infrastructure projects.',
    },
    {
        title: 'Development',
        description:
            "With a Bachelor's degree in Computer Science, I have a solid foundation in Java, C++, and systems theory. I am now further specializing in .NET, C#, and modern backend development.",
    },
   
];

export default function Home() {
    usePageTitle('Home')
    return (
        <main>
            <section className="hero-section">
                <div className="hero-container">

                    <div className="hero-text">
                        <h1>Andrés Llano Duran</h1>
                        <p className="hero-subtitle">BIM Specialist & Fullstack .NET Developer</p>

                        <p>Welcome! With a solid background in BIM and data coordination from some of Sweden's largest
                            infrastructure projects, I am currently transitioning into the IT sector. I'm leveraging my
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
                {briefItems.map((item) => (
                    <BriefItem key={item.title} title={item.title} description={item.description} />
                ))}
            </section>
        </main>
    );
}

     
