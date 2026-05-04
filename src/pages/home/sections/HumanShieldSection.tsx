import { MEDIA } from "@/config";
import { SectionDescriptor } from "@/components/SectionDescriptor";

export const HumanShieldSection = () => (
  <section>
    <SectionDescriptor
      title="Human Shield"
      subtitle="Onto Cement"
      skills={["Logo", "Illustration", "Design"]}
      description="Logo and longsleeve design for the Tennessee power violence band Human Shield"
    />

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
  </section>
);
