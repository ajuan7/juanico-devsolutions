import Image from "next/image";
import Link from "next/link";  
import Head from "next/head";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects | Juanico DevSolutions</title>
      </Head>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Projects Section */}
      <main className="projects-container">
        <h1 className="page-title">Our Projects</h1>
        <p className="projects-subtitle">
          Explore the projects we’ve developed, ranging from side projects to fully deployed systems in businesses.
        </p>

        <section className="projects-section">
          <div className="projects-row">
            {/* Project 1 - Automated Scheduling System */}
            <div className="project-card">
              <Link href="/projects/project_1">
                  <Image 
                    src="/project-1/Main-Page.png" 
                    alt="Project 1"
                    width={700}
                    height={500}
                    className="project-image"
                  />
                  <p className="project-card-desc">AUTOMATED SCHEDULING SYSTEM</p>
                  <button className="project-button">View Project</button>
              </Link>
            </div>

            {/* Coming Soon Projects */}
            <div className="project-card coming-soon">
              <h3>Coming Soon</h3>
            </div>

            <div className="project-card coming-soon">
              <h3>Coming Soon</h3>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Juanico DevSolutions | All rights reserved</p>
      </footer>
    </div>
  );
}
