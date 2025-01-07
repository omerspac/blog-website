import Image from "next/image";
import CommentsSection from "../components/CommentsSection";

export default function TikalBlog() {
    const tikalBlogInside = '/images/tikaltempleBlogInside.jpg';
    const subImages = [
        '/images/tikaltempleBlogInsideSub1.jpg',
        '/images/tikaltempleBlogInsideSub2.jpg',
        '/images/tikaltempleBlogInsideSub3.jpg'
    ];

    return (
        <>
        <p className="main-text fade-in-top">Visiting The Mayan Ruins Of Guatemala</p>
        <hr />
        <div className="blogs-parent-container">

            <Image src={tikalBlogInside} alt="Tikal Temple Blog Inside" width={800} height={600} className="blogs-inside-image" />
            
            <p className="blogs-inside-text">
                A visit to the Mayan ruins of Tikal Guatemala would have to be one of the most spectacular things you can do in Central America. Like something from Indiana Jones, these ancient temples once made up the biggest capital of the Mayan civilization.
                <br /><br />
                The other good news is that Tikal (pronounced ‘tee-kahl’) is relatively easy and affordable to visit on a day trip from Flores in Guatemala, or you can also visit Tikal overland from the neighboring country of Belize.
                <br /><br />
                If you’ve been to the giant pyramid of Chichen Itza in Mexico, this place is similar but arguably even better. Tikal National Park is home to all kinds of wildlife, and many of the Mayan temples here are open for climbing, so you can enjoy panoramic views of the jungle surrounding the ruins!
                <br /><br />
                This Tikal travel guide will explain where the ruins are located (plus a Tikal map), how to get there from Guatemala or Belize, hours & entrance fees, safety tips, best tour packages, and everything else you need to know before you go!
            </p>
            
            <div className="blogs-sub-image-container">
                {subImages.map((src, index) => (
                    <Image key={index} src={src} alt={`Tikal Blog Sub Image ${index + 1}`} width={400} height={300} className="blogs-inside-image-sub" />
                ))}
            </div><br />
            
            <p className="blogs-inside-text">
                <b>Visiting The Mayan Ruins Of Guatemala</b><br />
                The 'Star Wars' film itself was shot here. The movie shot was taken on top of Temple IV. Interestingly, the movie scene was shot in 1977 during the Guatemalan civil war, and according to a Reuters article, George Lucas’s team had to hoist the bulky camera gear and heavy lights to the top of the temple with a pulley system.
                <br /><br />
                Yes, Tikal is absolutely worth visiting! It’s undoubtedly one of the best sights anywhere in Central America or South America. The Tikal pyramids are every bit as amazing as they look in pictures, and it’s a good chance to see wildlife too. You shouldn’t travel to Guatemala without seeing this place.
                <br /><br />
                Thanks for looking! I hope you enjoyed this travel guide for exploring the Mayan Ruins in Guatemala!
                <br /><br />
                <b>- End Of Article</b>
            </p>
            <CommentsSection blogId="tikaltemple-blog" />
        </div>
        </>
    );
}
