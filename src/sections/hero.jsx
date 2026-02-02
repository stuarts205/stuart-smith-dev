import { Button } from "@/components/button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/animated-border-button";
import React, { useEffect, useState } from "react";

const skills = [
  "C# .NET",
  "ASP.NET Core",
  "Entity Framework",
  "MVC",
  "Razor",
  "React",
  "Next.js",
  "TypeScript",
  "SQL Server",
  "Oracle DB",
  "RESTful APIs",
  "Git",
  "JavaScript",
  "HTML",
  "CSS",
  "JQuery",
  "LINQ",
];

export const Hero = () => {
  const [yearExperience, setYearExperience] = useState(0);

  useEffect(() => {
    const startYear = 2017;
    const currentYear = new Date().getFullYear();
    setYearExperience(currentYear - startYear);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="hero-bg.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              background: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer &amp; Full Stack Software Developer
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-300">
                Expert in{" "}
                <span className="text-primary glow-text">C# .NET</span> &
                <br />
                <span className="font-serif italic font-normal text-white">
                  React/Next.js
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mx-w-lg animate-fade-in animation-delay-800">
                I am a dedicated Mid-Level Software Engineer with extensive
                experience in C# .NET development, complemented by proficiency
                in React and Next.js for front-end implementation. I specialize
                in designing and delivering scalable, maintainable, and
                high-quality software solutions that align with organizational
                goals.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5 cursor-pointer" />
                </Button>
              </a>

              <AnimatedBorderButton download>
                <a href="/cv.pdf" download className="flex items-center justify-center gap-2">                 
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </AnimatedBorderButton>
            </div>
            <div className="flex items-center gap-4 animate-fade-in animation-delay-500">
              <span className="text-sm text-muted-foreground">Find me:</span>

              {[
                { icon: Github, href: "https://github.com/stuarts205" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/stuart-smith-669b5580",
                },
              ].map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="p-2 rounded-full glass hover:bg-green/10 hover:text-primary transition-all duration-300"
                  >
                    {<social.icon className="w-5 h-5" />}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="relative animate-fade-in animation-delay-3000">
            <div className="relative max-w-md mx-auto">
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo-beard.png"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                  alt="Stuart Smith"
                />
                <div className="absolute -bottom -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                <div className="absolute -top-5 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">
                    {yearExperience} +
                  </div>
                  <div className="text-xs text-muted-foreground">
                    years of experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
