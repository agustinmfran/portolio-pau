import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import es from "../../languages/es";
import en from "../../languages/en";
import fr from "../../languages/fr";
import HeaderProjects from "@/components/HeaderProjects";
import FooterProjects from "@/components/FooterProjects";

function Master() {
  const { locale } = useRouter();
  const lang = () => {
    switch (locale) {
      case "es":
        return es.projectsPage.master;
      case "fr":
        return fr.projectsPage.master;
      default:
        return en.projectsPage.master;
    }
  };
  const images1 = [
    "/projects/master/1.jpg",
    "/projects/master/2.jpg",
    "/projects/master/3.jpg",
    "/projects/master/4.png",
    "/projects/master/5.png",
    "/projects/master/6.png",
    "/projects/master/7.jpg",
    "/projects/master/8.jpg",
  ];
  const images2 = [
    "/projects/master/final/4.jpg",
    "/projects/master/final/5.jpg",
    "/projects/master/final/6.jpg",
    "/projects/master/final/7.jpg",
    "/projects/master/final/08.png",
    "/projects/master/final/09.png",
    "/projects/master/final/10.png",
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
          {images1.map((image, index) => (
            <div key={index}>
              <hr className="w-6 h-1 mx-auto my-4 bg-fuchsia-700 border-0 rounded" />
              <Image
                className="border-2 border-fuchsia-700 shadow-lg rounded-lg"
                src={image}
                alt="master 1"
                width={1000}
                height={1000}
              />
            </div>
          ))}

          <p className="text-lg pt-16">{lang().p2}</p>
          {images2.map((image, index) => (
            <div key={index}>
              <hr className="w-6 h-1 mx-auto my-4 bg-fuchsia-700 border-0 rounded" />
              <Image
                className="border-2 border-fuchsia-700 shadow-lg rounded-lg"
                src={image}
                alt="master 2"
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

export default Master;
