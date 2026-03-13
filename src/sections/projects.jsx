import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/animated-border-button";

const projects = [
  {
    title: "StuTube",
    description:
      "You tube clone made with NextJs, TailwindCSS, Postgress, and a little AI.",
    image: "/stutube.png",
    tags: ["NextJs", "TailwindCSS", "Postgress", "AI"],
    link: "https://stu-tube.vercel.app/",
    github: "https://github.com/stuarts205/stu-tube",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website built with React and TailwindCSS.",
    image: "/portfolio.png",
    tags: ["React", "TailwindCSS"],
    link: "https://stuartsmith.dev/",
    github: "https://github.com/stuarts205/stuart-smith-dev",
  },
  {
    title: "AI Chatbot",
    description:
      "An AI-powered chatbot built with NextJs, TailwindCSS, TypeScript, AI.",
    image: "/meetai.png",
    tags: ["NextJs", "TailwindCSS", "TypeScript", "AI"],
    link: "https://meetai-sable-pi.vercel.app/",
    github: "https://github.com/stuarts205/meetai",
  },
  {
    title: "Family Pics",
    description:
      "A family photo sharing app built with NextJs, Postgress, TailwindCSS, TypeScript.",
    image: "/twothrirtytwo.png",
    tags: ["NextJs", "Postgress", "TailwindCSS", "TypeScript"],
    link: "https://twothirtytwo.net/",
    github: "https://github.com/stuarts205/twothirtytwo",
  },
];

export const Projects = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="projects">
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highligh/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercas animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animateion-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              showcase my skills.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Here are some of the projects I've worked on, demonstrating my
            skills in full-stack development, UI/UX design, and problem-solving.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 
                    opacity-100 md:opacity-0 md:group-hover:opacity-100 
                    transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-l group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border 
                        border-border-/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                      key={idx}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            <ArrowUpRight className="w-5 h-5" />
            View All Projects
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
