import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { GiEarthAmerica } from 'react-icons/gi';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3><b>About Website</b></h3>
                    <p>Your go-to travel blog for tips, destinations, and adventures around the world.</p>
                </div>
                <div className="footer-section">
                    <h3><b>Quick Links</b></h3>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about-us">About</Link></li>
                        <li><Link href="/contact-us">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3><b>Follow Links</b></h3>
                    <div className="social-icons">
                        <a href="#" className="social-icon">
                            <GiEarthAmerica size={24} />
                        </a>
                        <a href="#" className="social-icon">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="social-icon">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" className="social-icon">
                            <FaFacebook size={24} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p><b>&copy; 2025 OmerTravelBlogs. All Rights Reserved.</b></p>
            </div>
        </footer>
    );
}
