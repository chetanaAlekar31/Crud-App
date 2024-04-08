import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Userdata from './Userdata';
import Navbar from './Navbar';
import Edituser from './Edituser';


const App = () => {
  return (
    <>


      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Userdata' element={<Userdata />}></Route><Route path='/edituser/:emp_id' element={<Edituser/>}></Route>

        </Routes>

      </Router>

    </>
  )
}

export default App
