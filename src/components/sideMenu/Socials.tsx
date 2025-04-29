import Github from "../../assets/images/socials/github.svg";
import Linkedin from "../../assets/images/socials/linkedin.svg";

const Socials = () => {
  return (
    <section className="flex flex-row gap-3">
      <a
        href="https://github.com/anushka4408"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-6 h-6	max-w-full"
          src={Github}
          alt="Github icon"
          loading="lazy"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/anushkasingh4408/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-6 h-6	max-w-full"
          src={Linkedin}
          alt="Linkedin icon"
          loading="lazy"
        />
      </a>
    </section>
  );
};

export default Socials;
