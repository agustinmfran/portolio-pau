import { Link } from "react-scroll/modules";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineCloudDownload,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 ">
          <Link
            to="project"
            className="hover:underline cursor-pointer"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            © 2023 Paula Gil
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a
            href="https://www.linkedin.com/in/paula-gil-0b2a4b162/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 "
              size={30}
            />
          </a>

          <a
            href="mailto:pauligilcas@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineMail
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500"
              size={30}
            />
          </a>

          <a
            href="https://drive.google.com/file/d/1P6Kte3tJA5CSsMjjdy9W-OGkeQuYuP7X/view?usp=share_link"
            download="Paula Gil CV.pdf"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineCloudDownload
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
