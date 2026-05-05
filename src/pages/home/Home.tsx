import { PageHeader } from "@/components/PageHeader";
import { BludgeonedByDeformitySection } from "./sections/BludgeonedByDeformitySection";
import { CleanseTheSoulSection } from "./sections/CleanseTheSoulSection";
import { FlyerSection } from "./sections/FlyerSection";
import { HumanShieldSection } from "./sections/HumanShieldSection";
import { ImmortalTormentSection } from "./sections/ImmortalTormentSection";
import { DirectorySection } from "./sections/DirectorySection";
import { DirectoryItems } from "@/config";

export const Home = () => (
  <section id="projects" className="md:px-5 px-3">
    <DirectorySection directoryItems={DirectoryItems} />

    <PageHeader text="Projects" />

    <BludgeonedByDeformitySection />
    <CleanseTheSoulSection />
    <FlyerSection />
    <HumanShieldSection />
    <ImmortalTormentSection />
  </section>
);
