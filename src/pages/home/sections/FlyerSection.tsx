import { SectionDescriptor } from "@/components/SectionDescriptor";
import { MEDIA } from "@/config";

export const FlyerSection = () => (
  <SectionDescriptor
    title="Illustrated Flyer Series"
    subtitle="2025 to 2026"
    skills={["Logo", "Illustration", "Design"]}
    description="A series of three hand illustrated and designed flyers"
    projectId="flyer-series"
  >
    <div className="md:w-1/3">
      <img src={MEDIA.flyers.isFlyer} alt="Internal Suffering show flyer" />
    </div>
    <div className="md:w-1/3">
      <img
        src={MEDIA.flyers.bbdFlyer}
        alt="Bludgeoned by Deformity tour flyer"
      />
    </div>
    <div className="md:w-1/3">
      <img src={MEDIA.flyers.pointFlyer} alt="Point and Laugh show flyer" />
    </div>
  </SectionDescriptor>
);
