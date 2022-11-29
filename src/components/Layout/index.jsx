import Footer from "../Footer";
import AppBar from "../AppBar";
import { Box } from "@mui/material";
import SiteLayout from "../../templates/SiteLayout";
const Layout = ({ children }) => {
  return (
    <>
      <AppBar {...SiteLayout.AppBar} />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};
export default Layout;
