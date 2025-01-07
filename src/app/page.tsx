import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/app/data/blogs";

export default function Home() {
  return (
    <>
      <p className="main-text fade-in-top">Travel Guides</p>
      <hr />
      <div className="cards-main slide-in-right">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/${blog.id}`}>
            <div className="card1">
              <Image src={blog.image} alt={blog.title} width={350} height={200} />
              <br />
              <p className="card-title">
                <b>{blog.title}</b>
              </p>
              <p className="card-text">{blog.text}</p>
              <br />
              <p className="read-more">
                <b>READ MORE</b>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
