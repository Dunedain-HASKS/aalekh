import './style/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from 'react';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
class Root extends Component {
     constructor(props) {
          super(props);
          this.state = {

          };
     };

     render() {
          return (
               <div className="bg-dark vw-100 vh-100">
                    <BrowserRouter>

                         <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="/about" element={<About />} />
                              <Route path="/dashboard/:query" element={<Dashboard />} />
                              <Route path="*" element={<Error />} />
                         </Routes>
                    </BrowserRouter>
               </div>
          );
     }
}

export default Root;
