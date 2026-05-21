"use client";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Icon from "@/components/ui/Icon";
import StackTag from "@/components/ui/StackTag";
import { fadeInUp } from "@/components/ui/animations";
import { projects } from "@/lib/data";

function ProjectCard({
  project,
  idx,
}: {
  project: (typeof projects)[0];
  idx: number;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ delay: idx * 0.2 }}
    >
      <GlassCard className="p-8 rounded-2xl flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <Icon name={project.icon} className="text-4xl text-primary" fill />
          <a href="#" className="text-base-content/70 hover:text-primary transition-colors">
            <Icon name="open_in_new" />
          </a>
        </div>

        <h3 className="font-headline-md text-headline-md text-primary mb-2">
          {project.title}
        </h3>
        <p className="text-primary font-label-caps text-label-caps mb-4 uppercase tracking-widest">
          {project.subtitle}
        </p>
        <p className="text-base-content/70 mb-8 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((tech) => (
            <StackTag key={tech} label={tech} />
          ))}
        </div>

        <button className="w-full py-3 bg-glow-amber border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-primary-content transition-all">
          View Code
        </button>
      </GlassCard>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <AnimatedSection
      id="projects"
      className="py-section-gap px-gutter max-w-container-max-width mx-auto"
    >
      <div className="text-center mb-16">
        <SectionHeading prefix="RECENT" highlight="PROJECTS" />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} idx={idx} />
        ))}
      </div>
    </AnimatedSection>
  );
}
