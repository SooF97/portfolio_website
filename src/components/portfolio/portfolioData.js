import Image1 from "../../../public/assets/img/portfolio/voting_dapp.png";
import Image2 from "../../../public/assets/img/portfolio/doc_minter.png";
import Image3 from "../../../public/assets/img/portfolio/nft_market.png";

const PortfolioData = [
  {
    id: 1,
    type: "Voting dApp",
    image: Image1,
    tag: ["Voting"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Voting dApp",
        client: "Fiverr Client",
        language: "Javascript, Nextjs, Solidity, Ethers, Hardhat",
        preview: "www.polkaboom.com",
        link: "https://www.polkaboom.com/",
      },
    ],
  },
  {
    id: 2,
    type: "Document minter",
    image: Image2,
    tag: ["logo"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Document Minter",
        client: "Phd student",
        language: "Javascript, React, Solidity, Ethers, Hardhat",
        preview: "www.Docminter.com",
        link: "https://storied-sprite-da4a06.netlify.app",
      },
    ],
  },
  {
    id: 3,
    type: "NFT Market",
    image: Image3,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Nft market",
        client: "Fiverr Client",
        language: "Javascript, Nextjs, Solidity, Ethers, Hardhat",
        preview: "www.Nft_Market.com",
        link: "https://legendary-duckanoo-5bf280.netlify.app/",
      },
    ],
  },
];

export default PortfolioData;
