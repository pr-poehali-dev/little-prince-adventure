import HeroSection from "@/components/HeroSection";
import GameNavigation from "@/components/GameNavigation";
import GameStats from "@/components/GameStats";
import QuickActions from "@/components/QuickActions";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="container mx-auto px-4 py-16">
        <GameNavigation />
      </div>
      <GameStats />
      <QuickActions />
    </div>
  );
};

export default Index;
