import './style/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from 'react';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';

class Root extends Component {
     constructor(props) {
          super(props);
          this.state = {

          };
     }
     render() {
          return (
               <div className="d-flex flex-row bg-black">
                    <BrowserRouter>
                         <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="/about" element={<About />} />
                              <Route path="*" element={<Error />} />
                         </Routes>
                    </BrowserRouter>
               </div>
          );
     }
}

export default Root;
