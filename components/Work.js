import Image from "next/image";
import { BUttons } from "./Buttons";
const skills = [
  {
    title: "Fiskil",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas necurna ac tellus volutpat viverra. Vestibulum ante ipsum primis infaucibus orci luctus et ultrices posuere cubilia curae.",
    skill: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    title: "Fiskil",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas necurna ac tellus volutpat viverra. Vestibulum ante ipsum primis infaucibus orci luctus et ultrices posuere cubilia curae.",
    skill: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    title: "Fiskil",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas necurna ac tellus volutpat viverra. Vestibulum ante ipsum primis infaucibus orci luctus et ultrices posuere cubilia curae.",
    skill: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
];
console.log(skills.skill);
export const Work = () => {
  return (
    <div id="work">
      <div className="mb-4">
        <BUttons title={"work"} />
      </div>
      <div className="mb-6 text-center">
        Some of the noteworthy projects I have built:
      </div>
      <div>
        <Works />
      </div>
    </div>
  );
};

function Works() {
  return (
    <div>
      {skills.map((item, index) => (
        <div key={index}>
          <div className="p-8 bg-[#F9FAFB] mix-w-[279px] max-w-[480px]">
            <Image
              className="w-full"
              width={270}
              height={100}
              src={"/images/Picture.png"}
            />
          </div>
          <div className="p-8 flex flex-col gap-6">
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            {skills.map((item, index) => (
              <div className="flex gap-2">{item.skill}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
