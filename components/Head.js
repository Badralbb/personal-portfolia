import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
const headItems = [{}];
export const Head = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-3xl">&lt;SS/&gt;</div>

        <IoIosMenu className="size-6" />
      </div>
      <HeadInformation />
    </div>
  );
};

const HeadInformation = () => {
  return (
    <div className="mt-16 flex flex-col gap-12">
      <div className="max-w-[280px] h-[280px] mx-auto w-full bg-gray-200 relative">
        <Image
          src={"/images/Pic.png"}
          width={240}
          height={280}
          className="absolute top-[-20px] left-5"
        />
      </div>
      <div>
        <h1 className="mb-2 text-">Hi, I’m Sagar 👋</h1>
        <p>
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
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
      <div></div>
    </div>
  );
};
