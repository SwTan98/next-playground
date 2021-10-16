import type { AppProps } from "next/app";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          Next.js Playground
        </Typography>
      </Toolbar>
    </AppBar>
    <Component {...pageProps} />
  </Box>
);
export default MyApp;
