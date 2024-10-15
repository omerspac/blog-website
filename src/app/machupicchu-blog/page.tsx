import Image from "next/image";
import MacuPicchuBlogInside from '@/app/images/machupicchuBlogInside.jpg'
import MacuPicchuInsideSub1 from '@/app/images/machupicchuBlogInsideSub1.jpg';
import MacuPicchuInsideSub2 from '@/app/images/machupicchuBlogInsideSub2.jpg';
import MacuPicchuBlogInsideSub3 from '@/app/images/machupicchuBlogInsideSub3.jpg';

export default function MachuPicchuBlog() {
    return (
        <>
        <p className="main-text fade-in-top">Explore The Ruins In Machu Picchu</p>
        <hr />
        <div className="blogs-parent-container">
        <Image src={MacuPicchuBlogInside} alt="omer" className="blogs-inside-image"/>
        <p className="blogs-inside-text">
        When you arrive at the entrance to Machu Picchu, the first order of business is to see the iconic viewpoint at the Guardian’s House!
        <br /><br />
        This is the first and best view anywhere in the Machu Picchu complex, and it’s where all of the amazing postcard photos are taken. From the edge of the terrace, you have a perfect panoramic view of the Machu Picchu ruins and the mountains in the background.
        <br /><br />
        Naturally this spot gets very crowded with tourists throughout the day, but there’s a lot of standing room on the terrace, so you usually won’t have to wait for photos. By afternoon, most of the tourist herds have thinned out.
        <br /><br />
        The Guardian’s House is a modest little stone shack with a thatch roof, and like the name implies, it once served as a lookout post above the Inca citadel in ancient times.
        <br /><br />
        To reach the Guardian’s House, make a left turn as you enter Machu Picchu and follow the signs uphill for about 15 minutes until you find the top of the terraces.
        <br /><br />
        When you reach the viewpoint, you can stay awhile to take photos and enjoy the view, and then you can continue touring the rest of the ruins.
        </p>
        <div className="blogs-sub-image-container">
        <Image src={MacuPicchuInsideSub1} alt="omer" className="blogs-inside-image-sub"/>
        <Image src={MacuPicchuInsideSub2} alt="omer" className="blogs-inside-image-sub"/>
        <Image src={MacuPicchuBlogInsideSub3} alt="omer" className="blogs-inside-image-sub"/>
        </div><br />
        <p className="blogs-inside-text">
        <b>Explore The Ruins In Machu Picchu:</b><br />
        If you want a prearranged tour for your visit to Machu Picchu, there are plenty of good online options.
        <br /><br />
        GetYourGuide has full day tours of Machu Picchu starting from Cusco (private or with a group), as well as spectacular mountain hikes like Huayna Picchu, which requires an advance booking anyway since it's so popular.
        <br /><br />
        We used this company for lots of tours and activities in Peru, and they're great. Highly recommended! Also, Thanks for looking! I hope you enjoyed this list of "Explore The Ruins In Machu Picchu"!
        <br /><br />
        <b>- End Of Article</b>
        </p>
        </div>
        </>
    );
  }
  