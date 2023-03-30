import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.imgsrc} alt="series_poster"></img>
        <div className="card_title">{props.title}</div>
        <footer className="card_footer">
          <a href={props.links} target="_blank" rel="noreferrer">
            <button>Watch Now</button>
          </a>
        </footer>
      </div>
    </>
  );
}

export default Card;
