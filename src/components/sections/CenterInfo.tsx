import { useState } from 'react';
import { Phone, Mail, Code, Terminal, Database, Server, Cpu, Globe, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string;
  tech: string[];
  link: string;
  preview: string;
}

// Only one real project
const project: Project = {
  id: 1,
  name: "Velvet Svoboda",
  description: "Танцевально-спортивный клуб VELVET. Сайт с записью на занятия, расписанием, информацией о тренерах и достижениях.",
  tech: ["React", "TypeScript", "Tailwind"],
  link: "http://velvetsvoboda.ru/",
  preview: "https://api.microlink.io/?url=http://velvetsvoboda.ru/&screenshot=true&embed=screenshot.url"
};

// Tech stack
const techStack = [
  { name: "Python", icon: Terminal, color: "text-yellow-400" },
  { name: "FastAPI", icon: Server, color: "text-teal-400" },
  { name: "PostgreSQL", icon: Database, color: "text-blue-400" },
  { name: "Docker", icon: Cpu, color: "text-cyan-400" },
  { name: "React", icon: Globe, color: "text-sky-400" },
  { name: "TypeScript", icon: Code, color: "text-blue-500" },
];

const CenterInfo = () => {
  const [showProject, setShowProject] = useState(false);

  return (
    <div className="relative h-full w-full bg-black/90 flex flex-col">
      {/* Scanlines effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 0, 0.03) 2px,
            rgba(0, 255, 0, 0.03) 4px
          )`,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col h-full p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-block border-2 border-pixel-green px-4 py-2 mb-4">
            <span className="text-pixel-green text-[10px] font-pixel animate-pulse">
              &lt;DEVELOPER /&gt;
            </span>
          </div>
          <h1 className="text-white text-lg font-pixel leading-relaxed mb-2">
            ВАСИЛЬЕВ<br/>СТАНИСЛАВ
          </h1>
          <p className="text-gray-400 text-[10px] font-pixel">
            ИНЖЕНЕР-ПРОГРАММИСТ
          </p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-pixel-gold text-[8px]">РОСКОСМОС</span>
            <span className="text-gray-600">|</span>
            <span className="text-pixel-green text-[8px]">5+ ЛЕТ ОПЫТА</span>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h3 className="text-pixel-blue text-[10px] font-pixel mb-3 flex items-center gap-2">
            <Terminal className="w-3 h-3" />
            TECH STACK
          </h3>
          <div className="grid grid-cols-3 gap-1">
            {techStack.map((tech) => (
              <div 
                key={tech.name}
                className="bg-gray-900 border border-gray-700 p-1.5 flex flex-col items-center gap-1 hover:border-pixel-green transition-colors min-w-0"
              >
                <tech.icon className={`w-3 h-3 ${tech.color}`} />
                <span className="text-[6px] text-gray-300 font-pixel text-center truncate w-full">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-pixel-gold text-[10px] font-pixel flex items-center gap-2">
              <Code className="w-3 h-3" />
              ПРОЕКТ
            </h3>
            <button
              onClick={() => setShowProject(!showProject)}
              className="text-[8px] text-pixel-green hover:text-white transition-colors"
            >
              {showProject ? 'СКРЫТЬ' : 'ПОКАЗАТЬ'}
            </button>
          </div>

          {showProject && (
            <div className="bg-gray-900 border-2 border-gray-700 p-3">
              {/* Preview Image */}
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-3 relative group"
              >
                <img 
                  src={project.preview}
                  alt={project.name}
                  className="w-full h-24 object-cover border border-gray-600 group-hover:border-pixel-green transition-colors"
                  style={{ imageRendering: 'auto' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100"><rect fill="%23111" width="200" height="100"/><text fill="%23666" x="50%" y="50%" text-anchor="middle" font-size="10">Preview</text></svg>';
                  }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </a>

              <div className="mb-3">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[10px] font-pixel mb-1 hover:text-pixel-green transition-colors block"
                >
                  {project.name}
                </a>
                <p className="text-gray-400 text-[8px] mb-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="text-[7px] bg-pixel-darkgreen text-pixel-green px-1 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-pixel-darkgreen border border-pixel-green text-pixel-green text-[8px] py-2 hover:bg-pixel-green hover:text-black transition-colors font-pixel"
              >
                ПЕРЕЙТИ НА САЙТ →
              </a>
            </div>
          )}

          {!showProject && (
            <div 
              className="bg-gray-900 border-2 border-dashed border-gray-700 p-4 text-center cursor-pointer hover:border-pixel-green transition-colors"
              onClick={() => setShowProject(true)}
            >
              <p className="text-gray-500 text-[10px] font-pixel">
                НАЖМИТЕ ДЛЯ ПРОСМОТРА
              </p>
              <p className="text-gray-600 text-[8px] mt-1">
                1 ПРОЕКТ
              </p>
            </div>
          )}
        </div>

        {/* Contacts */}
        <div className="mt-6 pt-4 border-t border-gray-800">
          <h3 className="text-pixel-blue text-[10px] font-pixel mb-3 flex items-center gap-2">
            <Globe className="w-3 h-3" />
            КОНТАКТЫ
          </h3>
          <div className="space-y-2">
            <a 
              href="tel:+79151052680"
              className="flex items-center gap-2 text-[10px] text-gray-300 hover:text-pixel-green transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span className="font-pixel">+7 (915) 105-26-80</span>
            </a>
            <a 
              href="mailto:uperman5@yandex.ru"
              className="flex items-center gap-2 text-[10px] text-gray-300 hover:text-pixel-green transition-colors"
            >
              <Mail className="w-3 h-3" />
              <span className="font-pixel">uperman5@yandex.ru</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4 text-center">
          <p className="text-[7px] text-gray-600 font-pixel">
            &copy; 2025 ВАСИЛЬЕВ СТАНИСЛАВ
          </p>
          <p className="text-[6px] text-gray-700 mt-1">
            PYTHON DEVELOPER | ROSCOSMOS
          </p>
        </div>
      </div>

      {/* Side borders */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pixel-green via-pixel-blue to-pixel-gold" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pixel-gold via-pixel-blue to-pixel-green" />
    </div>
  );
};

export default CenterInfo;
