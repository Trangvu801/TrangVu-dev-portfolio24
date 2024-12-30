import cyoBotLandingPage from "@/assets/images/cyobot-landingpage.png";
import dpoolLandingPage from "@/assets/images/dpool-landing-page.png";
import DsonMarketLandingPage from "@/assets/images/DsonMarket-landing-page.png";
import MermaidJSLandingPage from "@/assets/images/MermaidJS-landing-page.png";
import Image from 'next/image';
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "CYOBot",
    year: "2024",
    title: "CYOBot DashBoard",
    results: [
      { title: "Led a cross-functional team of 10 to deliver over 45 features in 3 months" },
      { title: "Developed dashboard serving 2,000 users, increased sales by 120%." },
      { title: "Increasing team productivity by 45% through Agile methodologies." },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: cyoBotLandingPage,
  },
  {
    company: "Dickinson College",
    year: "2024",
    title: "D-Pool CarSharing",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: dpoolLandingPage,
  },
  {
    company: "Dickinson College",
    year: "2023",
    title: "DsonMarket",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: DsonMarketLandingPage,
  },
  {
    company: "Mermaid",
    year: "2023",
    title: "MermaidJS",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: MermaidJSLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Result"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experience." />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 
              lg:pt-16 lg:px-20 sticky" 
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
              >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 
                inline-flex gap-2 font-bold uppercase tracking-widest 
                text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6
                rounded-xl font-semibold inline-flex items-center
                justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full
                    lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
