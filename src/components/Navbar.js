import '../../src/style/App.css';
import { NavLink } from 'react-router-dom';


const navigation = [
    { name: 'Home', href: '../pages/Home.js' },
    { name: 'About', href: '../pages/About.js' },
    { name: '', href: '../pages/Error.js' },
];

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
            {/* {navigation.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.href}
                    className={({
                        isActive,
                    }) => {
                        return (
                            'px-3 py-2 rounded-md text-sm font-medium no-underline ' +
                            (!isActive
                                ? ' text-gray-300 hover:bg-gray-700 hover:text-white'
                                : 'bg-gray-900 text-white')
                        );
                    }}
                >
                    {item.name}
                </NavLink>
            ))} */}
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Aalekh</a>
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
                <a className="nav-link" href="#">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
             
            </ul>
            
            <form className="d-flex">
              <button className="btn btn-outline-info" type="submit">Login</button>
            </form>
          </div>
        </div>
      </nav>
    );
}