import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface AchievementBadgeProps {
  achievement: {
    id: number;
    title: string;
    description: string;
    icon: string;
    color: string;
    isUnlocked: boolean;
    progress: number;
    maxProgress: number;
    reward: string;
  };
}

export default function AchievementBadge({
  achievement,
}: AchievementBadgeProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const progressPercent =
    (achievement.progress / achievement.maxProgress) * 100;

  useEffect(() => {
    if (achievement.isUnlocked) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [achievement.isUnlocked]);

  return (
    <div
      className={`relative p-6 rounded-2xl border-2 transition-all duration-500 ${
        achievement.isUnlocked
          ? `bg-gradient-to-br from-${achievement.color}-100 to-${achievement.color}-200 border-${achievement.color}-300 shadow-lg`
          : "bg-gray-100 border-gray-300 opacity-70"
      } ${isAnimating ? "animate-pulse scale-105" : ""}`}
    >
      <div className="flex items-start space-x-4">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center relative ${
            achievement.isUnlocked
              ? `bg-${achievement.color}-500 text-white`
              : "bg-gray-400 text-gray-600"
          }`}
        >
          <Icon name={achievement.icon as any} size={24} />

          {achievement.isUnlocked && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Icon name="Check" size={12} className="text-white" />
            </div>
          )}
        </div>

        <div className="flex-1">
          <h3
            className={`font-bold text-lg ${achievement.isUnlocked ? "text-gray-800" : "text-gray-500"}`}
          >
            {achievement.title}
          </h3>
          <p
            className={`text-sm mt-1 ${achievement.isUnlocked ? "text-gray-600" : "text-gray-500"}`}
          >
            {achievement.description}
          </p>

          {!achievement.isUnlocked && (
            <div className="mt-3">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Прогресс</span>
                <span>
                  {achievement.progress}/{achievement.maxProgress}
                </span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div
                  className={`bg-${achievement.color}-500 h-2 rounded-full transition-all duration-300`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}

          {achievement.isUnlocked && (
            <div className={`mt-3 p-2 bg-${achievement.color}-50 rounded-lg`}>
              <div className="flex items-center text-sm">
                <Icon
                  name="Gift"
                  size={14}
                  className={`text-${achievement.color}-600 mr-2`}
                />
                <span className={`text-${achievement.color}-700`}>
                  Награда: {achievement.reward}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
