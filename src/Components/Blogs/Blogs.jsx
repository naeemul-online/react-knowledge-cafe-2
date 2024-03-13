import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h2>Blogs: {blogs.length}</h2>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          title={blog.title}
          cover={blog.cover}
          author={blog.author}
          author_img={blog.author_img}
          publish_date={blog.posted_date}
          time={blog.reading_time}
          hashtag={blog.hashtag}
          

        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
