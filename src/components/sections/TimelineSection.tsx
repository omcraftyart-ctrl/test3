import React from 'react';
import { TimelineItem } from '../shared/TimelineItem';
import type { TimelineEvent, TimelineContent } from '../../data/weddingContent';

type TimelineSectionProps = {
  events: TimelineEvent[];
  content: TimelineContent;
};

export function TimelineSection({ events, content }: TimelineSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-[3.5rem] md:text-6xl font-headings mb-6 text-primary-accent" style={content.sectionTitle.style}>
            {content.sectionTitle.value}
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary font-body italic leading-relaxed" style={content.sectionSubtitle.style}>
            {content.sectionSubtitle.value}
          </p>
        </div>

        <div className="max-w-md mx-auto space-y-6">
          {events.map((item, index) => (
            <React.Fragment key={`${item.title}-${item.time}`}>
              <TimelineItem
                title={item.title}
                time={item.time}
                videoSrc={item.video}
                expandHint={content.expandHint.value}
                titleStyle={content.eventTitleStyle}
                timeStyle={content.eventTimeStyle}
                expandHintStyle={content.expandHint.style}
              />
              {index < events.length - 1 && (
                <div className="flex items-center justify-center py-6 opacity-60">
                  <div className="w-16 h-[1px] bg-secondary-accent" />
                  <span className="text-secondary-accent mx-4 text-xl" style={content.dividerSymbol.style}>
                    {content.dividerSymbol.value}
                  </span>
                  <div className="w-16 h-[1px] bg-secondary-accent" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
