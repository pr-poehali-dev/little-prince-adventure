import { useState } from "react";
import PlanetCard from "@/components/PlanetCard";
import Icon from "@/components/ui/icon";

const planetsData = [
  {
    id: 1,
    name: "Планета Короля",
    inhabitant: "Король",
    description: "Правитель без подданных, который командует звёздами",
    color: "#9333ea",
    progress: 100,
    isUnlocked: true,
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=200",
  },
  {
    id: 2,
    name: "Планета Честолюбца",
    inhabitant: "Честолюбец",
    description: "Человек, который жаждет восхищения и аплодисментов",
    color: "#dc2626",
    progress: 75,
    isUnlocked: true,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=200",
  },
  {
    id: 3,
    name: "Планета Пьяницы",
    inhabitant: "Пьяница",
    description: "Пьёт, чтобы забыть о том, что ему стыдно пить",
    color: "#059669",
    progress: 50,
    isUnlocked: true,
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=200",
  },
  {
    id: 4,
    name: "Планета Делового человека",
    inhabitant: "Деловой человек",
    description: "Считает звёзды и думает, что владеет ими",
    color: "#7c3aed",
    progress: 25,
    isUnlocked: false,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
  },
  {
    id: 5,
    name: "Планета Фонарщика",
    inhabitant: "Фонарщик",
    description: "Каждую минуту зажигает и гасит фонарь",
    color: "#ea580c",
    progress: 0,
    isUnlocked: false,
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=200",
  },
  {
    id: 6,
    name: "Планета Географа",
    inhabitant: "Географ",
    description: "Записывает рассказы путешественников в большие книги",
    color: "#0891b2",
    progress: 0,
    isUnlocked: false,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200",
  },
  {
    id: 7,
    name: "Планета Земля",
    inhabitant: "Змея и Лис",
    description: "Самая большая планета со множеством удивительных встреч",
    color: "#16a34a",
    progress: 0,
    isUnlocked: false,
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=200",
  },
];

export default function Planets() {
  const [selectedPlanet, setSelectedPlanet] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Звёзды на фоне */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🌟 Карта планет
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Исследуй семь удивительных планет из путешествия Маленького принца
          </p>
        </div>

        {/* Карта планет по кругу */}
        <div className="relative w-full max-w-4xl mx-auto h-96 mb-12">
          {planetsData.map((planet, index) => {
            const angle = (index * 360) / planetsData.length;
            const radius = 150;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={planet.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
              >
                <PlanetCard planet={planet} onClick={setSelectedPlanet} />
              </div>
            );
          })}

          {/* Центральный элемент */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-2xl">👑</span>
            </div>
          </div>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <Icon
              name="CheckCircle"
              className="text-green-400 text-3xl mx-auto mb-2"
            />
            <div className="text-2xl font-bold text-white">
              {planetsData.filter((p) => p.isUnlocked).length}
            </div>
            <div className="text-purple-200">Открыто планет</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <Icon
              name="Star"
              className="text-yellow-400 text-3xl mx-auto mb-2"
            />
            <div className="text-2xl font-bold text-white">
              {Math.round(
                planetsData.reduce((acc, p) => acc + p.progress, 0) /
                  planetsData.length,
              )}
              %
            </div>
            <div className="text-purple-200">Общий прогресс</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <Icon
              name="Telescope"
              className="text-blue-400 text-3xl mx-auto mb-2"
            />
            <div className="text-2xl font-bold text-white">
              {planetsData.length}
            </div>
            <div className="text-purple-200">Всего планет</div>
          </div>
        </div>
      </div>

      {/* Модальное окно с деталями планеты */}
      {selectedPlanet && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-scale-in">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedPlanet.name}
              </h2>
              <button
                onClick={() => setSelectedPlanet(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <Icon name="X" size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Житель планеты:</h3>
                <p className="text-gray-600">{selectedPlanet.inhabitant}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700">Описание:</h3>
                <p className="text-gray-600">{selectedPlanet.description}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700">
                  Прогресс исследования:
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                  <div
                    className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${selectedPlanet.progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {selectedPlanet.progress}% завершено
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
