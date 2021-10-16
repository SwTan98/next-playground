import React, { useContext, useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Home, Menu, Inbox, Mail } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../contexts/ThemeContext";
import MaterialUISwitch from "./MaterialUiSwitch";

const MenuList = ({ onClose }: { onClose: Function }) => (
  <Box
    sx={{ width: 250 }}
    role="presentation"
    onClick={onClose}
    onKeyDown={onClose}
  >
    <List>
      <Link passHref href="/">
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
    </List>
    <Divider />
    <List>
      {["Animation", "Button", "Validation"].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Box>
);

const CustomAppBar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
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
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <MenuList onClose={toggleDrawer} />
      </Drawer>
    </>
  );
};

export default CustomAppBar;
