import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { VscGithubAlt } from "react-icons/vsc";
import { LuTwitter } from "react-icons/lu";
import { FaFigma } from "react-icons/fa";
import Link from "next/link";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { FiSun } from "react-icons/fi";

const HeadItems = [
  { title: "about", link: "#about" },
  { title: "work", link: "#work" },
  { title: "testimonial", link: "#testimonial" },
  { title: "contact", link: "#contact" },
];
export const Head = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-3xl">&lt;SS/&gt;</div>
        <div className="hidden md:flex gap-6 items-center ">
          {HeadItems.map((item, link) => (
            <Link href={item.link} key={link}>
              {item.title}
            </Link>
          ))}
          <svg
            width="1"
            height="24"
            viewBox="0 0 1 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0.5" y1="24" x2="0.5" stroke="#F3F4F6" />
          </svg>
          <FiSun />
          <AwesomeButton>Download Cv</AwesomeButton>
        </div>

        <IoIosMenu className="size-6 md:hidden" />
      </div>
      <HeadInformation />
    </div>
  );
};

const HeadInformation = () => {
  return (
    <div className="flex flex-col gap-12 md:flex-row items-center md:justify-between py-16">
      <div className="max-w-[260px] md:max-w-[240px] bg-[black] w-full md:order-10 flex justify-center md:mt-[25px]">
        <Image
          src={"/images/Pic.png"}
          width={240}
          height={280}
          className="relative top-[-15px] w-[90%] md:w-[100%] md:left-[-20px] md:top-[-25px]"
        />
      </div>

      <div className="flex flex-col gap-12 md:w-[60%]">
        <div>
          <h1 className="mb-2 text-[#111827]">Hi, I’m Sagar 👋</h1>
          <p>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <IoLocationOutline />
            <p>Ahmedabad, India</p>
          </div>
          <div className="flex gap-2 items-center px-1">
            <div className="bg-green-500 rounded-full w-2 h-2"></div>
            <p>Available for new projects</p>
          </div>
        </div>
        <div className="flex gap-2">
          <VscGithubAlt />
          <LuTwitter />
          <FaFigma />
        </div>
      </div>
    </div>
  );
};
