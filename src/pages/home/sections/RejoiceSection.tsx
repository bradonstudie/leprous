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
    <div className="flex md:flex-row flex-col items-center justify-center">
      <div className="md:w-2xl p-3">
        <img
          src={MEDIA.shirts.hsShirtFront}
          alt="Human Shield - longsleeve front"
        />
      </div>
      <div className="md:w-2xl p-3">
        <img
          src={MEDIA.shirts.hsShirtBack}
          alt="Human Shield - longsleeve back"
        />
      </div>
    </div>
  </SectionDescriptor>
);
