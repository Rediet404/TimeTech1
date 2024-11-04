
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./compononets/layout";
import Home from "./pages/home/home.jsx";
import NoPage from "./compononets/nopage";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Service from "./pages/service.jsx";
import './App.css'

function App() {

  return (
    <div >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
};

export default App;
