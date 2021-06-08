import { useState, useEffect } from "react";

function CharList() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const getAllCharacters = () => {
      fetch("https://rickandmortyapi.com/api/character")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setCharacter(data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAllCharacters();
  }, []);

  return (
    <div className="CharList">
      {character.map((item) => {
        return (
          <div className="card carrd" key={item.id}>
            <img src={item.image} className="card-img-top" alt="img" />
            <div className="card-body">
              <p className="card-text h3 ">{item.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CharList;
