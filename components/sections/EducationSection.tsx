"use client";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedDiv from "@/components/ui/AnimatedDiv";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Icon from "@/components/ui/Icon";
import { education } from "@/lib/data";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

function ResumeCard() {
  return (
    <AnimatedDiv>
      <GlassCard className="max-w-2xl mx-auto mb-12 p-8 rounded-2xl text-left border-l-4 border-l-primary">
        <div className="flex items-center gap-6 mb-6">
          <Icon name="school" className="text-5xl text-primary" fill />
          <div>
            <h4 className="font-headline-md text-headline-md text-primary">
              {education.degree}
            </h4>
            <p className="text-base-content/70">{education.school}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <span className="px-4 py-1 bg-primary/20 text-primary font-bold rounded-full text-sm">
            {education.honor}
          </span>
          <span className="px-4 py-1 text-base-content/70 rounded-full text-sm">
            {education.years}
          </span>
        </div>
      </GlassCard>
    </AnimatedDiv>
  );
}

function DownloadButton() {
  return (
    <AnimatedDiv delay={0.2}>
      <a
        href={`${prefix}/Engco_Resume_Censored.pdf`}
        download
        className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-content font-bold rounded-full hover:shadow-[0_0_20px_rgba(254,231,126,0.3)] transition-all transform hover:scale-105"
      >
        <Icon name="download" />
        Download Resume
      </a>
    </AnimatedDiv>
  );
}

export default function EducationSection() {
  return (
    <AnimatedSection
      id="resume"
      className="py-section-gap px-gutter max-w-container-max-width mx-auto text-center"
    >
      <SectionHeading prefix="MY" highlight="RESUME" />

      <div className="mb-12" />

      <ResumeCard />
      <DownloadButton />
    </AnimatedSection>
  );
}
