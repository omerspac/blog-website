import Link from "next/link";

export default function Header() {
    return (
        <div className="header">
            <ul className="header-elements">
                <Link href="/">
                <li>Home</li>
                </Link>
                <Link href="/services">
                <li>Services</li>
                </Link>
                <Link href="/about-us">
                <li>About</li>
                </Link>
                <Link href="/contact-us">
                <li>Contact</li>
                </Link>
                <Link href="/portfolio">
                <li>Portfolio</li>
                </Link>
            </ul>
        </div>
    );
  }