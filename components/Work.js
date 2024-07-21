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
      <div className="text-center">
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
        <div className="md:flex pt-6 md:pt-12 rounded-xl shadow" key={index}>
          <div
            className={`p-8 bg-[#F9FAFB] max-w-[576px] flex-1 ${
              index % 2 === 1 ? "order-10" : ""
            }`}
          >
            <Image
              className="w-full"
              width={480}
              height={100}
              src={"/images/Picture.png"}
            />
          </div>
          <div className="p-8 flex-1 flex flex-col gap-6">
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <div className="flex gap-2 flex-wrap">
              {item.skill.map((item, index) => (
                <div className="bg-[#E5E7EB] px-6 py-1 rounded-xl" key={index}>
                  {item}
                </div>
              ))}
            </div>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 19V25C24 25.5304 23.7893 26.0391 23.4142 26.4142C23.0391 26.7893 22.5304 27 22 27H11C10.4696 27 9.96086 26.7893 9.58579 26.4142C9.21071 26.0391 9 25.5304 9 25V14C9 13.4696 9.21071 12.9609 9.58579 12.5858C9.96086 12.2107 10.4696 12 11 12H17"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 9H27V15"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 20L27 9"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
