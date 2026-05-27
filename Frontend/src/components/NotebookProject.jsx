import { useRef } from 'react';

function NotebookProject({ image, title, category }) {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative w-full max-w-6xl mx-auto mt-16">
      <div 
        className="relative"
        style={{ 
          perspective: '2000px',
          scale: 1.8,
        }}
      >
        {/* Notebook Container */}
        <div className="relative">
          <img 
            src="/notebook.png" 
            alt="Notebook" 
            className="w-full h-auto"
            style={{ 
              filter: 'drop-shadow(0 25px 50px rgba(91, 103, 232, 0.3))',
            }}
          />
          
          {/* Screen Area with Project Image */}
          <div
            className="absolute top-[17%] left-[23.5%] right-[20%] bottom-[25%] overflow-hidden w-[17.8rem] h-[11.5rem]"
            style={{
              borderRadius: '8px',
            }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Screen Reflection/Glare Effect */}
          <div
            className="absolute top-[17%] left-[23.5%] right-[20%] bottom-[25%] pointer-events-none w-[17.8rem] h-[11.5rem]"
            style={{
              opacity: 0.3,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 40%, rgba(255,255,255,0.05) 100%)',
              borderRadius: '8px',
            }}
          />
        </div>

        {/* Project Info Below Notebook */}
        <div className="mt-2 text-center">
          <p className="text-[9px] font-black text-primary uppercase tracking-[0.2em] -mb-10 relative bottom-10">
            {category}
          </p>
          <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest ">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotebookProject;
