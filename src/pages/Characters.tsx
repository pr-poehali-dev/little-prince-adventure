import CharacterCard from "@/components/CharacterCard";
import Icon from "@/components/ui/icon";

const charactersData = [
  {
    id: 1,
    name: "Маленький принц",
    title: "Путешественник между мирами",
    description: "Мальчик с золотыми волосами, который учит нас видеть сердцем",
    planet: "Астероид B-612",
    quote: "Зорко одно лишь сердце. Самого главного глазами не увидишь.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300",
    isUnlocked: true,
  },
  {
    id: 2,
    name: "Лис",
    title: "Мудрый учитель дружбы",
    description: "Лис, который научил принца секрету приручения и дружбы",
    planet: "Планета Земля",
    quote: "Ты навсегда в ответе за всех, кого приручил.",
    image: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=300",
    isUnlocked: true,
  },
  {
    id: 3,
    name: "Роза",
    title: "Капризная красавица",
    description: "Единственная роза принца, гордая и немного капризная",
    planet: "Астероид B-612",
    quote: "Я не боюсь тигров, но боюсь сквозняков.",
    image: "https://images.unsplash.com/photo-1518621012118-1d014ca9071e?w=300",
    isUnlocked: true,
  },
  {
    id: 4,
    name: "Король",
    title: "Величественный правитель",
    description: "Король без подданных, который думает, что правит всем",
    planet: "Первая планета",
    quote: "Власть должна быть разумной.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300",
    isUnlocked: false,
  },
  {
    id: 5,
    name: "Честолюбец",
    title: "Жаждущий восхищения",
    description: "Человек, для которого все остальные — поклонники",
    planet: "Вторая планета",
    quote: "Хлопайте в ладоши! Хлопайте в ладоши!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
    isUnlocked: false,
  },
  {
    id: 6,
    name: "Пьяница",
    title: "Печальный затворник",
    description: "Пьёт, чтобы забыть о том, что ему стыдно пить",
    planet: "Третья планета",
    quote: "Пью, чтобы забыть, что мне стыдно пить.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=300",
    isUnlocked: false,
  },
];

export default function Characters() {
  const unlockedCount = charactersData.filter((char) => char.isUnlocked).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            ✨ Галерея персонажей
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Познакомься с удивительными героями из сказки о Маленьком принце
          </p>

          <div className="mt-8 inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
            <Icon name="Users" className="text-purple-500 mr-2" />
            <span className="text-gray-700">
              Открыто персонажей:{" "}
              <strong>
                {unlockedCount}/{charactersData.length}
              </strong>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {charactersData.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>

        {/* Подсказка для разблокированных карточек */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-yellow-100 border border-yellow-300 rounded-full px-6 py-3">
            <Icon name="Info" className="text-yellow-600 mr-2" size={16} />
            <span className="text-yellow-800 text-sm">
              Нажми на открытые карточки, чтобы увидеть цитаты персонажей
            </span>
          </div>
        </div>

        {/* Статистика внизу */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg">
            <Icon name="Heart" className="text-red-500 text-3xl mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">3</div>
            <div className="text-gray-600">Любимых героя</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg">
            <Icon
              name="BookOpen"
              className="text-blue-500 text-3xl mx-auto mb-2"
            />
            <div className="text-2xl font-bold text-gray-800">6</div>
            <div className="text-gray-600">Историй</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg">
            <Icon
              name="Sparkles"
              className="text-purple-500 text-3xl mx-auto mb-2"
            />
            <div className="text-2xl font-bold text-gray-800">
              {Math.round((unlockedCount / charactersData.length) * 100)}%
            </div>
            <div className="text-gray-600">Прогресс</div>
          </div>
        </div>
      </div>
    </div>
  );
}
