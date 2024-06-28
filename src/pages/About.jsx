import AboutMe from "../components/AboutMe";
import AboutSite from "../components/AboutSite";
import MyCard from "../components/MyCard";


const About = () => {
  return (
    <main className="h-auto w-full ">
      <h2 className="md:text-5xl text-4xl font-bold mt-20 mb-10   text-tema">Sobre</h2>
      <div className="flex justify-between  flex-wrap">
          <MyCard/>
        <div className="md:w-9/12 md:text-lg text-base text-gray-400">
          <AboutSite />
          <AboutMe />
        </div>
      </div>
    </main>
  );
};

export default About;
