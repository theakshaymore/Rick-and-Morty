import React, { useState, useEffect } from "react";

function Location() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    const getAllLocations = () => {
      fetch("https://rickandmortyapi.com/api/location")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setLocation(data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAllLocations();
  }, []);

  return (
    <div className="Location container">
      {location.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="card-body">
              <p className="card-text">
                <b>NAME</b>: {item.name}
              </p>
              <p className="card-text">
                <b>TYPE</b>: {item.type}
              </p>
              <p className="card-text">
                <b>DIMENSION</b>: {item.dimension}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Location;
