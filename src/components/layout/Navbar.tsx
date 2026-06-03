import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Process', path: '/development-process' },
  { label: 'Portfolio', path: '/#portfolio' },
  { label: 'Testimonials', path: '/#testimonials' },
  { label: 'Contact', path: '/#contact' },
];

const LOGO_URL = "https://storage.googleapis.com/dala-prod-public-storage/attachments/6b53e9fe-4601-4f72-9688-306da8a5c2e4/1779534074782_Screenshot_2026-05-22_235420.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, my: 2 }}>
        <img src={LOGO_URL} alt="Zephrika Logo" style={{ height: '50px', borderRadius: '4px' }} />
        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
          ZEPHRIKA
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemText>
              <Button
                component={item.path.startsWith('/#') ? 'a' : RouterLink}
                to={item.path.startsWith('/#') ? undefined : item.path}
                href={item.path.startsWith('/#') ? item.path : undefined}
                sx={{ color: 'text.primary', width: '100%' }}
              >
                {item.label}
              </Button>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0 } }}>
          <Box 
            component={RouterLink} 
            to="/" 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              textDecoration: 'none',
              gap: 1.5
            }}
          >
            <img 
              src={LOGO_URL} 
              alt="Zephrika Logo" 
              style={{ height: '42px', width: 'auto', borderRadius: '4px' }} 
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 900,
                letterSpacing: 2,
                color: 'primary.main',
                display: { xs: 'none', sm: 'block' }
              }}
            >
              ZEPHRIKA
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={item.path.startsWith('/#') ? 'a' : RouterLink}
                  to={item.path.startsWith('/#') ? undefined : item.path}
                  href={item.path.startsWith('/#') ? item.path : undefined}
                  sx={{
                    color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                    '&:hover': { color: 'primary.main' },
                    fontSize: '0.9rem'
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                color="primary"
                component="a"
                href="/#contact"
              >
                Get Started
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, backgroundColor: 'background.default' },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;