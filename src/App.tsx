import "./App.css";
import { LeprousFooter } from "./layout/LeprousFooter";
import { LeprousNavigation } from "./layout/LeprousNavigation";
import { AboutSection } from "./sections/AboutSection";
import { FlyerSection } from "./sections/FlyerSection";
import { HumanShieldSection } from "./sections/HumanShieldSection";
import { ImmortalTormentSection } from "./sections/ImmortalTormentSection";

function App() {
  return (
    <>
      <h1 className="uppercase text-center mt-3">bradonstudebaker.com</h1>
      <LeprousNavigation />
      <HumanShieldSection />
      <FlyerSection />
      <ImmortalTormentSection />
      <AboutSection />
      <LeprousFooter />
    </>
  );
}

export default App;
