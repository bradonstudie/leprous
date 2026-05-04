import "./App.css";
import { GlobeSpin } from "./components/GlobeSpin";

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
      <div className="flex flex-col items-center mt-3 h-screen">
        <GlobeSpin />
        <h1 className="uppercase text-2xl overflow-hidden whitespace-nowrap mx-auto">
          Bradon Studebaker
        </h1>
        <p>Designer & Engineer • Baltimore, Maryland</p>
        <LeprousNavigation />
      </div>

      {/* Projects */}
      <section id="works">
        <HumanShieldSection />
        <FlyerSection />
        <BludgeonedByDeformitySection />
        <ImmortalTormentSection />
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
