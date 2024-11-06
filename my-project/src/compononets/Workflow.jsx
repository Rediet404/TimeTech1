
import ConsultationIcon from '/icons/consultation.svg';
import PlanningIcon from '/icons/planning.svg';
import ExecutionIcon from '/icons/execution.svg';
import ReviewIcon from '/icons/review.svg';
import CreativityIcon from '/images/creativity.png';
import CredibilityIcon from '/images/credibility.png';
import CuriosityIcon from '/images/curiosity.png';

function Workflow() {
  return (
    <section className="text-center py-20 bg-white w-[85%] mx-auto">
      {/* Header */}
      <div className="mb-20">
        <h2 className="text-black uppercase tracking-wide text-xs">Workflow</h2>
        <h3 className="text-2xl font-semibold text-black ">Step by step of our Workflow</h3>

      </div>

      {/* Workflow Steps */}

      <div className="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0 mb-16">
        {/* Step 1 */}
        <div className="flex flex-col items-center min-w-[150px]">
          <img src={ConsultationIcon} alt="Consultation Icon" className="w-12 h-12 text-purple-500 mb-4" />
          <h4 className="font-semibold text-lg text-black text-start">Consultation</h4>
          <div className="p-4">
            <p className="text-black text-sm">Understanding your business</p>
            <p className="text-black text-sm">needs and goals.</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center px-2 shrink-0">
          <img src="/images/arrow1.png" alt="Arrow 1" className="w-16 md:w-20 lg:w-24" />
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center min-w-[150px]">
          <img src={PlanningIcon} alt="Planning Icon" className="w-12 h-12 text-gray-500 mb-4" />
          <h4 className="font-semibold text-lg text-black">Planning</h4>
          <div className="p-4">
            <p className="text-black text-sm">Creating an SRS and</p>
            <p className="text-black text-sm">SDS Document.</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center px-2 shrink-0">
          <img src="/images/arrow2.png" alt="Arrow 2" className="w-16 md:w-20 lg:w-24" />
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center min-w-[150px]">
          <img src={ExecutionIcon} alt="Execution Icon" className="w-12 h-12 text-yellow-500 mb-4" />
          <h4 className="font-semibold text-lg text-gray-800">Execution</h4>
          <div className="p-4">
            <p className="text-black text-sm">Building the product with</p>
            <p className="text-black text-sm">the utmost care.</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center px-2 shrink-0">
          <img src="/images/arrow4.png" alt="Arrow 4" className="w-16 md:w-20 lg:w-24" />
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center min-w-[150px]">
          <img src={ReviewIcon} alt="Review Icon" className="w-12 h-12 text-teal-500 mb-4" />
          <h4 className="font-semibold text-lg text-gray-800">Review</h4>
          <div className="p-4">
            <p className="text-black text-sm">Ensuring the product release</p>
            <p className="text-black text-sm">meets business needs.</p>
          </div>
        </div>
      </div>


{/* Values */}
     {/* Values */}
     <div className="flex flex-wrap sm:justify-evenly gap-4">
        {/* Creativity */}
        <div className="w-[330px] flex items-center gap-4 bg-workflow1_bg p-8 rounded-lg shadow-md border-2 border-workflow1">
          <img src={CreativityIcon} className="w-16 h-16 text-workflow1 mb-4 mx-auto" />
          <div  className='flex flex-col gap-8 items-start'>
            <h4 className="text-lg font-medium text-workflow1 mb-2">Creativity</h4>
            <p className="text-workflow1 text-justify">We bring innovation to every aspect of your business.</p>
          </div>
        </div>
        {/* Credibility */}
        <div className="w-[330px] flex items-center gap-4 bg-workflow2_bg p-8 rounded-lg shadow-md border-2 border-workflow2">
          <img src={CredibilityIcon} className="w-16 h-16 text-workflow2 mb-4 mx-auto" />
          <div className='flex flex-col gap-8 items-start'>
            <h4 className="text-lg font-medium text-workflow2 mb-2">Credibility</h4>
            <p className="text-workflow2 text-justify">We deliver on our promise every time with guarantee.</p>
          </div>
        </div>
        {/* Curiosity */}
        <div className="w-[330px] flex items-center gap-4 bg-workflow3_bg p-8 rounded-lg shadow-md border-2 border-workflow3">
          <img src={CuriosityIcon} className="w-16 h-16 text-teal-500  mb-4 mx-auto" />
          <div className='flex flex-col gap-8 items-start'>
            <h4 className="text-lg font-medium text-workflow3 mb-2 ">Curiosity</h4>

            <p className="text-workflow3 text-justify">We stay ahead in the ever-evolving tech space.</p>


          </div>
        </div>
      </div>
    </section>
  );
}

export default Workflow;