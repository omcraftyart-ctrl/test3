import { MapPin } from 'lucide-react';
import type { StyledText, TextStyle } from '../../data/weddingContent';

type VenueSectionProps = {
  sectionTitle: StyledText;
  dividerSymbol: StyledText;
  venueName: string;
  location: string;
  venueImageSrc: string;
  venueNameStyle: TextStyle;
  locationStyle: TextStyle;
  mapEmbedUrl: string;
  directionsUrl: string;
  directionsText: StyledText;
};

export function VenueSection({
  sectionTitle,
  dividerSymbol,
  venueName,
  location,
  venueImageSrc,
  venueNameStyle,
  locationStyle,
  mapEmbedUrl,
  directionsUrl,
  directionsText,
}: VenueSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary border-y border-borders-dividers">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <h2 className="text-[3.5rem] md:text-6xl font-headings mb-8 text-primary-accent" style={sectionTitle.style}>
          {sectionTitle.value}
        </h2>
        <div className="flex items-center justify-center opacity-80 mb-10">
          <div className="w-16 h-[1px] bg-secondary-accent" />
          <span className="text-secondary-accent mx-4 text-xl" style={dividerSymbol.style}>
            {dividerSymbol.value}
          </span>
          <div className="w-16 h-[1px] bg-secondary-accent" />
        </div>

        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-soft border border-borders-dividers relative z-10">
          <h3 className="text-3xl md:text-4xl text-text-primary font-body mb-4 italic font-semibold" style={venueNameStyle}>
            {venueName}
          </h3>
          <p className="text-lg text-text-secondary mb-8" style={locationStyle}>
            {location}
          </p>

          <div className="rounded-xl overflow-hidden shadow-sm border border-borders-dividers/50 mb-8">
            <img
              src={venueImageSrc}
              alt={venueName}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-sm border border-borders-dividers/50">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-10">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto bg-primary-accent text-white font-body tracking-[0.1em] text-lg px-10 py-4 rounded-full shadow-md hover:bg-opacity-90 hover:shadow-lg transition-all duration-300 font-semibold"
              style={directionsText.style}
            >
              <MapPin className="w-5 h-5" />
              {directionsText.value}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
