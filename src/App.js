import { useState, useEffect } from "react";
import "./App.css";
import Comic from "./components/Comic";
import Qualification from "./components/Qualification";
import Buttons from "./components/Buttons";
import axios from "axios";

function App() {
  const [comic, setComic] = useState({});

  useEffect(() => {
    if (Object.entries(comic).length === 0) {
      const num = parseInt(Math.random() * (2391 + 1 - 1) + 1);
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://xkcd.com/${num}/info.0.json`
        )
        .then(({ data }) => setComic(data))
        .catch((err) => console.log(err));
    }
  }, [comic]);

  const handleBackcomic = (e) => {
    e.preventDefault();
    const num = comic.num - 1;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://xkcd.com/${num}/info.0.json`
      )
      .then(({ data }) => setComic(data))
      .catch((err) => console.log(err));
  };
  const handleRandomcomic = (e) => {
    e.preventDefault();
    const num = parseInt(Math.random() * (comic.num + 1 - 1) + 1);
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://xkcd.com/${num}/info.0.json`
      )
      .then(({ data }) => setComic(data))
      .catch((err) => console.log(err));
  };
  const handleNextcomic = (e) => {
    e.preventDefault();
    const num = comic.num + 1;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://xkcd.com/${num}/info.0.json`
      )
      .then(({ data }) => setComic(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      {comic && (
        <div>
          <strong>
            <h1 className="mt-2">{comic.safe_title}</h1>
          </strong>
          <hr />
          <Comic
            src={comic.img}
            alt={comic.alt}
            date={{ day: comic.day, month: comic.month, year: comic.year }}
          />
          <Buttons
            num={comic.num}
            handleBackcomic={handleBackcomic}
            handleRandomcomic={handleRandomcomic}
            handleNextcomic={handleNextcomic}
          />
          <Qualification num={comic.num} qualification={0} />
        </div>
      )}
    </div>
  );
}

export default App;
