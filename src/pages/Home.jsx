import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I'm Connor Tully</h1>
        <p>Aspiring web developer & creative thinker</p>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About me</h2>
        <p>
          I'm a student learning web development. I love building things with code and exploring new technologies. Currently studying at CSUSM. My hobbies include Gardening, Cooking, Geology, Entomology, and Gaming.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <ProjectCard
            title="Project 1: Fruit Fly Tracker"
            desc="My capstone project for this semester involved working with a professor on campus that does experiments with fruit flies. My team and I created a program that tracks the motion of fruit flies and calculates their distance, speed, and velocity."
            link={
              <a href="https://github.com/bryreyes/capstone-project" target="_blank" rel="noopener noreferrer">
                Capstone
              </a>
            }
          />

          <ProjectCard
            title="Project 2: AI algorithms"
            desc="For the final project in my introduction to AI class we are using different algorithms to analyze data."
            link={
              <a href="https://colab.research.google.com/drive/1fzE_Omou1VNIIovYmKV65nMCPCaExh6w?usp=drive_link" target="_blank" rel="noopener noreferrer">
                AI Algorithms
              </a>
            }
          />

          <ProjectCard
            title="Project 3: Minecraft Bug Mod"
            desc="This is a personal project of mine where I am creating a mod for Minecraft that involves adding insects and other objects to interact with them."
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: connortully1974@gmail.com</p>
        <p>Github: github.com/connortully-prof</p>
      </section>
    </motion.main>
  );
}

function ProjectCard({ title, desc, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      {link && <h4>{link}</h4>}
    </div>
  );
}

export default Home;
