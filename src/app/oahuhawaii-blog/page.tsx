import Image from "next/image";
import CommentsSection from "../components/CommentsSection";

export default function OahuHawaiiBlog() {
    const oahuBlogInside = '/images/oahuhawaiBlogInside.jpg';
    const subImages = [
        '/images/oahuhawaiBlogInsideSub1.jpg',
        '/images/oahuhawaiBlogInsideSub2.jpg',
        '/images/oahuhawaiBlogInsideSub3.jpg'
    ];

    return (
        <>
        <p className="main-text fade-in-top">Best Things To Do In Oahu Hawaii</p>
        <hr />
        <div className="blogs-parent-container">
 
            <Image src={oahuBlogInside} alt="Oahu Hawaii Blog Inside" width={800} height={600} className="blogs-inside-image" />
            
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
                {subImages.map((src, index) => (
                    <Image key={index} src={src} alt={`Oahu Blog Sub Image ${index + 1}`} width={400} height={300} className="blogs-inside-image-sub" />
                ))}
            </div><br />
            
            <p className="blogs-inside-text">
                <b>Best Things To Do In Oahu Hawaii</b><br />
                The Jurassic Park film itself was shot here.
                <br /><br />
                There were a lot of fun activities to do especially shaved ice gave me a fun treat. We’ve only scratched the surface here, and the list is always growing as we explore every corner of this wonderful island.
                <br /><br />
                Thanks for looking! I hope you enjoyed this travel guide for the best things to do in Oahu Hawaii!
                <br /><br />
                <b>- End Of Article</b>
            </p>
            <CommentsSection blogId="oahuhawaii-blog" />
        </div>
        </>
    );
}
