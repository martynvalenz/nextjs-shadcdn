import { SkeletonCard } from "@/components/SkeletonCard";

export default function NamePage() {
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {"abcdefghi".split('').map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  );
}