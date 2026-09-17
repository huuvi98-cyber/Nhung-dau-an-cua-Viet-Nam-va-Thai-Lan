import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MILESTONES } from '../data/infographicData';
import { Milestone } from '../types';

export const MilestonesSection: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<string>(MILESTONES[0].id);

  return (
    <section id="milestones-section" className="py-10 px-4 sm:px-6 lg:px-8 border-b border-sky-800/50 relative">
      {/* Section Header */}
      <div className="max-w-5xl mx-auto mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-200 tracking-tight uppercase drop-shadow-sm">
          3 Dấu Mốc <span className="text-yellow-100">Đặc Biệt</span>
        </h2>
      </div>

      {/* 3 Milestone Cards Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {MILESTONES.map((item: Milestone, idx: number) => {
          const isSelected = selectedMilestone === item.id;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              onClick={() => setSelectedMilestone(item.id)}
              className={`group cursor-pointer rounded-2xl p-6 transition-all duration-300 relative flex flex-col justify-between overflow-hidden border ${
                isSelected
                  ? 'bg-gradient-to-b from-blue-900/90 via-[#0a204e] to-[#081b42] border-sky-400 blue-glow shadow-xl scale-[1.02]'
                  : 'bg-[#0a1e48]/75 hover:bg-[#0e275d]/70 border-sky-500/30 hover:border-sky-400/60 shadow'
              }`}
            >
              <div>
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-sky-200 transition-colors mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-sky-100/90 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
