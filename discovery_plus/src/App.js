
import ALLRouter from "./Components/AllRouter/router";
import { Navbar } from "./Components/LandingPage/navbar";
import Card from "./Components/Kids_componanrts/Card";
import Slider from "./Components/Kids_componanrts/kids_craousel";
import { Explore } from "./Components/explore/explore";
import Short from "./Components/shorts/short";
// import Slider from "./Components/Kids_componanrts/kids_craousel";
// import Card from "./Components/Kids_componanrts/Card";
function App() {
  return (
  
    <div className="App">
      <Navbar/>
      <ALLRouter/>

    </div>
  
  );
}

export default App;