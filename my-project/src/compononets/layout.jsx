import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Navbar from './navbar';

const Layout = () => {
  return (
    <sectio className="overflow-hidden" style={{fontFamily:"QuickSand"}}>
      <nav >
        <Navbar />
      </nav>

      <Outlet />
      <Footer />
    </sectio>
  )
};

export default Layout;
