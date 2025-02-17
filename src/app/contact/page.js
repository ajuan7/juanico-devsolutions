import Image from "next/image";
import Link from "next/link";  
import Head from "next/head";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact | Juanico DevSolutions</title>
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
        <h1 className="page-title">Contact Us</h1>
        <div style={{width: "60%", marginRight: "auto", marginLeft: "auto", textAlign: "left"}}>
            <p className="projects-subtitle">
            For any inquires or questions, feel free to contact us.
            </p>
            <p style={{textAlign: "left"}}>
                Adelaide, Australia, 5000
                <br></br>
                IG <a href="https://instagram.com/juanicodevsolutions" target="_blank" rel="noopener noreferrer"><u>@juanicodevsolutions</u></a>
                <br></br>
                E <a href="mailto:angelo.juanico@hotmail.com"><u>angelo.juanco@hotmail.com</u></a>
            </p>
        </div>

      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Juanico DevSolutions, Angelo Juanico | All rights reserved</p>
      </footer>
    </div>
  );
}
