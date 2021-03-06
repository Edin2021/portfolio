import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";
import projects from "../data";

function Projects() {
  return (
    <>
      <Header />
      <main>
        <section className="all-projects">
          <h2>Projects</h2>
          <span className="underline"></span>
          <div className="projects">
            {projects.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Projects;
