import Image from "next/image";
import CommentsSection from "../components/CommentsSection";

export default function BaganBlog() {
    const baganBlogInside = '/images/baganmyanmarBlogInside.jpg';
    const subImages = [
        '/images/baganmyanmarBlogInsideSub1.jpg',
        '/images/baganmyanmarBlogInsideSub2.jpg',
        '/images/baganmyanmarBlogInsideSub3.jpg'
    ];

    return (
        <>
        <p className="main-text fade-in-top">How To Visit The Temples Of Bagan</p>
        <hr />
        <div className="blogs-parent-container">

            <Image src={baganBlogInside} alt="Bagan Myanmar Blog Inside" width={800} height={600} className="blogs-inside-image" />
            
            <p className="blogs-inside-text">
                The forgotten temple city of Bagan in Myanmar is like a bizarre fairytale, with a landscape of mysterious and exotic pagodas that goes beyond just culture shock.
                <br /><br />
                I felt like time travelers stepping into the ancient ruins of the Bagan Myanmar temples. In ages past, there were more than 10,000 shrines and monasteries here, and the Burma temples still standing are completely fascinating to explore and photograph.
                <br /><br />
                Old Bagan was once known as Pagan. At that time, it was a religious city and capital of the rich Pagan empire, and more than 10,000 Buddhist monasteries, stupas, and small temples were built there over the course of 250 years.
                <br /><br />    
                This travel guide for Bagan will explain how to get there, which temples to see, and everything else you need to know before you go!
            </p>
            
            <div className="blogs-sub-image-container">
                {subImages.map((src, index) => (
                    <Image key={index} src={src} alt={`Bagan Blog Sub Image ${index + 1}`} width={400} height={300} className="blogs-inside-image-sub" />
                ))}
            </div><br />
            
            <p className="blogs-inside-text">
                <b>How To Visit The Temples Of Bagan</b><br />
                So is Bagan Myanmar a safe place to travel? Generally, yes. There are a few small, isolated areas in Myanmar with occasional violence and instability, but these hotspots are far from Bagan, and tourists are not the target.
                <br /><br />
                The best time to visit Bagan is October - February. There is best weather in these months, with cooler temps (under 80 °F). These are the most popular months for tourists, especially in December and January.
                <br /><br />
                Thanks for looking! I hope you enjoyed this travel guide for visiting the Temples Of Bagan in Myanmar. Happy travels!
                <br /><br />
                <b>- End Of Article</b>
            </p>
            <CommentsSection blogId="baganmyanmar-blog" />
        </div>
        </>
    );
}
