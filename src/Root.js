import './style/App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Component } from 'react';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Info from './pages/Info';

class Root extends Component {
     constructor(props) {
          super(props);
          this.state = {

          };
     };

     render() {
          return (
               <div className="bg-dark w-100 h-100">
                    
                    <HashRouter>
                         <Navbar />
                              <Routes>
                                   <Route path="/" element={<Home />} />
                                   <Route path="/about" element={<About />} />
                                   <Route path="/info" element={<Info />} />
                                   <Route path="*" element={<Error />} />
                                   <Route path="/dashboard/:query" element={<Dashboard />} />
                              </Routes>
                    </HashRouter>
               </div>
          );
     }
}

export default Root;
