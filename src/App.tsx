/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { cn } from './lib/utils';
import { EntryGate } from './components/sections/EntryGate';
import { HeroSection } from './components/sections/HeroSection';
import { StoriesSection } from './components/sections/StoriesSection';
import { VenueSection } from './components/sections/VenueSection';
import { TimelineSection } from './components/sections/TimelineSection';
import { InvitationSection } from './components/sections/InvitationSection';
import { RsvpSection } from './components/sections/RsvpSection';
import { FooterSection } from './components/sections/FooterSection';
import { StatusModal, type StatusModalState } from './components/shared/StatusModal';
import {
  ASSETS,
  COUNTDOWN_CONTENT,
  CLIENT_ID,
  ENTRY_GATE_CONTENT,
  FOOTER_CONTENT,
  HERO_CONTENT,
  INVITATION_DETAILS,
  MODAL_CONTENT,
  RSVP_API_URL,
  RSVP_CONTENT,
  STORIES_CONTENT,
  TIMELINE_CONTENT,
  TIMELINE_EVENTS,
  VENUE_DETAILS,
  WEDDING_DATE,
} from './data/weddingContent';

export default function App() {
  const [isEntered, setIsEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState<StatusModalState>({
    show: false,
    type: 'success',
    title: '',
    message: '',
  });

  const audioRef = useRef<HTMLAudioElement>(null);
  const entryVideoRef = useRef<HTMLVideoElement>(null);

  const handleEntry = async () => {
    if (entryVideoRef.current && entryVideoRef.current.paused) {
      try {
        await entryVideoRef.current.play();
        if (audioRef.current) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (err) {
        console.error('Autoplay blocked:', err);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsEntered(true);
    document.body.style.overflow = 'auto';
  };

  const toggleAudio = () => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleRsvpSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const payload = {
      ...data,
      clientId: CLIENT_ID,
      guests: data.attending === 'no' ? '0' : (data.guests || '0'),
      kids: data.attending === 'no' ? '0' : (data.kids || '0'),
    };

    try {
      const response = await fetch(RSVP_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        setModal({
          show: true,
          type: 'success',
          title: MODAL_CONTENT.successTitle,
          message: MODAL_CONTENT.successMessage,
        });
        e.currentTarget.reset();
      } else {
        throw new Error('RSVP submission failed');
      }
    } catch {
      setModal({
        show: true,
        type: 'error',
        title: MODAL_CONTENT.errorTitle,
        message: MODAL_CONTENT.errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!isEntered) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isEntered]);

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary font-body overflow-x-hidden">
      <audio ref={audioRef} loop preload="metadata">
        <source src={ASSETS.backgroundAudio} type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 bg-primary-accent hover:bg-opacity-90 hover:scale-110 text-white p-4 rounded-full transition-all duration-300 z-[100] shadow-xl border border-white/20 backdrop-blur-sm opacity-90 hover:opacity-100"
      >
        {isPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
      </button>

      <EntryGate
        isEntered={isEntered}
        onEntry={handleEntry}
        onVideoEnd={handleVideoEnd}
        entryVideoSrc={ASSETS.entryVideo}
        videoRef={entryVideoRef}
        cta={ENTRY_GATE_CONTENT.cta}
      />

      <main className={cn('fade-in', !isEntered && 'hidden')}>
        <HeroSection
          heroVideoSrc={ASSETS.heroVideo}
          weddingDate={WEDDING_DATE}
          content={HERO_CONTENT}
          countdownContent={COUNTDOWN_CONTENT}
        />
        <StoriesSection storyVideoSrc={ASSETS.storyVideo} dividerSymbol={STORIES_CONTENT.dividerSymbol} />
        <VenueSection
          sectionTitle={VENUE_DETAILS.sectionTitle}
          dividerSymbol={VENUE_DETAILS.dividerSymbol}
          venueName={VENUE_DETAILS.venueName}
          location={VENUE_DETAILS.location}
          venueImageSrc={ASSETS.venueImage}
          venueNameStyle={VENUE_DETAILS.venueNameStyle}
          locationStyle={VENUE_DETAILS.locationStyle}
          mapEmbedUrl={VENUE_DETAILS.mapEmbedUrl}
          directionsUrl={VENUE_DETAILS.directionsUrl}
          directionsText={VENUE_DETAILS.directionsText}
        />
        <TimelineSection events={TIMELINE_EVENTS} content={TIMELINE_CONTENT} />
        <InvitationSection details={INVITATION_DETAILS} />
        <RsvpSection isSubmitting={isSubmitting} onSubmit={handleRsvpSubmit} content={RSVP_CONTENT} />
        <FooterSection title={FOOTER_CONTENT.title} message={FOOTER_CONTENT.message} signoff={FOOTER_CONTENT.signoff} />
      </main>

      <StatusModal modal={modal} onClose={() => setModal({ ...modal, show: false })} closeLabel={MODAL_CONTENT.closeLabel} />
    </div>
  );
}
