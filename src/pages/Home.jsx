function Home() {
    return (
        <main>
            {/* Hero Section */}
            <section className="hero">
                <h1>Hi, I'm Connor Tully</h1>
                <p>Aspiring web developer & creative thinker</p>
            </section>

            {/* About Section */}
            <section id = "about" className="section">
                <h2>About me</h2>
                <p>
                    I'm a student learning web developmen. I love building things with code and exploring new technologies. Currently studying at CSUSM.
                </p>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section">
                <h2>Projects</h2>
                <div className="projects-grid">
                    <ProjectCard
                        title="Project 1"
                        desc="A cool web app built with React."
                    />
                    <ProjectCard
                        title="Project 2"
                        desc="An Express API for managing tasks."
                    />
                    <ProjectCard
                        title="Project 3"
                        desc="A portfolio website (this one!)."
                    />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section">
                <h2>contact</h2>
                <p>Email: connortully1974@gmail.com</p>
                <p>Github: github.com/connortully-prof</p>
            </section>
        </main>
    );
}

function ProjectCard({ title, desc }) {
    return(
        <div className="project-card">
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
}

export default Home;