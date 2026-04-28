import type { CSSProperties } from 'react';

type StoriesSectionProps = {
  storyVideoSrc: string;
  dividerSymbol: {
    value: string;
    style: CSSProperties;
  };
};

export function StoriesSection({ storyVideoSrc, dividerSymbol }: StoriesSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-bg-primary">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center opacity-80">
            <div className="w-16 h-[1px] bg-secondary-accent" />
            <span className="text-secondary-accent mx-4 text-xl" style={dividerSymbol.style}>
              {dividerSymbol.value}
            </span>
            <div className="w-16 h-[1px] bg-secondary-accent" />
          </div>
        </div>

        <div className="relative max-w-lg mx-auto mt-14">
          <div className="absolute -inset-4 border-[1.5px] border-primary-accent rounded-[2rem] opacity-70" />
          <div className="absolute -inset-2 border-[1px] border-secondary-accent rounded-[1.8rem] opacity-40" />
          <div className="absolute -top-6 -left-2 w-8 h-8 bg-primary-accent rounded-full z-10 opacity-90 border-[3px] border-bg-primary" />
          <div className="absolute top-[60%] -left-[1.3rem] w-4 h-4 bg-primary-accent rounded-full z-10 opacity-90" />

          <div className="bg-white p-2 rounded-[1.5rem] shadow-soft relative z-0">
            <div className="relative overflow-hidden rounded-[1.2rem]">
              <video className="w-full h-auto aspect-[1080/1600] object-cover shadow-inner" autoPlay loop muted playsInline>
                <source src={storyVideoSrc} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
