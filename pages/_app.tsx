import type { AppProps } from "next/app";
import { Box } from "@mui/material";
import { ColorModeProvider } from "../lib/contexts/ThemeContext";
import AppBar from "../lib/components/AppBar";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Box sx={{ flexGrow: 1 }}>
    <ColorModeProvider>
      <>
        <AppBar />
        <Component {...pageProps} />
      </>
    </ColorModeProvider>
  </Box>
);
export default MyApp;
