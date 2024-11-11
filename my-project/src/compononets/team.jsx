import React from "react";

// Sample data for team members, including an image URL for each member
const teamMembers = [
  { name: "Daniel Tesfayesus", 
    title: "General Manager", 
    img: "https://via.placeholder.com/150" },
  { name: "Daniel Tesfayesus",
    title: "General Manager", 
    img: "https://via.placeholder.com/150" },
  { name: "Daniel Tesfayesus", title: "General Manager", img: "https://via.placeholder.com/150" },
  { name: "Daniel Tesfayesus", title: "General Manager", img: "https://via.placeholder.com/150" },
  { name: "Daniel Tesfayesus", title: "General Manager", img: "https://via.placeholder.com/150" },
  { name: "Daniel Tesfayesus", title: "General Manager", img: "https://via.placeholder.com/150" },
];

const TeamSection = () => {
  return (
    <section className="py-16 px-4 text-left w-10/12 mx-auto">
      <div className="text-justify">  
      <h2 className="text-2xl font-bold mb-4">MEET THE TEAM</h2>
      <p className="text-black text-justify text  mb-12 ">
        Meet our dedicated team of innovators and creatives. With diverse
        expertise and open communication, we thrive on collaboration. Each
        member contributes unique skills, fostering a dynamic and
        forward-thinking environment. Committed to excellence, we are a
        dedicated, bright, and creative team.
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
            <p className="text-gray-500">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
