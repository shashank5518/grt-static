import { SectionWrapper } from "./SectionWrapper";
import { TeamCard, type TeamMember } from "./TeamCard";

const team: TeamMember[] = [
  {
    name: "Sunil Jangra",
    role: "Co-Founder, Property Advisor",
    bio: "Ensures every step of the process is smooth, accurate, and hassle-free for clients.",
    imageSrc: "/images/team-1.svg",
  },
  {
    name: "Vikas Jangra",
    role: "Co-Founder, Property Advisor",
    bio: "Helps clients shortlist the right properties based on their goals, budget, and preferences with clear, honest guidance.",
    imageSrc: "/images/team-2.svg",
  },
  {
    name: "Yogesh",
    role: "Property Consultant",
    bio: "Focused on yield, appreciation, and exit strategy. Builds an investment plan around your risk and timeline.",
    imageSrc: "/images/team-3.svg",
  },
  {
    name: "Ali",
    role: "Property Consultant",
    bio: "Helps coordinate paperwork, builder coordination, and timelines so you get a confident closing experience.",
    imageSrc: "/images/team-4.svg",
  },
];
export function TeamSection() {
  return (
    <SectionWrapper
      id="team"
      eyebrow="Our team"
      title="A small team with a premium approach"
      description="We’re responsive, detail-oriented, and focused on what’s best for your goals."
      className="bg-white"
    >
    <div className="group max-w-220 mx-auto relative overflow-hidden mask-fade py-6">
      <div className="flex gap-5 animate-carousel w-max group-hover:[animation-play-state:paused] items-stretch">
    {[...team, ...team].map((m, i) => (
      <div
        key={`${m.name}-${i}`}
        className="shrink-0 w-70 h-full"
      >
        <TeamCard member={m} />
      </div>
    ))}
  </div>
</div>
    </SectionWrapper>
  );
}
