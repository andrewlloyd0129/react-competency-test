import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  const { id, img, first_name, last_name, status } = props.entry;
  return (
    <div className="friend-list-card">
      <div className="friend-info-image">
        <img src={img} />
        <div className="friend-info">
          {first_name + " " + last_name}
          <div>{status}</div>
          <div />
        </div>
      </div>
      <Link to={`/friend/${id}}`} className="friend-detail-button">
        Link
      </Link>
    </div>
  );
}
