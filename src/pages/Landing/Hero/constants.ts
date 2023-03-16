import HeroConsultation from "#assets/images/hero-consultation.png";
import HeroTherapy from "#assets/images/hero-therapy.png";

type HeroCardMapToContent = Record<
  string,
  {
    ctaLink: string;
    ctaText: string;
    header: string;
    image: string;
    imageAlt: string;
  }
>;

// This pattern allows us to have a single source of truth for the content of
// our hero cards and prevents us from having to hard-code them. This allows
// for greater extensibility and maintainability should we want to change
// how many cards we have, what the images are, or what their contents say.
export const heroCardMapToContent: HeroCardMapToContent = {
  consultation: {
    ctaLink: "https://www.getmosh.com.au/quizzes/mental_health_quiz",
    ctaText: "Get Started",
    header: "Free Doctor Consultation",
    image: HeroConsultation,
    imageAlt: "Image of a man sitting cross-legged on a couch while browsing his mobile phone",
  },
  therapy: {
    ctaLink: "https://www.getmosh.com.au/booking/mental_health",
    ctaText: "Book therapist",
    header: "One-on-one therapy sessions",
    image: HeroTherapy,
    imageAlt: "Image of a man video calling a woman on his tablet, taken from behind",
  },
};
