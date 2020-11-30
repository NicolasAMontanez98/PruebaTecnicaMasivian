import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import "../styles/components.css";

export default function Qualification({ qualification }) {
  const calificar = (e) => {
    e.preventDefault();
  };
  return (
    <div className="qualification">
      <div className="row">
        <div className="col">
          {qualification === 1 ? (
            <div>
              <FontAwesomeIcon
                icon={faStar}
                size="2x"
                id="star"
                className="star"
              />
              <FontAwesomeIcon icon={faStar} size="3x" id="star" />
              <FontAwesomeIcon icon={faStar} size="4x" id="star" />
              <FontAwesomeIcon icon={faStar} size="3x" id="star" />
              <FontAwesomeIcon icon={faStar} size="2x" id="star" />
            </div>
          ) : qualification === 2 ? (
            <div>
              <FontAwesomeIcon
                icon={faStar}
                size="2x"
                id="star"
                className="star"
              />
              <FontAwesomeIcon icon={faStar} size="3x" id="star" />
              <FontAwesomeIcon icon={faStar} size="4x" id="star" />
              <FontAwesomeIcon icon={faStar} size="3x" id="star" />
              <FontAwesomeIcon icon={faStar} size="2x" id="star" />
            </div>
          ) : qualification === 3 ? (
            <div>
              <FontAwesomeIcon
                icon={faStar}
                size="2x"
                id="star"
                className="star"
              />
              <FontAwesomeIcon icon={faStar} size="3x" id="star" />
              <FontAwesomeIcon icon={faStar} size="4x" id="star" />
              <FontAwesomeIcon icon={faStar} size="3x" id="star" />
              <FontAwesomeIcon icon={faStar} size="2x" id="star" />
            </div>
          ) : qualification === 4 ? (
            <div>
              <FontAwesomeIcon icon={faStar} size="3x" color="gold" id="star" />
              <FontAwesomeIcon icon={faStar} size="3x" color="gold" id="star" />
              <FontAwesomeIcon icon={faStar} size="3x" color="gold" id="star" />
              <FontAwesomeIcon icon={faStar} size="3x" color="gold" id="star" />
              <FontAwesomeIcon
                icon={faStarEmpty}
                size="3x"
                color="gold"
                id="star"
              />
            </div>
          ) : qualification === 5 ? (
            <div>
              <FontAwesomeIcon
                icon={faStar}
                size="2x"
                id="star"
                className="star"
              />
              <FontAwesomeIcon icon={faStar} size="3x" id="star" />
              <FontAwesomeIcon icon={faStar} size="4x" id="star" />
              <FontAwesomeIcon icon={faStar} size="3x" id="star" />
              <FontAwesomeIcon icon={faStar} size="2x" id="star" />
            </div>
          ) : (
            <div>
              <FontAwesomeIcon
                icon={faStar}
                size="4x"
                id="star"
                className="star"
              />
              <FontAwesomeIcon icon={faStar} size="4x" id="star" />
              <FontAwesomeIcon icon={faStar} size="4x" id="star" />
              <FontAwesomeIcon icon={faStar} size="4x" id="star" />
              <FontAwesomeIcon icon={faStar} size="4x" id="star" />
            </div>
          )}
        </div>
        <div className="col mr-3">
          <button className="button-rate" onClick={calificar}>
            <h3>
              <strong>Calificar</strong>
            </h3>
          </button>
        </div>
      </div>
    </div>
  );
}
