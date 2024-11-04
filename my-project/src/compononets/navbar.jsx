import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
        <nav className="py-4 w-11/12 mx-auto">
            <div className="flex justify-between w-[80%] mx-auto" >
                <Link to="/" className="text-xl font-bold text-purple-700">
                  <img src="src/assets/logo.png" alt="logo" /></Link>
                <div className="hidden md:flex space-x-8">
                    <p className="text-gray-600 hover:text-gray-900"> <Link to='/'>Home</Link></p>
                    <a href="#about" className="text-gray-600 hover:text-gray-900"> <Link to='/about'>About Us</Link></a>
                    <a href="#services" className="text-gray-600 hover:text-gray-900"><Link to='/service'>Services</Link></a>
                    <a href="#projects" className="text-gray-600 hover:text-gray-900"><Link to='/projects'>Projects</Link></a>
                    <a href="#contact" className="text-gray-600 hover:text-gray-900"><Link to='/contact'>Contact Us</Link></a>
                </div>
                <div className="text-gray-600">EN</div>
            </div>
        </nav>
    </>
  )
}

export default Navbar;