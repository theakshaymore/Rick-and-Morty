import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <div className="container">
        <h1 className="h1 ss">Rick & Morty</h1>
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                src="https://img.cinemablend.com/filter:scale/quill/d/f/0/7/1/6/df07166079c091cf391c706f6c804e874877ad6c.jpg?mw=600"
                className="card-img-top"
                alt="img"
              />
              <div className="card-body">
                <Link to="/characters">
                  <a className="btn btn-dark">Characters 👽</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://www.cnet.com/a/img/0qB6AJWpUFicLjBtQ_PSC6l07Kc=/1200x675/2020/05/11/8dcc1771-d726-482e-a036-5531490d079e/vat-of-acid-rick-and-morty.jpg"
                className="card-img-top"
                alt="img"
              />
              <div className="card-body">
                <Link to="/locations">
                  <a className="btn btn-dark">Locations 👾</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://www.cnet.com/a/img/PhTS16gzKMzlabYSGDUy2IVFnTA=/1200x630/2020/05/04/38f748b7-3d3a-4f97-a6d6-efd4346ad2d6/twitter-in-stream-wide-rick-morty-space-train-1.jpg"
                className="card-img-top"
                alt="img"
              />
              <div className="card-body">
                <Link to="/episodes">
                  <a className="btn btn-dark">Episodes 🤖</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
