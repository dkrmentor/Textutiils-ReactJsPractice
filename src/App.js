import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React from 'react';
import { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom"

function App() {
  const [mode, setmode] = useState('light');
  const toggleMode = () => {
    // mode === "light" ? setmode("dark") : setmode("light");
    // mode === "light" ? document.body.style.backgroundColor = 'grey' : document.body.style.backgroundColor = 'white';
    // mode === "light" ? document.body.style.Color = 'white' : document.body.style.Color = 'grey';
    // mode === "light" ? showAlert("Dark Mode Enabled", "dark") : showAlert("Light Mode Enabled", "light");


    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = 'grey';
      document.body.style.Color = 'white';
      showAlert("Dark Mode Enabled", "dark")
      document.title = 'TextUtills - Dark Mode '
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.Color = 'grey';
      showAlert("Light Mode Enabled", "light")
      document.title = 'TextUtills - Light Mode '

    };


  }
  const removeOtherClass = () => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')

  }

  const togglePet = (cls) => {
    removeOtherClass();
    document.body.classList.add('bg-' + cls)
  }
  // OR
  // const colorBlue = () => {
  //   setmode(mode);
  //   document.body.style.backgroundColor = 'Blue';
  //   showAlert("Primary Mode Enabled", mode)
  // }
  // const colorRed = () => {
  //   setmode(mode);
  //   document.body.style.backgroundColor = 'Red';
  //   showAlert("Danger Mode Enabled", mode)
  // }
  // const colorYellow = () => {
  //   setmode(mode);
  //   document.body.style.backgroundColor = 'Yellow';
  //   showAlert("Warning Mode Enabled", mode)
  // }
  // const colorGreen = () => {
  //   setmode(mode);
  //   document.body.style.backgroundColor = 'Green';
  //   showAlert("Success Mode Enabled", mode)
  // }


  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);


  }
  return (
    <>

      <Router>
        <Navbar title="Textutills" menu1="Home" menu2="About" mymode={mode} mytoggleMode={toggleMode} togglePet={togglePet} />
        {/* OR */}
        {/* <Navbar title="Textutills"  menu1="Home" menu2="About" mymode={mode}  mytoggleMode={toggleMode}       colorBlue={colorBlue} colorRed={colorRed} colorGreen={colorGreen} colorYellow={colorYellow}  /> */}


        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Textform showAlert={showAlert} textareaheading="Enter your text to analyze below" mymode={mode} textheading="Summary" />
          </Route>
        </Switch>

      </Router>

    </>
  );

}

export default App;
