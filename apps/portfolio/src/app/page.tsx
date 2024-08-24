import Image from "next/image";
import { Button } from "@repo/ui/button";
import Hero from "@/components/pages/Home";
import Experiences from "@/components/pages/Experiences";
import { Project } from "@/components/pages/Project";
import Languages from "@/components/pages/Languages";
import Certificate from "@/components/pages/Certificate";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <Hero />
      <Experiences />
      {/* <Skills /> */}

      <div className="w-full grid lg:grid-cols-2 mt-8">
        <Project />
        <Languages />
      </div>
      <Certificate />
    </main>
    // <>
    //   <Hero />
    //   <h1>Hello portfoli</h1>
    //   <Button variant="default" className="bg-secondary">
    //     Hello world
    //   </Button>
    //   <Button variant="destructive">Hello 123</Button>
    // </>
  );
}
