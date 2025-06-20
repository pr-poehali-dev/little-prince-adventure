import { useState } from "react";
import Icon from "@/components/ui/icon";

interface PlanetCardProps {
  planet: {
    id: number;
    name: string;
    inhabitant: string;
    description: string;
    color: string;
    progress: number;
    isUnlocked: boolean;
    image: string;
  };
  onClick: (planet: any) => void;
}

export default function PlanetCard({ planet, onClick }: PlanetCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative cursor-pointer transition-all duration-500 transform ${
        isHovered ? "scale-110 z-10" : "scale-100"
      } ${planet.isUnlocked ? "opacity-100" : "opacity-60"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => planet.isUnlocked && onClick(planet)}
    >
      <div
        className={`w-32 h-32 rounded-full shadow-2xl relative overflow-hidden ${
          planet.isUnlocked ? "cursor-pointer" : "cursor-not-allowed"
        }`}
        style={{
          background: `linear-gradient(135deg, ${planet.color}, ${planet.color}dd)`,
          boxShadow: `0 0 30px ${planet.color}44`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />

        {planet.isUnlocked ? (
          <Icon
            name="Check"
            className="absolute top-2 right-2 text-white text-sm"
          />
        ) : (
          <Icon
            name="Lock"
            className="absolute top-2 right-2 text-white/70 text-sm"
          />
        )}

        <div className="absolute bottom-0 left-0 right-0 bg-black/30 p-2 text-white text-xs text-center">
          {planet.name}
        </div>

        {planet.progress > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
            <div
              className="h-full bg-yellow-400 transition-all duration-300"
              style={{ width: `${planet.progress}%` }}
            />
          </div>
        )}
      </div>

      {isHovered && planet.isUnlocked && (
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-3 w-48 z-20 animate-fade-in">
          <h3 className="font-bold text-sm text-gray-800">
            {planet.inhabitant}
          </h3>
          <p className="text-xs text-gray-600 mt-1">{planet.description}</p>
        </div>
      )}
    </div>
  );
}
