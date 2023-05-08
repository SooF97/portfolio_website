import { useState } from "react";
import img1 from "../../public/assets/img/blog/blockchain.png";
import img2 from "../../public/assets/img/blog/nft.png";
import img3 from "../../public/assets/img/blog/blog-post-3.jpg";
import img4 from "../../public/assets/img/blog/blog-post-4.jpg";
import img5 from "../../public/assets/img/blog/blog-post-5.jpg";
import img6 from "../../public/assets/img/blog/blog-post-6.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "Blockchain : the Future of Decentralized Technology",
      commentor: "S00F ",
      date: "12 April 2023",
      tag: `blockchain, web 3.0, smart contracts, decentralization`,
      description1:
        "Blockchain technology has rapidly emerged as a game-changer in the world of digital innovation, poised to revolutionize industries and create new paradigms for conducting business. With its ability to provide secure, transparent, and decentralized solutions for data management and transaction processing, the potential applications of blockchain are immense. In this blog, we will delve into the exciting world of blockchain, exploring its current applications and envisioning its future possibilities in various sectors.",
      title1: "What is blockchain ?",
      description2:
        "At its core, blockchain is a distributed ledger technology (DLT) that allows data to be stored across a network of computers. Each block in the chain contains a list of transactions, with every block linked to its predecessor through a unique cryptographic hash. This chain of blocks ensures that once a transaction is added, it cannot be altered or deleted, creating a secure and tamper-proof record.The decentralization of blockchain technology means that no single entity has control over the entire network. This eliminates the need for intermediaries, such as banks or payment processors, reducing transaction fees and increasing the speed and efficiency of transactions. Moreover, the transparency and immutability of the blockchain make it highly resistant to fraud and cyberattacks.",
      title2: "Current Applications of Blockchain : ",
      description3:
        "Cryptocurrencies : Blockchain technology has become synonymous with cryptocurrencies, such as Bitcoin and Ethereum. As the underlying technology powering these digital assets, blockchain enables secure, peer-to-peer transactions, without the need for intermediaries like banks or financial institutions.",
      description4:
        "Supply Chain Management : Blockchain's ability to provide a transparent and tamper-proof record of transactions has made it a popular choice for supply chain management. Companies can track products from their origin to the end consumer, ensuring authenticity and reducing the risk of fraud or counterfeit goods.",
      description5:
        "Smart Contracts : Blockchain platforms like Ethereum have introduced the concept of smart contracts – self-executing contracts with the terms of the agreement between parties directly written into code. These contracts automatically execute when predefined conditions are met, enabling trustless transactions and reducing the need for intermediaries.",
      description6:
        "Identity Management : Blockchain technology can provide secure and decentralized solutions for identity management, allowing individuals to control their own digital identities. This can streamline processes such as identity verification and authentication, reducing fraud and increasing privacy.",
      title3: "Future of Blockchain",
      description7:
        "Decentralized Finance (DeFi) : Blockchain has the potential to democratize access to financial services by removing intermediaries and creating a more inclusive, decentralized financial ecosystem. DeFi platforms are already allowing users to lend, borrow, trade, and earn interest on their digital assets.",
      description8:
        "Voting Systems : Blockchain-based voting systems could offer enhanced security and transparency, reducing the risk of fraud and ensuring the integrity of electoral processes. By providing an immutable record of votes, blockchain can help restore trust in elections and other democratic processes.",
      description9:
        "Healthcare: Blockchain technology can revolutionize healthcare by providing a secure, decentralized platform for storing and sharing patient records. This could improve data interoperability, reduce errors, and streamline processes such as patient onboarding and medical research.",
      description10:
        "Internet of Things (IoT): Blockchain can provide a secure and scalable infrastructure for managing and authenticating IoT devices, enabling seamless communication and data exchange between connected devices. This could unlock new levels of efficiency and automation in industries like manufacturing, agriculture, and transportation.",
      title4: "Conclusion",
      description11:
        "The future of blockchain technology is incredibly promising, with the potential to disrupt traditional systems and create new, decentralized solutions across various industries. By embracing blockchain, we can build a more secure, transparent, and efficient digital ecosystem that empowers individuals and businesses alike. The possibilities are virtually limitless as blockchain technology continues to mature and evolve. ",
    },
    {
      id: 2,
      img: img2,
      title: "NFTs : Unlocking the Potential of Digital Art items",
      commentor: "S00F ",
      date: "20 April 2023",
      tag: `blockchain, NFTs, digitak collectibles, smart contracts`,
      description1:
        "Non-fungible tokens (NFTs) have taken the digital art and collectibles world by storm, introducing a new dimension to the way we buy, sell, and trade unique digital assets. This blog post explores the basics of NFTs, their various applications, and the potential they hold for transforming the creative and collectible industries.",
      title1: "What are NFTs ? ",
      description2:
        "NFTs are unique digital tokens that represent ownership of a specific asset, such as artwork, virtual real estate, or collectibles. Unlike cryptocurrencies like Bitcoin or Ethereum, NFTs are non-fungible, meaning each token has its distinct value and cannot be exchanged on a one-to-one basis with another NFT. NFTs are built on blockchain technology, which ensures the authenticity, ownership, and provenance of the digital asset.",
      title2: "Why NFTs matters ? ",
      description3:
        "Digital Ownership: NFTs allow creators to tokenize their work, granting buyers true ownership of the digital asset. This ownership can be verified on the blockchain, ensuring the asset's authenticity and uniqueness.",
      description4:
        "Royalties: NFTs enable creators to earn royalties every time their work is sold or transferred, providing a continuous revenue stream and incentivizing artistic innovation.",
      description5:
        "Accessibility: NFT marketplaces have democratized the world of art and collectibles, making it more accessible to a broader audience. Buyers and sellers can participate in a global marketplace without the barriers typically associated with traditional art and collectible markets.",
      description6:
        "Interoperability: NFTs can be bought, sold, and traded across different platforms, giving users more flexibility and freedom to engage with their digital assets.",
      title3: "NFT use cases",
      description7:
        "Digital Art: NFTs have empowered digital artists to monetize their creations, bringing a newfound recognition and value to the digital art space.",
      description8:
        "Collectibles: NFTs have given rise to digital collectibles, such as trading cards and virtual goods in video games, allowing collectors to own and trade unique digital assets with verifiable scarcity.",
      description9:
        "Virtual Real Estate: NFTs enable the ownership and trading of virtual land and properties in digital worlds, like Decentraland and The Sandbox.",
      description10:
        "Music and Videos: Musicians and filmmakers can tokenize their work as NFTs, granting fans exclusive access to limited edition releases, behind-the-scenes content, or special event tickets.",
      description10:
        "Domain Names: Digital domain names can be tokenized as NFTs, allowing for secure and decentralized ownership and trading of these valuable digital assets.",
      title4: "Conclusion",
      description11:
        "As NFTs continue to gain traction, they have the potential to revolutionize the creative and collectible industries by offering new revenue streams for artists and creators, expanding accessibility for collectors, and fostering innovative ways to engage with digital assets. However, it is essential to navigate the NFT space responsibly, considering issues such as copyright infringement, environmental concerns, and market volatility.By understanding the value and potential of NFTs, we can better appreciate the transformative power of this technology and its impact on the future of art, collectibles, and digital assets.",
    },
    // {
    //   id: 3,
    //   img: img3,
    //   title: "Everything You Need to Know About Web Accessibility",
    //   commentor: "steve ",
    //   date: "9 January 2020",
    //   tag: `wordpress, business, economy, design`,
    //   description1:
    //     "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //   description2:
    //     "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights. ",
    //   description3:
    //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    //   description4:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //   id: 4,
    //   img: img4,
    //   title: "How to Inject Humor & Comedy Into Your Brand",
    //   commentor: "Beker ",
    //   date: "15 March 2022",
    //   tag: `wordpress, business, economy, design`,
    //   description1:
    //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Suspendisse interdum consectetur libero id faucibu nisl. Lacus vel facilisis volutpat est velit egestas",
    //   description2:
    //     "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights. ",
    //   description3:
    //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    //   description4:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //   id: 5,
    //   img: img5,
    //   title: "Women in Web Design: How To Achieve Success",
    //   commentor: "Janntul ",
    //   date: "9 January 2021",
    //   tag: `wordpress, business, economy, design`,
    //   description1:
    //     "Jorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //   description2:
    //     "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights. ",
    //   description3:
    //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    //   description4:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //   id: 6,
    //   img: img6,
    //   title: "Evergreen versus topical content: An overview",
    //   commentor: "Hasan ",
    //   date: "9 January 2022",
    //   tag: `wordpress, business, economy, design`,
    //   description1:
    //     "Still ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //   description2:
    //     "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights. ",
    //   description3:
    //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    //   description4:
    //     "Still ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
