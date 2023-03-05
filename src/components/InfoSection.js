import Image from "next/image";
import { useRouter } from "next/router";
import es from "../languages/es";
import en from "../languages/en";
import fr from "../languages/fr";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const InfoSection = () => {
  const { locale } = useRouter();
  const lang = () => {
    switch (locale) {
      case "es":
        return es.infoSection;
      case "fr":
        return fr.infoSection;
      default:
        return en.infoSection;
    }
  };
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-20 md:flex-row md:space-x-4 md:text-left md:py-24">
        <div className="md:pl-16 md:w-1/2 md:mt-2 md:justify-center lg:pl-36">
          <Image
            className="rounded-full shadow-2xl"
            src="/perfil.jpeg"
            alt="me"
            width={300}
            height={300}
          />
        </div>
        <div className="md:mt-2 md:w-3/5 md:pr-12">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
            {lang().title}
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            {lang().im}{" "}
            <span className="font-semibold text-fuchsia-700">
              {lang().profession}
            </span>{" "}
            {lang().p}
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-fuchsia-700 rounded shadow hover:bg-fuchsia-800 cursor-pointer"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            {lang().projects}
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center ">
        <Link
          className="cursor-pointer"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default InfoSection;
