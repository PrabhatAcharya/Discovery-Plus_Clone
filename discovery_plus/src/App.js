
import { Explore } from "./Components/explore/explore.jsx";
import { Footer } from "./Components/explore/footer/footer.jsx";
import ALLRouter from "./Components/AllRouter/router";
import { Navbar } from "./Components/LandingPage/navbar";
function App() {
  return (
  
    <div className="App">
      <Navbar />
      <ALLRouter />
      <Footer />
      

    </div>
  
  );
}

export default App;