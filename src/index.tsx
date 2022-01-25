import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HelmetProvider, Helmet } from "react-helmet-async";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";

ReactDOM.render(
   <React.StrictMode>
      <HelmetProvider>
         <Helmet>
            <meta charSet="utf-8" />
            <title>React Pokédex</title>
            <meta
               name="description"
               content="a simple pokédex for your pokemon needs."
            />
         </Helmet>
         <Provider store={store}>
            <App />
         </Provider>
      </HelmetProvider>
   </React.StrictMode>,
   document.getElementById("root")
);
