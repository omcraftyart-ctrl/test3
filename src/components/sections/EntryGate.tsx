import { AnimatePresence, motion } from 'motion/react';
import type { RefObject } from 'react';
import type { StyledText } from '../../data/weddingContent';

type EntryGateProps = {
  isEntered: boolean;
  onEntry: () => Promise<void>;
  onVideoEnd: () => void;
  entryVideoSrc: string;
  videoRef: RefObject<HTMLVideoElement | null>;
  cta: StyledText;
};

export function EntryGate({
  isEntered,
  onEntry,
  onVideoEnd,
  entryVideoSrc,
  videoRef,
  cta,
}: EntryGateProps) {
  return (
    <AnimatePresence>
      {!isEntered && (
        <motion.div
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black z-[100] cursor-pointer"
          onClick={onEntry}
        >
          <video
            ref={videoRef}
            onEnded={onVideoEnd}
            className="w-full h-full object-cover"
            playsInline
            preload="metadata"
          >
            <source src={entryVideoSrc} type="video/mp4" />
          </video>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <p className="text-white text-xl font-headings animate-pulse" style={cta.style}>
              {cta.value}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
