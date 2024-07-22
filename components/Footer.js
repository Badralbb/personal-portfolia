import { BUttons } from "./Buttons";
import { FiMessageSquare } from "react-icons/fi";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import { LuTwitter } from "react-icons/lu";
import { FaFigma } from "react-icons/fa";
export const Footer = () => {
  return (
    <div id="contact" className="text-[#4B5563] dark:text-[#D1D5DB]">
      <div className="mb-4">
        <BUttons title={"Get in touch"} />
      </div>
      <div className="text-center mb-6">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </div>
      <div className="mb-6">
        <div className="flex gap-4 md:gap-5 mb-1 justify-center items-center">
          <FiMessageSquare />
          <div className="text-[#111827] text-4xl dark:text-[#F9FAFB]">reachsagarshah@gmail.com</div>
          <FaMobileScreenButton />
        </div>
        <div className="flex gap-4 md:gap-5 justify-center items-center">
          <FaPhoneVolume />
          <div className="text-[#111827] dark:text-[#F9FAFB] text-4xl">+91 8980500565</div>
          <FaMobileScreenButton />
        </div>
      </div>
      <div className="">
        <div className="text-center mb-2">
          You may also find me on these platforms!
        </div>
        <div className="flex gap-1 justify-center items-center">
          <VscGithubAlt />
          <LuTwitter />
          <FaFigma />
        </div>
      </div>
    </div>
  );
};
