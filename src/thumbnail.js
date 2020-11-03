import React from "react";

import "./app.css";

function Thumbnail(props) {
  return (
    <div className="project-wrapper">
      <div className="project">
        <a target="blank" href={props.link}>
          <div className="project-image">
            <img src={props.image} alt={props.title} />
          </div>

          <div className="project-info">
            <div className="project-title">{props.title}</div>
            <div className="project-category">{props.category}</div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Thumbnail;
