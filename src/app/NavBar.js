import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
