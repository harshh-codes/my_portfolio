import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const SocialIcon = ({ href, imgSrc, alt, gradientClass }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-16 h-16 rounded-full flex justify-center items-center cursor-pointer ${gradientClass}`}
  >
    <img
      src={imgSrc}
      alt={alt}
      className="w-3/5 h-3/5 object-contain invert hover:scale-110 transition-transform duration-300"
    />
  </a>
);

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Connect with me</p>
        <h3 className={styles.sectionHeadText}>Social Links.</h3>

        <div className="mt-12 flex flex-wrap gap-8">
          {/* GitHub */}
          <SocialIcon
            href="https://github.com/harshh-codes"
            imgSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
            alt="GitHub"
            gradientClass="violet-gradient p-[1px]"
          />

          {/* LinkedIn */}
          <SocialIcon
            href="https://www.linkedin.com/in/harshhjadhav"
            imgSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            gradientClass="blue-gradient p-[1px]"
          />

          {/* Twitter/X */}
          <SocialIcon
            href="https://x.com/harshhsayss"
            imgSrc="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/x.svg"
            alt="Twitter/X"
            gradientClass="green-pink-gradient p-[1px]"
          />

          {/* Instagram */}
          <SocialIcon
            href="https://www.instagram.com/harshh_jadhav/"
            imgSrc="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/instagram.svg"
            alt="Instagram"
            gradientClass="orange-gradient p-[1px]"
          />
        </div>

        <p className="mt-8 text-secondary text-[17px]">
          Feel free to connect with me on any of these platforms!
        </p>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
