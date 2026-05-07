import { SectionDescriptor } from "@/components/SectionDescriptor";
import { MEDIA } from "@/config";

export const RejoiceSection = () => (
  <SectionDescriptor
    title="Rejoice"
    subtitle="All of Heaven's Luck"
    skills={["Logo", "Illustration", "Design"]}
    description="Merch line for Columbus hardcore band Rejoice's Fall 2024 Tour"
    projectId="rejoice"
  >
    <div className="md:w-1/3">
      <img
        src={MEDIA.rejoice.shirtFront}
        alt="Rejoice - Tee shirt front design"
      />
    </div>
    <div className="md:w-1/4">
      <img src={MEDIA.rejoice.sticker} alt="Rejoice - Sticker design" />
    </div>
    <div className="md:w-1/3">
      <img
        src={MEDIA.rejoice.shirtBack}
        alt="Rejoice - Tee shirt back design"
      />
    </div>
  </SectionDescriptor>
);
