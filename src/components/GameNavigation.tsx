import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const GameNavigation = () => {
  const navItems = [
    {
      path: "/planets",
      icon: "Globe",
      label: "Карта планет",
      color: "text-fairy-gold",
    },
    {
      path: "/characters",
      icon: "Users",
      label: "Персонажи",
      color: "text-fairy-lavender",
    },
    {
      path: "/achievements",
      icon: "Trophy",
      label: "Достижения",
      color: "text-fairy-mint",
    },
    {
      path: "/gallery",
      icon: "Image",
      label: "Галерея",
      color: "text-primary",
    },
  ];

  return (
    <nav className="flex flex-wrap justify-center gap-4 mt-8">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="planet-card group p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:rotate-1 shadow-lg hover:shadow-xl"
        >
          <div className="flex flex-col items-center space-y-2">
            <div className={`${item.color} group-hover:animate-sparkle`}>
              <Icon name={item.icon} size={32} />
            </div>
            <span className="fairy-title text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {item.label}
            </span>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default GameNavigation;
