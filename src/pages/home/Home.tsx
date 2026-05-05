import { BludgeonedByDeformitySection } from "./sections/BludgeonedByDeformitySection";
import { CleanseTheSoulSection } from "./sections/CleanseTheSoulSection";
import { FlyerSection } from "./sections/FlyerSection";
import { HumanShieldSection } from "./sections/HumanShieldSection";
import { ImmortalTormentSection } from "./sections/ImmortalTormentSection";

export const Home = () => (
  <section id="projects" className="md:px-5 px-3">
    <div className="flex justify-center">
      <h2 className="text-white md:text-8xl text-5xl uppercase px-5 -mb-15">
        <span className="bg-black ">Projects</span>
      </h2>
    </div>
    <BludgeonedByDeformitySection />
    <CleanseTheSoulSection />
    <FlyerSection />
    <HumanShieldSection />
    <ImmortalTormentSection />
  </section>
);
