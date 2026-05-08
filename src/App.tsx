import type { ReactNode } from "react";
import { Route, Switch, useLocation } from "wouter";
import "@/App.css";
import wildlifeBg from "@/assets/wildlife.webp";

import { LeprousFooter } from "@/layout/LeprousFooter";
import { LeprousNavigation } from "@/layout/LeprousNavigation";

import { About } from "@/pages/about/About";
import { Home } from "@/pages/home/Home";

import { NavItems } from "@/config";

import { HomeSplashSection } from "./components/splash/HomeSplashSection";
import { AboutSplashSection } from "./components/splash/AboutSplashSection";

type SplashConfig = { node: ReactNode; singleScreen?: boolean };

const splashContent: Record<string, SplashConfig> = {
  "/": { node: <HomeSplashSection /> },
  "/about": { node: <AboutSplashSection />, singleScreen: true },
};

function App() {
  const [location] = useLocation();
  const config = splashContent[location];
  const splash = config?.node;
  const singleScreen = config?.singleScreen ?? false;

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed -z-10 bg-cover bg-center bg-no-repeat"
        style={{ inset: "-200px", backgroundImage: `url(${wildlifeBg})` }}
      />
      <div className={splash ? "h-dvh flex flex-col" : undefined}>
        <LeprousNavigation navItems={NavItems} />
        {splash && (
          <div key={location} className="splash-fade-in flex-1 flex flex-col">
            {splash}
          </div>
        )}
        {singleScreen && <LeprousFooter />}
      </div>

      <main className={splash ? undefined : "min-h-dvh"}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </main>

      {!singleScreen && <LeprousFooter />}
    </>
  );
}

export default App;
