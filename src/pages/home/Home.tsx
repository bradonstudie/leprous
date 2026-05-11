import { PageHeader } from "@/components/PageHeader";
import { ProjectDirectory } from "@/components/ProjectDirectory";
import { DirectoryItems } from "@/config";

import { BludgeonedByDeformitySection } from "./sections/BludgeonedByDeformitySection";
import { CleanseTheSoulSection } from "./sections/CleanseTheSoulSection";
import { FlyerSection } from "./sections/FlyerSection";
import { HumanShieldSection } from "./sections/HumanShieldSection";
import { ImmortalTormentSection } from "./sections/ImmortalTormentSection";
import { RejoiceSection } from "./sections/RejoiceSection";

export const Home = () => (
  <section id="projects" className="md:px-5 px-3">
    <PageHeader text="Projects" />
    <ProjectDirectory directoryItems={DirectoryItems} />

    <div>
      <BludgeonedByDeformitySection />
      <CleanseTheSoulSection />
      <FlyerSection />
      <HumanShieldSection />
      <RejoiceSection />
      <ImmortalTormentSection />
    </div>
  </section>
);
