import Login from "./components/Login";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Home  from "./components/pages/Home";
import About  from "./components/pages/About";

import ContactUs  from "./components/pages/ContactUs";

function App() {
  return (
    <>
      <Router>
        <NavigationBar />

        <div className="pages">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;