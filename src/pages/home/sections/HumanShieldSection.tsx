import { SectionDescriptor } from "@/components/SectionDescriptor";
import { MEDIA } from "@/config";

export const HumanShieldSection = () => (
  <SectionDescriptor
    title="Human Shield"
    subtitle="Onto Cement"
    skills={["Logo", "Illustration", "Design"]}
    description="Logo and longsleeve design for Tennessee power violence band Human Shield"
    websiteUrl="https://humanshieldtn.bandcamp.com/"
    projectId="human-shield"
  >
    <div className="md:w-2xl">
      <img
        src={MEDIA.shirts.hsShirtFront}
        alt="Human Shield - longsleeve front"
      />
    </div>
    <div className="md:w-2xl">
      <img
        src={MEDIA.shirts.hsShirtBack}
        alt="Human Shield - longsleeve back"
      />
    </div>
  </SectionDescriptor>
);
