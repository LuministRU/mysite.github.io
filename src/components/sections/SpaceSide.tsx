import { useState, useEffect, useCallback } from 'react';
import { Rocket, Satellite, Orbit, Star } from 'lucide-react';

interface StarType {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

interface ShootingStarType {
  id: number;
  startX: number;
  startY: number;
  angle: number;
}

const SpaceSide = () => {
  const [stars, setStars] = useState<StarType[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStarType[]>([]);

  // Generate static stars on mount
  useEffect(() => {
    const generatedStars: StarType[] = [];
    for (let i = 0; i < 80; i++) {
      generatedStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 3,
        duration: 1 + Math.random() * 2,
      });
    }
    setStars(generatedStars);
  }, []);

  // Shooting star effect every 20 seconds
  const createShootingStar = useCallback(() => {
    const newShootingStar: ShootingStarType = {
      id: Date.now(),
      startX: Math.random() * 50,
      startY: Math.random() * 30,
      angle: Math.random() * 60 + 30, // 30-90 degrees
    };
    
    setShootingStars(prev => [...prev, newShootingStar]);
    
    // Remove shooting star after animation
    setTimeout(() => {
      setShootingStars(prev => prev.filter(s => s.id !== newShootingStar.id));
    }, 2000);
  }, []);

  useEffect(() => {
    // Initial shooting star
    const initialTimeout = setTimeout(createShootingStar, 5000);
    
    // Regular shooting stars every 20 seconds
    const interval = setInterval(createShootingStar, 20000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [createShootingStar]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900" />
      
      {/* Nebula effect */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 60%, rgba(139, 92, 246, 0.2) 0%, transparent 40%),
            radial-gradient(ellipse at 50% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)
          `,
        }}
      />

      {/* Static twinkling stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      {shootingStars.map((shootingStar) => (
        <div
          key={shootingStar.id}
          className="absolute shooting-star"
          style={{
            left: `${shootingStar.startX}%`,
            top: `${shootingStar.startY}%`,
          }}
        >
          <div 
            className="w-20 h-0.5 bg-gradient-to-r from-white via-blue-200 to-transparent"
            style={{
              transform: `rotate(${shootingStar.angle}deg)`,
              boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8), 0 0 20px 4px rgba(59, 130, 246, 0.5)',
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-between py-8 px-4">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Rocket className="w-4 h-4 text-pixel-blue" />
            <span className="text-pixel-blue text-xs tracking-widest">РОСКОСМОС</span>
            <Satellite className="w-4 h-4 text-pixel-blue" />
          </div>
          <h2 className="text-white text-sm font-pixel leading-relaxed drop-shadow-lg">
            КОСМИЧЕСКАЯ<br/>СТОРОНА
          </h2>
        </div>

        {/* Center - Orbit visualization */}
        <div className="relative flex-1 flex items-center justify-center w-full">
          {/* Orbital rings */}
          <div className="absolute w-40 h-40 border border-pixel-blue/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute w-56 h-56 border border-pixel-blue/20 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
          <div className="absolute w-72 h-72 border border-pixel-blue/10 rounded-full animate-spin" style={{ animationDuration: '40s' }} />
          
          {/* Central planet/space station */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 shadow-glow-blue flex items-center justify-center">
              <Orbit className="w-12 h-12 text-white/80" />
            </div>
            {/* Orbiting satellite */}
            <div className="absolute -inset-8 animate-spin" style={{ animationDuration: '8s' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Satellite className="w-4 h-4 text-pixel-gold" />
              </div>
            </div>
          </div>

          {/* Tech stats */}
          <div className="absolute top-10 right-4 bg-black/60 border border-pixel-blue p-2">
            <div className="text-[8px] text-pixel-blue font-pixel">
              <div>ORBIT: 400KM</div>
              <div>VEL: 7.66KM/S</div>
              <div>STATUS: ACTIVE</div>
            </div>
          </div>

          <div className="absolute bottom-20 left-4 bg-black/60 border border-pixel-gold p-2">
            <div className="text-[8px] text-pixel-gold font-pixel">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                <span>ENGINEER</span>
              </div>
              <div>DEPT: IT</div>
            </div>
          </div>
        </div>

        {/* Mission info */}
        <div className="text-center">
          <div className="bg-black/50 border-2 border-pixel-blue px-4 py-2">
            <p className="text-pixel-blue text-[10px] font-pixel">
              МИССИЯ: РАЗРАБОТКА
            </p>
            <p className="text-gray-400 text-[8px] mt-1">
              СТАТУС: В ПРОЦЕССЕ
            </p>
          </div>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-pixel-blue" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-pixel-blue" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-pixel-blue" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-pixel-blue" />
    </div>
  );
};

export default SpaceSide;
