interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  className?: string;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  backgroundImage,
  className = "" 
}: HeroSectionProps) => {
  return (
    <section 
      className={`relative py-20 px-4 text-center ${className}`}
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(168, 218, 220, 0.8), rgba(168, 218, 220, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-hero font-light text-text-dark mb-6 leading-tight">
          {title}
        </h1>
        
        {subtitle && (
          <h2 className="text-h2 font-medium text-primary mb-6">
            {subtitle}
          </h2>
        )}
        
        {description && (
          <p className="text-lg text-text-light leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroSection; 