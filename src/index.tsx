import { h } from "preact";
import {
  LocationProvider,
  Router,
  Route,
  hydrate,
  prerender as ssr,
} from "preact-iso";

import { setup } from "goober";
import { prefix } from "goober/prefixer";
import { shouldForwardProp } from "goober/should-forward-prop";

import "@unocss/reset/tailwind.css";
import "./styles/global.css";

import Header from "./components/Header.jsx";

import Home from "./pages/Home/index.jsx";
import NotFound from "./pages/_404.jsx";

// goober's needs to know how to render the `styled` nodes.
// So to let it know, we run the `setup` function with the
// `h` function and prefixer function.
setup(
  h,
  prefix,
  undefined,
  shouldForwardProp((prop) => {
    // Do NOT forward props that start with `$` symbol
    return prop["0"] !== "$";
  })
);

export function App() {
  return (
    <LocationProvider>
      <Header />

      <main>
        <Router>
          <Route path="/" component={Home} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
