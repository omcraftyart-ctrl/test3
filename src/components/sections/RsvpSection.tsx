import type React from 'react';
import { Loader2 } from 'lucide-react';
import type { StyledText, TextStyle } from '../../data/weddingContent';

type RsvpSectionProps = {
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  content: {
    eyebrow: StyledText;
    title: StyledText;
    subtitle: StyledText;
    guestDetailsTitle: StyledText;
    nameLabel: StyledText;
    phoneLabel: StyledText;
    invitationTitle: StyledText;
    invitationSubtitle: StyledText;
    acceptLabel: StyledText;
    declineLabel: StyledText;
    guessTitle: StyledText;
    guessSubtitle: StyledText;
    guessOptions: string[];
    guessOptionLabelStyle: TextStyle;
    messageTitle: StyledText;
    messageSubtitle: StyledText;
    messagePlaceholder: StyledText;
    submitButton: StyledText;
  };
};

export function RsvpSection({ isSubmitting, onSubmit, content }: RsvpSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-bg-primary border-t border-borders-dividers">
      <div className="container mx-auto px-6 max-w-xl">
        <div className="text-center mb-14">
          <p className="text-base tracking-[0.2em] text-secondary-accent uppercase mb-3 font-semibold" style={content.eyebrow.style}>
            {content.eyebrow.value}
          </p>
          <h2 className="text-[3.5rem] md:text-6xl font-headings mb-4 text-primary-accent" style={content.title.style}>
            {content.title.value}
          </h2>
          <p className="text-text-secondary italic font-body text-xl" style={content.subtitle.style}>
            {content.subtitle.value}
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-8">
          <div className="bg-white p-8 md:p-10 border border-borders-dividers shadow-soft rounded-2xl">
            <h3 className="text-4xl font-headings text-primary-accent mb-8 text-center" style={content.guestDetailsTitle.style}>
              {content.guestDetailsTitle.value}
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-text-secondary mb-2 font-semibold" style={content.nameLabel.style}>
                  {content.nameLabel.value}
                </label>
                <input type="text" name="name" required className="w-full bg-gray-50/50 border-b-2 border-borders-dividers p-3 focus:outline-none focus:border-secondary-accent transition-colors rounded-t-md text-text-primary text-lg font-body" />
              </div>
              <div>
                <label className="block text-sm text-text-secondary mb-2 font-semibold" style={content.phoneLabel.style}>
                  {content.phoneLabel.value}
                </label>
                <input type="tel" name="phone" required className="w-full bg-gray-50/50 border-b-2 border-borders-dividers p-3 focus:outline-none focus:border-secondary-accent transition-colors rounded-t-md text-text-primary text-lg font-body" />
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 border border-borders-dividers shadow-soft rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-body italic text-primary-accent mb-2 font-semibold" style={content.invitationTitle.style}>
                {content.invitationTitle.value}
              </h3>
              <p className="text-text-secondary text-lg" style={content.invitationSubtitle.style}>
                {content.invitationSubtitle.value}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <label className="cursor-pointer border border-borders-dividers px-6 py-5 rounded-xl hover:bg-bg-secondary transition-all has-[:checked]:bg-primary-accent has-[:checked]:border-primary-accent has-[:checked]:text-white flex-1 text-center shadow-sm">
                <input type="radio" name="attending" value="yes" defaultChecked className="hidden" />
                <span className="font-semibold font-body tracking-wide" style={content.acceptLabel.style}>
                  {content.acceptLabel.value}
                </span>
              </label>
              <label className="cursor-pointer border border-borders-dividers px-6 py-5 rounded-xl hover:bg-bg-secondary transition-all has-[:checked]:bg-secondary-accent has-[:checked]:border-secondary-accent has-[:checked]:text-white flex-1 text-center shadow-sm">
                <input type="radio" name="attending" value="no" className="hidden" />
                <span className="font-semibold font-body tracking-wide" style={content.declineLabel.style}>
                  {content.declineLabel.value}
                </span>
              </label>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 border border-borders-dividers shadow-soft rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-body italic text-primary-accent mb-2 font-semibold" style={content.guessTitle.style}>
                {content.guessTitle.value}
              </h3>
              <p className="text-text-secondary text-lg" style={content.guessSubtitle.style}>
                {content.guessSubtitle.value}
              </p>
            </div>
            <div className="flex justify-center gap-6 md:gap-10">
              {content.guessOptions.map((choice) => (
                <label key={choice} className="cursor-pointer flex flex-col items-center gap-3 group">
                  <span className="w-16 h-16 rounded-full border border-borders-dividers flex items-center justify-center group-hover:bg-primary-accent group-hover:text-white transition-all shadow-sm bg-gray-50/50 relative overflow-hidden">
                    <input type="radio" name="guess_emotional_first" value={choice} className="hidden peer" />
                    <span className="absolute inset-0 flex items-center justify-center peer-checked:bg-primary-accent peer-checked:text-white font-headings text-3xl pt-1">
                      {choice === 'Ayush' ? 'A' : choice === 'Sakshi' ? 'S' : 'B'}
                    </span>
                  </span>
                  <span className="text-sm font-semibold" style={content.guessOptionLabelStyle}>
                    {choice}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 border border-borders-dividers shadow-soft rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-body italic text-primary-accent mb-2 font-semibold" style={content.messageTitle.style}>
                {content.messageTitle.value}
              </h3>
              <p className="text-text-secondary text-lg" style={content.messageSubtitle.style}>
                {content.messageSubtitle.value}
              </p>
            </div>
            <textarea
              name="message"
              rows={3}
              className="w-full bg-gray-50/50 border border-borders-dividers p-4 rounded-xl focus:outline-none focus:border-secondary-accent transition-colors text-lg font-body"
              placeholder={content.messagePlaceholder.value}
              style={content.messagePlaceholder.style}
            />
          </div>

          <div className="text-center pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary-accent text-white px-14 py-4 uppercase tracking-[0.1em] text-lg font-bold hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl rounded-full w-full sm:w-auto flex items-center justify-center gap-3 mx-auto"
              style={content.submitButton.style}
            >
              {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : content.submitButton.value}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
