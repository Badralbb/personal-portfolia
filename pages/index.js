import { AboutMe } from "@/components/AboutMe";
import { Head } from "@/components/Head";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
export default function Home() {
  return (
    <main className="px-4">
      <section className="max-w-[1280px] mx-auto">
        <Head />
        <AboutMe />
      </section>
      {/* <AwesomeButton>button</AwesomeButton> */}
    </main>
  );
}
