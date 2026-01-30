import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const hightlights = [
  {
    icon: Code2,
    title: "Full-Stack Developer",
    description:
      "Proficient in both front-end and back-end development, ensuring seamless integration and functionality across the entire application stack.",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description:
      "Quickly adapts to new technologies and methodologies, enabling efficient project execution and innovation.",
  },
  {
    icon: Users,
    title: "Team Player",
    description:
      "Collaborates effectively with team members to achieve common goals and deliver high-quality results.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "Excels at identifying issues and implementing effective solutions to overcome challenges in software development.",
  },
];

export const About = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one line of code at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Experienced Software Engineer with expertise in .NET
                technologies, application support, and software development.
                Skilled in designing and maintaining software solutions for
                diverse client needs, including internal application
                development, troubleshooting, and technical support.
              </p>
              <p>
                I specialize in creating efficient, scalable, and maintainable
                code, ensuring high performance and reliability. Adept at
                collaborating with cross-functional teams to deliver innovative
                solutions that drive business success.
              </p>
              <p>
                I don't claim to know everything, but I am always eager to learn
                and take on new challenges to expand my skill set.
              </p>
              <p>
                When not coding, you will find me working on personal projects,
                like working on a woodworking project. Building things with my
                hands gives me a different perspective and fuels my creativity.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                &ldquo;My mission is to build reliable, full-stack software
                using .NET and React by taking ownership, learning continuously,
                and tackling new challenges head-on.&rdquo;
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {hightlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
