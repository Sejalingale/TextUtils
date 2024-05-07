import React from 'react';
import { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";



function App() {
  const toggleMode=()=>{
    if(mode === "dark"){
        setMode("light");
        document.body.style.backgroundColor="white";
        showAlert("Light mode has been enabled","success");
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor="#042743";
     showAlert("Dark mode has been enabled","success");
    }
  }
  const [mode,setMode]=useState("light");
  const [alert,setalert]=useState(null);

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },1500)
  }
  return (
    <>
<Router>    
<Navbar title="TextUtils"  AboutText="About us" mode={mode}  toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
  <Routes>
    <Route path="/AboutUs" element={<AboutUs heading="About Us" />} />
    <Route path="/" element={<Textarea heading="Enter the text to analyze below"  showAlert={showAlert} mode={mode}/>} /> 
 </Routes>



</div>
</Router>  

</>
  );
}

export default App;
