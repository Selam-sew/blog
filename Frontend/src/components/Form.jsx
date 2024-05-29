import React, { useState } from "react";
import { useBlogContext } from "../hooks/UseBlogContext";
const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null)
  const {dispatch} = useBlogContext()

  async function handleSubmit(e) {
    e.preventDefault();
    const blog = { title, description };
    const response = await fetch("http://localhost:4000/api/blog", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json()

    if(!response.ok){
      setError(json.error)
    }

    if (response.ok){
      setTitle("")
      setDescription("")
      setError("")
      setError(null)
      console.log("new workout added ", json)
      dispatch({type:"CREATE_BLOG", payload:json})
    }
  }
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Blog</h3>

      <label> Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Content:</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Form;
