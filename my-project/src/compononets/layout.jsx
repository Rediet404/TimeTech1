import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Navbar from './navbar';
import { Info_card } from './info_card';

const Layout = () => {
  return (
    <section className="overflow-hidden" style={{fontFamily:"QuickSand"}}>
      <nav >
        <Navbar />
      </nav>

      <Outlet />
      <Info_card/>
      <Footer />
    </section>
  )
};

export default Layout;
