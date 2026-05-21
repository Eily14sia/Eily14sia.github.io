import Icon from "@/components/ui/Icon";

export default function StackTag({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 bg-base-100 text-base-content/70 text-xs font-label-caps rounded">
      {label}
    </span>
  );
}
