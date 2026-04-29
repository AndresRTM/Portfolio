import aboutpicture from '../assets/milad-fakurian-y_biCdZ5atA-unsplash.jpg';
import picture1 from '../assets/michael-schaffler-wWfAKP0Hf3E-unsplash.jpg';
import picture2 from '../assets/philipp-potocnik-tHFwghQrMuM-unsplash.jpg';
import picture3 from '../assets/timur-kozmenko-TMsVTFeZl2o-unsplash.jpg';
import picture4 from '../assets/snapsaga-sFfZrcEiqtc-unsplash.jpg';
import picture5 from '../assets/michele-blackwell-rAyCBQTH7ws-unsplash.jpg';
import picture6 from '../assets/raphael-nogueira-b29Qdj7zc5g-unsplash.jpg';
import picture7 from '../assets/himal-rana-Fy1DsvIY5Tc-unsplash.jpg';
import picture8 from '../assets/zayed-ahmed-zadu-eyb_XWY7NHE-unsplash.jpg';
import ImageCarousel from '../components/ImageCarousel';
import SkillsList from '../components/SkillsList';
import usePageTitle from '../hooks/usePageTitle';

const sunsetImages = [
    { src: picture1, alt: 'Sunset, koh lanta, thailand', caption: 'Sunset, koh lanta, thailand' },
    { src: picture2, alt: 'Sunset vibes, koh lanta, thailand', caption: 'Beach vibes in Thailand' },
    { src: picture3, alt: 'Sunset over the islands', caption: 'Twilight over koh phangan, thailand' },
    { src: picture4, alt: 'Vibrant tropical sunset colors', caption: 'Vibrant tropical colors on Koh lipe, thailand' },
];

const foodImages = [
    { src: picture5, alt: 'A bowl of Japanese Ramen', caption: 'Japanese Ramen' },
    { src: picture6, alt: 'A plate of Italian Carbonara', caption: 'Italian Carbonara' },
    { src: picture7, alt: 'Korean BBQ setup', caption: 'Korean BBQ' },
    { src: picture8, alt: 'Thai Green Curry dish', caption: 'Thai Green Curry' },
];

const skills = [
    { icon: 'devicon-html5-plain', label: 'HTML5' },
    { icon: 'devicon-css3-plain', label: 'CSS3' },
    { icon: 'devicon-javascript-plain', label: 'JavaScript' },
    { icon: 'devicon-csharp-plain', label: 'C#' },
    { icon: 'devicon-dotnetcore-plain', label: '.NET' },
    { icon: 'devicon-azuresqldatabase-plain', label: 'SQL' },
    { icon: 'devicon-git-plain', label: 'Git' },
    { icon: 'devicon-github-plain', label: 'GitHub' },
    { icon: 'devicon-gitlab-plain', label: 'GitLab' },
    { icon: 'devicon-react-original', label: 'React' },
    { icon: 'devicon-java-plain', label: 'Java' },
    { icon: 'devicon-cplusplus-plain', label: 'C++' },
    { icon: 'devicon-python-plain', label: 'Python' },
    { icon: 'devicon-visualstudio-plain', label: 'Visual Studio' },
    { icon: 'devicon-vscode-plain', label: 'Visual Studio Code' },
    { icon: 'devicon-bootstrap-plain', label: 'Bootstrap' },
    { icon: 'devicon-figma-plain', label: 'Figma' },
    { icon: 'devicon-eclipse-plain', label: 'Eclipse' },
    { icon: 'devicon-intellij-plain', label: 'IntelliJ IDEA' },
];

