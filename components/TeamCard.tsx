import Image from "next/image";

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
};

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group h-[380px] min-w-[280px] max-w-[280px] rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src={member.imageSrc}
            alt={member.name}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-slate-900">
            {member.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-slate-600">
            {member.role}
          </p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-600 line-clamp-4">{member.bio}</p>
      <div className="mt-3 h-px w-full bg-slate-200/70" />
      <p className="mt-4 text-xs font-semibold tracking-wide text-slate-500">
        Verified guidance • Clear communication • Client-first
      </p>
    </article>
  );
}

