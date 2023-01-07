
import { Explore } from "./Components/explore/explore";

import ALLRouter from "./Components/AllRouter/router";
import { Navbar } from "./Components/LandingPage/navbar";
function App() {
  return (
  
    <div className="App">
      
      <Explore />
      <Navbar/>
      <ALLRouter/>

    </div>
  
  );
}

export default App;