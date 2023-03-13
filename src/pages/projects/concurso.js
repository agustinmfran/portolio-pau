import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import es from "../../languages/es";
import en from "../../languages/en";
import fr from "../../languages/fr";
import HeaderProjects from "@/components/HeaderProjects";
import FooterProjects from "@/components/FooterProjects";

function Concurso() {
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
      <Head>
        <title>Paula Gil</title>
      </Head>
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
          <Link
            href="https://www.dropbox.com/s/jet80agtmtq8cxm/LAMINA.jpg?dl=0"
            target="_blank"
          >
            <Image
              className="border-2 border-fuchsia-700 shadow-lg rounded-lg"
              src="/projects/concurso/concurso.jpg"
              alt="concurso"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
      </main>
      <FooterProjects />
    </>
  );
}

export default Concurso;
