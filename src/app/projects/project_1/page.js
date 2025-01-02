import Image from "next/image";
import Head from "next/head";  

export default function Project_1() {
  return (
    <div>
      <Head>
        <title>Project 1 - Automated Scheduling System | Juanico DevSolutions</title>
      </Head>

      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main className="project-details-container">
        <h1 className="project-title">Project 1 - Automated Scheduling System</h1>
        <p className="project-description">
          This project is designed to automate the scheduling process, streamlining task management, 
          and improving operational efficiency. Below, you can explore the key features and the flow 
          of this system.
        </p>

        {/* Image and Description 1 */}
        <section className="project-section">
          <div className="project-item">
            <Image 
              src="/project-1/Main-Page.png" 
              alt="."
              width={700}
              height={500}
              className="project-image"
            />
            <h2 className="project-heading">Web App Interface</h2>
            <p className="project-description">Description</p>
          </div>
        </section>

        <section className="project-section">
          <div className="project-item">
            <Image 
              src="/project-1/Database-Page.png" 
              alt="."
              width={700}
              height={500}
              className="project-image"
            />
            <h2 className="project-heading">MySQL Database Integration</h2>
            <p className="project-description">Description</p>
          </div>
        </section>

        <section className="project-section">
          <div className="project-item">
            <Image 
              src="/project-1/Roster-Page.png" 
              alt="."
              width={700}
              height={500}
              className="project-image"
            />
            <h2 className="project-heading">Roster and Team Creation</h2>
            <p className="project-description">Description</p>
          </div>
        </section>

        <section className="project-section">
          <div className="project-item">
            <Image 
              src="/project-1/Cluster-Page.png" 
              alt="."
              width={700}
              height={500}
              className="project-image"
            />
            <Image 
              src="/project-1/Cluster-Page-2.png" 
              alt="."
              width={700}
              height={500}
              className="project-image"
            />
            <h2 className="project-heading">Area Clustering API Integration</h2>
            <p className="project-description">Description</p>
          </div>
        </section>

        <section className="project-section">
          <div className="project-item">
            <Image 
              src="/project-1/Schedule-Page.png" 
              alt="."
              width={700}
              height={500}
              className="project-image"
            />
            <h2 className="project-heading">Roster Scheduling and Interactive Map</h2>
            <p className="project-description">Description</p>
          </div>
        </section>

        <section className="project-section">
          <div className="project-item">
            <Image 
              src="/project-1/Calendar.png" 
              alt="."
              width={700}
              height={500}
              className="project-image"
            />
            <h2 className="project-heading">Google Calendar Compatible Export</h2>
            <p className="project-description">Description</p>
          </div>
        </section>


      </main>


      <footer className="footer">
        <p>© 2025 Juanico DevSolutions</p>
      </footer>
    </div>
  );
}
