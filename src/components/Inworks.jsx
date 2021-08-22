import React from "react";
import "../styles/Inworks.css";

function Inworks({ href, title, text }) {
  return (
    <div className="introworks">
      <h3>{title}</h3>
      <p>{text}</p>
      <a class="btn btn-primary" href={href} role="button">
        Link
      </a>
    </div>
  );
}

export default Inworks;
