import { Clock, MapPin, Users } from 'lucide-react';

interface Meeting {
  id: string;
  title: string;
  description: string;
  schedule: string;
  locations: string[];
  image: string;
  category: string;
  level: string;
}

interface MeetingCardProps {
  meeting: Meeting;
}

const MeetingCard = ({ meeting }: MeetingCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'מתקדמים':
        return 'bg-secondary/10 text-secondary';
      case 'מתחילים':
        return 'bg-primary/10 text-primary';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Image Placeholder */}
      <div className="aspect-video bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
        <div className="text-center text-text-light">
          <div className="w-16 h-16 mx-auto mb-2 bg-primary/20 rounded-full flex items-center justify-center">
            <Users size={32} className="text-primary" />
          </div>
          <p className="text-xs">{meeting.category}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
            {meeting.category}
          </span>
          <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(meeting.level)}`}>
            {meeting.level}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-text-dark mb-3">
          {meeting.title}
        </h3>

        <p className="text-text-light text-sm mb-4 leading-relaxed">
          {meeting.description}
        </p>

        <div className="space-y-3 mb-4">
          <div className="flex items-start text-text-light text-sm">
            <Clock size={16} className="ml-2 mt-0.5 flex-shrink-0" />
            <span>{meeting.schedule}</span>
          </div>
          
          <div className="flex items-start text-text-light text-sm">
            <MapPin size={16} className="ml-2 mt-0.5 flex-shrink-0" />
            <div>
              {meeting.locations.map((location, index) => (
                <span key={location}>
                  {location}
                  {index < meeting.locations.length - 1 && ', '}
                </span>
              ))}
            </div>
          </div>
        </div>

        <button className="w-full bg-primary/10 text-primary py-2 px-4 rounded-lg font-medium hover:bg-primary/20 transition-colors">
          לפרטים נוספים
        </button>
      </div>
    </div>
  );
};

export default MeetingCard; 