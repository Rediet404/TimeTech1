import  { useState } from "react";
import { Link } from "react-router-dom"
import Hero from "../compononets/Hero";
import Workflow from "../compononets/Workflow"
const Home = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (index) => {
    setIsOpen(isOpen === index ? null : index); 
  };

  const minus = <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_291_186)">
  <path d="M25 50C18.3696 50 12.0107 47.3661 7.32233 42.6777C2.63392 37.9893 0 31.6304 0 25C0 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 0 25 0C31.6304 0 37.9893 2.63392 42.6777 7.32233C47.3661 12.0107 50 18.3696 50 25C50 31.6304 47.3661 37.9893 42.6777 42.6777C37.9893 47.3661 31.6304 50 25 50ZM25 45C30.3043 45 35.3914 42.8929 39.1421 39.1421C42.8929 35.3914 45 30.3043 45 25C45 19.6957 42.8929 14.6086 39.1421 10.8579C35.3914 7.10714 30.3043 5 25 5C19.6957 5 14.6086 7.10714 10.8579 10.8579C7.10714 14.6086 5 19.6957 5 25C5 30.3043 7.10714 35.3914 10.8579 39.1421C14.6086 42.8929 19.6957 45 25 45ZM37.5 22.5V27.5H12.5V22.5H37.5Z" fill="black"/>
  </g>
  </svg>

  const plus = <svg width="23" height="23" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24.9994 4.1665C13.5118 4.1665 4.16602 13.5123 4.16602 24.9998C4.16602 36.4873 13.5118 45.8332 24.9994 45.8332C36.4869 45.8332 45.8327 36.4873 45.8327 24.9998C45.8327 13.5123 36.4869 4.1665 24.9994 4.1665ZM35.416 27.0832H27.0827V35.4165H22.916V27.0832H14.5827V22.9165H22.916V14.5832H27.0827V22.9165H35.416V27.0832Z" fill="black"/>
  </svg>

  return (
    <section className="pt-14">
      <Hero/>
      <div className="flex items-center bg-[#f8f8f8] py-20">
      <div className="font-inter mx-auto w-[90%]">
        <p className="text-center py-2 text-xs uppercase">Services</p>
        <p className="text-center pb-10 font-semibold text-2xl">Our expertise</p> 
        <div className="flex flex-wrap gap-4 sm:justify-evenly">
          <div className="w-72 max-w-sm rounded-lg overflow-hidden shadow-lg bg-home1"  >
          <svg className="mt-10 ml-12" width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M84.375 15.625H15.625C13.9674 15.625 12.3777 16.2835 11.2056 17.4556C10.0335 18.6277 9.375 20.2174 9.375 21.875V78.125C9.375 79.7826 10.0335 81.3723 11.2056 82.5444C12.3777 83.7165 13.9674 84.375 15.625 84.375H84.375C86.0326 84.375 87.6223 83.7165 88.7944 82.5444C89.9665 81.3723 90.625 79.7826 90.625 78.125V21.875C90.625 20.2174 89.9665 18.6277 88.7944 17.4556C87.6223 16.2835 86.0326 15.625 84.375 15.625ZM36.25 56.875C36.913 57.3723 37.3514 58.1126 37.4686 58.9331C37.5858 59.7535 37.3723 60.587 36.875 61.25C36.3777 61.913 35.6374 62.3514 34.8169 62.4686C33.9965 62.5858 33.163 62.3723 32.5 61.875L20 52.5C19.6119 52.2089 19.2969 51.8315 19.0799 51.3975C18.863 50.9636 18.75 50.4851 18.75 50C18.75 49.5149 18.863 49.0364 19.0799 48.6025C19.2969 48.1685 19.6119 47.7911 20 47.5L32.5 38.125C33.163 37.6277 33.9965 37.4142 34.8169 37.5314C35.6374 37.6486 36.3777 38.087 36.875 38.75C37.3723 39.413 37.5858 40.2465 37.4686 41.0669C37.3514 41.8874 36.913 42.6277 36.25 43.125L27.082 50L36.25 56.875ZM59.2539 28.9844L46.7539 72.7344C46.6474 73.1359 46.4618 73.5122 46.2081 73.8413C45.9545 74.1703 45.6377 74.4454 45.2764 74.6505C44.9151 74.8557 44.5166 74.9867 44.104 75.036C43.6915 75.0853 43.2733 75.0518 42.8739 74.9375C42.4744 74.8233 42.1018 74.6305 41.7777 74.3705C41.4537 74.1105 41.1847 73.7885 40.9866 73.4233C40.7885 73.0581 40.6652 72.6571 40.6239 72.2437C40.5826 71.8303 40.6241 71.4128 40.7461 71.0156L53.2461 27.2656C53.4863 26.4833 54.0239 25.8265 54.7432 25.4363C55.4625 25.046 56.3061 24.9535 57.0929 25.1786C57.8797 25.4037 58.5468 25.9284 58.9509 26.64C59.3549 27.3517 59.4637 28.1934 59.2539 28.9844ZM80 52.5L67.5 61.875C66.837 62.3723 66.0035 62.5858 65.1831 62.4686C64.3626 62.3514 63.6223 61.913 63.125 61.25C62.6277 60.587 62.4142 59.7535 62.5314 58.9331C62.6486 58.1126 63.087 57.3723 63.75 56.875L72.918 50L63.75 43.125C63.4217 42.8788 63.1451 42.5703 62.936 42.2172C62.7269 41.864 62.5894 41.4732 62.5314 41.0669C62.4734 40.6607 62.4959 40.247 62.5978 39.8494C62.6996 39.4519 62.8788 39.0783 63.125 38.75C63.3712 38.4217 63.6797 38.1451 64.0328 37.936C64.386 37.7269 64.7768 37.5894 65.1831 37.5314C65.5893 37.4734 66.003 37.4959 66.4006 37.5978C66.7981 37.6996 67.1717 37.8788 67.5 38.125L80 47.5C80.3881 47.7911 80.7031 48.1685 80.9201 48.6025C81.137 49.0364 81.25 49.5149 81.25 50C81.25 50.4851 81.137 50.9636 80.9201 51.3975C80.7031 51.8315 80.3881 52.2089 80 52.5Z" fill="white"/>
          </svg>
            <div className="px-6 py-4">
              <div className="font-semibold ml-4 text-xl mb-2 text-white">Software Development</div>
              <div className="text-xs text-white font-semibold my-10 ml-4">
                <p>Web design and development</p>
                <p className="py-2">Mobile app design and development</p>
                <p>System and ERP software development </p>
              </div>
              
            </div>
          </div> 
          <div className="w-72 max-w-sm rounded-lg overflow-hidden shadow-lg" style={{background: "#FFD67A"}}>
          <svg className="mt-10 ml-12" width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33.334 87.5V79.1667H16.6673C14.3757 79.1667 12.4145 78.3514 10.784 76.7208C9.15343 75.0903 8.33676 73.1278 8.33398 70.8333V20.8333C8.33398 18.5417 9.15065 16.5806 10.784 14.95C12.4173 13.3194 14.3784 12.5028 16.6673 12.5H50.0007V20.8333H16.6673V70.8333H83.334V58.3333H91.6673V70.8333C91.6673 73.125 90.852 75.0875 89.2215 76.7208C87.5909 78.3542 85.6284 79.1694 83.334 79.1667H66.6673V87.5H33.334ZM70.834 58.3333L50.0007 37.5L55.834 31.6667L66.6673 42.3958V12.5H75.0007V42.3958L85.834 31.6667L91.6673 37.5L70.834 58.3333Z" fill="black"/>
          </svg>
            <div className="px-6 py-4 text-black">
              <div className="ml-4 font-semibold text-xl mb-2">System Installation</div>
              <div className="text-xs font-semibold my-10 ml-4">
              <p >
                Cloud services </p>
               <p className="py-2">Voice over internet protocol (VoIP) </p> 
                <p>Network security</p>

              </div>
              
            </div>
          </div>
          <div className=" max-w-sm w-72 rounded-lg overflow-hidden shadow-lg" style={{background:'#776DF2'}}>
          <svg className="mt-10 ml-10" width="60" height="60"viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_291_258)">
          <path d="M70.3125 40.625C55.625 40.625 43.75 52.5 43.75 67.1875C43.75 81.875 55.625 93.75 70.3125 93.75C85 93.75 96.875 81.875 96.875 67.1875C96.875 52.5 85 40.625 70.3125 40.625ZM90.625 65.625H81.25C81.25 59.375 80.3125 53.125 78.4375 48.4375C85 51.5625 90 57.8125 90.625 65.625ZM70.3125 87.5C69.0625 86.875 66.25 81.875 65.625 71.875H74.6875C74.0625 81.875 71.5625 86.875 70.3125 87.5ZM65.625 65.625C65.9375 53.75 69.0625 47.5 70 46.875C71.25 47.5 74.375 53.75 74.6875 65.625H65.625ZM62.1875 48.4375C60.3125 53.125 59.6875 59.375 59.375 65.625H50C50.625 57.8125 55.625 51.5625 62.1875 48.4375ZM50.625 71.875H59.375C59.6875 76.875 60.625 81.875 62.1875 85.9375C56.5625 83.4375 52.1875 78.125 50.625 71.875ZM78.4375 85.9375C80 81.875 80.9375 77.1875 81.25 71.875H90.3125C88.4375 78.125 84.0625 83.4375 78.4375 85.9375Z" fill="white"/>
          <path d="M80.625 31.25C77.8125 16.875 65 6.25 50 6.25C35 6.25 22.1875 16.875 19.375 31.5625C8.4375 33.75 0 43.125 0 54.6875C0 67.5 10.625 78.125 23.4375 78.125H34.375V71.875H23.4375C14.0625 71.875 6.25 64.0625 6.25 54.6875C6.25 45.625 13.125 38.125 22.1875 37.5H25V34.6875C26.5625 22.1875 37.1875 12.5 50 12.5C61.5625 12.5 71.25 20.625 74.0625 31.25H80.625Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_291_258">
          <rect width="100" height="100" fill="white"/>
          </clipPath>
          </defs>
          </svg>
            <div className="px-6 py-4">
              <div className="ml-4 font-semibold text-xl text-white mb-2">Network Design <br /> and Installation</div>
              <div className="text-xs text-white font-semibold my-6 ml-4">
                <p>Cable Installation</p>
                <p className="my-2">Device Installation</p>
                <p>Testing</p>
              </div>
              
            </div>
          </div>
        </div>
        <p className="text-center text-sm py-10">
          <Link to='/service' className="underline">See more services</Link>
        </p>
      </div></div>
      <Workflow/>
      <div>
        
        <div className="flex justify-evenly flex-wrap py-5">
        <div>
        <p className="py-2 font-normal">FAQ</p>
          <p>Answers to your questions</p>
          <img className="w-72 " src="src/assets/Man thinking in the office.png" alt="decorative image" />
        </div>
        <div className="App p-4 w-[90%] sm:w-[55%]">
          <div className="border rounded-lg mb-5 ">
            <div
              className="flex gap-8 p-4  cursor-pointer"
              onClick={() => toggleAccordion(1)}
            >
              <span>{isOpen === 1 ? minus : plus }</span>
              <h3 className="font-medium text-center">Do you offer flexible payment options?</h3>
              
            </div>
            {isOpen === 1 && (
              <div className="p-4">
                <p>This is the content of Accordion 1.</p>
              </div>
            )}
          </div>

          <div className="border rounded-lg mb-5">
            <div
              className="flex gap-8 p-4  cursor-pointer"
              onClick={() => toggleAccordion(2)}
            >
              <span>{isOpen === 2 ? minus : plus}</span>
              <h3 className="font-medium text-center">What services do you offer?</h3>
            </div>
            {isOpen === 2 && (
              <div className="p-4">
                <p>This is the content of Accordion 2.</p>
              </div>
            )}
          </div>

          <div className="border rounded-lg mb-5">
            <div
              className="flex gap-8 p-4 cursor-pointer"
              onClick={() => toggleAccordion(3)}
            >
              <span>{isOpen === 3 ? minus : plus}</span>
              <h3 className="font-medium text-center">How long does it take to build an MVP?</h3>
            </div>
            {isOpen === 3 && (
              <div className="p-4">
                <p>This is the content of Accordion 3.</p>
              </div>
            )}
          </div>
          <div className="border rounded-lg mb-5">
            <div
              className="flex gap-8 p-4 cursor-pointer"
              onClick={() => toggleAccordion(4)}
            >
              <span>{isOpen === 4 ? minus : plus}</span>
              <h3 className="font-medium text-center ">How can I request a quote for your service?</h3>
              
            </div>
            {isOpen === 4 && (
              <div className="p-4">
                <p>This is the content of Accordion 4.</p>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
      <div className="m-5">  
    </div>
    </section>
  );
};

export default Home;
