'use client';

import { Calendar, MapPin } from 'lucide-react';

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
  const CardContent = () => (
    <div className="event-card">
      {/* Background Image */}
      <div 
        className="card-image"
        style={{
          backgroundImage: `url(/images/events/${event.image})`
        }}
      />

      {/* Content */}
      <div className="card-content">
        {/* Category Badge */}
        <div className="card-category">
          {event.category}
        </div>

        {/* Title */}
        <h3 className="card-title">
          {event.title}
        </h3>

        {/* Description */}
        <p className="card-description">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="card-details">
          <div className="detail-item">
            <Calendar size={16} className="detail-icon" />
            <span>{event.date}</span>
          </div>
          
          <div className="detail-item">
            <MapPin size={16} className="detail-icon" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="card-cta">
          לפרטים נוספים
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .event-card {
          width: 100%;
          max-width: 22rem;
          height: 32rem;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          background: white;
          box-shadow: 0 15px 35px rgba(155, 106, 63, 0.08);
          transition: all 0.4s ease;
          margin: 0 auto;
          border: 1px solid rgba(155, 106, 63, 0.1);
        }

        .event-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(155, 106, 63, 0.15);
        }

        .card-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transition: all 0.4s ease;
          opacity: 0.3;
        }

        .card-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg, 
            rgba(168, 218, 220, 0.7) 0%, 
            rgba(224, 192, 151, 0.6) 50%,
            rgba(168, 218, 220, 0.8) 100%
          );
          z-index: 1;
        }

        .event-card:hover .card-image {
          transform: scale(1.05);
          opacity: 0.4;
        }

        .card-content {
          position: relative;
          z-index: 2;
          height: 100%;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card-category {
          align-self: flex-start;
          background: rgba(155, 106, 63, 0.1);
          color: #9B6A3F;
          padding: 0.4rem 0.8rem;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border: 1px solid rgba(155, 106, 63, 0.2);
          transition: all 0.3s ease;
          font-family: 'Heebo', sans-serif;
        }

        .event-card:hover .card-category {
          background: rgba(155, 106, 63, 0.15);
          transform: scale(1.05);
        }

        .card-title {
          font-size: 1.4rem;
          font-weight: 600;
          margin: 1rem 0;
          line-height: 1.3;
          color: #9B6A3F;
          transition: all 0.3s ease;
          font-family: 'Heebo', sans-serif;
        }

        .event-card:hover .card-title {
          transform: translateY(-5px);
        }

        .card-description {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #3C3C3C;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-family: 'Heebo', sans-serif;
        }

        .event-card:hover .card-description {
          transform: translateY(-3px);
        }

        .card-details {
          margin-bottom: 1rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s ease 0.1s;
        }

        .event-card:hover .card-details {
          opacity: 1;
          transform: translateY(0);
        }

        .detail-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
          font-size: 0.85rem;
          gap: 0.5rem;
          color: #6B7280;
          font-family: 'Heebo', sans-serif;
        }

        .detail-icon {
          opacity: 0.7;
          flex-shrink: 0;
          color: #9B6A3F;
        }

        .card-cta {
          background: rgba(155, 106, 63, 0.08);
          color: #9B6A3F;
          border: 1px solid rgba(155, 106, 63, 0.2);
          padding: 0.8rem 1.2rem;
          border-radius: 15px;
          text-align: center;
          font-weight: 500;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
          cursor: pointer;
          font-family: 'Heebo', sans-serif;
        }

        .event-card:hover .card-cta {
          opacity: 1;
          transform: translateY(0);
          background: rgba(155, 106, 63, 0.12);
          border-color: rgba(155, 106, 63, 0.3);
        }

        .card-cta:hover {
          background: rgba(155, 106, 63, 0.18);
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .event-card {
            max-width: 20rem;
            height: 28rem;
          }
          
          .card-title {
            font-size: 1.2rem;
          }
          
          .card-description {
            font-size: 0.85rem;
            -webkit-line-clamp: 3;
          }
        }
      `}</style>
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