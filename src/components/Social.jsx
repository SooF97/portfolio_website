import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/souf.msd",
  },
  { iconName: "fa fa-twitter", link: "https://twitter.com/The_S00F" },
  
  { iconName: "fa fa-instagram", link: "https://instagram.com/soufien.msd" },
  { iconName: "fa fa-github", link: "https://github.com/SooF97" }
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
