import Image from "next/image";
import Head from "next/head";  // Import the Head component
import './styles.css';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8 pb-20 gap-16 sm:p-16 font-[family-name:var(--font-geist-sans)]">
      
      <main className="flex flex-col items-center justify-center gap-8 flex-grow">
        <Image
          src="/JUANICO-2.png"
          alt="Juanico DevSolutions Logo"
          width={180}
          height={38}
          priority
        />
        <header className="text-center">
          <h1 className="text-4xl font-bold text-foreground">JUANICO <span className="text-blue-600">DevSolutions</span></h1>
          <p className="text-sm text-gray-500">Your Vision, Our Code.</p>
        </header>

        <section className="text-center sm:text-left px-40">
          <h2 className="text-xl font-semibold mb-2">About Us</h2>
          <p className="text-sm text-gray-700">
            At Juanico DevSolutions, we specialize in delivering tailored software development, seamless API integration, and scalable SaaS products. 
            Let's bring your vision to life with innovative, secure, and efficient solutions.
          </p>
        </section>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="#services"
          >
            Our Services
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="#contact"
          >
            Contact Us
          </a>
        </div>
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center mt-auto">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/ajuan7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="dark:invert"
            src="/github-icon.svg"
            alt="GitHub icon"
            width={32}
            height={32}
          />
          View Our Code
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#services"
        >
          <Image
            aria-hidden
            className="dark:invert"
            src="/project-icon.svg"
            alt="Projects icon"
            width={32}
            height={32}
          />
          Explore Services
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#contact"
        >
          <Image
            aria-hidden
            className="dark:invert"
            src="/email-icon.svg"
            alt="Contact icon"
            width={32}
            height={32}
          />
          Contact Us →
        </a>
      </footer>
    </div>
  );
}
