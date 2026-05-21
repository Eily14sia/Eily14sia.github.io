export default function SkillBadge({ label }: { label: string }) {
  return (
    <span className="px-4 py-2 border border-primary/30 rounded-full text-nav-link font-label-caps text-primary bg-glow-amber flex items-center gap-2">
      <span className="skill-dot" />
      {label}
    </span>
  );
}
