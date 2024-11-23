import { useTranslation } from 'react-i18next';
// Sample data for team members, including an image URL for each member

const TeamSection = () => {
  const { t } = useTranslation();
    const teamMembers = [
  { name: t('about.team_1'), 
    title: t('about.team_1_title'), 
    img: "https://img.favpng.com/6/14/2/account-icon-avatar-icon-man-icon-png-favpng-d9YxzGw3UPA07dE7sAQyMSiNk.jpg" },
  { name: "Daniel Tesfayesus",
    title: "General Manager", 
    img: "https://img.favpng.com/6/14/2/account-icon-avatar-icon-man-icon-png-favpng-d9YxzGw3UPA07dE7sAQyMSiNk.jpg" },
  { name: "Daniel Tesfayesus", title: "General Manager", img: "https://img.favpng.com/6/14/2/account-icon-avatar-icon-man-icon-png-favpng-d9YxzGw3UPA07dE7sAQyMSiNk.jpg" },
  { name: "Daniel Tesfayesus", title: "General Manager", img: "https://img.favpng.com/6/14/2/account-icon-avatar-icon-man-icon-png-favpng-d9YxzGw3UPA07dE7sAQyMSiNk.jpg" },
  { name: "Daniel Tesfayesus", title: "General Manager", img: "https://img.favpng.com/6/14/2/account-icon-avatar-icon-man-icon-png-favpng-d9YxzGw3UPA07dE7sAQyMSiNk.jpg" },
  { name: "Daniel Tesfayesus", title: "General Manager", img: "https://img.favpng.com/6/14/2/account-icon-avatar-icon-man-icon-png-favpng-d9YxzGw3UPA07dE7sAQyMSiNk.jpg" },
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
