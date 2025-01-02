import Image from "next/image";
import Head from "next/head";  
import Link from "next/link"; 

export default function Projects() {
    return (
        <div>
            <main className="projects-container">
                <h1 className="page-title">Our Projects</h1>
                <p>Check out the projects that have currently been created as side-projects or systems currently deployed in businesses.</p>
                <section className="projects-section">
                    <div className="projects-row">
                        <div className="project-card">
                            <Link href="/projects/project_1">
                                <Image 
                                    src="/project-1/Main-Page.png" 
                                    alt="Project 1"
                                    width={800}
                                    height={600}
                                    className="project-image"
                                />
                                <p className="project-card-desc">AUTOMATED SCHEDULING SYSTEM</p>
                                <button href="/projects/project_1"className="project-button">View Project</button>
                            </Link>
                        </div>
                        <div className="project-card coming-soon">
                            <h3>Coming Soon</h3>
                        </div>
                        <div className="project-card coming-soon">
                            <h3>Coming Soon</h3>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>Test</p>
            </footer>
        </div>
    );
}
