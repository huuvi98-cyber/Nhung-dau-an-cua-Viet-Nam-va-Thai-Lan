import { HeaderBanner } from './components/HeaderBanner';
import { MilestonesSection } from './components/MilestonesSection';
import { KeyStatsSection } from './components/KeyStatsSection';
import { PoliticalTrustSection } from './components/PoliticalTrustSection';
import { CooperationPillarsSection } from './components/CooperationPillarsSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1f48] bg-embossed-blue text-slate-100 flex flex-col selection:bg-sky-400 selection:text-slate-950 font-['Be_Vietnam_Pro',sans-serif]">
      {/* Main Header Infographic Banner */}
      <HeaderBanner />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1500px] mx-auto">
        <div className="space-y-0">
          <MilestonesSection />
          <KeyStatsSection />
          <PoliticalTrustSection />
          <CooperationPillarsSection />
        </div>
      </main>
    </div>
  );
}
