import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../client";
import "../styles/ViewCreator.css";
import Header from "../components/Header";

export default function ViewCreator() {
  const location = useLocation();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(location.state.creatorData);

  function editBtnClick() {
    navigate("/edit", { state: { creatorData: creator } });
  }

  async function deleteBtnClick() {
    await supabase.from("creators").delete().eq("id", creator.id);
    navigate("/");
  }

  return (
    <>
      <div className="viewContainer">
        <div className="imageContainer">
          <img src={creator.imageURL} alt={`${creator.name}'s image`} />
        </div>
        <div className="infoContainer">
          <h3>{creator.name}</h3>
          <a href={creator.url} target="_blank" rel="noopener noreferrer">
            {creator.url}
          </a>
          <p>{creator.description}</p>
        </div>
      </div>
      <div className="buttonContainer">
        <button className="crudBtn" onClick={editBtnClick}>
          Edit
        </button>
        <button
          className="crudBtn"
          style={{ background: "linear-gradient(145deg, #c71313, #ce1313)" }}
          onClick={deleteBtnClick}
        >
          Delete
        </button>
      </div>
    </>
  );
}
