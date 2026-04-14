export default function Home() {
    return (
        <main>
            <section class="hero-section">
                <div class="hero-container">

                    <div class="hero-text">
                        <h1>Andrés Llano Duran</h1>
                        <p class="hero-subtitle">BIM Specialist & Fullstack .NET Developer</p>

                        <p>Welcome! With a solid background in BIM and data coordination from some of Sweden's largest
                            infrastructure projects, I am currently transitioning into the IT sector. I’m leveraging my
                            experience in managing complex data to build a new foundation in software development.</p>

                        <p>This portfolio marks the beginning of my journey as a developer. Explore my work as I
                            document my progress and apply my technical background to the world of programming.</p>
                        <div class="hero-buttons">
                            <a href="Portfolio.html" class="cta-button">View My Projects</a>
                            <a href="CV.html" class="cta-button secondary">Read My CV</a>
                        </div>
                    </div>

                    <div class="hero-image-container">
                        <img src="../images/yuri-krupenin-wSRuljSPrwQ-unsplash.jpg" alt="Portrait of Andres Llano"
                            class="hero-profile-img" />
                    </div>

                </div>
            </section>

            <section class="home-brief">
                <div class="brief-item">
                    <h3>BIM & Data</h3>
                    <p>Expertise in coordinating multidisciplinary infrastructure projects.</p>
                </div>
                <div class="brief-item">
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