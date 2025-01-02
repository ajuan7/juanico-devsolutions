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
          <li><a href="https://www.instagram.com/juanicodevsolutions/">Contact</a></li>
        </ul>
      </nav>

      <main className="project-details-container">
        <h1 className="project-title">Project 1 - Automated Scheduling System</h1>
        <p className="project-description">
        The client approached us with the need to streamline and improve the efficiency of their job scheduling process. The primary goal was to reduce the manual effort involved in scheduling jobs while ensuring that client information could be managed with ease. To address these challenges, we developed an automated scheduling system with integrated route optimization.
        </p>

        {/* Image and Description 1 */}
        <section className="project-section">
          <div className="project-item">
            <Image 
              src="/project-1/Main-Page.png" 
              alt="."
              width={1280}
              height={720}
              className="project-image"
            />
            <h2 className="project-heading">Web App Interface</h2>
            <p className="project-description">The approach to building the system was to create the UI as minimalistic as possible whilst providing all the required minimum viable functionality that was asked for.</p>
          </div>
        </section>

        <section className="project-section">
          <div className="project-item">
            <Image 
              src="/project-1/Database-Page.png" 
              alt="."
              width={1280}
              height={720}
              className="project-image"
            />
            <h2 className="project-heading">MySQL Database Integration</h2>
            <p className="project-description">This page provides functionality for managing client data in the scheduling system through integration of MySQL. It allows you to view, edit, delete, and add new client entries. The data is fetched from a backend server and displayed in a table format, with options for search and filtering.  
            </p>
          </div>
        </section>

        <section className="project-section">
          <div className="project-item">
            <Image 
              src="/project-1/Roster-Page.png" 
              alt="."
              width={1280}
              height={720}
              className="project-image"
            />
            <h2 className="project-heading">Roster and Team Creation</h2>
            <p className="project-description"> The Roster Management and Scheduling System simplifies the scheduling process by automating job assignments and team management. It allows users to manage clients, create teams, assign tasks, and generate weekly schedules based on client availability. The system also supports importing/exporting rosters, real-time updates, and Excel exports for easy record-keeping.</p>
          </div>
        </section>

        <section className="project-section">
          <div className="project-item">
            <Image 
              src="/project-1/Cluster-Page.png" 
              alt="."
              width={1280}
              height={720}
              className="project-image"
            />
            <Image 
              src="/project-1/Cluster-Page-2.png" 
              alt="."
              width={1280}
              height={720}
              className="project-image"
            />
            <h2 className="project-heading">Area Clustering API Integration</h2>
            <p className="project-description">The Job Clustering and Location is designed to optimize job scheduling by clustering tasks based on geographical location, team availability, and utilises <a href="https://opencagedata.com/api"><u>OpenCage API</u></a> for the forward addressing. The system utilizes a map interface to visualize job locations and clusters, assigning jobs to teams with balanced workloads. Using geolocation and turf.js for clustering, the system ensures an efficient assignment of tasks, maximizing team productivity and minimizing travel time.</p>
          </div>
        </section>

        <section className="project-section">
          <div className="project-item">
            <Image 
              src="/project-1/Schedule-Page.png" 
              alt="."
              width={1280}
              height={720}
              className="project-image"
            />
            <h2 className="project-heading">Roster Scheduling and Interactive Map</h2>
            <p className="project-description">The Schedule Management optimizes job scheduling by dynamically managing teams and clients, integrating an initial location-based route optimization feature through <a href="https://www.routexl.com/"><u>RouteXL API</u></a>, and offering a drag-and-drop interface for easy job management. This system allows users to assign jobs, view detailed schedules, and visualize job routes on an interactive map, ensuring efficient task distribution across teams.</p>
          </div>
        </section>

        <section className="project-section">
          <div className="project-item">
            <Image 
              src="/project-1/Calendar.png" 
              alt="."
              width={1280}
              height={720}
              className="project-image"
            />
            <h2 className="project-heading">Google Calendar Compatible Export</h2>
            <p className="project-description">The Export to ICS functionality allows you to generate a fully compatible iCalendar file that can be imported into Google Calendar or any other calendar software. This ensures that there is no manual data entry required, provides accurate start and end times, client details, and location information.</p>
          </div>
        </section>


      </main>


      <footer className="footer">
        <p>© 2025 Juanico DevSolutions</p>
      </footer>
    </div>
  );
}
