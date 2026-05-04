import { BludgeonedByDeformitySection } from "./sections/BludgeonedByDeformitySection";
import { CleanseTheSoulSection } from "./sections/CleanseTheSoulSection";
import { FlyerSection } from "./sections/FlyerSection";
import { HumanShieldSection } from "./sections/HumanShieldSection";
import { ImmortalTormentSection } from "./sections/ImmortalTormentSection";

export const Home = () => (
  <section id="projects">
    <BludgeonedByDeformitySection />
    <CleanseTheSoulSection />
    <FlyerSection />
    <HumanShieldSection />
    <ImmortalTormentSection />
  </section>
);
