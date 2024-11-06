import { Link } from "react-router-dom"
export const Info_card = () => {
  return (
    <>
    <div className="flex justify-center ">
      <div className="rounded-2xl text-white flex-wrap justify-evenly  sm:justify-between px-10  flex h-fit p-4 w-10/12  items-center" style={{background: "#776DF2"}}>
        <div>
            <h1 className="sm:text-4xl text-xl font-inter font-normal">Ready to transform <br /> 
            your company’s business?</h1>
            <p className="font-light sm:text-xl font-inter py-5">Let us transform your business in a short time.</p>
            <Link to="/contact"><button className="bg-black rounded-2xl w-36 h-8 text-white text-sm shadow-md">Get consultation </button></Link>
        </div>
        <div>
          <img className="w-64 h-48 " src="src/assets/learning.png" alt="decorative image" />
        </div>
      </div>
      </div>
    </>
  )
}
