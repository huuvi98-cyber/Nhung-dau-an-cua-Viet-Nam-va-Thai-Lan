import React from 'react';
import { motion } from 'motion/react';
import { ACTIVITIES } from '../data/infographicData';
import { Activity } from '../types';

export const PoliticalTrustSection: React.FC = () => {
  return (
    <section id="activities-section" className="py-12 px-4 sm:px-6 lg:px-8 border-b border-sky-800/50 relative">
      <div className="max-w-[1500px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-200 tracking-normal leading-normal uppercase drop-shadow-sm">
            Dấu Ấn Từ <span className="text-yellow-100 drop-shadow-sm">Chuyến Thăm</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-wider text-sky-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              Trong chuyến thăm, Nhà vua và Hoàng hậu có các hoạt động chính:
            </div>
          </div>
        </div>

        {/* 5 Activities Cards: 3 boxes on top row, 2 boxes on bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {ACTIVITIES.map((act: Activity, idx: number) => {
            return (
              <motion.div
                key={act.id}
                initial={{ opacity: 0, y: 32, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  delay: idx * 0.22,
                  duration: 0.55,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 border border-sky-200/70 bg-[#f0f7ff]/95 hover:bg-white hover:border-sky-300 shadow-md hover:shadow-lg flex items-center gap-4 group md:col-span-2 ${
                  idx === 3 ? 'md:col-start-2' : ''
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-[#082259] border border-sky-400/30 flex items-center justify-center shrink-0 text-sky-200 font-extrabold text-sm sm:text-base shadow-sm">
                  {idx + 1}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#082259] tracking-normal leading-snug">
                  {act.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
