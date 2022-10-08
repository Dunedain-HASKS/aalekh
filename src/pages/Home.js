// import './App.css';
import '../../src/style/App.css';
import { Link } from 'react-router-dom';
import {useState} from 'react';
function Home() {
  let [query , setQuery] = useState('');
  return (
     <>
    <div id="intro" className="bg-image shadow-2-strong">
      <div className="container-fluid">
        <div className="row">
          <div className="col"></div>
        </div>
        
        <div className="row">
          <form
            className="col-6 mx-auto position-absolute top-50 start-50 translate-middle"
            role="search"
          >

            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Search for topics here" aria-label="Seacrh News" aria-describedby="button-addon" onChange={(e) => {setQuery(e.target.value)}} value={query} />
              <Link className="btn btn-warning" type="button" id="button-addon" to={`/dashboard/${query}`}> Go </Link>
            </div>
          </form>
        </div>
      </div>

    </div>
    </>
  );

}
export default Home;
