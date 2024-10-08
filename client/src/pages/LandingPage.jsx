import Header from '../components/Header';

export default function LandingPage() {
    return (
        <div className="landing-page">
            <Header />

            <div className="line"></div>
            <main className="container main landing-main">
                <section className="display">
                    <h1 className="display-text">
                        Simplify your life - Create, store, and find your notes
                        anytime, anywhere.
                    </h1>
                    <button className="display-btn">Get started</button>
                </section>

                <section className="feature">
                    <div className="all-feature-cards">
                        <div className="feature-card">
                            <img
                                src="images/shield-check.svg"
                                className="feature-card-img"
                                alt="Seacured"
                            />
                            <h2 className="feature-card-title">
                                Secure and Private
                            </h2>
                            <p className="feature-card-text">
                                Keep your notes secure and private with our
                                advanced encryption.
                            </p>
                        </div>

                        <div className="feature-card">
                            <img
                                src="images/cross-platform.svg"
                                className="feature-card-img"
                                alt="Seacured"
                            />
                            <h2 className="feature-card-title">
                                Cross-Platform Synchronization
                            </h2>
                            <p className="feature-card-text">
                                Highlight the ability to access and edit notes
                                across different devices.
                            </p>
                        </div>

                        <div className="feature-card">
                            <img
                                src="images/share.svg"
                                className="feature-card-img"
                                alt="Seacured"
                            />
                            <h2 className="feature-card-title">
                                Collaborate with others
                            </h2>
                            <p className="feature-card-text">
                                Collaborate with others on shared notes and
                                projects.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
