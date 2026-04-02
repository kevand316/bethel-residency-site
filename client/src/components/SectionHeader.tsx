import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
}

export default function SectionHeader({ label, title, description, light }: SectionHeaderProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {label && (
        <span className={`inline-block text-sm font-semibold tracking-widest uppercase mb-3 ${
          light ? "text-gold-light" : "text-gold-dark"
        }`}>
          {label}
        </span>
      )}
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl mb-4 ${
          light ? "text-cream" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl mx-auto text-lg ${
            light ? "text-cream/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
