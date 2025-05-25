import { Clock, Star } from 'lucide-react';

interface Meditation {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  difficulty: string;
  benefits: string[];
  image: string;
}

interface MeditationCardProps {
  meditation: Meditation;
  onClick: () => void;
}

const MeditationCard = ({ meditation, onClick }: MeditationCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'מתחילים':
        return 'bg-green-100 text-green-800';
      case 'מתקדמים':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      {/* Image Placeholder */}
      <div className="aspect-video bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
        <div className="text-center text-text-light">
          <div className="w-16 h-16 mx-auto mb-2 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-2xl">🧘‍♀️</span>
          </div>
          <p className="text-xs">מדיטציה פעילה</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(meditation.difficulty)}`}>
            {meditation.difficulty}
          </span>
          <div className="flex items-center text-text-light text-sm">
            <Clock size={16} className="ml-1" />
            <span>{meditation.duration}</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-text-dark mb-3 group-hover:text-primary transition-colors">
          {meditation.title}
        </h3>

        <p className="text-text-light text-sm mb-4 leading-relaxed">
          {meditation.shortDescription}
        </p>

        {/* Benefits Preview */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Star size={16} className="ml-1 text-primary" />
            <span className="text-sm font-medium text-text-dark">יעדים עיקריים:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {meditation.benefits.slice(0, 2).map((benefit, index) => (
              <span 
                key={index}
                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
              >
                {benefit}
              </span>
            ))}
            {meditation.benefits.length > 2 && (
              <span className="text-xs text-text-light">
                +{meditation.benefits.length - 2} נוספים
              </span>
            )}
          </div>
        </div>

        <button className="w-full bg-primary/10 text-primary py-2 px-4 rounded-lg font-medium hover:bg-primary/20 transition-colors group-hover:bg-primary group-hover:text-white">
          לפרטים נוספים
        </button>
      </div>
    </div>
  );
};

export default MeditationCard; 