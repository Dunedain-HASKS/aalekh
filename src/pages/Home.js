import "../../src/style/App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
function Home() {
  let [query, setQuery] = useState("");
  return (
    <div className="App">
      <div
        id="intro"
        className="bg-image bg-blur-5 bg-opacity-25 bg-dark shadow-2-strong"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col"></div>
          </div>

          <div className="container d-flex flex-column justify-content-center vh-100 gy-5">
            <h1 className="display-1 mb-2 shadow text-center gor">
              AALEKH
            </h1>
            <form className="col-6 mx-auto" role="search">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for topics here"
                  aria-label="Seacrh News"
                  aria-describedby="button-addon"
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                  value={query}
                />
                <Link
                  className="btn btn-primary"
                  type="button"
                  id="button-addon"
                  to={`/dashboard/${query}`}
                >
                  {" "}
                  Go{" "}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
