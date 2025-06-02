'use client';

import { useState } from 'react';
import MeditationCard from "@/components/MeditationCard";
import MeditationModal from "@/components/MeditationModal";
import meditationsData from "@/data/meditations.json";

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

export default function MeditationsPage() {
  const [selectedMeditation, setSelectedMeditation] = useState<Meditation | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMeditationClick = (meditation: Meditation) => {
    setSelectedMeditation(meditation);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMeditation(null);
  };

  return (
    <div className="min-h-screen">
      {/* כותרת הדף */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary-calm/20 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-h1 font-display text-text-highlighted mb-6">
            המדיטציות הפעילות של אושו
          </h1>
          <p className="text-body-large text-text-dark/80 leading-relaxed">
            המדיטציות האקטיביות של אושו מאפשרות לתנועה, שחרור והבנה לצוף מתוך הגוף – לפני שהשכל מתערב.
          </p>
        </div>
      </section>

      {/* Meditations Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {meditationsData.map((meditation) => (
              <MeditationCard 
                key={meditation.id} 
                meditation={meditation}
                onClick={() => handleMeditationClick(meditation)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-h1 font-medium text-text-dark mb-8 text-center">
            למה מדיטציות פעילות?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-text-dark">לאדם המודרני</h3>
              <p className="text-text-light leading-relaxed">
                אושו פיתח את המדיטציות הפעילות במיוחד עבור האדם המודרני. 
                הן מתחילות בתנועה ופעילות כדי לשחרר מתחים ורק אז מגיעות לשקט.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-text-dark">שחרור וטיהור</h3>
              <p className="text-text-light leading-relaxed">
                המדיטציות מאפשרות שחרור של רגשות חסומים, מתחים גופניים ודפוסי חשיבה ישנים,
                ויוצרות מרחב לשקט ובהירות פנימית.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              הצטרפו למפגש מדיטציה
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      <MeditationModal
        meditation={selectedMeditation}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
} 