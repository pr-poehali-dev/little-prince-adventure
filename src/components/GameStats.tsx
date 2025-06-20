import Icon from "@/components/ui/icon";

const GameStats = () => {
  const stats = [
    {
      icon: "MapPin",
      value: "7",
      label: "Планет исследовано",
      color: "text-fairy-gold",
    },
    {
      icon: "Users",
      value: "12",
      label: "Персонажей встречено",
      color: "text-fairy-lavender",
    },
    {
      icon: "Star",
      value: "25",
      label: "Звёзд собрано",
      color: "text-fairy-mint",
    },
    {
      icon: "Heart",
      value: "∞",
      label: "Дружбы завязано",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-16 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="fairy-title text-4xl text-center text-foreground mb-12">
          Ваши достижения в путешествии
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="planet-card p-6 text-center group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`${stat.color} mx-auto mb-4 group-hover:animate-sparkle`}
              >
                <Icon name={stat.icon} size={40} />
              </div>
              <div className="fairy-title text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-story text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameStats;
