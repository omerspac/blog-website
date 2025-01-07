import Image from 'next/image';

export default function About() {
    const aboutImage = '/images/newomerPicFinal-removebg-preview.png';
    const aboutText = `I am Muhammad Omer and I am currently pursuing a Bachelor's Degree In Computer Science. 
    I am an Expert 2D & 3D Artist/Graphics Designer with 2 years of experience. I have completed Full-Stack 
    Web Development Diploma from Aptech and Advanced Diploma In Graphics Designing from Arena Multimedia. 
    Additionally, I am a student of Meta, Web 3.0, AI Course in Governor House. I also work as a freelancer.`;

    return (
        <>
            <p className="main-text-about fade-in-top">About Myself</p>
            <hr />
            <div className="about-div mt-5 slide-in-right">
                
                <Image src={aboutImage} alt="Muhammad Omer" width={300} height={300} className="about-image"/>
                
                <p className="about-text p-[30px] color-[#2a2d34] text-[20px]">
                    {aboutText}
                </p>
            </div>
        </>
    );
}
