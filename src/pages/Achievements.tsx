import AchievementBadge from "@/components/AchievementBadge";
import Icon from "@/components/ui/icon";

const achievementsData = [
  {
    id: 1,
    title: "Первые шаги",
    description: "Начни своё путешествие с Маленьким принцем",
    icon: "Footprints",
    color: "green",
    isUnlocked: true,
    progress: 1,
    maxProgress: 1,
    reward: "Открытие первой планеты",
  },
  {
    id: 2,
    title: "Исследователь планет",
    description: "Посети 3 разные планеты",
    icon: "Globe",
    color: "blue",
    isUnlocked: true,
    progress: 3,
    maxProgress: 3,
    reward: "Новый персонаж",
  },
  {
    id: 3,
    title: "Мудрый читатель",
    description: "Прочитай 5 цитат персонажей",
    icon: "BookOpen",
    color: "purple",
    isUnlocked: false,
    progress: 2,
    maxProgress: 5,
    reward: "Секретная история",
  },
  {
    id: 4,
    title: "Коллекционер",
    description: "Собери всех персонажей",
    icon: "Users",
    color: "orange",
    isUnlocked: false,
    progress: 3,
    maxProgress: 6,
    reward: "Редкий артефакт",
  },
  {
    id: 5,
    title: "Приручитель",
    description: "Подружись с Лисом",
    icon: "Heart",
    color: "red",
    isUnlocked: false,
    progress: 0,
    maxProgress: 1,
    reward: "Особая анимация",
  },
  {
    id: 6,
    title: "Звёздочёт",
    description: "Изучи все созвездия на карте",
    icon: "Star",
    color: "yellow",
    isUnlocked: false,
    progress: 1,
    maxProgress: 7,
    reward: "Космический костюм",
  },
];

export default function Achievements() {
  const unlockedCount = achievementsData.filter((a) => a.isUnlocked).length;
  const totalProgress = achievementsData.reduce(
    (acc, a) => acc + a.progress / a.maxProgress,
    0,
  );
  const overallProgress = Math.round(
    (totalProgress / achievementsData.length) * 100,
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-6 py-12">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            🏆 Достижения
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Отслеживай свой прогресс в путешествии по вселенной Маленького
            принца
          </p>
        </div>

        {/* Общая статистика */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-orange-200">
            <Icon
              name="Trophy"
              className="text-yellow-500 text-4xl mx-auto mb-3"
            />
            <div className="text-3xl font-bold text-gray-800 mb-1">
              {unlockedCount}
            </div>
            <div className="text-gray-600">Получено наград</div>
            <div className="text-sm text-gray-500 mt-2">
              из {achievementsData.length} возможных
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-orange-200">
            <Icon
              name="Target"
              className="text-blue-500 text-4xl mx-auto mb-3"
            />
            <div className="text-3xl font-bold text-gray-800 mb-1">
              {overallProgress}%
            </div>
            <div className="text-gray-600">Общий прогресс</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-orange-200">
            <Icon
              name="Zap"
              className="text-purple-500 text-4xl mx-auto mb-3"
            />
            <div className="text-3xl font-bold text-gray-800 mb-1">
              {
                achievementsData.filter((a) => !a.isUnlocked && a.progress > 0)
                  .length
              }
            </div>
            <div className="text-gray-600">В процессе</div>
            <div className="text-sm text-gray-500 mt-2">активных задач</div>
          </div>
        </div>

        {/* Достижения */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Твои достижения
          </h2>

          <div className="space-y-6">
            {achievementsData.map((achievement) => (
              <AchievementBadge
                key={achievement.id}
                achievement={achievement}
              />
            ))}
          </div>
        </div>

        {/* Мотивационный блок */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <Icon name="Sparkles" className="text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Продолжай исследование!</h3>
            <p className="text-lg opacity-90 mb-6">
              Каждое достижение приближает тебя к разгадке тайн вселенной
              Маленького принца
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                <Icon name="Star" className="text-yellow-300 mr-1" size={16} />
                <span className="text-sm">Следующая награда уже близко!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
