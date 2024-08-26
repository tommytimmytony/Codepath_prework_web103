import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";
import "../styles/AddCreator.css"

export default function AddCreator() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  async function addCreator(e) {
    e.preventDefault();
    await supabase
      .from("creators")
      .insert({
        name: name,
        url: url,
        description: description,
        imageURL: image,
      })
      .select();
    setName("")
    setUrl("")
    setDescription("")
    setImage("")
    navigate("/")
  }

  return (
    <div className="formContainer">
      <h2>Edit Creator</h2>
      <form onSubmit={addCreator}>
        <div className="formGroup">
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label>Profile URL</label>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label>Description</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>
        <div className="formGroup">
          <label>Image URL</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
}
