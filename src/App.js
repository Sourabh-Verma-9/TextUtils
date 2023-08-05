
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
//import About from './component/About';
import { useState } from 'react';
import Alert from './component/Alert';
/*import { BrowserRouter as Router,
  Routes,
  Route,
    } from 'react-router-dom';*/

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode = () => {
      if(mode === 'light')
         {
          setMode('dark')
          document.body.style.backgroundColor="#042743"
          showAlert("Dark mode has been enabled","success")
          document.title="Textutils-Dark Mode"
        }
      else
         {
          setMode('light')
          document.body.style.backgroundColor="white"
          showAlert("Light mode has been enabled","success")
          document.title="Textutils-Light Mode"
        }  
  }

 const [alert, setAlert] = useState(null)

 const showAlert = (message,type) =>
 {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
 }

  return (
      <>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
         {/*<About />*/}
          <TextForm heading="Enter the text to analyze"  mode={mode} showAlert={showAlert}/>
  
    
            
            

        </div>
        
      </>      
  );
}

export default App;
