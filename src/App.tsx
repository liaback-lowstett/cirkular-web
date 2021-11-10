import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import Home from "./pages/Home/Home";
import Platform from "./pages/Platform/Platform";
import Aquafeed from "./pages/Aquafeed/Aquafeed";
import Dairyprotein from "./pages/Dairyprotein/Dairyprotein";
import Career from "./pages/Career/Career"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/platform" component={Platform} />
        <Route path="/aquafeed" component={Aquafeed} />
        <Route path="/dairyprotein" component={Dairyprotein} />
        <Route path="/career" component={Career} />
      </Switch>
    </Router>
  );
};

export default App;
