import Image from "next/image";
import CommentsSection from "../components/CommentsSection";

export default function JapanBlog() {
    const japanBlogInside = '/images/japanBlogInside.jpg';
    const subImages = [
        '/images/japanBlogInsideSub1.jpg',
        '/images/japanBlogInsideSub2.jpg',
        '/images/japanBlogInsideSub3.jpg'
    ];

    return (
        <>
        <p className="main-text fade-in-top">Ultimate Guide To The Feudal Japan</p>
        <hr />
        <div className="blogs-parent-container">

            <Image src={japanBlogInside} alt="Japan Blog Inside" width={800} height={600} className="blogs-inside-image" />
            
            <p className="blogs-inside-text">
                It’s hard to make a list of the best things to do in Japan, because there are just so many cool and fun activities in this country.
                <br /><br />
                Every island in Japan is interesting, but as a first timer, many of the best sights and activities for tourists are in the cities of Osaka, Kyoto, and Tokyo.
                <br /><br />
                There’s a huge variety of cultural attractions here, both old and new. You can ride a futuristic bullet train through the city and then explore an ancient temple or Samurai castle in the same day.
                <br /><br />
                The Guardian’s House is a modest little stone shack with a thatch roof, and like the name implies, it once served as a lookout post above the Inca citadel in ancient times.
                <br /><br />
                I’ve visited Japan a bunch of times over the years, but it never gets old. It’s one of our favorite countries in the world to travel. Japan has lots of castles left over from its medieval period, when Samurai warriors ruled the land. These fortresses are impressive works of art and they can be fascinating to explore.
            </p>
            

            <div className="blogs-sub-image-container">
                {subImages.map((src, index) => (
                    <Image key={index} src={src} alt={`Japan Blog Sub Image ${index + 1}`} width={400} height={300} className="blogs-inside-image-sub" />
                ))}
            </div><br />
            
            <p className="blogs-inside-text">
                <b>Ultimate Guide To The Feudal Japan</b><br />
                If you want a prearranged tour for your visit to Japan, there are plenty of good online options.
                <br /><br />
                Thanks for looking! I hope you enjoyed these ideas for what to do in Japan. It’s one of our favorite countries to travel, and we can’t wait to go back.
                <br /><br />
                Don’t forget natural landmarks like Mount Fuji and Lake Kawaguchi, which are possible to visit on a long day trip from Tokyo!
                <br /><br />
                <b>- End Of Article</b>
            </p>
            <CommentsSection blogId="japan-blog" />
        </div>
        </>
    );
}
