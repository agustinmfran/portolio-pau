import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import es from "../../languages/es";
import en from "../../languages/en";
import fr from "../../languages/fr";
import HeaderProjects from "@/components/HeaderProjects";
import FooterProjects from "@/components/FooterProjects";

function Conjunto() {
  const { locale } = useRouter();
  const lang = () => {
    switch (locale) {
      case "es":
        return es.projectsPage.conjunto;
      case "fr":
        return fr.projectsPage.conjunto;
      default:
        return en.projectsPage.conjunto;
    }
  };
  const images = [
    "/projects/conjunto/1.png",
    "/projects/conjunto/2.png",
    "/projects/conjunto/3.png",
    "/projects/conjunto/4.png",
    "/projects/conjunto/5.png",
    "/projects/conjunto/6.png",
    "/projects/conjunto/7.png",
    "/projects/conjunto/8.png",
    "/projects/conjunto/9.png",
    "/projects/conjunto/10.png",
    "/projects/conjunto/11.png",
    "/projects/conjunto/12.png",
    "/projects/conjunto/13.png",
    "/projects/conjunto/14.png",
    "/projects/conjunto/15.png",
    "/projects/conjunto/16.png",
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
                alt="conjunto"
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

export default Conjunto;
