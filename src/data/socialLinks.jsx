import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const SocialLinks = [
    {
      icon: (
        <FaLinkedin className="size-7 hover:text-tema  transition-all duration-500" />
      ),
      link: "https://www.linkedin.com/in/danilo-ferro-alves-900099230/"
    },
    {
      icon: (
        <FaGithub className="size-7 hover:text-tema  transition-all duration-500" />
      ),
      link: "https://github.com/DaniloFerroAlves"
    },
    {
      icon: (
        <FaInstagram className="size-7 hover:text-tema  transition-all duration-500" />
      ),
      link: "https://www.instagram.com/dan_danferro/?hl=pt-br"
    },
  ];

  export default SocialLinks