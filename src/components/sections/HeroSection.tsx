import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import type { CSSProperties } from 'react';
import { Countdown } from '../shared/Countdown';
import type { StyledText } from '../../data/weddingContent';

type HeroSectionProps = {
  heroVideoSrc: string;
  weddingDate: Date;
  content: {
    mantraLines: string[];
    mantraStyle: CSSProperties;
    subtitle: StyledText;
    brideName: StyledText;
    groomName: StyledText;
    tagline: StyledText;
    eventDate: StyledText;
    scrollCta: StyledText;
  };
  countdownContent: {
    completedText: StyledText;
    labels: {
      days: StyledText;
      hours: StyledText;
      minutes: StyledText;
      seconds: StyledText;
    };
  };
};

export function HeroSection({ heroVideoSrc, weddingDate, content, countdownContent }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden py-16">
      <video className="absolute inset-0 w-full h-full object-cover object-center z-0" autoPlay loop muted playsInline>
        <source src={heroVideoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/10 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-[90%] md:max-w-md mx-auto rounded-[2rem] backdrop-blur-xl bg-gradient-to-b from-white/95 to-white/90 shadow-2xl border border-white/80 pt-10 pb-16 px-6 mt-8 flex flex-col items-center"
      >
        <h3 className="text-primary-accent text-lg md:text-xl font-body mb-2 font-semibold tracking-wide" style={content.mantraStyle}>
          {content.mantraLines[0]}
          <br />
          {content.mantraLines[1]}
        </h3>
        <p className="text-secondary-accent text-xl md:text-2xl font-headings mb-6" style={content.subtitle.style}>
          {content.subtitle.value}
        </p>

        <h1 className="text-primary-accent text-[4.5rem] md:text-[5.5rem] font-headings mb-0 drop-shadow-sm leading-none" style={content.brideName.style}>
          {content.brideName.value}
        </h1>
        <Heart className="w-10 h-10 text-secondary-accent my-3 fill-secondary-accent/20" />
        <h1 className="text-primary-accent text-[4.5rem] md:text-[5.5rem] font-headings mb-8 drop-shadow-sm leading-none" style={content.groomName.style}>
          {content.groomName.value}
        </h1>

        <div className="w-full max-w-[90%]">
          <p className="text-text-primary text-xl md:text-2xl font-body italic mb-4" style={content.tagline.style}>
            {content.tagline.value}
          </p>
          <p className="text-primary-accent text-sm md:text-base font-body mb-6 font-semibold tracking-[0.1em]" style={content.eventDate.style}>
            {content.eventDate.value}
          </p>
        </div>

        <div className="w-full max-w-[85%] h-[1px] bg-borders-dividers mb-8" />

        <Countdown
          targetDate={weddingDate}
          completedText={countdownContent.completedText}
          labels={countdownContent.labels}
        />

        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
          <div className="bg-white/95 backdrop-blur-md shadow-md px-8 py-2.5 rounded-full border border-borders-dividers/50 flex items-center justify-center">
            <p className="text-primary-accent font-body text-sm tracking-[0.1em] font-bold uppercase" style={content.scrollCta.style}>
              {content.scrollCta.value}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
