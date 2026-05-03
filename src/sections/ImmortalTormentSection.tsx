import { SectionDescriptor } from "../components/SectionDescriptor";
import { MEDIA } from "../config";

export const ImmortalTormentSection = () => (
  <section className="mt-3">
    <div className="flex md:flex-row flex-col items-center justify-center">
      <div className="md:w-xl p-3">
        <img
          src={MEDIA.immortalTorment.titf}
          alt="Immortal Torment - Tender is the Flesh cover artwork"
        />
      </div>
      <div className="md:w-xl p-3">
        <img src={MEDIA.immortalTorment.webMock} alt="Immortal Torment logo" />
      </div>
    </div>

    <SectionDescriptor
      title="Immortal Torment"
      subtitle="Tender is the Flesh"
      skills={["Logo", "Design", "Engineering"]}
      description="Album artwork and logo design for my band Immortal Torment with an accompanying website."
      websiteUrl="https://www.immortaltorment.com"
    />
  </section>
);
