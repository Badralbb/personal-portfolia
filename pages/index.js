import { AboutMe } from "@/components/AboutMe";
import { Head } from "@/components/Head";
import { Skills } from "@/components/Skills";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
export default function Home() {
  return (
    <main>
      <section className="max-w-[1280px] mx-auto px-4">
        <Head />
      </section>
      <section className="bg-[#F9FAFB] px-4">
        <div className="max-w-[1280px] mx-auto">
          <AboutMe />
        </div>
      </section>
      <section className="max-w-[1280px] mx-auto px-4 py-16">
        <Skills />
      </section>
    </main>
  );
}
