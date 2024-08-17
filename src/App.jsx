import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Component/NavBar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Home />
              </>
            }
          ></Route>
          <Route
            path="/services"
            element={
              <>
                <NavBar />
                <Services />
              </>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <>
                <NavBar />
                <About />
              </>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <>
                <NavBar />
                <Contact />
              </>
            }
          ></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
