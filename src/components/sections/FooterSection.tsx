import { Heart } from 'lucide-react';
import type { StyledText } from '../../data/weddingContent';

type FooterSectionProps = {
  title: StyledText;
  message: StyledText;
  signoff: StyledText;
};

export function FooterSection({ title, message, signoff }: FooterSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-primary-accent text-white border-t border-borders-dividers">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-headings mb-8 text-secondary-accent" style={title.style}>
          {title.value}
        </h2>
        <p className="text-xl md:text-2xl font-body italic max-w-3xl mx-auto leading-relaxed text-white/90" style={message.style}>
          {message.value}
        </p>
        <div className="flex items-center justify-center py-10 opacity-80">
          <div className="w-16 h-[1px] bg-secondary-accent" />
          <Heart className="mx-4 text-secondary-accent w-8 h-8 fill-secondary-accent" />
          <div className="w-16 h-[1px] bg-secondary-accent" />
        </div>
        <p className="font-body text-lg font-semibold tracking-wide text-secondary-accent uppercase" style={signoff.style}>
          {signoff.value}
        </p>
      </div>
    </section>
  );
}
