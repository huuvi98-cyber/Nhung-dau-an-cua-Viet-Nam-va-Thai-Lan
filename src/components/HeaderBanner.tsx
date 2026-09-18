import React from 'react';
import { motion } from 'motion/react';
import { DongSonWatermark, VietnamFlag, ThailandFlag } from './FlagBadges';
import { DigitalWaveBackground } from './DigitalWaveBackground';

interface HistoricPhoto {
  src: string;
  fallback: string;
  alt: string;
}

const HISTORIC_PHOTOS: HistoricPhoto[] = [
  {
    src: '/images/xl-1.jpg',
    fallback: '/xl-1.jpg',
    alt: 'Tổng Bí thư, Chủ tịch nước Tô Lâm và Phu nhân tiếp Nhà vua Thái Lan Maha Vajiralongkorn Phra Vajiraklaochaoyuhua và Hoàng hậu',
  },
  {
    src: '/images/xl-2.jpg',
    fallback: '/xl-2.jpg',
    alt: 'Tổng Bí thư, Chủ tịch nước Tô Lâm và Phu nhân tiếp Nhà vua Thái Lan Maha Vajiralongkorn Phra Vajiraklaochaoyuhua và Hoàng hậu',
  },
];

export const HeaderBanner: React.FC = () => {
  return (
    <header className="pt-6 sm:pt-8 pb-4 px-4 sm:px-6 lg:px-8">
      {/* 16:9 Infographic Cover */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[1500px] mx-auto aspect-auto sm:aspect-[16/9] min-h-[420px] sm:min-h-[480px] md:min-h-[540px] relative rounded-3xl overflow-hidden border-2 border-sky-400/40 shadow-2xl flex flex-col justify-center items-center p-5 sm:p-8 md:p-10"
      >
        {/* Animated Cybernetic Particle Wave Background matching user image */}
        <DigitalWaveBackground />

        {/* Decorative Dong Son Background Motif */}
        <div className="absolute -top-20 -right-20 w-80 sm:w-96 h-80 sm:h-96 text-sky-400/10 pointer-events-none">
          <DongSonWatermark className="w-full h-full" />
        </div>
        <div className="absolute -bottom-24 -left-24 w-80 sm:w-96 h-80 sm:h-96 text-sky-400/10 pointer-events-none">
          <DongSonWatermark className="w-full h-full" />
        </div>

        {/* Ambient radial glow in center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(56,189,248,0.18)_0%,transparent_65%)] pointer-events-none" />

        {/* Center: Flags + Main 3-Line Title with emphasis on "Những Dấu Ấn" */}
        <div className="relative z-10 text-center my-auto -translate-y-4 sm:-translate-y-7 md:-translate-y-9 py-2 flex flex-col items-center">
          {/* Cặp Quốc kỳ Việt Nam - Thái Lan đặt phía trên "Những Dấu Ấn" */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-4 sm:mb-6 inline-flex items-center gap-2.5 sm:gap-3.5 px-4 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-transparent border border-sky-400/50 shadow-sm"
          >
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              <VietnamFlag className="w-7 sm:w-8 h-4.5 sm:h-5.5 rounded-sm shadow-md" />
              <span className="text-xs sm:text-sm font-black text-sky-200 tracking-wider">VIỆT NAM</span>
            </div>
            <span className="text-amber-400 text-sm font-bold px-0.5">✦</span>
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              <ThailandFlag className="w-7 sm:w-8 h-4.5 sm:h-5.5 rounded-sm shadow-md" />
              <span className="text-xs sm:text-sm font-black text-sky-200 tracking-wider">THÁI LAN</span>
            </div>
          </motion.div>

          {/* Line 1: Nhấn chữ "Những Dấu Ấn" - sắc nét, rõ dấu, tông màu nâu vàng */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-wide gold-gradient-text drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Những Dấu Ấn
            </span>
          </motion.div>

          {/* Line 2: Xuống dòng "Trong Chuyến Thăm Việt Nam Của" */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="my-2.5 sm:my-3.5"
          >
            <span className="block text-base sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-widest text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Trong Chuyến Thăm Việt Nam Của
            </span>
          </motion.div>

          {/* Line 3: Xuống dòng "Nhà Vua Thái Lan Và Hoàng Hậu" */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <span className="block text-base sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-wider text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Nhà Vua Thái Lan Và Hoàng Hậu
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Summary placed below the cover frame, keeping only text without the box */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="max-w-[1000px] mx-auto w-full pt-4 sm:pt-6 px-4 text-center"
      >
        <p className="max-w-[1000px] mx-auto text-sm sm:text-[17px] md:text-[18.5px] text-sky-100/95 leading-relaxed font-normal">
          Chuyến thăm cấp Nhà nước tới Việt Nam của Nhà vua Thái Lan và Hoàng hậu từ ngày 14 đến 16-9-2026, theo lời mời của Tổng Bí thư, Chủ tịch nước Tô Lâm và Phu nhân, góp phần củng cố tin cậy chính trị, thắt chặt tình cảm giữa hai dân tộc và tạo động lực đưa quan hệ Đối tác Chiến lược toàn diện đi vào chiều sâu.
        </p>
      </motion.div>

      {/* 2 Photos arranged horizontally with thin borders and unified caption */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.6 }}
        className="max-w-[1000px] mx-auto w-full pt-5 sm:pt-6 px-2 sm:px-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
          {HISTORIC_PHOTOS.map((photo, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl border border-sky-400/35 bg-[#031338]/60 backdrop-blur-sm transition-all duration-300 hover:border-sky-300/70 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] flex items-center justify-center"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[380px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (photo.fallback && target.src !== photo.fallback) {
                    target.src = photo.fallback;
                  }
                }}
              />
            </div>
          ))}
        </div>

        {/* Unified Caption */}
        <div className="mt-2.5 sm:mt-3 text-center">
          <p className="text-[11.5px] sm:text-[13px] text-white/95 font-normal leading-relaxed italic">
            Tổng Bí thư, Chủ tịch nước Tô Lâm và Phu nhân tiếp Nhà vua Thái Lan Maha Vajiralongkorn Phra Vajiraklaochaoyuhua và Hoàng hậu.{' '}
            <span className="text-white font-medium not-italic ml-1">Ảnh: VIẾT CHUNG</span>
          </p>
        </div>
      </motion.div>
    </header>
  );
};
