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
     };

     render() {
          return (
               <div className="bg-dark container container fluid vh-100 vw-100">
                    <BrowserRouter>
                         <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="/about" element={<About />} />
                              <Route path="*" element={<Error />} />
                         </Routes>
                         <button onClick={this.testfunc}>Test</button>
                    </BrowserRouter>
               </div>
          );
     }
}

export default Root;
