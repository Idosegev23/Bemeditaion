import HeroSection from "@/components/HeroSection";
import { Camera, Heart, Users, Mountain } from 'lucide-react';

export default function GalleryPage() {
  const galleryCategories = [
    {
      id: 1,
      title: "ריטריטים",
      description: "רגעים מיוחדים מהריטריטים שלנו",
      icon: Mountain,
      imageCount: 24
    },
    {
      id: 2,
      title: "סדנאות בארץ",
      description: "מפגשים ברחבי הארץ",
      icon: Users,
      imageCount: 18
    },
    {
      id: 3,
      title: "רגעים אישיים",
      description: "חוויות אישיות ומיוחדות",
      icon: Heart,
      imageCount: 12
    },
    {
      id: 4,
      title: "מאחורי הקלעים",
      description: "הכנות ורגעים ספונטניים",
      icon: Camera,
      imageCount: 15
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="רגעים של נוכחות"
        description="אוסף תמונות מרגעים קסומים – סדנאות, ריטריטים ומפגשים. לחצו לצפייה בגלריות לפי נושאים."
        className="bg-gradient-to-b from-primary/20 to-background"
      />

      {/* Gallery Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={category.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer group"
                >
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                    <div className="text-center text-text-light">
                      <div className="w-20 h-20 mx-auto mb-3 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent size={40} className="text-primary" />
                      </div>
                      <p className="text-sm">{category.imageCount} תמונות</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-text-dark mb-3 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-text-light text-sm mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-medium text-sm">
                        צפו בגלריה
                      </span>
                      <span className="text-xs text-text-light bg-primary/10 px-2 py-1 rounded-full">
                        {category.imageCount} תמונות
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
            <Camera size={48} className="text-primary" />
          </div>
          <h2 className="text-h1 font-medium text-text-dark mb-6">
            הגלריה בבנייה
          </h2>
          <p className="text-lg text-text-light mb-8 leading-relaxed">
            אנחנו עובדים על הכנת גלריה מלאה עם תמונות מכל הפעילויות שלנו. 
            בינתיים, תוכלו לראות תמונות ועדכונים בעמוד הפייסבוק שלנו.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              עמוד הפייסבוק
            </a>
            <a
              href="/contact"
              className="inline-block border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              צרו קשר
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 