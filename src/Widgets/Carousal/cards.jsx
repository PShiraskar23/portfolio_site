import React from "react";
import "./style.css";

const Card = ({ title, content, link, img }) => {
  return (
    <div className="card_container">
      <div className="img_section">
        <img src={img} alt={title} />
      </div>
      <div className="description_section">
        <div className="title">{title}</div>
        <div className="content">{content}</div>
        <div className="button">
          <button className="btn card_btn">
            {" "}
            {link ? (
              <a href={link} target="_blank" className="link">
                Open
              </a>
            ) : (
              <a className="link">open</a>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
