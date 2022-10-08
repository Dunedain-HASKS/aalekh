// import './App.css';
import '../../src/style/App.css';
import { Link } from 'react-router-dom';
import {useState} from 'react';
function Home() {
  let [query , setQuery] = useState('');
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">Aalekh</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >About Us</a>
              </li>

            </ul>

            <form className="d-flex">
              <button className="btn btn-outline-info" type="submit">Login</button>
            </form>
          </div>
        </div>
      </nav>
      
      <div id="intro" className="bg-image shadow-2-strong">
        <div className="container-fluid">
          <div className="row">
            <div className="col"></div>
          </div>
        </div>

        <div className="row">
          <form
            className="col-6 mx-auto position-absolute top-50 start-50 translate-middle"
            role="search"
          >

            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Seacrh News" aria-describedby="button-addon" onChange={(e) => {setQuery(e.target.value)}} value={query} />
              <Link className="btn btn-primary" type="button" id="button-addon" to={`/dashboard/${query}`}> Go </Link>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Home;
