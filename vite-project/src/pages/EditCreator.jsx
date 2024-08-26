import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../client";
import "../styles/AddCreator.css";

export default function EditCreator() {
  const location = useLocation();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(location.state.creatorData);
  const [name, setName] = useState(creator.name);
  const [url, setUrl] = useState(creator.url);
  const [description, setDescription] = useState(creator.description);
  const [image, setImage] = useState(creator.imageURL);

  async function editCreator(e) {
    await supabase
      .from("creators")
      .update({
        name: name,
        url: url,
        description: description,
        imageURL: image,
      })
      .eq("id", creator.id);
    navigate("/");
  }

  async function deleteBtnClick() {
    await supabase.from("creators").delete().eq("id", creator.id);
    navigate("/");
  }

  return (
    <div className="formContainer">
      <h2>Add a New Creator</h2>
      <div>
        <div className="formGroup">
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="formGroup">
          <label>Profile URL</label>
          <input value={url} onChange={(e) => setUrl(e.target.value)} />
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
          <input value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <button className="editBtn" onClick={editCreator}>
          Save
        </button>
        <button
          className="editBtn"
          style={{ background: "linear-gradient(145deg, #c71313, #ce1313)" }}
          onClick={deleteBtnClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
