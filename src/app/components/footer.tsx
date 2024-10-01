import Link from "next/link";

export default function Footer() {
    return (
     <div className="main-footer">
         <ul className="main-footer-elements">
             <li className="main-footer-head">Company</li>
             <li>Projects</li>
             <li>Contacts</li>
             <li>Open Source</li>
             <li>Blog</li>
         </ul>
         <ul className="main-footer-elements-2">
             <li className="main-footer-head">Services</li>
             <li>Front-End Web Design</li>
             <li>Responsive Web Design</li>
             <li>Node JS Development</li>
             <li>Graphics Designing</li>
         </ul>
         <ul className="main-footer-elements-4">
             <li className="main-footer-head">Portfolio</li>
             <li>Front-End Web Design</li>
             <li>Responsive Web Design</li>
             <li>Node JS Development</li>
             <li>Graphics Designing</li>
         </ul>
         <ul className="main-footer-elements-3">
             <li className="main-footer-head">Contacts</li>
             <li>+92 325 722 6096</li>
             <li>Gulistan-e-Johar, 75290</li>
         </ul>

         <p className="text-center" >Copyright © 2024</p>
     </div>
    );
  }