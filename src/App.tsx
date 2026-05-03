import "./App.css";

import { LeprousFooter } from "./layout/LeprousFooter";
import { LeprousNavigation } from "./layout/LeprousNavigation";

import { AboutSection } from "./sections/AboutSection";
import { BludgeonedByDeformitySection } from "./sections/BludgeonedByDeformitySection";
import { FlyerSection } from "./sections/FlyerSection";
import { HumanShieldSection } from "./sections/HumanShieldSection";
import { ImmortalTormentSection } from "./sections/ImmortalTormentSection";

function App() {
  return (
    <>
      {/* Navigation */}
      <div className="flex flex-col items-center mt-3">
        {/* <GlobeSpin /> */}
        <h1 className="uppercase text-xl mt-1">Bradon Studebaker</h1>
        <p>Designer & Engineer • Baltimore, Maryland</p>
        <LeprousNavigation />
      </div>

      {/* Projects */}
      <section id="look">
        <HumanShieldSection />
        <FlyerSection />
        <ImmortalTormentSection />
        <BludgeonedByDeformitySection />
      </section>

      {/* About */}
      <AboutSection />

      {/* Gallery */}

      {/* Footer */}
      <LeprousFooter />
    </>
  );
}

export default App;
