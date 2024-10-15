import Image from "next/image";
import egyptBlogInside from '@/app/images/egyptBlogInside.jpg';
import egyptBlogInsideSub1 from '@/app/images/egyptBlogInsideSub1.jpg';
import egyptBlogInsideSub2 from '@/app/images/egyptBlogInsideSub2.jpg';
import egyptBlogInsideSub3 from '@/app/images/egyptBlogInsideSub3.jpg';

export default function EgyptBlog() {
    return (
        <>
        <p className="main-text fade-in-top">Best Day Tours To The Egypt Pyramids</p>
        <hr />
        <div className="blogs-parent-container">
        <Image src={egyptBlogInside} alt="omer" className="blogs-inside-image"/>
        <p className="blogs-inside-text">
        Constructed in 2560 BC, the Great Pyramid of Giza held the title of the tallest man-made structure for 3,800 years. It is the oldest among the Seven Wonders of the Ancient World and the only one that remains today.
        <br /><br />
        Visiting the pyramids in Egypt is a straightforward experience; while there isn't much to do aside from marveling at the massive stone structures, it remains a profound and unique experience that every traveler should add to their bucket list.
        <br /><br />
        <b>Quick Facts (Main Pyramid):</b>
        </p>
        <ul className="blogs-inside-text-ul">
            <li><b>Date:</b> 2560 BC</li>
            <li><b>Height:</b> 150 meters</li>
            <li><b>Base Length:</b> 150 meters</li>
            <li><b>Weight:</b> 6 million tons</li>
            <li><b>No. of Blocks:</b> 2.3 million</li>
            <li><b>Builders:</b> 200,000+</li>
        </ul>
        <div className="blogs-sub-image-container">
        <Image src={egyptBlogInsideSub1} alt="omer" className="blogs-inside-image-sub"/>
        <Image src={egyptBlogInsideSub2} alt="omer" className="blogs-inside-image-sub"/>
        <Image src={egyptBlogInsideSub3} alt="omer" className="blogs-inside-image-sub"/>
        </div><br />
        <p className="blogs-inside-text">
        <b>Best Day Tours To The Egypt Pyramids:</b><br />
        First of all, if you’re on a tight schedule and want to skip the extra steps involved in arranging your own trip to the pyramids, or if you’d rather travel in a tour group for safety or convenience, there are options for doing that.
        <br /><br />
        There are a number of companies that offer prearranged day tours to the Pyramids of Giza and the Sphinx for as low as $45 USD, complete with hotel transfer, optional camel ride, and same day return to Cairo.
        <br /><br />
        If you’d rather make your own arrangements and go without a group, that’s covered next.
        <br /><br />
        <b>- End Of Article</b>
        </p>
        </div>
        </>
    );
  }
  