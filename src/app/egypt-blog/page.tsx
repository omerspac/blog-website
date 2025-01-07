import Image from "next/image";
import CommentsSection from "../components/CommentsSection";

export default function EgyptBlog() {
  const egyptBlogInside = '/images/egyptBlogInside.jpg';
  const subImages = [
    '/images/egyptBlogInsideSub1.jpg',
    '/images/egyptBlogInsideSub2.jpg',
    '/images/egyptBlogInsideSub3.jpg',
  ];

  return (
    <>
      <p className="main-text fade-in-top">Best Day Tours To The Egypt Pyramids</p>
      <hr />
      <div className="blogs-parent-container">
        <Image src={egyptBlogInside} alt="Great Pyramid of Giza" width={800} height={600} className="blogs-inside-image" />
        <p className="blogs-inside-text">
          Constructed in 2560 BC, the Great Pyramid of Giza held the title of the tallest man-made structure...
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
          {subImages.map((src, index) => (
            <Image key={index} src={src} alt={`Sub Image ${index + 1}`} width={400} height={300} className="blogs-inside-image-sub" />
          ))}
        </div>
        <p className="blogs-inside-text">
          <b>Best Day Tours To The Egypt Pyramids:</b><br />
          First of all, if you’re on a tight schedule and want to skip the extra steps...
        </p>
        <CommentsSection blogId="egypt-blog" />
      </div>
    </>
  );
}
