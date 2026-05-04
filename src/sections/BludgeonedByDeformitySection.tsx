import { SectionDescriptor } from "../components/SectionDescriptor";
import { MEDIA } from "../config";

export const BludgeonedByDeformitySection = () => (
  <section>
    <SectionDescriptor
      title="Bludgeoned by Deformity"
      subtitle="Epoch of Immorality"
      skills={["Logo", "Design"]}
      description="Full visual identity for my band Bludgeoned by Deformity and its accompanying EP rollout"
    />

    <div className="grid grid-cols-3 gap-3 md:px-3">
      <div className="col-span-4 md:col-span-1">
        <img
          src={MEDIA.bbd.shirtFront}
          alt="Bludgeoned by Deformity - Front tee shirt design"
        />
      </div>
      <div className="col-span-4 md:col-span-1">
        <img
          src={MEDIA.bbd.longsleeve}
          alt="Bludgeoned by Deformity - Long sleeve design"
        />
      </div>
      <div className="col-span-4 md:col-span-1">
        <img
          src={MEDIA.bbd.shirtBack}
          alt="Bludgeoned by Deformity - Front tee shirt design"
        />
      </div>
    </div>

    <div className="flex md:flex-row flex-col justify-center">
      <div className="md:w-1/3 p-5">
        <img
          src={MEDIA.bbd.sticker}
          alt="Bludgeoned by Deformity - Front tee shirt design"
          className="-rotate-1 border border-white"
        />
        <img
          src={MEDIA.bbd.sticker}
          alt="Bludgeoned by Deformity - Front tee shirt design"
          className="-mt-5 rotate-3 border border-white"
        />
        <img
          src={MEDIA.bbd.sticker}
          alt="Bludgeoned by Deformity - Front tee shirt design"
          className="-mt-5 -rotate-3 border border-white"
        />
      </div>
      <div className="md:w-1/3 p-3">
        <img src={MEDIA.bbd.promoFlyer} alt="Human Shield - longsleeve front" />
      </div>
      <div className="md:w-1/3 p-3">
        <img
          src={MEDIA.bbd.hoodie}
          alt="Bludgeoned by Deformity - Long sleeve design"
        />
      </div>
    </div>
  </section>
);
