import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const projectsData = [
    {
      id: 1,
      number: "01.",
      title:t('projects.digital_id.title'),
      description:t('projects.digital_id.description'),
      link: "#",
      imgSrc: "/images/fingerprint icon.png",
      bgColor: "bg-[#000456]", // Custom background color for Sitota
    },{
      id: 2,
      number: "02.",
      title:t('projects.school_erp.title'),
      description:t('projects.school_erp.description'),
      link: "#",
      imgSrc: "/images/Percentage.png",
      bgColor: "bg-[#D6260A]", // Custom background color for schoolerp
    },
     {
      id: 3,
      number: "03.",
      title:t('projects.timefund.title'),
      description:t('projects.timefund.description'),
      link: "#",
      imgSrc: "/images/timefund.png",
      bgColor: "bg-project1", // Custom background color for TimeFund
    },
    {
      id: 4,
      number: "04.",
      title: t('projects.sitota.title'),
      description:t('projects.sitota.description'),
      link: "#",
      imgSrc: "/images/sitota.png",
      bgColor: "bg-project2", // Custom background color for Sitota
    },{
      id: 5,
      number: "05.",
      title:t('projects.Financial.title'),
      description:t('projects.Financial.description'),
      link: "#",
      imgSrc: "/images/time_pay_logo_1.png",
      bgColor: "bg-[#0184F7]", // Custom background color for Sitota
    },
  ];
  
  return (
    
    <div className="px-4 md:px-8 lg:px-16 pt-24 pb-24 w-[90%] mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center pt-4  mb-8">{t('projects.topic')}</h2>
      <p className="text-justify text-gray-600 mb-12 max-w-3xl mx-auto">
      {t('projects.subtopic')}
      </p>

      <div className="space-y-12 ">
        {projectsData.map((project) => (
          <div key={project.id}
            className={`relative flex flex-col md:flex-row items-start bg-gray-50 p-8 md:p-12 lg:p-16 rounded-lg shadow-md min-h-[350px]`}
          >
           
            {/* Left Section with Number and Shapes */}
            <div className="flex-shrink-0 flex flex-col items-center pr-8 space-y-6 mb-4 md:mb-0">
              {/* Diamond Shape for Number */}
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <div className={`absolute inset-0 transform rotate-45 ${project.bgColor} flex items-center justify-center`}>
                  <span className="transform -rotate-45 text-lg md:text-xl font-semibold text-white">{project.number}</span>
                </div>
              </div>
              
              {/* Rectangle Under Diamond */}
              <div className="space-y-2">
                <div className={`w-4 md:w-4.5 pt-3 h-16 md:h-20 ${project.bgColor} rounded-lg`}></div>
                
                {/* Small Circle Dots Below Rectangle */}
                <div className={`py-2 w-4 h-4 ${project.bgColor} rounded-full`}></div>
                <div className={`w-4 h-4 ${project.bgColor} rounded-full`}></div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 md:ml-8 space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
                {project.description}
              </p>
              <a href={project.link} className="text-blue-600 hover:underline flex items-center text-sm">
                Visit website <span className="ml-1">→</span>
              </a>
            </div>
          
            {/* Right Diamond Image */}
          <div>  <div className="absolute pr-8 top-4 right-4 md:top-8 md:right-8">
              <img src={project.imgSrc} alt={`${project.title} icon`} className="w-12 h-12 md:w-24 md:h-24" />
            </div>

            {/* Bottom Right Diamond Polygon */}
            <div className={`absolute pr-8 bottom-4 right-4 md:bottom-8 md:right-8 opacity-50`}>
              <div className={`inset-0 transform rotate-45 ${project.bgColor} w-12 h-12 md:w-16 md:h-16`}></div>
            </div>
          </div>
          </div>
        ))}
      
      </div>
    </div>
  );
};

export default Projects;
