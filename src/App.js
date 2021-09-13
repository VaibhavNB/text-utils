// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const [mode, setMode] = useState('light');
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#011d6b';
      document.body.style.transition = '0.6s all';
      showAlert("Dark mode has been enabled", 'success')
  }
    else{setMode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.transition = '0.6s all';
    showAlert("Light mode has been enabled", 'success')}
  }
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert} />
    <TextForm showAlert={showAlert} title="Enter the text below to analyze" mode={mode} />
    {/* <About/> */}

    </>
  );
}

export default App;
