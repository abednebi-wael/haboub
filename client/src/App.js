import React from 'react'
import NavBar from './components/NavBar';
import { Route , Routes } from 'react-router-dom';

import Home from './components/Home';
import Shop from './components/Shop';
import Footer from './components/Footer';
import Signin from './components/Signin';

import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <div className="App">
      <>
<NavBar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/signin' element={<Signin/>}/>
  
  <Route path='/shop' element={<PrivateRoute component={Shop} />} />
</Routes>
  <Footer/>
      </>
    </div>
  );
}

export default App;
