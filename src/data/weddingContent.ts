import type { CSSProperties } from 'react';

export const WEDDING_DATE = new Date('April 20, 2026 10:00:00 GMT+0530');
export const RSVP_API_URL = '';
export const CLIENT_ID = 'ayush-sakshi-wedding-2026';

export type TextStyle = CSSProperties;

export type StyledText = {
  value: string;
  style: TextStyle;
};

const ASSET_BASE = '/assets';

export const ASSETS = {
  backgroundAudio: `${ASSET_BASE}/background-audio.mp3`,
  entryVideo: `${ASSET_BASE}/entry-video.mp4`,
  heroVideo: `${ASSET_BASE}/background.mp4`,
  storyVideo: `${ASSET_BASE}/story-swiper.mp4`,
  venueImage: `${ASSET_BASE}/venue.jpg`,
  timelineVideos: {
    engagement: `${ASSET_BASE}/163.mp4`,
    haldi: `${ASSET_BASE}/164.mp4`,
    mehndi: `${ASSET_BASE}/165.mp4`,
    wedding: `${ASSET_BASE}/166.mp4`,
    barat: `${ASSET_BASE}/167.mp4`,
    reception: `${ASSET_BASE}/168.mp4`,
  },
};

const FONTS = {
  heading: '"Playfair Display", serif',
  body: '"Lora", serif',
};

const COLORS = {
  primary: '#6f4e37',
  secondary: '#8a6b53',
  textPrimary: '#3d2f23',
  textSecondary: '#6b5a4d',
  white: '#ffffff',
};

const STYLES = {
  headingXl: { fontSize: '3.5rem', fontFamily: FONTS.heading, color: COLORS.primary } as TextStyle,
  headingLg: { fontSize: '2.25rem', fontFamily: FONTS.heading, color: COLORS.primary } as TextStyle,
  headingMd: { fontSize: '1.75rem', fontFamily: FONTS.heading, color: COLORS.secondary } as TextStyle,
  bodyLg: { fontSize: '1.125rem', fontFamily: FONTS.body, color: COLORS.textPrimary } as TextStyle,
  bodyMd: { fontSize: '1rem', fontFamily: FONTS.body, color: COLORS.textSecondary } as TextStyle,
  bodySm: { fontSize: '0.875rem', fontFamily: FONTS.body, color: COLORS.secondary } as TextStyle,
  button: {
    fontSize: '1rem',
    fontFamily: FONTS.body,
    color: COLORS.white,
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  } as TextStyle,
};

export const ENTRY_GATE_CONTENT = {
  cta: {
    value: 'Click to Enter',
    style: { fontSize: '1.25rem', fontFamily: FONTS.heading, color: COLORS.white },
  } satisfies StyledText,
};

export const COUNTDOWN_CONTENT = {
  completedText: {
    value: 'Our Wedding is Complete!',
    style: { fontSize: '2.2rem', fontFamily: FONTS.heading, color: COLORS.primary },
  } satisfies StyledText,
  labels: {
    days: { value: 'Days', style: STYLES.bodySm },
    hours: { value: 'Hours', style: STYLES.bodySm },
    minutes: { value: 'Minutes', style: STYLES.bodySm },
    seconds: { value: 'Seconds', style: STYLES.bodySm },
  },
};

