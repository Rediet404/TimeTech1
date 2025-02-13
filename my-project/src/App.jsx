import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./compononets/layout";
import Home from "./pages/home.jsx";
import NoPage from "./compononets/nopage";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Service from "./pages/service.jsx";
import Projects from "./pages/projects.jsx";
import Support from "../src/pages/support.jsx";
import ScrollToTop from "./compononets/scroll_to_top.jsx";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/support" element={<Support/>}/>
            
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
