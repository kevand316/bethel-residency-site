interface PageHeroProps {
  title: string;
  subtitle: string;
  bgImage?: string;
}

export default function PageHero({ title, subtitle, bgImage }: PageHeroProps) {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={
        bgImage
          ? {
              backgroundImage: `linear-gradient(rgba(26,26,46,0.75), rgba(26,26,46,0.85)), url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {!bgImage && (
        <div className="absolute inset-0 bg-navy" />
      )}
      {/* Decorative gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container relative text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-4 animate-fade-up">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.15s" }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}
