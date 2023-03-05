import { useRouter } from "next/router";
import Link from "next/link";
import es from "../languages/es";
import en from "../languages/en";

const ProjectsSection = () => {
  const { locale } = useRouter();
  const lang = locale === "es" ? es.projectsSection : en.projectsSection;

  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        <Link
          href="https://issuu.com/arqpaulagil/docs/brochure.pptx"
          target="_blank"
        >
          {lang.title}{" "}
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
    </section>
  );
};

export default ProjectsSection;
