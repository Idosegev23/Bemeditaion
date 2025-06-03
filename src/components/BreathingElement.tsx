import React from 'react';

interface BreathingElementProps {
  variant?: 'circle' | 'lotus' | 'wave';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'primary-calm' | 'natural-brown' | 'text-highlighted' | 'soft-green';
  className?: string;
}

const BreathingElement: React.FC<BreathingElementProps> = ({
  variant = 'circle',
  size = 'md',
  color = 'primary-calm',
  className = ''
}) => {
  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'xs': return 'w-8 h-8';
      case 'sm': return 'w-12 h-12';
      case 'md': return 'w-16 h-16';
      case 'lg': return 'w-24 h-24';
      default: return 'w-16 h-16';
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary-calm': return 'bg-primary-calm/20 border-primary-calm/30';
      case 'natural-brown': return 'bg-natural-brown/20 border-natural-brown/30';
      case 'text-highlighted': return 'bg-text-highlighted/20 border-text-highlighted/30';
      case 'soft-green': return 'bg-soft-green/20 border-soft-green/30';
      default: return 'bg-primary-calm/20 border-primary-calm/30';
    }
  };

  const renderElement = () => {
    const baseClasses = `${getSizeClasses(size)} ${getColorClasses(color)} ${className}`;
    
    switch (variant) {
      case 'lotus':
        return (
          <div className={`${baseClasses} rounded-full border-2 flex items-center justify-center animate-pulse`}>
            <div className="relative">
              {/* פנימי - עיגול קטן */}
              <div className="w-2 h-2 bg-current rounded-full opacity-60"></div>
              {/* עלי הלוטוס */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border border-current opacity-40"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center rotate-45">
                <div className="w-3 h-3 rounded-full border border-current opacity-30"></div>
              </div>
            </div>
          </div>
        );
      
      case 'wave':
        return (
          <div className={`${baseClasses} rounded-2xl border-2 flex items-center justify-center overflow-hidden`}>
            <div className="relative w-full h-full">
              {/* גלים */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-current opacity-20 rounded-t-full animate-pulse"></div>
              <div className="absolute bottom-0 left-1/4 w-1/2 h-1/3 bg-current opacity-30 rounded-t-full" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-0 left-1/2 w-1/4 h-1/4 bg-current opacity-40 rounded-t-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        );
      
      case 'circle':
      default:
        return (
          <div className={`${baseClasses} rounded-full border-2 flex items-center justify-center`}>
            <div className="w-1/3 h-1/3 bg-current rounded-full opacity-60 animate-pulse"></div>
          </div>
        );
    }
  };

  return (
    <div className="breathe" style={{ animationDelay: Math.random() * 2 + 's' }}>
      {renderElement()}
    </div>
  );
};

export default BreathingElement; 