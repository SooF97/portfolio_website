import React from "react";

const educationContent = [
  {
    year: "2016",
    degree: "BACHELOR DEGREE ",
    institute: "HASSAN II HIGH SCHOOL",
    details: `Holding a Bachelor's degree in Mathematical Sciences, I possess a strong foundation in theoretical and applied mathematics, honed analytical skills, and proficiency in problem-solving.`,
  },
  
  {
    year: "2021",
    degree: "EMBEDDED SYSTEMS ENGINEER DEGREE",
    institute: "NAVAL ACADEMY",
    details: `With a degree in Embedded Systems Engineering, I have acquired expertise in designing, developing, and integrating hardware and software systems for a wide range of applications.`,
  },
  {
    year: "2022",
    degree: "ALCHEMY WEB 3.0 DEVELOPER CERTIFICATE",
    institute: "ALCHEMY",
    details: `An Alchemy Web 3.0 Developer Certificate attests to my proficiency in building decentralized applications using Alchemy's suite of powerful tools and APIs.`,
  },
 
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
