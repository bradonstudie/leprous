import { Route, Switch } from "wouter";
import "./App.css";
import { GlobeSpin } from "./components/GlobeSpin";

import { LeprousFooter } from "./layout/LeprousFooter";
import { LeprousNavigation } from "./layout/LeprousNavigation";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";

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

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>

      {/* Footer */}
      <LeprousFooter />
    </>
  );
}

export default App;
