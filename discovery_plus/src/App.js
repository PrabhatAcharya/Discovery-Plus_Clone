
import ALLRouter from "./Components/AllRouter/router";
import { Navbar } from "./Components/LandingPage/navbar";


import Premium from "./Components/Kids_componanrts/video_prem";
import { Footer } from "./Components/explore/footer/footer";
function App() {
  return (
  
    <div className="App bg-plus_back">
      <Navbar />
      <ALLRouter />
      <Footer />

    </div>
  
  );
}

export default App;