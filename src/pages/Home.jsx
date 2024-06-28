import { RiArrowRightUpLine } from "react-icons/ri";


const Home = () => {
  return (
    <div className="flex items-center md:gap-52 gap-20 flex-col h-auto mt-20">
      <div className="md:text-6xl text-xl  font-bold flex flex-col gap-4">
        <h2><span className="text-tema">Bem-vindo</span> ao meu website.</h2>
        <h2>Welcome to <span className="text-tema">my</span> website.</h2>
        <h2>Bienvenidos a mi <span className="text-tema">website.</span></h2>
      </div>
      <div className="flex flex-col self-start">
        <h1 className="md:text-4xl text-xl font-bold mb-4">Olá Devs! Eu sou o Danilo Ferro</h1>
        <div  className="md:text-lg base">
          <p className="text-gray-400">
            Atualmente sou um estudante de Análise e Desenvolvimento de Sistemas
            com um foco forte em front-end e design de sistemas.
          </p>
          <a href="mailto:danilaoferraoalves@gmail.com" className="btn w-fit text-tema flex items-center gap-2 justify-center mt-2 md:text-lg">Entrar em contato <RiArrowRightUpLine/>  </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
