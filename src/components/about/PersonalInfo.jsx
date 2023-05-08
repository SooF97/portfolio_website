import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Soufien", hasColor: "" },
  { meta: "last name", metaInfo: "Msd", hasColor: "" },
  { meta: "Age", metaInfo: "26 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Moroccan", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Maarif, Casablanca Morocco", hasColor: "" },
  { meta: "phone", metaInfo: "+212-0708300546", hasColor: "" },
  { meta: "Email", metaInfo: "soufien.mosad97@hotmail.com", hasColor: "" },
  { meta: "langages", metaInfo: "French, English, Spanish, Arabic", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
