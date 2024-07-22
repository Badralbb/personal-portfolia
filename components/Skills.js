import Image from "next/image";
import { BUttons } from "./Buttons";
const logo = [
  { title: "Javascript", image: "/images/icon-javscript.png" },
  { title: "Typescript", image: "/images/Vector.svg" },
  { title: "React", image: "/images/icon-react.png" },
  { title: "Next.js", image: "/images/icon-nextjs.svg" },
  { title: "Node.js", image: "/images/icon-nodejs.svg" },
  { title: "Express.js", image: "/images/icon-express.svg" },
  { title: "Nest.js", image: "/images/icon-nest.svg" },
  { title: "Socket.io", image: "/images/icon-socket.svg" },
  { title: "PostgreSQl", image: "/images/icon-postgresql.svg" },
  { title: "MongoDB", image: "/images/icon-mongodb.svg" },
  { title: "Sass/Scss", image: "/images/icon-sass.svg" },
  { title: "Tailwindcss", image: "/images/icon-tailwindcss.svg" },
  { title: "Figma", image: "/images/icon-figma.svg" },
  { title: "Cypress", image: "/images/icon-cypress.svg" },
  { title: "Storybook", image: "/images/icon-storybook.svg" },
  { title: "Git", image: "/images/icon-git.svg" },
];
export const Skills = () => {
  return (
    <div id="skills" className="text-[#4B5563] dark:text-[#D1D5DB]">
      <div className="mb-4">
        <BUttons title={"Skills"} />
      </div>

      <div className="text-center mb-6">
        The skills, tools and technologies I am really good at:
      </div>
      <div className="flex gap-x-[60px] gap-y-2 flex-wrap items-center md:gap-x-[80px] md:gap-y-12">
        {logo.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 items-center">
            <Image className="dark:fill-white" width={64} height={64} src={item.image} />
            <div>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
