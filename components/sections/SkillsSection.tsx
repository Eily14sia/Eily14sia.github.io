"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { staggerContainer, fadeInUp } from "@/components/ui/animations";
import { skillsGrid, SkillGroup } from "@/lib/data";

function SkillCard({ skill }: { skill: SkillGroup }) {
  const [showItems, setShowItems] = useState(false);

  return (
    <motion.div variants={fadeInUp}>
      <div
        className="glass-card p-6 rounded-xl text-center min-h-[140px] flex flex-col items-center justify-center cursor-pointer relative overflow-hidden"
        onMouseEnter={() => setShowItems(true)}
        onMouseLeave={() => setShowItems(false)}
        onClick={() => setShowItems((prev) => !prev)}
      >
        <AnimatePresence mode="wait">
          {showItems ? (
            <motion.div
              key="items"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="flex flex-wrap justify-center gap-1.5"
            >
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="px-2 py-0.5 bg-primary/15 text-primary text-[10px] font-label-caps rounded"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="icon"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Icon name={skill.icon} className="text-4xl text-primary mb-3" fill />
              <p className="font-label-caps text-label-caps text-primary">{skill.label}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <AnimatedSection
      id="skillset"
      className="py-section-gap px-gutter max-w-container-max-width mx-auto"
    >
      <div className="text-center mb-16">
        <SectionHeading prefix="PROFESSIONAL" highlight="SKILLSET" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {skillsGrid.map((skill) => (
          <SkillCard key={skill.label} skill={skill} />
        ))}
      </motion.div>
    </AnimatedSection>
  );
}
