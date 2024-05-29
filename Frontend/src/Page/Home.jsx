import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard.jsx";
import Form from "../components/Form.jsx";
import { useBlogContext } from "../hooks/UseBlogContext.jsx";
const Home = () => {
  // const [blog, setBlog] = useState();
  const { blog, dispatch } = useBlogContext();
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/blog");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        dispatch({ type: "SET_BLOGS", payload: json });
      } 
      catch (error) {
        console.error("Fetch error: ", error);
      }
    };

    fetchBlog();
  }, []);

  return (
    <div className="mt-4 mx-4">
      <h1 className="mb-3">The Blog</h1>
      <div className="grid grid-cols-2 gap-4">
        {/* <BlogCard /> */}
        <div className="flex  flex-col justify-around">
          {blog &&
            blog.map((b) => {
              return (
                <BlogCard
                  key={b.id}
                  b={b}
                />
              );
            })}
        </div>

        <Form />
      </div>
    </div>
  );
};

export default Home;
