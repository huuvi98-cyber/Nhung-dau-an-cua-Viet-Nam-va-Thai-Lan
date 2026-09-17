import React from 'react';
import { motion } from 'motion/react';
import { ACTIVITIES } from '../data/infographicData';
import { Activity } from '../types';

export const PoliticalTrustSection: React.FC = () => {
  return (
    <section id="activities-section" className="py-12 px-4 sm:px-6 lg:px-8 border-b border-sky-800/50 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-200 tracking-normal leading-normal uppercase drop-shadow-sm">
            Tin Cậy Chính Trị, <span className="text-yellow-100 drop-shadow-sm">Gắn Kết Nhân Dân</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-wider text-sky-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              Trong chuyến thăm, Nhà vua và Hoàng hậu:
            </div>
          </div>
        </div>

        {/* 4 Activities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACTIVITIES.map((act: Activity, idx: number) => {
            return (
              <motion.div
                key={act.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="rounded-2xl p-5 sm:p-6 transition-all duration-300 border border-sky-200/70 bg-[#f0f7ff]/95 hover:bg-white hover:border-sky-300 shadow-md hover:shadow-lg flex items-center gap-4 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#082259] border border-sky-400/30 flex items-center justify-center shrink-0 text-sky-200 font-extrabold text-sm sm:text-base shadow-sm">
                  {idx + 1}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#082259] tracking-wide">
                  {act.title}
                </h3>
              </motion.div>
            );
          })}
        </div>

        {/* Statement / Quote without box */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-8 text-center max-w-4xl mx-auto px-4"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-sky-200/95 font-medium leading-relaxed italic tracking-wide">
            &ldquo;Theo Thứ trưởng Bộ Ngoại giao Nguyễn Mạnh Cường, dấu ấn lớn nhất là sự tin cậy chính trị cấp cao và tình cảm gần gũi giữa hai dân tộc.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
};
