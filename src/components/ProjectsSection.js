import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import es from "../languages/es";
import en from "../languages/en";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const ProjectsSection = () => {
  const { locale } = useRouter();
  const lang = locale === "es" ? es.projectsSection : en.projectsSection;

  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        {lang.title}{" "}
        <hr className="w-6 h-1 mx-auto my-4 bg-fuchsia-700 border-0 rounded" />
      </h1>
      <div className="flex flex-col space-y-28"></div>
    </section>
  );
};

export default ProjectsSection;
