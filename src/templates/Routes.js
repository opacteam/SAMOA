import { lazy } from "react";
import { Navigate } from "react-router-dom";

import HomeTemplate from "./Home";
import ArchivesSearchTemplate from "./ArchiveSearch";
import ArtifactSearchTemplate from "./ArtifactSearch";
import NotFoundPageTemplate from './404';
import FAQ from './FAQ'

const GenericPage = lazy(() =>
    import ("../pages/GenericPage"));

const Routes = [
    { path: "/", template: HomeTemplate },
    { path: "/archive", template: ArchivesSearchTemplate },
    { path: "/artifact", template: ArtifactSearchTemplate },
    { path: '/FAQ', template: FAQ },
    { path: "*", template: NotFoundPageTemplate },

];

export default Routes;