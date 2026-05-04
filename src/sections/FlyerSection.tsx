import { MEDIA } from "../config";
import { SectionDescriptor } from "../components/SectionDescriptor";

export const FlyerSection = () => (
  <section className="px-3 w-full">
    <SectionDescriptor
      title="Illustrated Flyer Series"
      subtitle="2025 to 2026"
      skills={["Logo", "Illustration", "Design"]}
      description="A series of three hand illustrated and designed flyers"
    />

    <div className="flex justify-center mt-3">
      <div className="grid grid-cols-3 gap-3 max-w-6xl">
        <div className="col-span-3 md:col-span-1">
          <img
            src={MEDIA.flyers.isFlyer}
            alt="Bludgeoned by Deformity tour flyer"
          />
        </div>
        <div className="col-span-3 md:col-span-1">
          <img
            src={MEDIA.flyers.bbdFlyer}
            alt="Bludgeoned by Deformity tour flyer"
          />
        </div>
        <div className="col-span-3 md:col-span-1">
          <img
            src={MEDIA.flyers.pointFlyer}
            alt="Bludgeoned by Deformity tour flyer"
          />
        </div>
      </div>
    </div>
  </section>
);
