import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-screen w-full">
      <BrowserRouter>
          <Navbar/>
          <div className="md:w-4/6 w-10/12 m-auto h-auto">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/projects" element={<Projects/>}/>
            </Routes>
          </div>
          <Footer/>
      </BrowserRouter>
        
   
    </div>
  );
}

export default App;
