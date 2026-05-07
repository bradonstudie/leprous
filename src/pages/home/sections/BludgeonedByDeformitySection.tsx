import { SectionDescriptor } from "@/components/SectionDescriptor";
import { MEDIA } from "@/config";

export const BludgeonedByDeformitySection = () => (
  <SectionDescriptor
    title="Bludgeoned by Deformity"
    subtitle="Epoch of Immorality"
    skills={["Logo", "Illustration", "Design"]}
    description="Full visual identity for Baltimore death metal band Bludgeoned by Deformity and its accompanying EP rollout"
    websiteUrl="https://ironfortressrecords.bandcamp.com/album/epoch-of-immorality"
    projectId="bludgeoned-by-deformity"
    rows
  >
    <div className="md:flex gap-3">
      <div className="flex-1">
        <img
          src={MEDIA.bbd.shirtFront}
          alt="Bludgeoned by Deformity - front tee shirt design"
        />
      </div>
      <div className="flex-1">
        <img
          src={MEDIA.bbd.longsleeve}
          alt="Bludgeoned by Deformity - long sleeve design"
        />
      </div>
      <div className="flex-1">
        <img
          src={MEDIA.bbd.shirtBack}
          alt="Bludgeoned by Deformity - back tee shirt design"
        />
      </div>
    </div>

    <div className="md:flex gap-3">
      <div className="flex-1 md:py-0 py-3">
        <img
          src={MEDIA.bbd.promoFlyer}
          alt="Bludgeoned by Deformity - Iron Fortress promo flyer"
        />
      </div>
      <div className="flex-1 md:py-0 py-3">
        <img
          src={MEDIA.bbd.hoodie}
          alt="Bludgeoned by Deformity - hoodie design"
        />
      </div>
      <div className="flex-1 md:py-0 py-3">
        <img
          src={MEDIA.bbd.sticker}
          alt="Bludgeoned by Deformity - sticker design"
        />
      </div>
    </div>
  </SectionDescriptor>
);
