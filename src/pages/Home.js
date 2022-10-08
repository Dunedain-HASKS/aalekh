// import './App.css';
import About from './About'
import '../../src/style/App.css';


function App() {
     return (
          <div className="App">
               {/* <About /> */}
               {/* <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Aalekh</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
           
          </ul>
          
          <form class="d-flex">
            <button class="btn btn-outline-info" type="submit">Login</button>
          </form>
        </div>
      </div>
    </nav> */}
    <div id="intro" class="bg-image shadow-2-strong">
      <div class="container-fluid">
        <div class="row">
          <div class="col"></div>
        </div>
      </div>

      <div class="row">
        <form
          class="col-6 mx-auto position-absolute top-50 start-50 translate-middle"
          role="search"
        >
          <div class="row">
            <div class="col-8">
              <input
                class="form-control"
                type="search"
                placeholder="Search here"
                aria-label="Search"
              />
            </div>
            <div class="col">
              <button type="button" class="btn btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
               
          </div>
     );
}

export default App;
