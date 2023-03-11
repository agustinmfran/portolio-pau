import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import es from "../../languages/es";
import en from "../../languages/en";
import fr from "../../languages/fr";
import HeaderProjects from "@/components/HeaderProjects";
import FooterProjects from "@/components/FooterProjects";

function Biblo() {
  const { locale } = useRouter();
  const lang = () => {
    switch (locale) {
      case "es":
        return es.projectsPage.concurso;
      case "fr":
        return fr.projectsPage.concurso;
      default:
        return en.projectsPage.concurso;
    }
  };
  return (
    <>
      <HeaderProjects />
      <main
        id="project"
        className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl"
      >
        <div className="flex flex-col justify-center items-center pt-40">
          <h1 className="text-center font-bold text-5xl mb-8 border-b-4 border-fuchsia-700">
            {lang().title}
          </h1>
          <p className="text-lg pb-8">
            <span className="text-fuchsia-700 font-bold">{lang().span1}</span>
            <br />
            {lang().p1} <br />
            <span className="text-fuchsia-700 font-bold">{lang().span2}</span>
            <br /> {lang().p2}
          </p>
          <Image
            className="border-2 border-fuchsia-700 shadow-lg rounded-lg"
            src="/projects/concurso/concurso.jpg"
            alt="concurso"
            width={1000}
            height={1000}
          />
        </div>
      </main>
      <FooterProjects />
    </>
  );
}

export default Biblo;
