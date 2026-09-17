import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CircleDollarSign, DollarSign, PlaneTakeoff, Users } from 'lucide-react';
import { STATS } from '../data/infographicData';
import { AnimatedCounter } from './AnimatedCounter';
import { StatItem } from '../types';

export const KeyStatsSection: React.FC = () => {
  const [activeStat, setActiveStat] = useState<string | null>(STATS[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CircleDollarSign':
        return <CircleDollarSign className="w-6 h-6 text-amber-300" />;
      case 'DollarSign':
        return <DollarSign className="w-6 h-6 text-amber-300" />;
      case 'PlaneTakeoff':
        return <PlaneTakeoff className="w-6 h-6 text-amber-300" />;
      case 'Users':
        return <Users className="w-6 h-6 text-amber-300" />;
      default:
        return <DollarSign className="w-6 h-6 text-amber-300" />;
    }
  };

  return (
    <section id="stats-section" className="py-12 px-4 sm:px-6 lg:px-8 border-b border-sky-800/50 relative">
      <div className="max-w-[1500px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-200 tracking-tight uppercase drop-shadow-sm">
            Quan Hệ Hai Nước Qua <span className="text-yellow-100">Những Con Số</span>
          </h2>
        </div>

        {/* 4 Big Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {STATS.map((stat: StatItem, idx: number) => {
            const isActive = activeStat === stat.id;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.45 }}
                onClick={() => setActiveStat(isActive ? null : stat.id)}
                className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 relative overflow-hidden border ${
                  isActive
                    ? 'bg-gradient-to-br from-blue-900 via-[#0a204e] to-[#081b42] border-sky-400 blue-glow shadow-xl scale-[1.02]'
                    : 'bg-[#0a1e48]/75 hover:bg-[#0e275d]/60 border-sky-500/30 hover:border-sky-400/50 shadow'
                }`}
              >
                {/* Top icon */}
                <div className="mb-4">
                  <div className="inline-block p-2.5 rounded-xl bg-transparent border border-amber-200/50">
                    {getIcon(stat.icon)}
                  </div>
                </div>

                {/* Animated Stat Value */}
                <div className="mb-2">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight flex items-baseline flex-wrap">
                    <AnimatedCounter
                      end={stat.value}
                      decimals={stat.decimals ?? 0}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                </div>

                {/* Label */}
                <h3 className="text-xs sm:text-sm font-semibold text-white/95 leading-snug mb-2 min-h-[38px]">
                  {stat.label}
                </h3>

                {/* Expanded Detail Drawer */}
                {stat.detail ? (
                  <div className="mt-3 pt-3 border-t border-sky-800/60 text-xs text-sky-200/90 leading-relaxed">
                    {stat.detail}
                  </div>
                ) : null}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
