import { useState } from "react";
import Icon from "@/components/ui/icon";

interface CharacterCardProps {
  character: {
    id: number;
    name: string;
    title: string;
    description: string;
    planet: string;
    quote: string;
    image: string;
    isUnlocked: boolean;
  };
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="group perspective-1000 w-64 h-96">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={() => character.isUnlocked && setIsFlipped(!isFlipped)}
      >
        {/* Передняя сторона */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-100 to-purple-100">
          <div
            className="h-48 bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${character.image})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            {!character.isUnlocked && (
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <Icon name="Lock" className="text-white text-2xl" />
              </div>
            )}
          </div>

          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {character.name}
            </h3>
            <p className="text-purple-600 font-medium mb-3">
              {character.title}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              {character.description}
            </p>

            <div className="flex items-center justify-center text-xs text-gray-500">
              <Icon name="MapPin" size={12} className="mr-1" />
              {character.planet}
            </div>
          </div>

          {character.isUnlocked && (
            <div className="absolute bottom-4 right-4 text-purple-500 animate-pulse">
              <Icon name="RotateCcw" size={16} />
            </div>
          )}
        </div>

        {/* Задняя сторона */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-yellow-100 to-orange-100">
          <div className="h-full flex flex-col justify-center items-center p-8 text-center">
            <Icon name="Quote" className="text-yellow-600 text-3xl mb-4" />
            <p className="text-lg italic text-gray-700 mb-6 leading-relaxed">
              "{character.quote}"
            </p>
            <div className="text-sm text-gray-500">— {character.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
