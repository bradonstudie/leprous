import { Route, Switch } from "wouter";
import "@/App.css";

import { LeprousFooter } from "@/layout/LeprousFooter";
import { LeprousNavigation } from "@/layout/LeprousNavigation";

import { About } from "@/pages/about/About";
import { Home } from "@/pages/home/Home";

import { NavItems } from "@/config";

function App() {
  return (
    <>
      <LeprousNavigation navItems={NavItems} />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>

      <LeprousFooter />
    </>
  );
}

export default App;
