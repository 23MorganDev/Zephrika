// src/components/layout/Header.jsx
import { useState } from "react";
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
  Collapse,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

// Service Icons
import WebIcon from "@mui/icons-material/Language";
import DesignIcon from "@mui/icons-material/Brush";
import MarketingIcon from "@mui/icons-material/Campaign";
import SocialIcon from "@mui/icons-material/PeopleAlt";
import AiIcon from "@mui/icons-material/SmartToy";
import PosIcon from "@mui/icons-material/PointOfSale";
import SupportIcon from "@mui/icons-material/SupportAgent";
import HostingIcon from "@mui/icons-material/Cloud";
import MaintenanceIcon from "@mui/icons-material/BuildCircle";

import logo from "../../assets/images/zephrika-logo.png";

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
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

 
  const services = [
    { label: "Web Design", icon: <WebIcon /> },
    { label: "Graphic Design", icon: <DesignIcon /> },
    { label: "Digital Marketing", icon: <MarketingIcon /> },
    { label: "Social Media Management", icon: <SocialIcon /> },
    { label: "AI Assistants Development", icon: <AiIcon /> },
    { label: "Web-based POS Systems", icon: <PosIcon /> },
    { label: "IT Support", icon: <SupportIcon /> },
    { label: "Web Hosting", icon: <HostingIcon /> },
    { label: "Website Maintenance", icon: <MaintenanceIcon /> },
  ];

  const navLinks = [
    { label: "Services", type: "dropdown" },
    { label: "About", to: "about", type: "scroll" },
    { label: "Contact Us", to: "contact", type: "scroll" },
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
              style={{ height: "50px", marginRight: "12px", cursor: "pointer" }}
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

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box display="flex" alignItems="center">
            {navLinks.map((link, index) =>
              link.type === "dropdown" ? (
                <Box
                  key={index}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  sx={{ position: "relative" }}
                >
                  <StyledButton>Services ▾</StyledButton>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            mt: 1,
                            backgroundColor: "#fff",
                            borderRadius: "12px",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                            p: 2,
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: 1,
                            minWidth: 320,
                            zIndex: 2000,
                          }}
                        >
                          {services.map((srv, i) => (
                            <Box
                              key={i}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                color: "black",
                                p: 1,
                                borderRadius: "8px",
                                cursor: "pointer",
                                transition: "0.3s ease",
                                "&:hover": {
                                  backgroundColor: theme.palette.action.hover,
                                  color: theme.palette.secondary.main,
                                },
                              }}
                            >
                              <Box
                                sx={{ mr: 1, color: theme.palette.primary.main }}
                              >
                                {srv.icon}
                              </Box>
                              <Typography
                                sx={{
                                  fontWeight: 500,
                                  fontSize: "0.95rem",
                                  fontFamily: "Inter, sans-serif",
                                }}
                              >
                                {srv.label}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Box>
              ) : link.type === "scroll" ? (
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
                <StyledButton key={index} component={RouterLink} to={link.to}>
                  {link.label}
                </StyledButton>
              )
            )}

            {/* Contact Us button */}
            <Button
              variant="contained"
              href="mailto:morganmuthee1@gmail.com"
              sx={{
                ml: 3,
                backgroundColor: theme.palette.secondary.main,
                color: "#fff",
                borderRadius: "25px",
                textTransform: "none",
                fontWeight: 600,
                px: 3,
                "&:hover": {
                  backgroundColor: theme.palette.secondary.dark,
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        )}

        {/* Mobile Menu */}
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

      {/* Mobile Drawer with collapsible Services featur*/}
      <AnimatePresence>
        {drawerOpen && (
          <Drawer
            anchor="top"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            PaperProps={{
              component: motion.div,
              initial: { y: "-100%", opacity: 0 },
              animate: { y: 0, opacity: 1 },
              exit: { y: "-100%", opacity: 0 },
              transition: {
                type: "spring",
                stiffness: 80,
                damping: 18,
                duration: 0.6,
              },
              sx: {
                height: "80vh",
                backgroundColor: theme.palette.primary.main,
                borderBottomLeftRadius: "24px",
                borderBottomRightRadius: "24px",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                overflow: "hidden",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
                pt: 3,
              }}
            >
              {/* Close Button */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                  px: 3,
                }}
              >
                <IconButton
                  onClick={toggleDrawer(false)}
                  sx={{
                    color: "#fff",
                    "&:hover": { color: theme.palette.secondary.main },
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              {/* Navigation Links */}
              <List sx={{ width: "100%", textAlign: "center" }}>
                <ListItemButton
                  onClick={() => setServicesOpen(!servicesOpen)}
                  sx={{
                    justifyContent: "center",
                    "&:hover": {
                      backgroundColor: theme.palette.secondary.main,
                      color: "#fff",
                    },
                  }}
                >
                  <ListItemText
                    primary="Services"
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontFamily: "Georgia, serif",
                      color: "#fff",
                    }}
                  />
                  {servicesOpen ? (
                    <ExpandLess sx={{ color: "#fff" }} />
                  ) : (
                    <ExpandMore sx={{ color: "#fff" }} />
                  )}
                </ListItemButton>

                <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {services.map((srv, i) => (
                      <ListItemButton
                        key={i}
                        sx={{
                          pl: 6,
                          "&:hover": {
                            backgroundColor: theme.palette.secondary.main,
                            color: "#fff",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.2,
                          }}
                        >
                          {srv.icon}
                          <Typography
                            sx={{
                              color: "#fff",
                              fontWeight: 500,
                              fontFamily: "Georgia, serif",
                            }}
                          >
                            {srv.label}
                          </Typography>
                        </Box>
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>

                {navLinks
                  .filter((n) => n.type !== "dropdown")
                  .map((link, index) =>
                    link.type === "scroll" ? (
                      <ScrollLink
                        key={index}
                        to={link.to}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={toggleDrawer(false)}
                      >
                        <ListItemButton
                          sx={{
                            justifyContent: "center",
                            "&:hover": {
                              backgroundColor:
                                theme.palette.secondary.main,
                              color: "#fff",
                            },
                          }}
                        >
                          <ListItemText
                            primary={link.label}
                            primaryTypographyProps={{
                              fontWeight: 600,
                              fontFamily: "Georgia, serif",
                              color: "#fff",
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
                        sx={{
                          justifyContent: "center",
                          "&:hover": {
                            backgroundColor:
                              theme.palette.secondary.main,
                            color: "#fff",
                          },
                        }}
                      >
                        <ListItemText
                          primary={link.label}
                          primaryTypographyProps={{
                            fontWeight: 600,
                            fontFamily: "Georgia, serif",
                            color: "#fff",
                          }}
                        />
                      </ListItemButton>
                    )
                  )}
              </List>

              <Box sx={{ mt: "auto", pb: 4 }}>
                <Button
                  variant="contained"
                  href="mailto:morganmuthee1@gmail.com"
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    color: "#fff",
                    fontWeight: 600,
                    borderRadius: "25px",
                    textTransform: "none",
                    px: 4,
                    py: 1.2,
                    fontFamily: "Georgia, serif",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    "&:hover": {
                      backgroundColor: theme.palette.secondary.dark,
                      transform: "scale(1.05)",
                      transition: "0.3s ease",
                    },
                  }}
                  onClick={toggleDrawer(false)}
                >
                  Contact Us
                </Button>
              </Box>
            </Box>
          </Drawer>
        )}
      </AnimatePresence>
    </StyledAppBar>
  );
}

export default Header;
