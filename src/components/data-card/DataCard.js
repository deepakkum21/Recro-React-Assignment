import React from "react";
import "./DataCard.css";

const DataCard = ({ title, body, userId }) => {
  return (
    <div className="datacard">
      <h2>
        {userId} {`  `} {title}
      </h2>
      <p className="">{body}</p>
    </div>
  );
};

export default DataCard;
