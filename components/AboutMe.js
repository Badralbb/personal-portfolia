import Image from "next/image";
import { BUttons } from "./Buttons";

export const AboutMe = () => {
  return (
    <div id="about" className="py-16">
      <BUttons title={"about"} />
      <div className="flex flex-col gap-12 items-center md:flex-row md:items-start md:justify-between mt-12">
        <div className="max-w-[400px] flex md:flex-1 dark:bg-[#374151] bg-[#E5E7EB] w-full justify-center md:mt-[25px]">
          <Image
            src={"/images/Pic.jpg"}
            width={400}
            height={480}
            className="relative top-[-15px] w-[90%] md:w-[100%] md:right-[-20px] md:top-[-25px]"
          />
        </div>
        <div className="flex flex-col gap-6 md:w-[60%] text-[#4B5563] dark:text-[#D1D5DB]">
          <h1 className="text-[#111827] text-3xl dark:text-[#F9FAFB]">Curious about me? Here you have it:</h1>
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p>
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p>Finally, some quick bits about me.</p>
          <div className="flex gap-2.5 px-4">
            <ul className="flex-1 flex flex-col gap-2.5 list-disc">
              <li>B.E. in Computer Engineering</li>
              <li>Full time freelancer</li>
            </ul>
            <ul className="ml-4 flex-1 flex flex-col gap-2.5 list-disc">
              <li>Avid learner</li>
              <li>Aspiring indie hacker</li>
            </ul>
          </div>
          <p>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};
