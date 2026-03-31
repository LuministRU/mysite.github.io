import LineageSide from './components/sections/LineageSide';
import SpaceSide from './components/sections/SpaceSide';
import CenterInfo from './components/sections/CenterInfo';

function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Main container with pixel border */}
      <div 
        className="relative w-full max-w-7xl aspect-[16/9] min-h-[600px] bg-black"
        style={{
          boxShadow: `
            0 0 0 4px #000,
            0 0 0 8px #22c55e,
            0 0 0 12px #000,
            0 0 40px rgba(34, 197, 94, 0.3)
          `,
        }}
      >
        {/* Three-column layout */}
        <div className="absolute inset-0 grid grid-cols-12">
          {/* Left side - Lineage 2 (5 columns) */}
          <div className="col-span-5 relative">
            <LineageSide />
            {/* Divider line */}
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pixel-gold via-pixel-green to-pixel-gold z-20" />
          </div>

          {/* Center - Info (2 columns) */}
          <div className="col-span-2 relative z-10">
            <CenterInfo />
          </div>

          {/* Right side - Space (5 columns) */}
          <div className="col-span-5 relative">
            {/* Divider line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pixel-blue via-pixel-gold to-pixel-blue z-20" />
            <SpaceSide />
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-pixel-green z-30" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-pixel-blue z-30" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-pixel-gold z-30" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-pixel-green z-30" />

        {/* Top title bar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black px-4 py-1 z-30 border-b-2 border-pixel-green">
          <span className="text-pixel-green text-[10px] font-pixel tracking-widest">
            PORTFOLIO v1.0
          </span>
        </div>

        {/* Bottom status bar - compact */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 border-t border-gray-800 px-3 py-1 z-30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[7px] text-pixel-green font-pixel flex items-center gap-1">
              <span className="animate-pulse">●</span> ONLINE
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[7px] text-pixel-gold">
              5+ PROJECTS
            </span>
            <span className="text-[7px] text-pixel-blue">
              5+ YEARS
            </span>
          </div>
        </div>
      </div>

      {/* Mobile warning */}
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center lg:hidden">
        <div className="text-center p-8">
          <p className="text-pixel-green text-sm font-pixel mb-4">
            ДЛЯ ПРОСМОТРА<br/>ИСПОЛЬЗУЙТЕ<br/>ДЕСКТОП
          </p>
          <p className="text-gray-500 text-[10px]">
            Минимальное разрешение: 1200x700
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
