
import  { useState } from 'react';

 
const Service = () => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <section className="overflow-hidden py-20">
       <div className="flex justify-around h-1/4 items-center">
            <img className="w-72 h-68" src="src/assets/User interface in web design.png" alt="decorative image" />
            <h1 className="font-semibold sm:text-4xl text-center animate-moveFromLeft" >Combine Creativity & Technical Expertise, <br />
            We Work For Your Business To Earn <br/>The Best Outcomes
            </h1>
            <img className="mx-0" src="src/assets/Network security, firewall and online safety.png" alt="decorative image" />
        </div> 
        <div className="flex flex-col gap-10 w-screen">
          <div className="text-center">
            <p>services</p>
            <p className="font-medium">What Can We Do</p>

          </div>

            <div className="flex justify-evenly flex-wrap">
            <div className="w-80 h-fit pb-6 max-w-sm rounded-lg overflow-hidden shadow-lg"  >
              <img src="src/assets/DevOps, software development methodology and framework (1).png" alt="decorative image" />
            <div className="px-6 pt-4">
              <div className="font-semibold ml-4 text-xl mb-2 ">Software Development</div>
              <div className="text-xs  font-medium my-6 ml-4">
                <p>Time Software offers technical consultancy services to both 
                  local and international organizations. With extensive </p>
                  {isDescriptionVisible && (
                <p> experience in all categories of services we deliver and offer <br />
                  our clients a holistic approach.</p>
                  )}
                  
              </div>
              <div className="flex justify-center">
              <button onClick={toggleDescription}
                  className="font-medium text-sm" style={{color: '#5D328F'}}>
                  {isDescriptionVisible ? 'Read Less' : 'Read More'}
              </button>
               </div> 
              
            </div>
          </div>

          <div className="w-80 h-fit pb-6 max-w-sm rounded-lg overflow-hidden shadow-lg"  >
             <img src="src/assets/Uploading files from computer to cloud (1).png" alt="decorative image" />
            <div className="px-6 pt-4">
              <div className="font-semibold ml-4 text-xl mb-2 ">System Installation</div>
              <div className="text-xs  font-medium my-6 ml-4">
                <p>Time Software offers technical consultancy services to both 
                  local and international organizations. With extensive  </p>
                  {isDescriptionVisible && (
                <p> experience in all categories of services we deliver and offer <br />
                  our clients a holistic approach.</p>
                  )}
                  
              </div>
              <div className="flex justify-center">
              <button onClick={toggleDescription}
                  className="font-medium text-sm" style={{color: '#5D328F'}}>
                  {isDescriptionVisible ? 'Read Less' : 'Read More'}
              </button>
               </div>              
            </div>
          </div>

          <div className="w-80 h-fit pb-6 max-w-sm rounded-lg overflow-hidden shadow-lg" >
            <img src="src/assets/Internet service provision and connectivity.png" alt="decorative image" />
            <div className="px-6 pt-4">
              <div className="font-semibold ml-4 text-xl mb-2 ">Network Design <br /> and Development</div>
              <div className="text-xs  font-medium my-3 ml-4">
                <p>Time Software offers technical consultancy services to both 
                  local and international organizations. With extensive  </p>
                  {isDescriptionVisible && (
                <p> experience in all categories of services we deliver and offer <br />
                  our clients a holistic approach.</p>
                  )}
                  
              </div>
              <div className="flex justify-center">
              <button onClick={toggleDescription}
                  className="font-medium text-sm" style={{color: '#5D328F'}}>
                  {isDescriptionVisible ? 'Read Less' : 'Read More'}
              </button>
               </div> 
            </div>
          </div>
            </div>

            <div className="flex justify-evenly flex-wrap">
            <div className="w-80 h-fit pb-6 max-w-sm rounded-lg overflow-hidden shadow-lg" >
              <img src="src/assets/Branding kit, corporate identity development.png" alt="decorative image" />
            <div className="px-6 pt-4">
              <div className="font-semibold ml-4 text-xl mb-2 ">Corporate Business</div>
              <div className="text-xs  font-medium my-6 ml-4">
                <p>Time Software offers technical consultancy services to both 
                  local and international organizations. With extensive  </p>
                  {isDescriptionVisible && (
                <p> experience in all categories of services we deliver and offer <br />
                  our clients a holistic approach.</p>
                  )}
                  
              </div>
              <div className="flex justify-center">
              <button onClick={toggleDescription}
                  className="font-medium text-sm" style={{color: '#5D328F'}}>
                  {isDescriptionVisible ? 'Read Less' : 'Read More'}
              </button>
               </div> 
            </div>
          </div>

          <div className="w-80 h-fit pb-6 max-w-sm rounded-lg overflow-hidden shadow-lg" >
            <img src="src/assets/OTP verification.png" alt="decorative image" />
            <div className="px-6 pt-4">
              <div className="font-semibold ml-4 text-xl mb-2 ">SMS Service</div>
              <div className="text-xs  font-medium my-6 ml-4">
                <p>Time Software offers technical consultancy services to both 
                  local and international organizations. With extensive </p>
                  {isDescriptionVisible && (
                <p> experience in all categories of services we deliver and offer <br />
                  our clients a holistic approach.</p>
                  )}
                  
              </div>
              <div className="flex justify-center">
              <button onClick={toggleDescription}
                  className="font-medium text-sm" style={{color: '#5D328F'}}>
                  {isDescriptionVisible ? 'Read Less' : 'Read More'}
              </button>
               </div> 
            </div>
          </div>

          <div className="w-80 h-fit pb-6 max-w-sm rounded-lg overflow-hidden shadow-lg"  >
            <img src="src/assets/Risk management and controlling threats.png" alt="decorative image" />
            <div className="px-6 pt-4">
              <div className="font-semibold ml-4 text-xl mb-2 ">Tech Assisted <br /> Property Management</div>
              <div className="text-xs  font-medium my-3 ml-4">
                <p>Time Software offers technical consultancy services to both 
                  local and international organizations. With extensive  </p>
                  {isDescriptionVisible && (
                <p> experience in all categories of services we deliver and offer <br />
                  our clients a holistic approach.</p>
                  )}
                  
              </div>
              <div className="flex justify-center">
              <button onClick={toggleDescription}
                  className="font-medium text-sm" style={{color: '#5D328F'}}>
                  {isDescriptionVisible ? 'Read Less' : 'Read More'}
              </button>
               </div> 
            </div>
          </div>
            </div>
        </div>
        <div>
        <div className="text-center py-14">
          <h1 className="font-semibold sm:text-lg py-4">Sectors We Have Explored</h1>
          <p>We are proficient in delivering software solutions to companies of different business verticals. Our background covers such industries as:</p>
        </div>
        <div className="flex justify-evenly flex-wrap gap-4">
        <button className="border-2 border-gray-50 w-52 rounded-lg h-10 flex justify-evenly items-center">
          <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.9997 6.25L2.08301 18.75L10.4163 23.2917V35.7917L24.9997 43.75L39.583 35.7917V23.2917L43.7497 21.0208V35.4167H47.9163V18.75L24.9997 6.25ZM39.208 18.75L24.9997 26.5L10.7913 18.75L24.9997 11L39.208 18.75ZM35.4163 33.3333L24.9997 39L14.583 33.3333V25.5625L24.9997 31.25L35.4163 25.5625V33.3333Z" fill="#5D328F"/>
          </svg>
          Education</button>
        <button className="border-2 border-gray-50 w-64 rounded-lg h-10 flex justify-evenly items-center">
          <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.33366 43.7499H28.3753C29.5775 43.7498 30.7654 43.4897 31.8575 42.9873C32.9496 42.4849 33.9201 41.7522 34.7024 40.8394L45.3316 28.4394C45.5542 28.1802 45.7096 27.8703 45.7841 27.5368C45.8587 27.2034 45.8501 26.8568 45.7591 26.5275C45.6681 26.1982 45.4976 25.8963 45.2624 25.6484C45.0273 25.4005 44.7348 25.2143 44.4107 25.1061L40.3107 23.7394C39.3199 23.4168 38.2647 23.3436 37.2388 23.5264C36.2129 23.7092 35.2479 24.1423 34.4295 24.7874L27.7941 30.0936L26.5087 27.5207C25.82 26.1338 24.7568 24.9674 23.4394 24.1537C22.1219 23.3399 20.603 22.9114 19.0545 22.9165H8.33366C6.03574 22.9165 4.16699 24.7853 4.16699 27.0832V39.5832C4.16699 41.8811 6.03574 43.7499 8.33366 43.7499ZM8.33366 27.0832H19.0545C20.6441 27.0832 22.0712 27.9644 22.7816 29.3853L23.7128 31.2499H14.5837V35.4165H27.1128C27.4333 35.412 27.7484 35.3336 28.0337 35.1874L28.0399 35.1853L28.0482 35.1811H28.0545L28.0587 35.179H28.067L28.0691 35.1769C28.0878 35.1832 28.0753 35.1749 28.0753 35.1749C28.0962 35.1749 28.0795 35.1728 28.0795 35.1728H28.0816L28.0857 35.1707L28.092 35.1686L28.0962 35.1665L28.1003 35.1644L28.1066 35.1624L28.1107 35.1603C28.117 35.1603 28.1128 35.1582 28.1149 35.1582L28.1212 35.154L28.1253 35.1519L28.1295 35.1499L28.1357 35.1478L28.1399 35.1457H28.142L28.1462 35.1436L28.1524 35.1415L28.1566 35.1394C28.1753 35.1374 28.1628 35.1374 28.1628 35.1374L28.167 35.1353C28.247 35.0863 28.3235 35.032 28.3962 34.9728L37.0337 28.0624C37.5795 27.629 38.3316 27.4936 38.992 27.7144L40.1524 28.1019L31.542 38.1499C31.1458 38.5995 30.6587 38.9598 30.1127 39.2069C29.5668 39.454 28.9746 39.5823 28.3753 39.5832H8.33366V27.0832ZM33.3337 4.16652H33.2982C32.9587 4.17069 31.2024 4.24777 29.167 5.63527C27.1857 4.28527 25.4712 4.17694 25.067 4.1686L25.0045 4.16652H24.9962C23.3274 4.16652 21.7566 4.8186 20.5816 5.99569C19.4024 7.17694 18.7503 8.74569 18.7503 10.4165C18.7503 12.0874 19.4024 13.6561 20.5441 14.7999L27.6566 22.2707C27.8523 22.4738 28.0869 22.6354 28.3466 22.7457C28.6062 22.8559 28.8854 22.9127 29.1674 22.9125C29.4495 22.9123 29.7286 22.8552 29.9881 22.7445C30.2475 22.6339 30.482 22.472 30.6774 22.2686L37.7524 14.8353C38.9337 13.6561 39.5837 12.0874 39.5837 10.4165C39.5837 8.74569 38.9316 7.17694 37.7545 5.99777C37.1759 5.41576 36.4876 4.95424 35.7295 4.63991C34.9714 4.32559 34.1585 4.16469 33.3378 4.16652H33.3337ZM35.417 10.4165C35.417 10.9728 35.2003 11.4957 34.7691 11.9269L29.167 17.8124L23.5274 11.8894C23.1337 11.4957 22.917 10.9728 22.917 10.4165C22.917 9.86027 23.1337 9.33735 23.5295 8.94152C23.9066 8.55888 24.4194 8.3403 24.9566 8.33319C25.0087 8.33527 26.0024 8.39985 27.1795 9.3436C27.3475 9.47971 27.5191 9.63388 27.6941 9.8061L29.167 11.279L30.6399 9.8061C30.8149 9.63388 30.9864 9.47971 31.1545 9.3436C32.2566 8.45819 33.1878 8.34777 33.3462 8.33527C33.894 8.33813 34.4187 8.55669 34.8066 8.9436C35.2003 9.33735 35.417 9.86027 35.417 10.4165Z" fill="#5D328F"/>
          </svg>
          Crowdfunding/Fundraising</button>
        <button className="border-2 border-gray-50 w-52 rounded-lg h-10 flex justify-evenly items-center">
          <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.9587 2.0835L4.16699 12.5002V16.6668H43.7503V12.5002M33.3337 20.8335V35.4168H39.5837V20.8335M4.16699 45.8335H43.7503V39.5835H4.16699M20.8337 20.8335V35.4168H27.0837V20.8335M8.33366 20.8335V35.4168H14.5837V20.8335H8.33366Z" fill="#5D328F"/>
          </svg>
          Finance</button>

        </div>

        <h1 className="font-semibold sm:text-2xl text-center py-14">Partners & Clients</h1>
        </div>
    </section>
  )
}

export default Service;