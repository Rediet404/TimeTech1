
import { useTranslation } from 'react-i18next';
// Sample data for team members, including an image URL for each member

const TeamSection = () => {
  const { t } = useTranslation();
    const teamMembers = [
  { name: t('about.team_1'), 
    title: t('about.team_1_title'), 
    img: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg" },
  { name: "Daniel Tesfayesus",
    title: "General Manager", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs3RVyq9BwOt2dCo11v9PS_lzhxRiYwVu-h-xo7UHSe1mqS7CVuzOl7Th-lqaf-WgaJPk&usqp=CAU" },
  { name: "Daniel Tesfayesus", title: "General Manager", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCwxVGrqxrpaIBf61FuU89BKmah8ILGOTYlAHFnj9KyYdMos7ZdGFZgWr-HRmMO9_q5uM&usqp=CAU" },
  { name: "Daniel Tesfayesus", title: "General Manager", img: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=OnzQRmrTWj779-DI4_aEykdTKuwL-Ubphs1cdQ3tyxE=" },
  { name: "Daniel Tesfayesus", title: "General Manager", img: "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg=" },
  { name: "Daniel Tesfayesus", title: "General Manager", img: "https://media.istockphoto.com/id/1501770003/photo/happy-handsome-young-indian-man-head-shot-front-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=e8Ag8EsPlHD4gKmJGaZApE5d4m6bV6BWnQqwjIaKXoA=" },
];
 return (
    <section className="py-16 px-4 text-left w-10/12 mx-auto">
      <div className="text-justify">  
      <h2 className="text-2xl font-bold mb-4">{t('about.team')}</h2>
      <p className="text-black text-justify text  mb-12 ">
      {t('about.team_detail')}
      </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-black">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
