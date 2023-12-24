import "./css/App.css";
import ResumeEditor from "./components/ResumeEditor";
import Resume from "./components/Resume";
import Data from "./Data/Data";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./components/View";

const App = () => {
  const [rD, setRD] = useState(Data);

  const [url, setUrl] = useState("/");
 
  
  const handlePrintClick = (e) => {
    document.documentElement.style.setProperty('font-size', '15px');
    document.getElementsByClassName("wrapper")[0].style.setProperty("width", "100%");
    document.getElementsByClassName("wrapper")[0].style.setProperty("height", "unset");
    document.getElementsByClassName("wrapper")[0].style.setProperty("position", "static");
    document.getElementsByClassName("wrapper")[0].style.setProperty("padding", "0");
    document.getElementsByClassName("resume")[0].style.setProperty("width", "100%");
    document.getElementsByClassName("resume")[0].style.setProperty("border-radius", "0px");
    document.getElementsByClassName("resume")[0].style.removeProperty("height");
    
    
    e.target.parentElement.nextElementSibling.remove();
    e.target.remove();
    window.print();

    window.location.href = url;
  };


  useEffect(()=>{
    document.documentElement.style.setProperty("font-size", "10px");
  },[url])


  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route
          exact path="/"
          element={
          <>
            <ResumeEditor rD={rD} setRD={setRD}/>
            <Resume rD={rD} name="View Resume" setUrl={setUrl}/>
          </>
        }
        />

        <Route
          exact path="/view"
          element={
            <View>
              <Resume rD={rD} setUrl={setUrl} name="Print Resume" link="/view" handleClick={handlePrintClick}/>
            </View>
        }
        />
      </Routes>
    </BrowserRouter>
    </>

  );
};

export default App;
