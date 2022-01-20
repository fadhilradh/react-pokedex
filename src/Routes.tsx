import React from "react";
import PokemonsPage from "./pages/PokemonsPage";

import { Switch, Route, useLocation } from "react-router-dom";

const Routes = () => {
   const location = useLocation();
   return (
      // fallback={<SplashScreen />}
      <React.Suspense fallback={<div>Loading...</div>}>
         <Switch>
            {/* <Route path="/pokemon/:id" component={PokemonDetailsPage} /> */}
            <Route exact path="/" component={PokemonsPage} />
         </Switch>
      </React.Suspense>
   );
};

export default Routes;
