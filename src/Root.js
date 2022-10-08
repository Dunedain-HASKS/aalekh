import './style/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from 'react';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

class Root extends Component {
     constructor(props) {
          super(props);
          this.state = {

          };
     };

     render() {
          return (
               <div className="bg-dark w-100 h-100">
                    
                    <BrowserRouter>
                         <Navbar />
                              <Routes>
                                   <Route path="/" element={<Home />} />
                                   <Route path="/about" element={<About />} />
                                   <Route path="*" element={<Error />} />
                                   <Route path="/dashboard/:query" element={<Dashboard />} />
                              </Routes>
                    </BrowserRouter>
               </div>
          );
     }
}

export default Root;
