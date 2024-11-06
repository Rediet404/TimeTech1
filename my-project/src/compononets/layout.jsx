import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Navbar from './navbar';
import { Info_card } from './info_card';

const Layout = () => {
  return (
    <sectio className="overflow-hidden" style={{fontFamily:"QuickSand"}}>
      <nav >
        <Navbar />
      </nav>

      <Outlet />
      <Info_card/>
      <Footer />
    </sectio>
  )
};

export default Layout;