export default function About() {
    usePageTitle('About')
    return (
        <main className="about-container">
            <h1 className="page-title">About Me</h1>

            <section className="about-intro">
                <img src={aboutpicture} alt="Andrés" className="about-image" />
                <article className="about-intro-text">
                    <h2>My Passion for Systems & Code</h2>
                    <p>Hello! My name is Andrés, developer with a deep passion for programming and system development. While I enjoy building intuitive user experiences on the frontend, my true interest leans heavily towards the backend. I thrive in the analytical side of tech designing robust system architectures, solving complex logical problems, and building scalable solutions from the ground up.</p>
                    <p>With a background in design, I have a keen eye for aesthetics and strive to create visually appealing websites that provide an excellent user experience. I am constantly learning and staying up to date with the latest web development trends and technologies.</p>
                </article>
            </section>

            <section className="about-content">
                <article>
                    <h2>My Journey in Web Development</h2>
                    <p>My path to software and web development hasn't been a traditional one, and I consider that my biggest strength. I started my career as an electrical engineer, designing and coordinating complex infrastructure projects. While working heavily with 3D modeling and data coordination, I realized my favorite part of the job was figuring out how different digital systems communicated with each other.</p>
                    <p>Driven by a curiosity to understand what happens "under the hood," I decided to pivot. I earned a Bachelor's degree in Computer Science, where my passion for programming truly took off, starting with core languages like Java and C++.</p>
                    <p>Today, I am taking my skills even further by studying to become a .NET Fullstack Developer at Chas Academy. While I enjoy crafting clean, responsive user interfaces using HTML, CSS, and modern frontend tools, my true passion lies deeper in the stack.</p>
                    <p>In my recent experience as a BIM Specialist and Junior Developer, I was able to bridge the gap between engineering and IT. My unique background has taught me how to adapt quickly to new technologies, work effectively under pressure, and approach complex problems with a structured mindset.</p>
                </article>

                <article>
                    <h2>Personal life</h2>
                    <p>When I'm away from the keyboard, I like to stay active. Working out is a big part of my routine, and I have a passion for football. I also love traveling, exploring new places, and spending quality time with my friends and family.</p>
                    <p>I am a huge dog lover and a proud owner. Taking long walks with my dog through the forest is one of my favorite ways to clear my head and recharge. I also enjoy jumping into a good FPS game now and then!</p>
                </article>

                <article>
                    <h2>Wanderlust</h2>
                    <p>Traveling is more than just a hobby for me, it is a necessity. I have a deep passion for exploring new places, immersing myself in different cultures, and discovering local cuisines. My journeys have taken me to numerous countries both within Europe and across the globe.</p>
                    <p>However, the place that has left the greatest mark on me is <strong>Thailand</strong>. It's a country that truly has it all, from the incredible flavors of the street food to the genuine kindness of the people. Most importantly, I've deeply connected with their philosophy of life, often summarized by the phrase <strong><em>"Mai Pen Rai"</em></strong>.</p>
                </article>

                <section className="sunset-section">
                    <h2>Sunset Lover</h2>
                    <p>If there is one thing that can truly make me stop in my tracks, it's a beautiful sunset. I consider myself a true <strong>sunset lover</strong>. While I deeply appreciate the beauty of a sunrise, I must admit they are a bit harder to experience simply because the struggle of waking up that early is very real!</p>
                    <p>I've been fortunate enough to witness stunning golden hours across the world, including the famous, breathtaking sunset in <strong>Santorini</strong>. However, in my experience, nothing quite beats the sunsets in <strong>Thailand</strong>.</p>
                    <ImageCarousel images={sunsetImages} />
                </section>

                <article>
                    <h2>A Taste for Culinary Adventures</h2>
                    <p>Beyond tech and sports, I am a huge food enthusiast. I am particularly drawn to the vibrant and diverse flavors of Asian cuisine. However, no matter how many new cuisines I explore, className Italian food will always hold a special place in my heart.</p>
                </article>

                <section className="culinary-adventures">
                    <h4>Snapshot</h4>
                    <ImageCarousel images={foodImages} />
                </section>
            </section>

            <section className="about-skills">
                <h2>My Skills</h2>
                <SkillsList skills={skills} />
            </section>
        </main>
    );
}
