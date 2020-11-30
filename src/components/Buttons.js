import React from "react";
import "../styles/components.css";

export default function Buttons({
  handleBackcomic,
  handleRandomcomic,
  handleNextcomic,
}) {
  const anterior = () => {};
  const aleatorio = () => {};
  const siguiente = () => {};
  return (
    <div>
      <div className="row buttons">
        <div className="col">
          <button className="button-back" onClick={handleBackcomic}>
            <h3>
              <strong>Anterior</strong>
            </h3>
          </button>
        </div>
        <div className="col">
          <button className="button-random" onClick={handleRandomcomic}>
            <h3>
              <strong>Aleatorio</strong>
            </h3>
          </button>
        </div>
        <div className="col">
          <button className="button-next" onClick={handleNextcomic}>
            <h3>
              <strong>Siguiente</strong>
            </h3>
          </button>
        </div>
      </div>
    </div>
  );
}
