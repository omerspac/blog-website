import Image from 'next/image';
import omerPic from "@/app/images/newomerPicFinal-removebg-preview.png";

export default function About() {
    return (
      <>
      <p className="main-text-about fade-in-top">About Myself</p>
      <hr />
      <div className="about-div slide-in-right">
        <Image src={omerPic} alt="omer" className="about-image"/>
        <p className="about-text">I am Muhammad Omer and I am currently pursuing a Bachelor's Degree In Computer Science. I am an Expert 2D & 3D Artist/Graphics Designer with 2 years of experience. I have completed Full-Stack Web Development Diploma from Aptech and I am currently completing my Advanced Diploma In Graphics Designing from Arena Multimedia. Additionally, I am a student of Meta, Web 3.0, AI Course in Governor House. I also work as a freelancer.</p>
      </div>
      </>
    );
  }