import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { COOPERATION_PILLARS } from '../data/infographicData';
import { CooperationPillar } from '../types';

export const CooperationPillarsSection: React.FC = () => {
  return (
    <section id="cooperation-pillars" className="py-12 px-4 sm:px-6 lg:px-8 border-b border-sky-800/50 relative">
      <div className="max-w-[1500px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-200 tracking-tight uppercase drop-shadow-sm">
            Mở Rộng Hợp Tác <span className="text-yellow-100">Trên Nhiều Lĩnh Vực</span>
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {COOPERATION_PILLARS.map((pillar: CooperationPillar, idx: number) => {
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                className="rounded-2xl p-6 transition-all duration-300 relative border flex flex-col justify-between overflow-hidden bg-[#0a1e48]/85 hover:bg-[#0e275d]/60 border-sky-500/30 hover:border-sky-400 shadow-xl"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">
                    {pillar.title}
                  </h3>

                  {/* Item List */}
                  <ul className="space-y-2.5">
                    {pillar.items.map((item: string, itemIdx: number) => {
                      const isNumbered = /^\d+\./.test(item.trim());
                      return (
                        <li key={itemIdx} className="flex items-start gap-2 text-xs sm:text-sm text-sky-100/90 leading-relaxed">
                          {!isNumbered && (
                            <div className="mt-1 w-4 h-4 rounded-full bg-sky-400/20 border border-sky-400/50 flex items-center justify-center flex-shrink-0">
                              <Check className="w-2.5 h-2.5 text-sky-300" />
                            </div>
                          )}
                          <span className={isNumbered ? "text-sky-200 font-medium" : ""}>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
