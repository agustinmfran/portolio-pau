import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import es from "../../languages/es";
import en from "../../languages/en";
import HeaderProjects from "@/components/HeaderProjects";
import Footer from "@/components/Footer";

function Biblo() {
  const { locale } = useRouter();
  const lang = locale === "es" ? es.bibloSection : en.bibloSection;
  return (
    <>
      <Head>
        <title>Biblo</title>
        <meta name="description" content="Biblo project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderProjects />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <div className="flex flex-col justify-center items-center pt-40">
          <Link href="https://github.com/agustinmfran/biblo" target="_blank">
            <h1 className="text-center font-bold text-7xl mb-8 border-b-2 border-teal-500">
              Biblo{" "}
            </h1>
          </Link>
          <p className="text-center text-2xl">{lang.description}</p>
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
          <p className="text-center font-bold text-2xl mb-4">Home Page</p>
          <Image
            className="border border-teal-500"
            src="/biblofull.png"
            alt="biblo"
            width={1000}
            height={1000}
          />
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
          <p className="text-center font-bold text-2xl mb-4">Login</p>
          <Image
            className="border border-teal-500"
            src="/biblologin.png"
            alt="biblologin"
            width={1000}
            height={1000}
          />
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
          <p className="text-center font-bold text-2xl mb-4">Register</p>
          <Image
            className="border border-teal-500"
            src="/bibloregister.png"
            alt="biblregister"
            width={1000}
            height={1000}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Biblo;
