import React from 'react'
import Home from "./components/Home"
import About from './components/About'
import Header from './components/Header'
import Contact from './components/Contact'
import Error from './components/Error'
import Footer from './components/Footer'
import AddStud from './components/AddStud'
import DisplayStud from './components/DisplayStud'
import UpdateStud from './components/UpdateStud'
import {BrowserRouter ,Routes,Route} from 'react-router'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div>
        
        
        <BrowserRouter>
            <Header/> 
            <div className='main'>
              <Routes>
                  <Route path={"/"} element={ <Home/> }/> 
                  <Route path={"/about"} element={ <About/> } /> 
                  <Route path={"/contact"} element={ <Contact/> } />
                  <Route path={"/student/add"} element={<AddStud/>} />
                  <Route path={"/student/display"} element={<DisplayStud/>} />
                  <Route path={"/student/update/:id"} element={<UpdateStud/>} />
                  <Route path={"*"} element={<Error/>} />
              </Routes>
            </div>
            <Footer/>
        </BrowserRouter>

    </div>
  )
}

export default App