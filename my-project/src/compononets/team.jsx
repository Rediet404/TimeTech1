import { useTranslation } from 'react-i18next';
// Sample data for team members, including an image URL for each member

const TeamSection = () => {
  const { t } = useTranslation();
    const teamMembers = [
  { name: t('about.team_1'), 
    title: t('about.team_1_title'), 
    img: "/images/Daniel Tesfayesus.png" },
  { name: t('about.team_2'), 
    title: t('about.team_2_title'), 
    img: "/images/Berhanu Sahle.jpg" },
  { name: t('about.team_3'), 
    title: t('about.team_3_title'), img: "/images/Tekalign Melese.png" },
  { name: t('about.team_4'), 
    title: t('about.team_4_title'), img: "images/Ashenafi Wube.png" },
  { name: t('about.team_5'), 
    title: t('about.team_5_title'), img: "images/Anteneh Woldesilase.png" }
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
      <div className="relative w-40 h-40 mx-auto mb-4">
        {/* Circular Image */}
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover rounded-full border-4 shadow-violet-400 shadow-md"
        />
        {/* Decorative Outer Glow */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-300 opacity-30 blur-lg"></div>
      </div>
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-black">{member.title}</p>
    </div>
  ))}
</div>

    </section>
  );
};

export default TeamSection;
