import './App.css';
import React, { Component } from 'react';
import Navbar from './component/Navbar.js';
import News from './component/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {

  state={
    progress:0,
  }
  steprogess=(progress)=>{
    this.setState({progress:progress})
  }

  render() {

    
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
          <Routes>

            <Route path='/' element={<Navbar />}>
              <Route index element={<News setp={this.steprogess} key="general" pagesize={8} category="general" heading="Top News" />}>

              </Route>

              <Route path='/Science' element={<News setp={this.steprogess}  key="science" pagesize={8} category="science" heading="science" />}>

              </Route>

              <Route path='/Health' element={<News setp={this.steprogess} key="health" pagesize={8} category="health" heading="health" />}>

              </Route>

              <Route path='/Sports' element={<News setp={this.steprogess} key="sports" pagesize={8} category="sports" heading="sports" />}>

              </Route>

              <Route path='/Technology' element={<News setp={this.steprogess} key="technology" pagesize={8} category="technology" heading="Technology" />}>

              </Route>

              <Route path='/Entertainment' element={<News setp={this.steprogess} key="entertainment" pagesize={8} category="entertainment" heading="Entertainment" />}>

              </Route>

              <Route path='/Business' element={<News setp={this.steprogess} key="business" pagesize={8} category="business" heading="Business" />}>

              </Route>


            </Route>



          </Routes>
        </Router>
      </div>
    )
  }
}

export default App








