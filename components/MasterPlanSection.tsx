import { SectionWrapper } from "./SectionWrapper";

export function MasterPlanSection() {
  return (
    <SectionWrapper
      id="master-plan"
      eyebrow="Master Plan"
      title="Gurgaon Master Plan"
      description=""
      className="bg-slate-50"

    >
      <div className="flex flex-col items-center gap-6">

        {/* Image Container */}
        <div className="w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="aspect-[4/3] w-full">
            <img
              src="images/masterPlan.JPEG" // replace with your image path
              alt="Master Plan"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}