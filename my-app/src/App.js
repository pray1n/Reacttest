import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import {Route, Routes } from "react-router-dom";
import  NewsList from "./NewsList.js"


function App() {
  

  return(
<div>
    <div>ssss</div>
    <h1>Text</h1>
    

  
  <Routes>
    <Route path="/" element={<NewsList/>}/>
  </Routes>
  </div>
  )
}
        
            

export default App;
