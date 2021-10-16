import React, { useContext } from "react";
import {
  AppBar,
  FormControlLabel,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../contexts/ThemeContext";
import MaterialUISwitch from "./MaterialUiSwitch";

const CustomAppBar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
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
        <FormControlLabel
          checked={theme.palette.mode === "dark"}
          onChange={colorMode.toggleColorMode}
          control={<MaterialUISwitch />}
          label=""
        />
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
