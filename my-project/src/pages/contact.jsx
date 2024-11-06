

const Contact = () => {
  return (
    <>
    <div className="flex pt-20  flex-col font-inter items-center mx-auto w-[90%]">
        <div className="h-screen flex flex-col items-center">           
          <h1 className=" font-semibold text-3xl my-6">Let’s build something great together</h1>
          <p className="mb-8 ">Have a question, suggestion, or just want to chat?
            We&apos;d love to hear from you. Feel free to reach out to us!</p>
            <div className="rounded-md bg-[#F8F8F8]  sm:w-[80%] w-[100%] :h-fit py-10">
             <form action="" className="w-full h-full flex flex-col justify-around gap-6 items-center">
            <h1 className="font-bold text-2xl my-4 text-center">Let&apos;s get in touch.</h1>
            <div className="flex sm:flex-row flex-col sm:gap-14 gap-4 w-full justify-center items-center">
                <input className="bg-white rounded-lg sm:w-2/6 w-[75%]  h-10 p-4 border-2 border-gray-100" type="text" placeholder="first name*" />
                <input className="bg-white rounded-lg sm:w-2/6 w-[75%] h-10 p-4 border-2 border-gray-100" type="text" placeholder="last name*" />
            </div>
            <input className="bg-white rounded-lg w-9/12 h-10 p-4 border-2 border-gray-100" type="email" placeholder="email*" />
            <input className="bg-white rounded-lg w-9/12 h-10 p-4 border-2 border-gray-100" type="text" placeholder="subject*" />
            <textarea className="bg-white rounded-lg  w-9/12 p-3 border-2 border-gray-100" type="text" placeholder="your message*" />
            <button className="bg-black rounded-xl text-white w-36 h-9">send</button>
            </form>
        </div>
        </div>
   
    <div className="flex flex-wrap items-center flex-col">
    <img className="sm:w-72 sm:h-72 w-28" src="src/assets/Logo.white.png" alt="logo" />
    <div className="flex justify-around flex-wrap  items-start gap-4 m-5">
    <div>
    <div className="flex items-start gap-4 p-2 ">
        <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7917 22.4792C16.7917 28.375 21.625 33.1875 27.5208 36.2083L32.1042 31.625C32.6667 31.0625 33.5 30.875 34.2292 31.125C36.5625 31.8958 39.0833 32.3125 41.6667 32.3125C42.8125 32.3125 43.75 33.25 43.75 34.3958V41.6667C43.75 42.8125 42.8125 43.75 41.6667 43.75C22.1042 43.75 6.25 27.8958 6.25 8.33333C6.25 7.1875 7.1875 6.25 8.33333 6.25H15.625C16.7708 6.25 17.7083 7.1875 17.7083 8.33333C17.7083 10.9375 18.125 13.4375 18.8958 15.7708C19.125 16.5 18.9583 17.3125 18.375 17.8958L13.7917 22.4792Z" fill="black"/>
        </svg>
        <div>
            <p>+2519934660505</p>
            <p>+251933260505</p>
            <p>+251911375766</p>            
        </div>
        </div> 
        <div className="flex gap-4 items-start p-2 py-5">
            <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.667 8.3335H8.33366C6.04199 8.3335 4.18783 10.2085 4.18783 12.5002L4.16699 37.5002C4.16699 39.7918 6.04199 41.6668 8.33366 41.6668H41.667C43.9587 41.6668 45.8337 39.7918 45.8337 37.5002V12.5002C45.8337 10.2085 43.9587 8.3335 41.667 8.3335ZM40.8337 17.1877L26.1045 26.396C25.4378 26.8127 24.5628 26.8127 23.8962 26.396L9.16699 17.1877C8.95809 17.0704 8.77516 16.912 8.62926 16.7219C8.48336 16.5319 8.37754 16.3143 8.31819 16.0822C8.25884 15.8501 8.24721 15.6084 8.28399 15.3716C8.32076 15.1349 8.40519 14.9081 8.53216 14.705C8.65913 14.5018 8.826 14.3265 9.02267 14.1897C9.21934 14.0529 9.44172 13.9575 9.67636 13.9091C9.91099 13.8608 10.153 13.8605 10.3877 13.9084C10.6225 13.9563 10.845 14.0513 11.042 14.1877L25.0003 22.9168L38.9587 14.1877C39.1556 14.0513 39.3782 13.9563 39.6129 13.9084C39.8477 13.8605 40.0897 13.8608 40.3243 13.9091C40.5589 13.9575 40.7813 14.0529 40.978 14.1897C41.1747 14.3265 41.3415 14.5018 41.4685 14.705C41.5955 14.9081 41.6799 15.1349 41.7167 15.3716C41.7534 15.6084 41.7418 15.8501 41.6825 16.0822C41.6231 16.3143 41.5173 16.5319 41.3714 16.7219C41.2255 16.912 41.0426 17.0704 40.8337 17.1877Z" fill="black"/>
            </svg>
            <p>timetechnologiesplc1@gmail.com</p>
        </div> 
        <div className="flex items-start gap-4 p-2">
        <svg className="sm:w-7 sm:h-7 w-0 h-0"  viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.0003 23.9582C23.619 23.9582 22.2942 23.4094 21.3175 22.4327C20.3407 21.4559 19.792 20.1312 19.792 18.7498C19.792 17.3685 20.3407 16.0437 21.3175 15.067C22.2942 14.0902 23.619 13.5415 25.0003 13.5415C26.3817 13.5415 27.7064 14.0902 28.6832 15.067C29.6599 16.0437 30.2087 17.3685 30.2087 18.7498C30.2087 19.4338 30.0739 20.1111 29.8122 20.743C29.5505 21.3749 29.1668 21.949 28.6832 22.4327C28.1995 22.9163 27.6254 23.3 26.9935 23.5617C26.3616 23.8235 25.6843 23.9582 25.0003 23.9582ZM25.0003 4.1665C21.1326 4.1665 17.4233 5.70296 14.6884 8.43786C11.9534 11.1728 10.417 14.8821 10.417 18.7498C10.417 29.6873 25.0003 45.8332 25.0003 45.8332C25.0003 45.8332 39.5837 29.6873 39.5837 18.7498C39.5837 14.8821 38.0472 11.1728 35.3123 8.43786C32.5774 5.70296 28.8681 4.1665 25.0003 4.1665Z" fill="black"/>
        </svg>
        <p>Meskel Flower (on the road to Dembel) <br />
            Infront of Dream Liner Hotel <br />
            Jems Building, 5th Floor
        </p>
        </div> 
    </div>
        <svg className="mt-5" width="2" height="180" viewBox="0 0 2 309" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.75" y1="-3.27835e-08" x2="0.750014" y2="309" stroke="#919191" strokeWidth="1.5"/>
        </svg>
    <div className="flex items-start gap-4 ">
        <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.0003 23.9582C23.619 23.9582 22.2942 23.4094 21.3175 22.4327C20.3407 21.4559 19.792 20.1312 19.792 18.7498C19.792 17.3685 20.3407 16.0437 21.3175 15.067C22.2942 14.0902 23.619 13.5415 25.0003 13.5415C26.3817 13.5415 27.7064 14.0902 28.6832 15.067C29.6599 16.0437 30.2087 17.3685 30.2087 18.7498C30.2087 19.4338 30.0739 20.1111 29.8122 20.743C29.5505 21.3749 29.1668 21.949 28.6832 22.4327C28.1995 22.9163 27.6254 23.3 26.9935 23.5617C26.3616 23.8235 25.6843 23.9582 25.0003 23.9582ZM25.0003 4.1665C21.1326 4.1665 17.4233 5.70296 14.6884 8.43786C11.9534 11.1728 10.417 14.8821 10.417 18.7498C10.417 29.6873 25.0003 45.8332 25.0003 45.8332C25.0003 45.8332 39.5837 29.6873 39.5837 18.7498C39.5837 14.8821 38.0472 11.1728 35.3123 8.43786C32.5774 5.70296 28.8681 4.1665 25.0003 4.1665Z" fill="black"/>
        </svg>
        <p>Meskel Flower (on the road to Dembel) <br />
            Infront of Dream Liner Hotel <br />
            Jems Building, 5th Floor
        </p>
        </div> 
    </div>
    
        
        
    </div>
   
    </div>
    </>
  )
}

export default Contact;