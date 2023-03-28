import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Progress from "./components/Progress";
import Header from "./components/Header";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const FormLazy = lazy(() => import("./components/FormApp"));
const SearchLazy = lazy(() => import('./components/SearchApp'));
const PitchboardLazy = lazy(() => import("./components/PitchboardApp"));
const ExpertLazy = lazy(() => import('./components/ExpertApp'));
const DetailsLazy = lazy(() => import('./components/DetailsApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/form" component={FormLazy} />
              <Route path="/search" component={SearchLazy} />
              <Route path="/pitchboard" component={PitchboardLazy} />
              <Route path="/expert" component={ExpertLazy} />
              <Route path="/" component={MarketingLazy} />
            </Switch>
            <Route path="/details" component={DetailsLazy} />
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
