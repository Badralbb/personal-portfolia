import Image from "next/image";
import { BUttons } from "./Buttons";
const Upwork = [
  {
    title: "Sr. Frontend Developer",
    listItem: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    Date: "Nov 2021 - Present",
  },
  {
    title: "Team Lead",
    listItem: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    Date: "Jul 2017 - Oct 2021",
  },
  {
    title: "Full Stack Developer",
    listItem: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    Date: "Dec 2015 - May 2017",
  },
];
export const Experience = () => {
  return (
    <div className="text-[#4B5563] dark:text-[#D1D5DB]">
      <div className="mb-4">
        <BUttons title={"Experience"} />
      </div>
      <div className="mb-6 text-center">
        Here is a quick summary of my most recent experiences:
      </div>
      <div className="flex flex-col gap-8 md:gap-12">
        {Upwork.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#1F2937] p-8 shadow rounded-xl flex flex-col gap-4 w-full md:flex-row justify-between max-w-[896px] mx-auto"
          >
            <div>
              <Image width={100} height={100} src={"/images/logo-upwork.png"} />
            </div>
            <div className="md:order-10 ">{item.Date}</div>
            <div className="max-w-[384px] w-[100%]">
              <h2 className="mb-4 text-[#111827] dark:text-[#F9FAFB] text-xl">{item.title}</h2>
              <ul className="flex flex-col gap-1 list-disc px-4">
                {item.listItem.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
