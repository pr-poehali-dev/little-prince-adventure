import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen storybook-bg star-field flex items-center justify-center overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 text-fairy-gold floating-animation">
        <Icon name="Star" size={24} className="sparkle" />
      </div>
      <div
        className="absolute top-32 right-20 text-fairy-lavender floating-animation"
        style={{ animationDelay: "1s" }}
      >
        <Icon name="Heart" size={20} className="sparkle" />
      </div>
      <div
        className="absolute bottom-32 left-20 text-fairy-mint floating-animation"
        style={{ animationDelay: "2s" }}
      >
        <Icon name="Sparkles" size={28} className="sparkle" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main title */}
          <h1 className="fairy-title text-6xl md:text-8xl font-bold text-foreground mb-6 drop-shadow-lg animate-fade-in">
            Путешествие
            <span className="block text-primary">Маленького Принца</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-story leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Отправляйтесь в волшебное приключение по далёким планетам,
            встречайте удивительных персонажей и открывайте секреты вселенной
          </p>

          {/* Central character illustration placeholder */}
          <div
            className="relative mx-auto w-64 h-64 mb-8 animate-fade-in floating-animation"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="planet-card w-full h-full rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-primary">
                <Icon name="Crown" size={80} className="sparkle" />
              </div>
            </div>
            {/* Orbiting elements */}
            <div className="absolute -top-4 -right-4 text-fairy-gold animate-sparkle">
              <Icon name="Star" size={16} />
            </div>
            <div
              className="absolute -bottom-4 -left-4 text-fairy-mint animate-sparkle"
              style={{ animationDelay: "1s" }}
            >
              <Icon name="Star" size={12} />
            </div>
          </div>

          {/* Call to action */}
          <div className="animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-fairy text-2xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Начать путешествие ✨
            </button>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/20 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
