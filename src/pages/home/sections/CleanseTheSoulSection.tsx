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
    <div className="flex md:flex-row flex-col items-top justify-center">
      <div className="md:w-xl p-3">
        <img
          src={MEDIA.cleanseTheSoul.flyer}
          alt="Cleanse the Soul - Promotional Flyer"
        />
      </div>
      <div className="md:w-xl p-3">
        <img src={MEDIA.cleanseTheSoul.logo} alt="Cleanse the Soul - Logo" />
      </div>
    </div>
  </SectionDescriptor>
);
