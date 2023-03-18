import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import es from "../../languages/es";
import en from "../../languages/en";
import fr from "../../languages/fr";
import HeaderProjects from "@/components/HeaderProjects";
import FooterProjects from "@/components/FooterProjects";

function Escuela() {
  const { locale } = useRouter();
  const lang = () => {
    switch (locale) {
      case "es":
        return es.projectsPage.escuela;
      case "fr":
        return fr.projectsPage.escuela;
      default:
        return en.projectsPage.escuela;
    }
  };
  const images = [
    "/projects/escuela/0.jpg",
    "/projects/escuela/1.jpg",
    "/projects/escuela/2.jpg",
    "/projects/escuela/4.jpg",
    "/projects/escuela/5.jpg",
  ];
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
          <p className="text-lg pb-8">{lang().p1}</p>
          {images.map((image, index) => (
            <div key={index}>
              <hr className="w-6 h-1 mx-auto my-4 bg-fuchsia-700 border-0 rounded" />
              <Image
                className="border-2 border-fuchsia-700 shadow-lg rounded-lg"
                src={image}
                alt="escuela"
                width={1000}
                height={1000}
              />
            </div>
          ))}
        </div>
      </main>
      <FooterProjects />
    </>
  );
}

export default Escuela;
