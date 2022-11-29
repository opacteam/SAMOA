import Footer from "../Footer";
import AppBar from "../AppBar";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};
export default Layout;
