"use client";
import { aboutParagraphs, aboutSkills } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedDiv from "@/components/ui/AnimatedDiv";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import Icon from "@/components/ui/Icon";
import { useTheme } from "@/components/layout/ThemeProvider";

function AboutText() {
  return (
    <AnimatedDiv>
      <SectionHeading prefix="LET ME" highlight="INTRODUCE" suffix="MYSELF" />

      <div className="space-y-6 font-body-lg text-body-lg text-base-content/70">
        {aboutParagraphs.map((p, i) => (
          <p key={i}>
            {i === 0 ? (
              <>
                I am a passionate Backend Developer with a deep love for
                architecting scalable systems and secure API infrastructures. My
                journey began at the{" "}
                <span className="text-primary">
                  Pamantasan ng Lungsod ng Maynila (PLM)
                </span>
                , where I honed my technical foundation.
              </>
            ) : (
              <>
                Currently specializing in the{" "}
                <span className="text-primary">Laravel</span> ecosystem, I focus
                on building robust SaaS platforms and enterprise-level
                applications that balance performance with security.
              </>
            )}
          </p>
        ))}

        <div className="flex flex-wrap gap-3 mt-8">
          {aboutSkills.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </div>
    </AnimatedDiv>
  );
}

function AvatarRing() {
  const { theme } = useTheme();
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const src = theme === "celestial-terminal-light" ? `${prefix}/avatar_light.png` : `${prefix}/avatar_dark.png`;
  return (
    <AnimatedDiv delay={0.2} className="flex justify-center">
      <div className="w-80 h-80 rounded-full border-2 border-primary/20 p-4 relative">
        <div className="w-full h-full rounded-full border border-primary/40 p-4 animate-spin-slow">
          <Icon
            name="hub"
            className="absolute -top-2 left-1/2 -translate-x-1/2 text-primary px-2"
          />
        </div>
        <div className="absolute inset-4 rounded-full overflow-hidden bg-base-100 flex items-center justify-center">
          <img
            src={src}
            alt="Barveily Joanabeth"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </AnimatedDiv>
  );
}

export default function AboutSection() {
  return (
    <AnimatedSection
      id="about"
      className="py-section-gap px-gutter max-w-container-max-width mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <AboutText />
        <AvatarRing />
      </div>
    </AnimatedSection>
  );
}
