import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div className="h-auto">
        <span className="text-tema font-semibold">Quem é Danilo Ferro?</span>
        <h2 className="md:text-4xl text-xl font-semibold mb-4 text-white">
          Um pouco sobre mim{" "}
        </h2>
        <ul className="flex flex-col gap-4">
          <li className="list-disc">
            Sou um desenvolvedor front-end em busca da minha primeira
            oportunidade na área. Atualmente, estou focado em aprender{" "}
            <span className="text-white">
              React, TypeScript, Tailwind CSS, Framer Motion, Figma e JavaScript
              (ES6).
            </span>
          </li>
          <li className="list-disc">
            Através dos meus estudos, adquiri uma sólida compreensão dos
            conceitos de desenvolvimento web e dediquei muito tempo para aplicar
            esses conceitos a cenários e aplicações do mundo real.
          </li>
          <li className="list-disc">
            Além de desenvolver aplicações front-end em meus tempos livres eu
            gosto de jogar jogos onlines com meus amigos.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
