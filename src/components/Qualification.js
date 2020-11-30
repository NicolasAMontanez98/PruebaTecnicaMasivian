import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Stars from "./Stars";
import "../styles/components.css";

export default function Qualification() {
  const [rating, setRating] = useState(0);

  return (
    <div className="qualification">
      <input
        type="number"
        className="input-rating"
        min="0"
        max="5"
        defaultValue={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <div className="row">
        <div className="col">
          <Stars rating={rating} />
        </div>
        <div className="col mr-3">
          <button className="button-rate">
            <h3>
              <strong>Calificar</strong>
            </h3>
          </button>
        </div>
      </div>
    </div>
  );
}
