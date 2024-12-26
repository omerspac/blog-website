import Image from "next/image";
import egyptBlog from "@/app/images/egyptBlog.jpg"
import machupicchuBlog from "@/app/images/machupicchuBlog.jpg"
import japanBlog from "@/app/images/japanBlog.jpg"
import oahuhawaiBlog from "@/app/images/oahuhawaiBlog.jpg"
import tikaltempleBlog from "@/app/images/tikaltempleBlog.jpg"
import baganmyanmarBlog from "@/app/images/baganmyanmarBlog.jpg"
import Link from "next/link";

export default function Home() {
  return (
    <>
    <p className="main-text fade-in-top">Travel Guides</p>
    <hr />
    <div className="cards-main slide-in-right">

      <Link href= "/egypt-blog">
      <div className="card1">
        <Image src={egyptBlog} alt="omer" width={350}/>
        <br />
        <p className="card-title"><b>Best Day Tours To The Egypt Pyramids</b></p>
        <p className="card-text">This travel guide will explain how you can visit the Egyptian pyramids on your own, with or without a tour, and with a very modest budget and minimal planning!</p>
        <br />
        <p className="read-more"><b>READ MORE</b></p>
      </div>
      </Link>
      <Link href= "/machupicchu-blog">
      <div className="card1">
        <Image src={machupicchuBlog} alt="omer" width={350}/>
        <br />
        <p className="card-title"><b>Explore The Ruins In Machu Picchu</b></p>
        <p className="card-text">This travel guide will explain how you can visit the ruins of Macu Picchu on your own, with or without a tour, and with a very modest budget and minimal planning!</p>
        <br />
        <p className="read-more"><b>READ MORE</b></p>
      </div>
      </Link>
      <Link href="/japan-blog">
      <div className="card1">
        <Image src={japanBlog} alt="omer" width={350}/>
        <br />
        <p className="card-title"><b>Ultimate Guide To The Feudal Japan</b></p>
        <p className="card-text">This travel guide will explain how you can visit the Feudal Japan on your own, with or without a tour, and with a very modest budget and minimal planning!</p>
        <br />
        <p className="read-more"><b>READ MORE</b></p>
      </div>
      </Link>
      <Link href="/oahuhawaii-blog">
      <div className="card1">
        <Image src={oahuhawaiBlog} alt="omer" width={350}/>
        <br />
        <p className="card-title"><b>Best Things To Do In Oahu Hawaii</b></p>
        <p className="card-text">This travel guide will explain how you can visit the Oahu Hawaii on your own, with or without a tour, and with a very modest budget and minimal planning!</p>
        <br />
        <p className="read-more"><b>READ MORE</b></p>
      </div>
      </Link>
      <Link href="/tikaltemple-blog">
      <div className="card1">
        <Image src={tikaltempleBlog} alt="omer" width={350}/>
        <br />
        <p className="card-title"><b>Visiting The Mayan Ruins Of Guatemala</b></p>
        <p className="card-text">This travel guide will explain how you can visit the Mayan Ruins on your own, with or without a tour, and with a very modest budget and minimal planning!</p>
        <br />
        <p className="read-more"><b>READ MORE</b></p>
      </div>
      </Link>
      <Link href="/baganmyanmar-blog">
      <div className="card1">
        <Image src={baganmyanmarBlog} alt="omer" width={350}/>
        <br />
        <p className="card-title"><b>How To Visit The Temples Of Bagan</b></p>
        <p className="card-text">This travel guide will explain how you can visit the Bagan on your own, with or without a tour, and with a very modest budget and minimal planning!</p>
        <br />
        <p className="read-more"><b>READ MORE</b></p>
      </div>
      </Link>
      
    </div>
    </>
  );
}