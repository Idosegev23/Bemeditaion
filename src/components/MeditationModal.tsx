'use client';

import { X, Clock, Star, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';

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

interface MeditationModalProps {
  meditation: Meditation | null;
  isOpen: boolean;
  onClose: () => void;
}

const MeditationModal = ({ meditation, isOpen, onClose }: MeditationModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !meditation) return null;

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
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
            aria-label="סגור"
          >
            <X size={20} className="text-gray-600" />
          </button>

          {/* Image Placeholder */}
          <div className="aspect-video bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
            <div className="text-center text-text-light">
              <div className="w-20 h-20 mx-auto mb-3 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-3xl">🧘‍♀️</span>
              </div>
              <p className="text-sm">{meditation.title}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${getDifficultyColor(meditation.difficulty)}`}>
                {meditation.difficulty}
              </span>
              <div className="flex items-center text-text-light text-sm">
                <Clock size={16} className="ml-1" />
                <span>{meditation.duration}</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-text-dark mb-4">
              {meditation.title}
            </h2>

            <p className="text-text-light leading-relaxed mb-6">
              {meditation.fullDescription}
            </p>

            {/* Benefits */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-text-dark mb-3 flex items-center">
                <Star size={20} className="ml-2 text-primary" />
                יעדי המדיטציה
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {meditation.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-text-light text-sm">
                    <CheckCircle size={16} className="ml-2 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                הצטרף למפגש
              </button>
              <button 
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                סגור
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeditationModal; 