import React from "react";

function Card({ imgsrc, title, body,webtitle }) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
      <div className="card">
        <img src={imgsrc} className="card-img-top" alt="..." style={{width:'200',height:180}}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
          <a href={webtitle} target="_blank" className="btn btn-primary">
            Learn More...
          </a>
        </div>
        </div>
      </div>
    </>
  );
}

export default Card;
