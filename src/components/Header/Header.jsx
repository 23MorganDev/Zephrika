import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link as ScrollLink } from 'react-scroll'

const primaryAccent = '#00BFFF';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: 'Georgia, serif',
  fontStyle: 'italic',
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  boxShadow: 'none',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: primaryAccent,
  fontWeight: 'bold',
  fontFamily: 'Georgia, serif',
  '&:hover': {
    backgroundColor: 'rgba(0, 191, 255, 0.1)',
  },
}));

function Header() {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          sx={{ color: primaryAccent, mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: primaryAccent }}>
          Zephfrika
        </Typography>
        <div>
          <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
            <StyledButton>Home</StyledButton>
          </ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} offset={-70}>
            <StyledButton>Services</StyledButton>
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
            <StyledButton>About</StyledButton>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
            <StyledButton>Contact Us</StyledButton>
          </ScrollLink>
        </div>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Header;
