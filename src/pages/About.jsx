export default function Navbar() {
  return (
     <main className="about-container">
            <h1 className="page-title">About Me</h1>

            <section className="about-intro">
                <img src="../images/milad-fakurian-y_biCdZ5atA-unsplash.jpg" alt="Andrés" className="about-image" />
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
                    <p>However, the place that has left the greatest mark on me is <strong>Thailand</strong>. It’s a country that truly has it all, from the incredible flavors of the street food to the genuine kindness of the people. Most importantly, I’ve deeply connected with their philosophy of life, often summarized by the phrase <strong><em>"Mai Pen Rai"</em></strong>.</p>
                </article>

                <section className="sunset-section">
                    <h2>Sunset Lover</h2>
                    <p>If there is one thing that can truly make me stop in my tracks, it’s a beautiful sunset. I consider myself a true <strong>sunset lover</strong>. While I deeply appreciate the beauty of a sunrise, I must admit they are a bit harder to experience simply because the struggle of waking up that early is very real!</p>
                    <p>I’ve been fortunate enough to witness stunning golden hours across the world, including the famous, breathtaking sunset in <strong>Santorini</strong>. However, in my experience, nothing quite beats the sunsets in <strong>Thailand</strong>.</p>

                    <div className="generic-carousel-wrapper">
                        <button className="carousel-control prev" onclick="scrollCarouselById('sunsetSlider', -1)" aria-label="Previous image">
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>

                        <div className="generic-slider-container" id="sunsetSlider">
                            <div className="carousel-track">
                                <figure className="slider-item">
                                    <img src="images/michael-schaffler-wWfAKP0Hf3E-unsplash.jpg" alt="Sunset, koh lanta, thailand" />
                                    <figcaption className="image-caption">Sunset, koh lanta, thailand</figcaption>
                                </figure>
                                <figure className="slider-item">
                                    <img src="images/philipp-potocnik-tHFwghQrMuM-unsplash.jpg" alt="Sunset, koh lanta, thailand" />
                                    <figcaption className="image-caption">Beach vibes in Thailand</figcaption>
                                </figure>
                                <figure className="slider-item">
                                    <img src="images/timur-kozmenko-TMsVTFeZl2o-unsplash.jpg" alt="Sunset over the islands" />
                                    <figcaption className="image-caption">Twilight over koh phangan, thailand</figcaption>
                                </figure>
                                <figure className="slider-item">
                                    <img src="images/snapsaga-sFfZrcEiqtc-unsplash.jpg" alt="Vibrant tropical sunset colors" />
                                    <figcaption className="image-caption">Vibrant tropical colors on Koh lipe, thailand</figcaption>
                                </figure>
                            </div>
                        </div>

                        <button className="carousel-control next" onclick="scrollCarouselById('sunsetSlider', 1)" aria-label="Next image">
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </section>

                <article>
                    <h2>A Taste for Culinary Adventures</h2>
                    <p>Beyond tech and sports, I am a huge food enthusiast. I am particularly drawn to the vibrant and diverse flavors of Asian cuisine. However, no matter how many new cuisines I explore, classNameic Italian food will always hold a special place in my heart.</p>
                </article>

                <section className="culinary-adventures">
                    <h4>Snapshot</h4>
                    <div className="generic-carousel-wrapper">
                        <button className="carousel-control prev" onclick="scrollCarouselById('foodSlider', -1)" aria-label="Previous dish">
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>

                        <div className="generic-slider-container" id="foodSlider">
                            <div className="carousel-track">
                                <figure className="slider-item">
                                    <img src="images/michele-blackwell-rAyCBQTH7ws-unsplash.jpg" alt="A bowl of Japanese Ramen" />
                                    <figcaption className="image-caption">Japanese Ramen</figcaption>
                                </figure>
                                <figure className="slider-item">
                                    <img src="images/raphael-nogueira-b29Qdj7zc5g-unsplash.jpg" alt="A plate of Italian Carbonara" />
                                    <figcaption className="image-caption">classNameic Carbonara</figcaption>
                                </figure>
                                <figure className="slider-item">
                                    <img src="images/himal-rana-Fy1DsvIY5Tc-unsplash.jpg" alt="Korean BBQ setup" />
                                    <figcaption className="image-caption">Korean BBQ</figcaption>
                                </figure>
                                <figure className="slider-item">
                                    <img src="images/zayed-ahmed-zadu-eyb_XWY7NHE-unsplash.jpg" alt="Thai Green Curry dish" />
                                    <figcaption className="image-caption">Thai Green Curry</figcaption>
                                </figure>
                            </div>
                        </div>

                        <button className="carousel-control next" onclick="scrollCarouselById('foodSlider', 1)" aria-label="Next dish">
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </section>
            </section>

            <section className="about-skills">
                <h2>My Skills</h2>
                <ul className="skills-list">
                    <li><i className="devicon-html5-plain"></i> HTML5</li>
                    <li><i className="devicon-css3-plain"></i> CSS3</li>
                    <li><i className="devicon-javascript-plain"></i> JavaScript</li>
                    <li><i className="devicon-csharp-plain"></i> C#</li>
                    <li><i className="devicon-dotnetcore-plain"></i> .NET</li>
                    <li><i className="devicon-azuresqldatabase-plain"></i> SQL</li>
                    <li><i className="devicon-git-plain"></i> Git</li>
                    <li><i className="devicon-github-plain"></i> GitHub</li>
                    <li><i className="devicon-gitlab-plain"></i> GitLab</li>
                    <li><i className="devicon-react-original"></i> React</li>
                    <li><i className="devicon-java-plain"></i> Java</li>
                    <li><i className="devicon-cplusplus-plain"></i> C++</li>
                    <li><i className="devicon-python-plain"></i> Python</li>
                    <li><i className="devicon-visualstudio-plain"></i> Visual Studio</li>
                    <li><i className="devicon-vscode-plain"></i> Visual Studio Code</li>
                    <li><i className="devicon-bootstrap-plain"></i> Bootstrap</li>
                    <li><i className="devicon-figma-plain"></i> Figma</li>
                    <li><i className="devicon-eclipse-plain"></i> Eclipse</li>
                    <li><i className="devicon-intellij-plain"></i> IntelliJ IDEA</li>
                </ul>
            </section>
        </main>
  )
}