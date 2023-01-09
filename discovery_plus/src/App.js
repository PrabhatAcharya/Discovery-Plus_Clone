

import ALLRouter from "./Components/AllRouter/router";
import { Navbar } from "./Components/LandingPage/navbar";
import { useState,useEffect } from "react";

import AllRouter from "./Components/AllRouter/router";


import Premium from "./Components/Kids_componanrts/video_prem";
import { Footer } from "./Components/Footer/Footer";
function App() {
  const [watchingData, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://testapi-7cxh.onrender.com/Watching")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }
  useEffect(() => {
    fetchData();
  },[])
  // console.log(watchingData[5].title)
  return (
  
    <div className="App bg-plus_back">
      <Navbar data={watchingData}/>
      <ALLRouter/>
     
      <Navbar />
      <ALLRouter />
      <Footer />

    </div>
  
  );
}

export default App;