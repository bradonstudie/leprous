import { Route, Switch, useRoute } from "wouter";
import "@/App.css";

import { LeprousFooter } from "@/layout/LeprousFooter";
import { LeprousNavigation } from "@/layout/LeprousNavigation";

import { About } from "@/pages/about/About";
import { Home } from "@/pages/home/Home";
import { HomeSplashSection } from "@/pages/home/sections/HomeSplashSection";

import { NavItems } from "@/config";

function App() {
  const [isHome] = useRoute("/");

  return (
    <>
      {isHome ? (
        <div className="h-dvh flex flex-col">
          <LeprousNavigation navItems={NavItems} />
          <HomeSplashSection />
        </div>
      ) : (
        <LeprousNavigation navItems={NavItems} />
      )}

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>

      <LeprousFooter />
    </>
  );
}

export default App;
