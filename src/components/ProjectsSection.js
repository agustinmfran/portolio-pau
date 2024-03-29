import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import es from "../languages/es";
import en from "../languages/en";
import fr from "../languages/fr";
import { BsArrowUpRightSquare } from "react-icons/bs";
import Fade from "react-reveal/Fade";

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
    {
      name: lang().projects.urbano.title,
      image: "/miniatures/mini-urbano.jpg",
      link: "/projects/urbano",
    },
    {
      name: lang().projects.master.title,
      image: "/miniatures/mini-master.jpg",
      link: "/projects/master",
    },
    {
      name: lang().projects.ciudad.title,
      image: "/miniatures/mini-ciudad.jpg",
      link: "/projects/ciudad",
    },
    {
      name: lang().projects.colegio.title,
      image: "/miniatures/mini-colegio.jpg",
      link: "/projects/colegio",
    },
    {
      name: lang().projects.conjunto.title,
      image: "/miniatures/mini-conjunto.jpg",
      link: "/projects/conjunto",
    },
    {
      name: lang().projects.mdq.title,
      image: "/miniatures/mini-mdq.jpg",
      link: "/projects/mdq",
    },
    {
      name: lang().projects.escuela.title,
      image: "/miniatures/mini-escuela.jpg",
      link: "/projects/escuela",
    },
  ];

  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        <Link
          className="hover:text-fuchsia-700 hover:transition duration-300 cursor-pointer"
          href="https://issuu.com/arqpaulagil/docs/brochure.pptx"
          target="_blank"
        >
          {lang().title}{" "}
        </Link>
        <hr className="w-6 h-1 mx-auto my-4 bg-fuchsia-700 border-0 rounded" />
      </h1>
      <div className="flex flex-col space-y-28 md:pt-12">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <Fade bottom>
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
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
