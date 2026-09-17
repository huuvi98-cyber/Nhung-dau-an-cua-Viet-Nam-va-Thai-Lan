import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Network, Building, Leaf, CheckCircle, ArrowRight } from 'lucide-react';
import { THREE_CONNECTIONS } from '../data/infographicData';
import { ThreeConnections } from '../types';

export const ThreeConnectionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network':
        return <Network className="w-6 h-6 text-amber-300" />;
      case 'Building':
        return <Building className="w-6 h-6 text-amber-300" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-emerald-300" />;
      default:
        return <Network className="w-6 h-6 text-amber-300" />;
    }
  };

  return (
    <section id="three-connections" className="py-12 px-4 sm:px-6 lg:px-8 border-b border-red-800/60 relative bg-gradient-to-b from-[#7a0000] via-[#850000] to-[#750000]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
            Sáng Kiến <span className="gold-gradient-text">“Ba Kết Nối”</span>
          </h2>
          <p className="mt-2 text-red-200/80 text-sm sm:text-base max-w-2xl mx-auto">
            Khung chiến lược trọng tâm nhằm đưa quan hệ Đối tác Chiến lược toàn diện đi vào chiều sâu:
          </p>
        </div>

        {/* Interactive 3-Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
          {THREE_CONNECTIONS.map((item: ThreeConnections) => {
            const isActive = activeTab === item.number;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.number * 0.12, duration: 0.4 }}
                onClick={() => setActiveTab(item.number)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative border flex flex-col justify-between ${
                  isActive
                    ? 'bg-gradient-to-b from-red-900 via-red-950 to-red-950 border-amber-400 gold-glow shadow-2xl scale-[1.02]'
                    : 'bg-red-950/60 hover:bg-red-900/40 border-amber-500/25 hover:border-amber-400/50'
                }`}
              >
                {/* Floating Circle Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/50 flex items-center justify-center font-black text-amber-300 text-xl shadow">
                    0{item.number}
                  </div>
                  <div className="p-2.5 rounded-xl bg-red-900/80 border border-red-700/60">
                    {getIcon(item.icon)}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-200">
                    {item.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-amber-300/80 uppercase tracking-wider mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-sm text-red-100/90 leading-relaxed mb-4">
                    {item.detail}
                  </p>
                </div>

                {/* Status indicator */}
                <div className="pt-3 border-t border-red-800/40 flex items-center justify-between text-xs">
                  <span className={`font-semibold flex items-center gap-1 ${isActive ? 'text-amber-300' : 'text-red-300/60'}`}>
                    <CheckCircle className="w-3.5 h-3.5" />
                    {isActive ? 'Đang kích hoạt' : 'Chọn xem chi tiết'}
                  </span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-amber-300 translate-x-1' : 'text-red-400/40'}`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
