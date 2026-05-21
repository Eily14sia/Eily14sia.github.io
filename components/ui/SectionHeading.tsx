export default function SectionHeading({
  prefix,
  highlight,
  suffix,
}: {
  prefix: string;
  highlight: string;
  suffix?: string;
}) {
  return (
    <h2 className="font-headline-lg text-headline-lg text-primary">
      {prefix} <span className="text-primary">{highlight}</span>
      {suffix && <> {suffix}</>}
    </h2>
  );
}
