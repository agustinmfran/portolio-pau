import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import es from "../../languages/es";
import en from "../../languages/en";
import fr from "../../languages/fr";
import HeaderProjects from "@/components/HeaderProjects";
import FooterProjects from "@/components/FooterProjects";

function Urbano() {
  const { locale } = useRouter();
  const lang = () => {
    switch (locale) {
      case "es":
        return es.projectsPage.urbano;
      case "fr":
        return fr.projectsPage.urbano;
      default:
        return en.projectsPage.urbano;
    }
  };
  const images1 = [
    "/projects/urbano/primera/1.jpg",
    "/projects/urbano/primera/2.jpg",
    "/projects/urbano/primera/3.jpg",
    "/projects/urbano/primera/4.jpg",
    "/projects/urbano/primera/5.jpg",
    "/projects/urbano/primera/6.jpg",
  ];
  const images2 = [
    "/projects/urbano/segunda/1.jpg",
    "/projects/urbano/segunda/2.jpg",
    "/projects/urbano/segunda/3.jpg",
    "/projects/urbano/segunda/4.jpg",
    "/projects/urbano/segunda/5.jpg",
    "/projects/urbano/segunda/6.jpg",
    "/projects/urbano/segunda/7.jpg",
    "/projects/urbano/segunda/8.jpg",
    "/projects/urbano/segunda/9.jpg",
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
          <h2 className="text-fuchsia-700 font-bold text-2xl">
            {lang().title2}
          </h2>
          <br />
          <p className="text-lg pb-8">{lang().p1}</p>
          {images1.map((image, index) => (
            <div key={index}>
              <hr className="w-6 h-1 mx-auto my-4 bg-fuchsia-700 border-0 rounded" />
              <Image
                className="border-2 border-fuchsia-700 shadow-lg rounded-lg"
                src={image}
                alt="urbano 1"
                width={1000}
                height={1000}
              />
            </div>
          ))}
          <h2 className="text-fuchsia-700 font-bold text-2xl pt-8">
            {lang().title3}
          </h2>
          <br />
          <p className="text-lg pb-8">{lang().p2}</p>
          {images2.map((image, index) => (
            <div key={index}>
              <hr className="w-6 h-1 mx-auto my-4 bg-fuchsia-700 border-0 rounded" />
              <Image
                className="border-2 border-fuchsia-700 shadow-lg rounded-lg"
                src={image}
                alt="urbano 1"
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

export default Urbano;
