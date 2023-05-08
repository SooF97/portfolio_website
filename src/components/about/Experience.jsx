import React from "react";

const experienceContent = [
  {
    year: "   2019 - 2020",
    position: " Blockchain and Crypto enthusiast",
    compnayName: "Learner",
    details: `I'm committed to driving innovation and sharing knowledge in the digital asset space`,
  },
  {
    year: "2020-2021",
    position: "Blockchain research",
    compnayName: "",
    details: `Specializing in blockchain research, I delve into the intricacies of decentralized technologies to uncover innovative applications and industry trends.`,
  },
  {
    year: "2021 - present",
    position: "Blockchain and web 3.0 developer",
    compnayName: "Mediassive",
    details: `I create cutting-edge decentralized applications leveraging the latest advancements in distributed ledger technology. Skilled in smart contracts, cryptocurrencies, and decentralized platforms, I build solutions that drive innovation and empower users in the Web 3.0 era.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
