import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Stars({ rating }) {
  return (
    <div>
      {rating === 1 ? (
        <div>
          <FontAwesomeIcon icon={faStar} size="4x" color="gold" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" id="star" />
        </div>
      ) : rating === 2 ? (
        <div>
          <FontAwesomeIcon icon={faStar} size="4x" color="gold" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" color="gold" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" id="star" />
        </div>
      ) : rating === 3 ? (
        <div>
          <FontAwesomeIcon icon={faStar} size="4x" color="gold" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" color="gold" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" color="gold" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" id="star" />
        </div>
      ) : rating === 4 ? (
        <div>
          <FontAwesomeIcon icon={faStar} size="4x" color="gold" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" color="gold" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" color="gold" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" color="gold" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" id="star" />
        </div>
      ) : rating === 5 ? (
        <div>
          <FontAwesomeIcon icon={faStar} size="4x" color="gold" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" color="gold" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" color="gold" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" color="gold" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" color="gold" id="star" />
        </div>
      ) : (
        <div>
          <FontAwesomeIcon icon={faStar} size="4x" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" id="star" />
          <FontAwesomeIcon icon={faStar} size="4x" id="star" />
        </div>
      )}
    </div>
  );
}
