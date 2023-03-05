import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function PageLayout({ children }) {
  return (
    <>
      <Head>
        <title>Agustín Franco</title>
        <meta name="description" content="Agustín Franco Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        {children}
      </main>
      <Footer />
    </>
  );
}
