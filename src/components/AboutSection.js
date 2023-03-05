import { useRouter } from "next/router";
import es from "../languages/es";
import en from "../languages/en";

const skills = [
  "AutoCAD",
  "Office",
  "Adobe Photoshop",
  "3DsMax",
  "Lumion",
  "SketchUp",
  "Vray",
  "Atlantis",
];

const AboutSection = () => {
  const { locale } = useRouter();
  const lang = locale === "es" ? es.aboutSection : en.aboutSection;
  return (
    <section id="about">
      <div className="py-12 pb-12 md:pt-16 md:pb-24">
        <h1 className="text-center font-bold text-4xl">
          {lang.title}{" "}
          <hr className="w-6 h-1 mx-auto my-4 bg-fuchsia-700 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-10 item-stretch justify-center align-top md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:ml-10">
            <h1 className="text-center font-bold text-2xl mb-6 md:text-left">
              {lang.title2}
            </h1>
            <p>
              {lang.p1} <span className="font-bold">{lang.span1}</span>,
              <span className="font-bold">{lang.span2}</span>, {lang.and}
              <span className="font-bold">{lang.span3}</span>
              {lang.p2}
            </p>
            <br />
            <p>{lang.p3}</p>
            <br />
            <p>{lang.p4}</p>
            <br />
            <p>
              {lang.p5}{" "}
              <span className="font-bold text-fuchsia-700">{lang.span4}</span>{" "}
              {lang.p6}
            </p>
          </div>
          <div className="flex flex-col pt-8">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              {lang.skills}
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((skill, index) => {
                return (
                  <p
                    key={index}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {skill}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="pt-8">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Languages
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              <p className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
                English
              </p>
              <p className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
                Spanish
              </p>
              <p className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
                French
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
