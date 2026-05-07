import { SectionDescriptor } from "@/components/SectionDescriptor";
import { MEDIA } from "@/config";

export const CleanseTheSoulSection = () => (
  <SectionDescriptor
    title="Cleanse the Soul"
    subtitle="Self Titled"
    skills={["Logo", "Design"]}
    description="Logo and promotional flyer for Columbus power violence band Cleanse the Soul"
    projectId="cleanse-the-soul"
  >
    <div className="md:w-1/3">
      <img
        src={MEDIA.cleanseTheSoul.flyer}
        alt="Cleanse the Soul - promotional flyer"
      />
    </div>
    <div className="md:w-1/3">
      <img src={MEDIA.cleanseTheSoul.logo} alt="Cleanse the Soul - logo" />
    </div>
  </SectionDescriptor>
);
