import { useState, useEffect } from 'react';
import { Sword, Shield, Gem, Crown } from 'lucide-react';

const LineageSide = () => {
  const [animationState, setAnimationState] = useState<'idle' | 'hat' | 'dust'>('idle');

  useEffect(() => {
    // Random animation cycle - more natural timing
    const runAnimation = () => {
      const rand = Math.random();
      if (rand < 0.25) {
        // Adjust hat (3s animation)
        setAnimationState('hat');
        setTimeout(() => setAnimationState('idle'), 3000);
      } else if (rand < 0.5) {
        // Dust off (2s animation)
        setAnimationState('dust');
        setTimeout(() => setAnimationState('idle'), 2000);
      }
      // else stay idle
    };

    // Initial delay
    const initialDelay = setTimeout(runAnimation, 2000);
    
    // Random intervals between 4-8 seconds
    const scheduleNext = () => {
      const delay = 4000 + Math.random() * 4000;
      return setTimeout(() => {
        runAnimation();
        timeoutId = scheduleNext();
      }, delay);
    };
    
    let timeoutId = scheduleNext();

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(timeoutId);
    };
  }, []);

  const getAnimationClass = () => {
    switch (animationState) {
      case 'hat':
        return 'character-hat';
      case 'dust':
        return 'character-dust';
      default:
        return 'character-idle';
    }
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Background gradient - fantasy style */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900 via-green-900 to-emerald-950" />
      
      {/* Pixelated grass pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 4px,
            rgba(34, 197, 94, 0.1) 4px,
            rgba(34, 197, 94, 0.1) 8px
          )`,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pixel-gold animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-between py-8 px-4">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sword className="w-4 h-4 text-pixel-gold" />
            <span className="text-pixel-gold text-xs tracking-widest">LINEAGE 2</span>
            <Shield className="w-4 h-4 text-pixel-gold" />
          </div>
          <h2 className="text-white text-sm font-pixel leading-relaxed drop-shadow-lg">
            ИГРОВАЯ<br/>СТОРОНА
          </h2>
        </div>

        {/* Character Container */}
        <div className="relative flex-1 flex items-center justify-center w-full">
          {/* Glow effect behind character */}
          <div className="absolute w-48 h-48 bg-pixel-green/20 rounded-full blur-xl animate-pulse" />
          
          {/* Character Image with animations */}
          <div 
            className={`relative ${getAnimationClass()}`}
          >
            <img
              src="./images/character.png"
              alt="Lineage 2 Character"
              className="w-64 h-auto object-contain character-glow drop-shadow-2xl"
              style={{
                imageRendering: 'pixelated',
                filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.6))',
              }}
            />
            
            {/* Level indicator */}
            <div className="absolute -top-4 -right-4 bg-pixel-darkgold border-2 border-pixel-gold px-2 py-1">
              <span className="text-pixel-gold text-[10px] font-pixel">LVL 99</span>
            </div>
            
            {/* Dust particles - visible only during dust animation */}
            {animationState === 'dust' && (
              <>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-pixel-gold/60 rounded-none dust-particle"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 40}%`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </>
            )}
          </div>

          {/* Stats floating around */}
          <div className="absolute top-10 left-4 bg-black/60 border border-pixel-green p-2">
            <div className="text-[8px] text-pixel-green font-pixel">
              <div>STR: 99</div>
              <div>DEX: 95</div>
              <div>INT: 88</div>
            </div>
          </div>

          <div className="absolute bottom-20 right-4 bg-black/60 border border-pixel-gold p-2">
            <div className="text-[8px] text-pixel-gold font-pixel">
              <div className="flex items-center gap-1">
                <Crown className="w-3 h-3" />
                <span>HERO</span>
              </div>
              <div className="flex items-center gap-1">
                <Gem className="w-3 h-3" />
                <span>LEGEND</span>
              </div>
            </div>
          </div>
        </div>

        {/* Class info */}
        <div className="text-center">
          <div className="bg-black/50 border-2 border-pixel-green px-4 py-2">
            <p className="text-pixel-green text-[10px] font-pixel">
              CLASS: ARCHMAGE
            </p>
            <p className="text-gray-400 text-[8px] mt-1">
              CLAN: SPACE_EXPLORERS
            </p>
          </div>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-pixel-gold" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-pixel-gold" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-pixel-gold" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-pixel-gold" />
    </div>
  );
};

export default LineageSide;
