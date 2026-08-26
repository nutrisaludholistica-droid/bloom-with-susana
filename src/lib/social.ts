// Central social links. Single source of truth for visible icons and JSON-LD sameAs.
// These are real profiles; update here and the changes propagate everywhere.

export const SOCIAL = {
  nutrilogas: {
    facebook: "https://www.facebook.com/share/19acVYT2HV/",
    label: "Susana Wignall · Nutrióloga y chef",
  },
  maizSal: {
    instagram: "https://www.instagram.com/best_bio_pdc",
    facebook: "https://www.facebook.com/share/1LnaeSmGL5/",
    label: "Maíz y Sal · Best Bio PDC",
  },
} as const;

export type SocialProfile = keyof typeof SOCIAL;

/** Flat list used for MedicalBusiness sameAs. */
export function businessSameAs(): string[] {
  return [
    SOCIAL.nutrilogas.facebook,
    SOCIAL.maizSal.instagram,
    SOCIAL.maizSal.facebook,
  ];
}
