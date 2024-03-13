import { useEffect } from "react";

const Blog = (props) => {
  const { title, author_img, cover, publish_date, author, time, hashtag } = props;
  console.log(author_img);
  return (
    <div className="p-4 mx-4 space-y-4">
      <img className="w-full h-[450px]" src={cover} />
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img className="w-16 h-16 rounded-full" src={author_img} alt="" />
          <div>
            <h3>{author}</h3>
            <p>{publish_date}</p>
          </div>
        </div>
        <div>
            <p>{time}</p>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <div>
        {
            hashtag.map(hash => `#${hash}`)
        }
      </div>
      <span><a className="text-xl text-purple-600 cursor-pointer underline">Mark as read</a></span>
    </div>
  );
};

export default Blog;