export const HERO_CONTENT = {
  mantraLines: ['Om Shri Parshvanathaya Namaha', 'Om Acharya Shri Vidyasagaraya Namaha'],
  mantraStyle: { fontSize: '1.125rem', fontFamily: FONTS.body, color: COLORS.primary, fontWeight: 600 },
  subtitle: { value: 'Sweet Moments of Celebration', style: { fontSize: '1.4rem', fontFamily: FONTS.heading, color: COLORS.secondary } } satisfies StyledText,
  brideName: { value: 'Sakshi', style: { fontSize: '4.5rem', fontFamily: FONTS.heading, color: COLORS.primary } } satisfies StyledText,
  groomName: { value: 'Ayush', style: { fontSize: '4.5rem', fontFamily: FONTS.heading, color: COLORS.primary } } satisfies StyledText,
  tagline: { value: 'Towards a new beginning...', style: { fontSize: '1.35rem', fontFamily: FONTS.body, color: COLORS.textPrimary, fontStyle: 'italic' } } satisfies StyledText,
  eventDate: { value: 'Monday, April 20, 2026', style: { fontSize: '1rem', fontFamily: FONTS.body, color: COLORS.primary, fontWeight: 600, letterSpacing: '0.1em' } } satisfies StyledText,
  scrollCta: { value: 'Scroll Down', style: { fontSize: '0.875rem', fontFamily: FONTS.body, color: COLORS.primary, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' } } satisfies StyledText,
};

export const STORIES_CONTENT = {
  dividerSymbol: { value: '✧', style: { fontSize: '1.25rem', fontFamily: FONTS.heading, color: COLORS.secondary } } satisfies StyledText,
};

export type TimelineEvent = {
  title: string;
  time: string;
  video: string;
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    title: 'Dev Darshan & Engagement',
    time: 'Sunday, April 19, 2026 | 9:00 AM',
    video: ASSETS.timelineVideos.engagement,
  },
  {
    title: 'Haldi & Chandan Ceremony',
    time: 'Sunday, April 19, 2026 | 2:00 PM',
    video: ASSETS.timelineVideos.haldi,
  },
  {
    title: 'Mehndi & Sangeet',
    time: 'Sunday, April 19, 2026 | 7:00 PM',
    video: ASSETS.timelineVideos.mehndi,
  },
  {
    title: 'Wedding Ceremony',
    time: 'Monday, April 20, 2026 | 10:00 AM',
    video: ASSETS.timelineVideos.wedding,
  },
  {
    title: 'Barat Procession',
    time: 'Monday, April 20, 2026 | 5:00 PM to 7:00 PM',
    video: ASSETS.timelineVideos.barat,
  },
  {
    title: 'Reception & Dinner',
    time: 'Monday, April 20, 2026 | 6:00 PM onwards',
    video: ASSETS.timelineVideos.reception,
  },
];

export const TIMELINE_CONTENT = {
  sectionTitle: { value: 'Wedding Schedule', style: STYLES.headingXl } satisfies StyledText,
  sectionSubtitle: {
    value: 'A day of sacred traditions and joy, cherished to share happiness with you.',
    style: { ...STYLES.bodyLg, fontStyle: 'italic', lineHeight: '1.6' },
  } satisfies StyledText,
  dividerSymbol: { value: '✧', style: STORIES_CONTENT.dividerSymbol.style } satisfies StyledText,
  expandHint: { value: 'Tap to Expand', style: { ...STYLES.bodySm, fontWeight: 600 } } satisfies StyledText,
  eventTitleStyle: { fontSize: '2rem', fontFamily: FONTS.body, color: COLORS.primary, fontStyle: 'italic', fontWeight: 600 },
  eventTimeStyle: { fontSize: '1.125rem', fontFamily: FONTS.body, color: COLORS.secondary },
};

export type TimelineContent = typeof TIMELINE_CONTENT;

export const VENUE_DETAILS = {
  sectionTitle: { value: 'Wedding Venue', style: STYLES.headingXl } satisfies StyledText,
  dividerSymbol: { value: '✧', style: STORIES_CONTENT.dividerSymbol.style } satisfies StyledText,
  venueName: 'Hotel Arindum',
  location: 'Jabalpur Road, Katni',
  venueNameStyle: { fontSize: '2.2rem', fontFamily: FONTS.body, color: COLORS.textPrimary, fontStyle: 'italic', fontWeight: 600 },
  locationStyle: STYLES.bodyLg,
  directionsText: { value: 'Get Directions', style: STYLES.button } satisfies StyledText,
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.286363440711!2d80.3727686!3d23.808414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981618f3cf4fdf9%3A0x49de4edd6c6319cf!2sHotel%20The%20Arindum!5e0!3m2!1sen!2sin!4v1775113255639!5m2!1sen!2sin',
  directionsUrl: 'https://maps.google.com/?q=Hotel+Arindam+Jabalpur+Road+Katni',
};

export const INVITATION_DETAILS = {
  sectionTitle: { value: 'Cordial Invitation', style: STYLES.headingXl } satisfies StyledText,
  groomFamily: {
    title: { value: "Groom's Family", style: STYLES.headingMd } satisfies StyledText,
    lines: [
      'Grandson of: Late Shri Chhotelal - Late Smt. Shanti Jain',
      'Son of: Shri Dinesh Kumar - Smt. Samta Jain',
    ],
  },
  brideFamily: {
    title: { value: "Bride's Family", style: STYLES.headingMd } satisfies StyledText,
    lines: [
      'Granddaughter of: Shri Gyanchand - Smt. Lakshmi Bai Jain',
      'Daughter of: Shri Sunil Kumar - Smt. Surekha Jain (Manendragarh, C.G.)',
    ],
  },
  familyLineStyle: STYLES.bodyLg,
  welcomingTitle: { value: 'Welcoming You', style: STYLES.headingLg } satisfies StyledText,
  welcoming:
    'Smt. Vidya Jain (Bua ji), Smt. Priyanka - Sunil Jain, Smt. Deepika - Ambuj Jain, Smt. Swati - Ankur Jain, Smt. Munmun - Deepak Jain (Sister-In-Law), Smt. Deepa - Prabal Jain (Sister-In-Law), Smt. Shalini - Arpan Jain (Sister-In-Law), Sharad, Deepak, Piyush Jain, Aditya Jain',
  welcomingStyle: { ...STYLES.bodyLg, lineHeight: '1.7' },
  bestComplimentsTitle: { value: 'With Best Compliments', style: STYLES.headingLg } satisfies StyledText,
  bestCompliments: [
    'Smt. Kiran - Shikhar Chand Jain',
    'Smt. Meena - Rakesh Kumar Jain',
    'Smt. Abha - Rajesh Kumar Jain',
    'Smt. Samta - Dinesh Kumar Jain',
  ],
  eagerlyWaitingTitle: { value: 'Eagerly Waiting', style: STYLES.headingLg } satisfies StyledText,
  eagerlyWaiting: [
    'Smt. Kusum - Ramesh Jain',
    'Smt. Barkha - Nitin Jain',
    'Smt. Sunita - Sushil Jain',
  ],
  listItemStyle: STYLES.bodyLg,
};

export const RSVP_CONTENT = {
  eyebrow: {
    value: 'You are Welcome',
    style: {
      fontSize: '1rem',
      fontFamily: FONTS.body,
      color: COLORS.secondary,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      fontWeight: 600,
    },
  } satisfies StyledText,
  title: { value: 'Join Our Happiness', style: STYLES.headingXl } satisfies StyledText,
  subtitle: {
    value: 'A few fun questions before the big day!',
    style: { ...STYLES.bodyLg, fontStyle: 'italic' },
  } satisfies StyledText,
  guestDetailsTitle: { value: 'Guest Details', style: { fontSize: '2rem', fontFamily: FONTS.heading, color: COLORS.primary } } satisfies StyledText,
  nameLabel: { value: 'Your Name', style: { ...STYLES.bodySm, fontWeight: 600 } } satisfies StyledText,
  phoneLabel: { value: 'Phone Number', style: { ...STYLES.bodySm, fontWeight: 600 } } satisfies StyledText,
  invitationTitle: { value: 'Invitation Status', style: { fontSize: '1.8rem', fontFamily: FONTS.body, color: COLORS.primary, fontStyle: 'italic', fontWeight: 600 } } satisfies StyledText,
  invitationSubtitle: { value: 'Will you join us?', style: STYLES.bodyLg } satisfies StyledText,
  acceptLabel: { value: 'Joyfully Accept', style: { ...STYLES.bodyMd, fontWeight: 600, letterSpacing: '0.04em' } } satisfies StyledText,
  declineLabel: { value: 'Regretfully Decline', style: { ...STYLES.bodyMd, fontWeight: 600, letterSpacing: '0.04em' } } satisfies StyledText,
  guessTitle: { value: 'Take a Guess', style: { fontSize: '1.8rem', fontFamily: FONTS.body, color: COLORS.primary, fontStyle: 'italic', fontWeight: 600 } } satisfies StyledText,
  guessSubtitle: { value: 'Who will be emotional first?', style: STYLES.bodyLg } satisfies StyledText,
  guessOptions: ['Ayush', 'Sakshi', 'Both'],
  guessOptionLabelStyle: { ...STYLES.bodySm, fontWeight: 600 },
  messageTitle: { value: 'Leave a Message', style: { fontSize: '1.8rem', fontFamily: FONTS.body, color: COLORS.primary, fontStyle: 'italic', fontWeight: 600 } } satisfies StyledText,
  messageSubtitle: { value: 'Share a wish or a memory.', style: STYLES.bodyLg } satisfies StyledText,
  messagePlaceholder: { value: 'Write from your heart...', style: STYLES.bodyMd } satisfies StyledText,
  submitButton: { value: 'Send Wishes', style: STYLES.button } satisfies StyledText,
};

export const FOOTER_CONTENT = {
  title: { value: 'With Love and Blessings', style: { fontSize: '3.4rem', fontFamily: FONTS.heading, color: COLORS.secondary } } satisfies StyledText,
  message: {
    value:
      "Dear Family and Friends, by the grace of the Almighty, on the auspicious occasion of our son's wedding, please grace us with your presence and bless the couple as they embark on their new journey together.",
    style: { fontSize: '1.35rem', fontFamily: FONTS.body, color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', lineHeight: '1.7' },
  } satisfies StyledText,
  signoff: {
    value: 'All Jain Family Members',
    style: {
      fontSize: '1.125rem',
      fontFamily: FONTS.body,
      color: COLORS.secondary,
      fontWeight: 600,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
  } satisfies StyledText,
};

export const MODAL_CONTENT = {
  successTitle: 'Thank You!',
  successMessage: 'We look forward to celebrating this special day with you!',
  errorTitle: 'Sorry!',
  errorMessage: 'There was an error submitting your form. Please try again.',
  closeLabel: { value: 'Close', style: STYLES.button } satisfies StyledText,
};
