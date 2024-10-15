import Image from "next/image";
import OahuBlogInside from '@/app/images/oahuhawaiBlogInside.jpg'
import OahuBlogInsideSub1 from '@/app/images/oahuhawaiBlogInsideSub1.jpg';
import OahuBlogInsideSub2 from '@/app/images/oahuhawaiBlogInsideSub2.jpg';
import OahuBlogInsideSub3 from '@/app/images/oahuhawaiBlogInsideSub3.jpg';

export default function OahuHawaiiBlog() {
    return (
        <>
        <p className="main-text fade-in-top">Best Things To Do In Oahu Hawaii</p>
        <hr />
        <div className="blogs-parent-container">
        <Image src={OahuBlogInside} alt="omer" className="blogs-inside-image"/>
        <p className="blogs-inside-text">
        Even though the island of Oahu is the most populated island in Hawaii, it’s just as beautiful as the other islands, and there are so many good things to do in Oahu for every kind of traveler.
        <br /><br />
        Some of the best things to do in Oahu Hawaii include hikes, beaches, waterfalls, botanical gardens, water sports, wildlife sightings, and more. I’ve been privileged to visit the Hawaiian islands many times (often for months at a time), so I’ve done a bunch of hiking, exploring, and sightseeing all over Oahu, including some of the most far flung corners of the island.
        <br /><br />
        There are also some less conventional things to do in Oahu island, like seeing lighthouses, visiting the Pear Harbor memorial, or touring the Jurassic Park film site.
        <br /><br />
        This travel guide is our complete list of the best things to do in Oahu Hawaii!
        </p>
        <div className="blogs-sub-image-container">
        <Image src={OahuBlogInsideSub1} alt="omer" className="blogs-inside-image-sub"/>
        <Image src={OahuBlogInsideSub2} alt="omer" className="blogs-inside-image-sub"/>
        <Image src={OahuBlogInsideSub3} alt="omer" className="blogs-inside-image-sub"/>
        </div><br />
        <p className="blogs-inside-text">
        <b>Best Things To Do In Oahu Hawaii</b><br />
        The Jurassic Park film itself was shooted here.
        <br /><br />
        There were a lot of fun activities to do especially shaved ice gave me a fun treat. We’ve only scratched the surface here, and the list is always growing as we explore every corner of this wonderful island.
        <br /><br />
        Thanks for looking! I hope you enjoyed this travel guide for the best things to do in Oahu Hawaii!
        <br /><br />
        <b>- End Of Article</b>
        </p>
        </div>
        </>
    );
  }
  