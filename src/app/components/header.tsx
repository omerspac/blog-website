import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-black p-4 text-lg font-bold shadow-md text-white">
            <ul className="flex justify-center gap-5">
                <Link href="/">
                    <li>Home</li>
                </Link>
                <Link href="/about-us">
                    <li>About</li>
                </Link>
                <Link href="/contact-us">
                    <li>Contact</li>
                </Link>
            </ul>
        </div>
    );
}
