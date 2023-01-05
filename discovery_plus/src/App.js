import { Navbar } from "./Components/LandingPage/navbar";
// import { Home } from "./Components/LandingPage/home";
import { Corosuel } from "./Components/LandingPage/corosuel";
import { Slider } from "./Components/LandingPage/slider";
import './App.css';

function App() {
  return (
  
    <div className="App">
 
        <Navbar />
        {/* <Home/> */}
        {/* <Corosuel/> */}
        <Slider/>
      
    </div>
  
  );
}

export default App;
