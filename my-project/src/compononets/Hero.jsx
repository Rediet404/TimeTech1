import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="text-center py-20 bg-white w-[90%] mx-auto">
      <h1 className="text-5xl font-bold text-black mb-2">
        Empowering Excellence 
      </h1>
      <h1 className="text-5xl font-bold text-black mb-8">
        Through Innovation
      </h1>
      <p className="text-lg text-black mb-1 ">
        We blend creativity and strategy to craft technical solutions that 
      </p>
      <p className="text-lg text-blackgray-600 mb-8 ">
         inspire, engage, and drive success for your business.
      </p>
      <div className="flex  lg:flex-row justify-center space-x-4 mb-8">
       <Link to='/contact'><button className="bg-black text-white px-6 py-3 rounded-full">Get Consultation</button></Link>
       <Link to='/service'><button className="text-black border border-black px-6 py-3 rounded-full">Explore Services</button></Link>
      </div>
      <div className="flex justify-center w-full">
        {/* Replace with actual paths to the images */}
        <img src="/images/hero1.png" alt="Design Mockup" className="w-[30%] h-auto" />
        <img src="/images/hero2.png" alt="Design Mockup" className="w-[30%] h-auto" />
        <img src="/images/hero3.png" alt="Design Mockup" className=" w-[30%]  h-auto" />
      </div>
    </section>
  );
}

export default Hero;
