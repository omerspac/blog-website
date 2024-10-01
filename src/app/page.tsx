import Image from "next/image";
import ImageOmer from "@/app/images/newomerPicFinal-removebg-preview.png"

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-fit h-[250px] m-[40px] text-[80px] font-black">
          <p>Hey,</p>
           My Name is <span className="text-color">Muhammad Omer</span>,
          <br />
          <p>I am NextJS Developer</p>
        </div>
        <Image src={ImageOmer} alt="Omer" className="mypic" />
      </div>
    </>
  );
}