import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import es from "../languages/es";
import en from "../languages/en";
import fr from "../languages/fr";
import { BsArrowUpRightSquare } from "react-icons/bs";

const ProjectsSection = () => {
  const { locale } = useRouter();
  const lang = () => {
    switch (locale) {
      case "es":
        return es.projectsSection;
      case "fr":
        return fr.projectsSection;
      default:
        return en.projectsSection;
    }
  };

  const projects = [
    {
      name: lang().projects.concurso.title,
      image: "/miniatures/mini-concurso.jpg",
      link: "/projects/concurso",
    },
    {
      name: lang().projects.anforas.title,
      image: "/miniatures/mini-anforas.png",
      link: "/projects/anforas",
    },
    {
      name: lang().projects.sierras.title,
      image: "/miniatures/mini-sierras.jpg",
      link: "/projects/sierras",
    },
  ];

  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        <Link
          href="https://issuu.com/arqpaulagil/docs/brochure.pptx"
          target="_blank"
        >
          {lang().title}{" "}
        </Link>
        <hr className="w-6 h-1 mx-auto my-4 bg-fuchsia-700 border-0 rounded" />
      </h1>
      <div className="flex space-y-28 w-auto h-auto">
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vRuwUYIGKECo74SPj9XqTMVP11IFi9_pZ55OE6Po4gvEs_Y9AkMMe_a1Csd5S8_9VHM7wzX0tuHBPhv/embed?start=true&loop=true&delayms=3000&rm=minimal"
          width={960}
          height={569}
        ></iframe>
      </div>
      <div className="flex flex-col space-y-28 md:pt-12">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="mt-8 md:w-1/2">
                  <Link href={project.link} target="_blank">
                    <Image
                      src={project.image}
                      alt="project-image"
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="mt-12 md:w-1/2">
                  <h1 className="text-4xl font-bold md-6 pb-4">
                    {project.name}
                  </h1>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
