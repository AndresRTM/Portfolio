
export default function Contact() {
    return (
        <main>
            <section className="contact-section">
                <h1 className="page-title">Contact Me</h1>
                <p className="contact-intro">Feel free to reach out for collaborations, job opportunities, or just to say
                    hi!</p>
                <div className="contact-container">

                    <div className="contact-info">
                        <div className="info-card">
                            <i className="fa-solid fa-envelope"></i>
                            <div>
                                <h3>Email</h3>
                                <p><a href="mailto:andresdev@duck.com">andresdev@duck.com</a></p>
                            </div>
                        </div>

                        <div className="info-card">
                            <i className="fa-solid fa-phone"></i>
                            <div>
                                <h3>Phone</h3>
                                <p>Available upon request</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <i className="fa-solid fa-location-dot"></i>
                            <div>
                                <h3>Location</h3>
                                <p>Stockholm, Sweden</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form" action="#" method="POST">
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" name="name" required placeholder="Your Name" />
                            </div>

                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" required placeholder="Your Email" />
                            </div>

                            <div className="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" name="message" rows="5" required
                                    placeholder="Write your message here..."></textarea>
                            </div>

                            <button type="submit" className="cta-button submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>

    )
}