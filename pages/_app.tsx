import { AppProps } from "next/app";
import { Box, CssBaseline } from "@mui/material";
import { ColorModeProvider } from "../lib/contexts/ThemeContext";
import AppBar from "../components/AppBar";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ColorModeProvider>
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar />
        <Component {...pageProps} />
      </Box>
    </>
  </ColorModeProvider>
);
export default MyApp;
