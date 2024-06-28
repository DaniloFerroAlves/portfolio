import SocialLinks from "../data/socialLinks";

const MyCard = () => {
  return (
    <div className="w-fit  flex flex-col gap-2 text-lg md:mb-0 mb-10">
      <div className="flex md:flex-col md:gap-0 gap-5">
      <img src="/images/eu.png" alt="" className="md:w-56 w-24 object-contain  mb-4 rounded-full" />
        <div className="flex flex-col justify-evenly text-base">
        <h1 className="md:text-2xl font-semibold ">Danilo Ferro Alves</h1>
        <h2 className="font-semibold text-gray-400">Desenvolvedor Front-end</h2>
        <ul className="flex gap-4 mt-4">
          {SocialLinks.map((social) => (
            <li className="text-gray-500 " key={social.icon}>
              <a href={social.link} target="_blank">{social.icon}</a>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
