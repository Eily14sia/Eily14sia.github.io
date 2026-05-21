export default function Icon({
  name,
  className = "",
  fill = false,
  size,
}: {
  name: string;
  className?: string;
  fill?: boolean;
  size?: string;
}) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings: fill ? '"FILL" 1' : undefined,
        fontSize: size,
      }}
    >
      {name}
    </span>
  );
}
