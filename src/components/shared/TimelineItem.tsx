import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import type { TextStyle } from '../../data/weddingContent';

type TimelineItemProps = {
  title: string;
  time: string;
  videoSrc: string;
  expandHint: string;
  titleStyle?: TextStyle;
  timeStyle?: TextStyle;
  expandHintStyle?: TextStyle;
};

export function TimelineItem({
  title,
  time,
  videoSrc,
  expandHint,
  titleStyle,
  timeStyle,
  expandHintStyle,
}: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, {
    margin: '-35% 0px -35% 0px',
  });

  useEffect(() => {
    setIsExpanded(isInView);
  }, [isInView]);

  return (
    <div ref={containerRef} className="flex flex-col items-center mb-10 w-full">
      <div className="text-center mb-6">
        <h3 className="text-3xl md:text-4xl font-body text-primary-accent mb-2 font-semibold italic" style={titleStyle}>
          {title}
        </h3>
        <p className="text-secondary-accent text-lg" style={timeStyle}>
          {time}
        </p>
      </div>
      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          'relative shadow-soft rounded-2xl border border-borders-dividers/80 bg-white p-2 cursor-pointer transition-all duration-700 overflow-hidden',
          isExpanded ? 'max-h-[1000px]' : 'max-h-[220px]',
        )}
      >
        <div className="rounded-xl overflow-hidden bg-white">
          <video className="w-full h-auto object-cover" autoPlay muted loop playsInline>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        {!isExpanded && (
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
        )}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
            >
              <div className="text-secondary-accent font-semibold text-sm mb-1" style={expandHintStyle}>
                {expandHint}
              </div>
              <ChevronDown className="w-5 h-5 text-secondary-accent animate-bounce" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
