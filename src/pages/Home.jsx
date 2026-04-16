import React from "react";
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
                        title="Project 1: Fruit Fly Tracker"
                        desc="My capstone project for this semester involved working with a professor on campus that does expirements
                        with fruit flies. My team and I created a program that tracks the motion of fruit flies and calculates their distance, speed, and velocity."
                    />
                    <ProjectCard
                        title="Project 2: AI algorithms"
                        desc="For the final project in my introduction to AI class we are using different algorithms to analyze data."
                    />
                    <ProjectCard
                        title="Project 3: Minecraft Bug Mod"
                        desc="This is a personal project of mine where I am creating a mod for minecraft that involves adding insects and other objects to interact with them."
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