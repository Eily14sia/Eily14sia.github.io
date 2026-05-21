"use client";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/components/ui/animations";
import { experience } from "@/lib/data";

function TimelineItem({
  exp,
  idx,
}: {
  exp: (typeof experience)[0];
  idx: number;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ delay: idx * 0.2 }}
      className="relative"
    >
      <div className="absolute -left-[41px] top-2 w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_#FEE77E]" />

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <h3 className="font-headline-md text-headline-md text-primary">
          {exp.role}
        </h3>
        <span className="text-primary font-label-caps">
          {exp.company} | {exp.duration}
        </span>
      </div>

      <p className="text-base-content/70 mb-4">
        {exp.company} &middot; {exp.location}
      </p>

      <ul className="space-y-2 text-base-content/70 list-disc list-inside">
        {exp.highlights.slice(0, 2).map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <AnimatedSection
      id="experience"
      className="py-section-gap px-gutter max-w-container-max-width mx-auto"
    >
      <div className="text-center mb-16">
        <SectionHeading prefix="WORK" highlight="EXPERIENCE" />
      </div>

      <div className="relative max-w-3xl mx-auto pl-8 border-l-2 border-primary/30 space-y-16">
        {experience.map((exp, idx) => (
          <TimelineItem key={idx} exp={exp} idx={idx} />
        ))}
      </div>
    </AnimatedSection>
  );
}
