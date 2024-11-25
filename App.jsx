import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom";

import  SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Home from './Components/Home';

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element = {<Home/>} />
        <Route path='/SignUp' element = {<SignUp />} />
        <Route path='/SignIn' element = {<SignIn />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;