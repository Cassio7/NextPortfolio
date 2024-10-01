import Image from "next/image";
import ProfilePic from "@/app/images/primopiano.png";

export default function Intro() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-14 justify-between items-center">
    <div className="flex flex-col gap-2 w-full lg:w-4/5">
        <h1 className="text-4xl font-bold mb-4">Hi! I am Alessio Cassieri</h1>
        <p className="text-base text-gray-800 dark:text-gray-300">
          Junior fullstack and software developer, with a growing interest in
          cybersecurity, based in Perugia, Italy. I have been fascinated by
          information technology and new technologies for 10 years now, so I
          always try to keep up with the progress, studying and informing myself
          about the changes in this amazing world.
        </p>
      </div>
      <div className="flex items-center justify-center md:mb-0">
        <Image
          src={ProfilePic}
          alt="Alessio"
          width={160}
          height={160}
          className="border-2 border-gray-100 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

