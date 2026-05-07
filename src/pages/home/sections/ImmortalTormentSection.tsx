import { SectionDescriptor } from "@/components/SectionDescriptor";
import { MEDIA } from "@/config";

export const ImmortalTormentSection = () => (
  <SectionDescriptor
    title="Immortal Torment"
    subtitle="Tender is the Flesh"
    skills={["Logo", "Design", "Engineering"]}
    description="Album artwork and logo design for Columbus grind band Immortal Torment with an accompanying website"
    websiteUrl="https://www.immortaltorment.com"
    projectId="immortal-torment"
  >
    <div className="md:w-1/3">
      <img
        src={MEDIA.immortalTorment.titf}
        alt="Immortal Torment - Tender is the Flesh cover artwork"
      />
    </div>
    <div className="md:w-1/3">
      <img src={MEDIA.immortalTorment.webMock} alt="Immortal Torment logo" />
    </div>
  </SectionDescriptor>
);
