import React from "react";
import { useBlogContext } from "../hooks/UseBlogContext";

const BlogCard = ({ b }) => {
  const { dispatch } = useBlogContext();

  const handleClick = async () => {
    const response = await fetch("http://localhost:4000/api/blog/" + b._id, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_BLOG", payload: json });
    }
  };
  return (
    <div className="border-2 px-2">
      <h1 className="font-semibold text-2xl">{b.title}</h1>
      <p className="mt-4">{b.description} </p>
      <button onClick={handleClick} className="border-2 px-2 rounded-sm my-2">
        Delete
      </button>
    </div>
  );
};

export default BlogCard;
