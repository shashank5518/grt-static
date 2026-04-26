import { SectionWrapper } from "./SectionWrapper";
import { TestimonialCard, type Testimonial } from "./TestimonialCard";

const testimonials: Testimonial[] = [
  {
    name: "Rahul Mehta",
    feedback:
      "Very professional and transparent. Helped me find a great investment in Gurgaon.",
  },
  {
    name: "Priya Verma",
    feedback:
      "Clear guidance and no pressure selling. Really smooth experience.",
  },
  {
    name: "Ankit Sharma",
    feedback:
      "From site visit to closing, everything was handled perfectly.",
  },
  {
    name: "Rohit Gupta",
    feedback:
      "Great understanding of the market. Highly recommend their services.",
  },
];

export function TestimonialsSection() {
  return (
    <SectionWrapper
      id="testimonials"
      eyebrow="Client feedback"
      title="What our clients say"
      description="Real experiences from people who trusted us with their property decisions."
      className="bg-white"
    >
      <div className="group max-w-[880px] mx-auto relative overflow-hidden mask-fade py-6">
        
        <div className="flex gap-5 animate-carousel w-max group-hover:[animation-play-state:paused] items-stretch">
          
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="flex-shrink-0 w-[280px]"
            >
              <TestimonialCard t={t} />
            </div>
          ))}

        </div>
      </div>
    </SectionWrapper>
  );
}