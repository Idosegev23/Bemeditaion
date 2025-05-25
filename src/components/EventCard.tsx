import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  link?: string;
  category: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('he-IL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const CardContent = () => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      {/* Image Placeholder */}
      <div className="aspect-video bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
        <div className="text-center text-text-light">
          <div className="w-16 h-16 mx-auto mb-2 bg-primary/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">🧘</span>
          </div>
          <p className="text-xs">{event.category}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
            {event.category}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-text-dark mb-3 group-hover:text-primary transition-colors">
          {event.title}
        </h3>

        <p className="text-text-light text-sm mb-4 leading-relaxed">
          {event.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-text-light text-sm">
            <Calendar size={16} className="ml-2 flex-shrink-0" />
            <span>{formatDate(event.date)}</span>
          </div>
          
          <div className="flex items-center text-text-light text-sm">
            <MapPin size={16} className="ml-2 flex-shrink-0" />
            <span>{event.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-primary font-medium text-sm">
            לפרטים נוספים
          </span>
          <ExternalLink size={16} className="text-primary" />
        </div>
      </div>
    </div>
  );

  if (event.link && event.link !== '#') {
    return (
      <a 
        href={event.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default EventCard; 