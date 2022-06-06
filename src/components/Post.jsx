import React from "react";

const Post = () => {
  const Postdata = [
    {
      posted: "One day ago",
      title: "Challenging culture - How to tackle?",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo animi hic iste fugit explicabo quod asperiores vitae eligendi delectus? Eaque laudantium minima eius omnis quas excepturi animi. Dolorem, voluptate!",
    },
    {
      time: "One day ago",
      title: "Challenging culture - How to tackle?",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo animi hic iste fugit explicabo quod asperiores vitae eligendi delectus? Eaque laudantium minima eius omnis quas excepturi animi. Dolorem, voluptate!",
    },
  ];
  return (
    <>
      {Postdata?.map(({ post: posted, title, content }) => (
        <div className="post-wrapper">
          <div className="post">
            <p>One day ago </p>
            <h3>{title}</h3>
            <p>{content}</p>
            <button type="button" className="btn btn-secondary btn-big">
              Read Blog Post
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
