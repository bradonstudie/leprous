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
    <div className="grid grid-cols-2 gap-3 md:px-3 mt-3">
      <div className="col-span-2 md:col-span-1">
        <img
          src={MEDIA.rejoice.shirtFront}
          alt="Rejoice - Tee shirt front design"
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <img
          src={MEDIA.rejoice.shirtBack}
          alt="Rejoice - Tee shirt back design"
        />
      </div>
    </div>

    <div className="md:max-w-xl md:-mt-50">
      <img src={MEDIA.rejoice.sticker} alt="Rejoice - Sticker design" />
    </div>
  </SectionDescriptor>
);
