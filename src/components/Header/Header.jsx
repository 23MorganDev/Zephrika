// src/components/layout/Header.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/images/zephrika-logo.png";

// ✅ Styled Components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  boxShadow: "none",
  transition: "all 0.3s ease",
}));

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  fontFamily: theme.typography.fontFamily,
  textTransform: "none",
  marginLeft: theme.spacing(2),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };


  const navLinks = [
    { label: "Home", to: "home", type: "scroll" },
    { label: "Services", to: "services", type: "scroll" },
    { label: "About", to: "about", type: "scroll" },
    { label: "Contact", to: "contact", type: "scroll" },
    { label: "Blog", to: "/blog", type: "route" }, 
  ];

  return (
    <StyledAppBar position="sticky">
      <StyledToolbar>

        <Box display="flex" alignItems="center">
          <RouterLink to="/">
            <img
              src={logo}
              alt="Zephrika Technologies"
              style={{ height: "50px", marginRight: "12px" }}
            />
          </RouterLink>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
            }}
          >
            Zephrika 
          </Typography>
        </Box>


        {!isMobile && (
          <Box>
            {navLinks.map((link, index) =>
              link.type === "scroll" ? (
                <ScrollLink
                  key={index}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  <StyledButton>{link.label}</StyledButton>
                </ScrollLink>
              ) : (
                <StyledButton
                  key={index}
                  component={RouterLink}
                  to={link.to}
                >
                  {link.label}
                </StyledButton>
              )
            )}
          </Box>
        )}

        {isMobile && (
          <IconButton
            edge="end"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ color: theme.palette.primary.main }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </StyledToolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            background: theme.palette.background.paper,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2,
            }}
          >
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navLinks.map((link, index) =>
              link.type === "scroll" ? (
                <ScrollLink
                  key={index}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemButton>
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        fontWeight: 600,
                        fontFamily: "Georgia, serif",
                      }}
                    />
                  </ListItemButton>
                </ScrollLink>
              ) : (
                <ListItemButton
                  key={index}
                  component={RouterLink}
                  to={link.to}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontFamily: "Georgia, serif",
                    }}
                  />
                </ListItemButton>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </StyledAppBar>
  );
}

export default Header;
