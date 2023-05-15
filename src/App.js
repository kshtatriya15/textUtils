import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {BrowserRouter as Router} from "react-router-dom";
// import {Routes,Route} from "react-router-dom"
import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes

// } from "react-router-dom";





function App() {
  const [Mode, setMode] = useState("light")
  const [falert,setAlert] = useState(null)

  const showAlert = (message , type )=>
  {
       setAlert({
        msg : message, 
        type: type

      })
      setTimeout(()=>{
        setAlert(null);
      },2000);
  }
  
  const  ToggleMode=()=>
  {
      if(Mode==='dark')
      {
        setMode('light');
        document.body.style.backgroundColor="white";
        document.title="TextUtilsX-Light mode";
        showAlert("Light mode has been enabled" , "success");
        setInterval(() => {
          document.title = 'warning!';
        }, 2000);
        setInterval(() => {
          document.title = 'malware Alert!';
        }, 1500);
      }
      else
      {
        setMode('dark');
        document.body.style.backgroundColor="#343837";
        document.title="TextUtilsX-Dark mode";
        showAlert("Dark mode has been enabled" , "success");
      }
  }
  return (
<>
{/* <Router> */}

      <Navbar title ="TextUtilsX"  aboutText="About ES7" 
      aboutHome = "Go to Home" buttonName = "Search Me"  mode={Mode} togglemode = {ToggleMode}/>
      <Alert alert={falert}/>
      <div className="container my-3">
{/* <Routes> */}
          {/* <Route path="/about" element={<About/>}></Route> */}
          
          
          {/* <Route path="/" element={<TextForm showAlert={showAlert} heading = "Analyze Your String" mode = {Mode}/>}> */}
          <TextForm showAlert={showAlert} heading = "Analyze Your String" mode = {Mode}/>
  
          {/* </Route> */}
{/* </Routes> */}
{/* <About/> */}


</div>

{/* </Router> */}


</>
  );
}
 

export default App;
