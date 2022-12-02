import logo from "./logo.svg";
import "./App.css";
import React, { Suspense } from "react";
import Layout from "./components/Layout";
import Component from "./components/Component";
import GenericPage from "./pages/GenericPage";
import HomeTemplate from "./templates/Home";
import ArchivesSearchTemplate from "./templates/ArchiveSearch";
import ArtifactSearchTemplate from "./templates/ArtifactSearch";
import { CssBaseline } from "@mui/material";
import Routing from "./templates/Routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { baseTheme } from "./templates/Theme";
import { ThemeProvider } from "@mui/material/styles";
import Loading from "./components/Loading";

import { deepmerge } from "@mui/utils";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendMuiTheme,
} from "@mui/material/styles";
import { extendTheme as extendJoyTheme } from "@mui/joy/styles";

function App() {
  const theme = baseTheme;
  const joyTheme = extendJoyTheme({ cssVarPrefix: "mui" });
  const muiTheme = extendMuiTheme(baseTheme);
  return (
    <CssVarsProvider theme={deepmerge(joyTheme, muiTheme)}>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            {Routing.map(({ path, template }, i) => (
              <Route
                key={i}
                path={path}
                element={<GenericPage template={template} />}
              />
            ))}
          </Routes>
        </Suspense>
      </Router>
    </CssVarsProvider>
    // <div className="App">
    //   <GenericPage template={ArtifactSearchTemplate} />
    // </div>F
  );
}

export default App;
