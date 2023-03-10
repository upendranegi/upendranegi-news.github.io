
import './App.css';
import Textfrom from './component/Textfrom';
import { useState } from 'react';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import About from './component/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





function App() {
  const [alert, setalert] = useState(null);

  const salert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000)
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<div>
            <Navbar />

          </div>}>
            <Route index element={<div className='textarea'>

              <Alert alert={alert} />

              <Textfrom salert={salert} heading="Enter the text to analyze below" />
            </div>} />
            <Route path="About" element={<About />} />

          </Route>




        </Routes>


      </Router>
    </>
  );
}

export default App;

