import type { StyledText, TextStyle } from '../../data/weddingContent';

type InvitationFamily = {
  title: StyledText;
  lines: string[];
};

type InvitationDetails = {
  sectionTitle: StyledText;
  groomFamily: InvitationFamily;
  brideFamily: InvitationFamily;
  familyLineStyle: TextStyle;
  welcomingTitle: StyledText;
  welcoming: string;
  welcomingStyle: TextStyle;
  bestComplimentsTitle: StyledText;
  bestCompliments: string[];
  eagerlyWaitingTitle: StyledText;
  eagerlyWaiting: string[];
  listItemStyle: TextStyle;
};

type InvitationSectionProps = {
  details: InvitationDetails;
};

export function InvitationSection({ details }: InvitationSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary border-t border-borders-dividers">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-[3.5rem] md:text-6xl font-headings mb-12 text-primary-accent" style={details.sectionTitle.style}>
          {details.sectionTitle.value}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[details.groomFamily, details.brideFamily].map((family) => (
            <div key={family.title.value} className="bg-white p-8 rounded-2xl shadow-soft border border-borders-dividers">
              <h3 className="text-3xl font-headings text-secondary-accent mb-6" style={family.title.style}>
                {family.title.value}
              </h3>
              {family.lines.map((line, index) => (
                <p
                  key={`${family.title.value}-${index}`}
                  className="text-lg text-text-primary mb-2 last:mb-0"
                  style={details.familyLineStyle}
                >
                  <strong>{line.split(':')[0]}:</strong> {line.split(':').slice(1).join(':').trim()}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-soft border border-borders-dividers mb-8">
          <h3 className="text-2xl font-headings text-secondary-accent mb-4" style={details.welcomingTitle.style}>
            {details.welcomingTitle.value}
          </h3>
          <p className="text-lg text-text-primary leading-relaxed" style={details.welcomingStyle}>
            {details.welcoming}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-soft border border-borders-dividers text-left">
            <h3 className="text-2xl font-headings text-secondary-accent mb-4" style={details.bestComplimentsTitle.style}>
              {details.bestComplimentsTitle.value}
            </h3>
            <ul className="text-lg text-text-primary space-y-1">
              {details.bestCompliments.map((name) => (
                <li key={name} style={details.listItemStyle}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-soft border border-borders-dividers text-left">
            <h3 className="text-2xl font-headings text-secondary-accent mb-4" style={details.eagerlyWaitingTitle.style}>
              {details.eagerlyWaitingTitle.value}
            </h3>
            <ul className="text-lg text-text-primary space-y-1">
              {details.eagerlyWaiting.map((name) => (
                <li key={name} style={details.listItemStyle}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
