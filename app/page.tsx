import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Meteors from "@/components/magicui/meteors";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import CustomDock from "@/components/CustomDock";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col md:gap-12 gap-8 md:p-24 p-10 relative overflow-hidden lg:w-7/12 sm:w-full mx-auto">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full overflow-hidden">
        <Meteors />
        <Intro />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <CustomDock />
      </main>
    </div>
  );
}
