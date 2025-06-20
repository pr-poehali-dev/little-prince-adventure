import Icon from "@/components/ui/icon";

const QuickActions = () => {
  const actions = [
    {
      title: "Продолжить путешествие",
      description: "Вернуться к исследованию планет",
      icon: "Play",
      color: "bg-primary",
      textColor: "text-primary-foreground",
    },
    {
      title: "Прочитать дневник",
      description: "Просмотреть записи о приключениях",
      icon: "BookOpen",
      color: "bg-fairy-lavender",
      textColor: "text-foreground",
    },
    {
      title: "Настройки игры",
      description: "Изменить параметры путешествия",
      icon: "Settings",
      color: "bg-fairy-mint",
      textColor: "text-foreground",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="fairy-title text-4xl text-center text-foreground mb-12">
          Быстрые действия
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {actions.map((action, index) => (
            <button
              key={index}
              className={`${action.color} ${action.textColor} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className="mx-auto mb-4 group-hover:animate-sparkle">
                  <Icon name={action.icon} size={48} />
                </div>
                <h3 className="fairy-title text-xl font-semibold mb-2">
                  {action.title}
                </h3>
                <p className="font-story text-sm opacity-90">
                  {action.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
