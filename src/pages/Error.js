import '../style/App.css';
import {Link} from 'react-router-dom';
function App() {
     return (
          <div className="container-fluid p-5 d-flex flex-column align-items-center justify-content-center">
               <div className="display-1 w-50 mb-5 text-light">
                    Whoops! Something went wrong.
               </div>
               <div className="d-flex flex-row justify-content-evenly g-3 w-75">
                    <h1 className="h1 text-decoration-none">
                         <Link className="text-decoration-none text-danger" to={"/about"}>Contact Us</Link>
                    </h1>
                    <h1>
                         <Link className="text-decoration-none text-success" to={"/"}>Go Back to Home</Link>
                    </h1>
               </div>
          </div>
     );
}

export default App;
