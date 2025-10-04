import Image from "next/image";
import LiquidEther from "@/components/LiquidEther";
import LogoLoop from "@/components/LogoLoop";
import StackingCards from "@/components/StackingCards";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiUnity,
  SiLaravel,
  SiPrisma,
  SiKotlin,
  SiAndroidstudio,
  SiVite,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  const techLogos = [
    {
      node: <SiReact color="#FFFFFF" size={48} />,
      title: "React",
      href: "https://react.dev",
    },
    {
      node: <SiUnity color="#FFFFFF" size={48} />,
      title: "Unity",
      href: "https://react.dev",
    },
    {
      node: <SiLaravel color="#FFFFFF" size={48} />,
      title: "Laravel",
      href: "https://react.dev",
    },
    {
      node: <SiNextdotjs color="#FFFFFF" size={48} />,
      title: "Next.js",
      href: "https://nextjs.org",
    },
    {
      node: <SiVite color="#FFFFFF" size={48} />,
      title: "Vite",
      href: "https://nextjs.org",
    },
    {
      node: <SiTypescript color="#FFFFFF" size={48} />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss color="#FFFFFF" size={48} />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiPrisma color="#FFFFFF" size={48} />,
      title: "Prisma",
      href: "https://react.dev",
    },
    {
      node: <SiKotlin color="#FFFFFF" size={48} />,
      title: "Kotlin",
      href: "https://react.dev",
    },
    {
      node: <SiAndroidstudio color="#FFFFFF" size={48} />,
      title: "Android Studio",
      href: "https://react.dev",
    },
    {
      node: <SiExpress color="#FFFFFF" size={48} />,
      title: "Express jS",
      href: "https://react.dev",
    },
    {
      node: <SiPostgresql color="#FFFFFF" size={48} />,
      title: "Postgre SQL",
      href: "https://react.dev",
    },
  ];

  return (
    <div className="">
      <StackingCards>
        {/* First Section */}
        <div className="relative min-h-screen w-screen justify-center items-center flex flex-col bg-background">
          <div className="absolute top-0 left-0 w-screen h-full">
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <LiquidEther
                colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                mouseForce={50}
                cursorSize={100}
                isViscous={false}
                viscous={60}
                iterationsViscous={128}
                iterationsPoisson={128}
                resolution={0.5}
                isBounce={true}
                autoDemo={true}
                autoSpeed={0.025}
                autoIntensity={2.2}
                takeoverDuration={0.25}
                autoResumeDelay={0}
                autoRampDuration={0}
              />
            </div>
          </div>
          <div className="relative z-10 flex flex-col gap-2 sm:gap-0 justify-center items-center">
            <h1 className="mt-[25%] font-futura-condensed text-white text-5xl md:text-9xl font-extrabold text-center">
              BRING YOUR
            </h1>
            <div className="w-full flex justify-center items-center space-x-4 relative">
              <h1 className="relative z-5 -mt-2 font-futura-condensed text-5xl md:text-9xl font-extrabold text-pink text-center">
                IDEAS
              </h1>
              <Image
                className="absolute right-[10%] md:right-[15%] w-9 h-auto bottom-[10%] rotate-[15deg]"
                src={"/images/icons/idea.svg"}
                width={70}
                height={70}
                alt="idea-icon"
              />
            </div>
            <h1 className="-mt-2 font-futura-condensed text-white text-5xl md:text-9xl font-extrabold text-center">
              INTO REALITY
            </h1>
          </div>
          <h1 className="mt-4 md:mt-0 relative z-10 text-white/80 font-futura-regular text-center text-lg md:text-2xl w-1/2 md:w-1/3 leading-6 md:leading-8">
            From imaginative game worlds to dynamic web applications, I bring
            your most ambitious digital ideas to life with clean, expert code.
          </h1>
          <LogoLoop
            className="relative z-10 md:mt-[10%]"
            logos={techLogos}
            speed={20}
            direction="left"
            logoHeight={48}
            gap={120}
            pauseOnHover
            scaleOnHover
            ariaLabel="Technology partners"
          />
        </div>

        {/* Second Section */}
        <div className="relative min-h-screen w-screen justify-center items-center flex flex-col bg-gradient-to-b from-zinc-900 to-black">
          <h1 className="font-futura-condensed text-white text-9xl font-extrabold">
            DEDICATED TO
          </h1>
          <h1 className="relative z-5 -mt-2 font-futura-condensed text-9xl font-extrabold text-pink">
            DELIVER RESULTS
          </h1>
          <h1 className="-mt-2 font-futura-condensed text-white text-9xl font-extrabold">
            FOR YOU
          </h1>
          <ProjectsSection/>
        </div>

        {/* Second Section */}
      </StackingCards>
    </div>
  );
}
