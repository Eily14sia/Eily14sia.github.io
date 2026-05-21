"use client";
import { profile, contacts } from "@/lib/data";
import Icon from "@/components/ui/Icon";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedDiv from "@/components/ui/AnimatedDiv";

function ContactCard({
  contact,
}: {
  contact: (typeof contacts)[0];
}) {
  const content = (
    <GlassCard className="p-6 rounded-2xl text-center min-w-[180px] cursor-pointer hover:border-primary transition-all hover:shadow-lg hover:shadow-black/5">
      <Icon name={contact.icon} className="text-3xl text-primary mb-3" fill />
      <h4 className="font-headline-md text-headline-md text-primary mb-1">
        {contact.label}
      </h4>
      <p className="text-base-content/70 text-sm">{contact.value}</p>
    </GlassCard>
  );

  if (!contact.href) return <AnimatedDiv>{content}</AnimatedDiv>;

  return (
    <AnimatedDiv>
      <a href={contact.href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    </AnimatedDiv>
  );
}

export default function FooterSection() {
  return (
    <footer className="bg-base-300 w-full py-12 border-t border-primary/30 mt-section-gap">
      <div className="flex flex-col items-center justify-center gap-base px-gutter text-center">
        <span className="font-label-caps text-label-caps text-primary mb-4 tracking-widest">
          BJE ARCHITECTURE
        </span>

        <p className="font-body-md text-body-md text-base-content max-w-lg mb-8 opacity-80">
          Building resilient backends and elegant APIs that power the digital
          future with precision and cosmic vision.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {contacts.map((contact) => (
            <ContactCard key={contact.label} contact={contact} />
          ))}
        </div>

        <p className="font-body-md text-body-md text-base-content opacity-60">
          &copy; 2026 Designed &amp; Built by {profile.name}
        </p>
      </div>
    </footer>
  );
}
