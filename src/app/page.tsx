import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-fit h-[250px] m-[40px] text-[80px] font-black">
          Hey,
          <br />
          My Name is <span className="text-color">Muhammad Omer</span>
          <br />I am NextJS Developer
        </div>
        <div className=""></div>
      </div>
    </>
  );
}