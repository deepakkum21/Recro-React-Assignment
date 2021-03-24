import React from "react";
import "./DataCard.css";

const DataCard = ({ title, body, userId }) => {
  return (
    <div className="datacard">
      <h4>{title}</h4>
      <p className="">{body}</p>
    </div>
  );
};

export default DataCard;
