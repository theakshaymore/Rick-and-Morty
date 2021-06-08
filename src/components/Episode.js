import React, { useState, useEffect } from "react";

function Episode() {
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    const getAllEpisodes = () => {
      fetch("https://rickandmortyapi.com/api/episode")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setEpisode(data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAllEpisodes();
  }, []);
  return (
    <div className="Episode">
      {episode.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="card-body">
              <p className="card-text">
                <b>NAME</b>:{item.name}
              </p>
              <p className="card-text">
                <b>EPISODE</b>:{item.episode}
              </p>
              <p className="card-text">
                <b>AIR DATE</b>:{item.air_date}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Episode;
