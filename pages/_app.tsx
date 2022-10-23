import { AppProps } from "next/app";
import { Box, CssBaseline } from "@mui/material";
import { ColorModeProvider } from "../lib/contexts/ThemeContext";
import AppBar from "../components/AppBar";
import "../styles/globals.css";
import { ResponsiveProvider } from "../lib/contexts/ResponsiveContext";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ColorModeProvider>
    <ResponsiveProvider>
      <>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <AppBar />
          <Component {...pageProps} />
        </Box>
      </>
    </ResponsiveProvider>
  </ColorModeProvider>
);
export default MyApp;
