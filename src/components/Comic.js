import React from "react";
import "../styles/components.css";

export default function Comic({ src, alt, date }) {
  return (
    <div className="comic">
      <img src={src} alt={alt} title={alt} className="image-comic" />
    </div>
  );
}
