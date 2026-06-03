import React from 'react';
import { Box, Container, Typography, Link, IconButton, Divider, Stack, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const LOGO_URL = "https://storage.googleapis.com/dala-prod-public-storage/attachments/6b53e9fe-4601-4f72-9688-306da8a5c2e4/1779534074782_Screenshot_2026-05-22_235420.png";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'rgba(0,0,0,0.5)', pt: 8, pb: 4, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <img src={LOGO_URL} alt="Zephrika Logo" style={{ height: '40px', borderRadius: '4px' }} />
              <Typography variant="h5" color="primary.main" sx={{ fontWeight: 900 }}>
                ZEPHRIKA
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
              Zephrika is a premier technology solutions provider dedicated to empowering businesses through innovative web design, reliable hosting, and expert graphic design. We combine professional excellence with modern creativity.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton color="primary" sx={{ border: '1px solid rgba(255,255,255,0.1)' }}><FacebookIcon fontSize="small" /></IconButton>
              <IconButton color="primary" sx={{ border: '1px solid rgba(255,255,255,0.1)' }}><TwitterIcon fontSize="small" /></IconButton>
              <IconButton color="primary" sx={{ border: '1px solid rgba(255,255,255,0.1)' }}><LinkedInIcon fontSize="small" /></IconButton>
              <IconButton color="primary" sx={{ border: '1px solid rgba(255,255,255,0.1)' }}><InstagramIcon fontSize="small" /></IconButton>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" color="white" sx={{ mb: 2, fontWeight: 600 }}>
              Services
            </Typography>
            <Stack spacing={1}>
              <Link href="/services" color="text.secondary" underline="hover">Web Design</Link>
              <Link href="/services" color="text.secondary" underline="hover">Web Hosting</Link>
              <Link href="/services" color="text.secondary" underline="hover">Web Maintenance</Link>
              <Link href="/services" color="text.secondary" underline="hover">Graphic Design</Link>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" color="white" sx={{ mb: 2, fontWeight: 600 }}>
              Company
            </Typography>
            <Stack spacing={1}>
              <Link href="/" color="text.secondary" underline="hover">About Us</Link>
              <Link href="#portfolio" color="text.secondary" underline="hover">Portfolio</Link>
              <Link href="#testimonials" color="text.secondary" underline="hover">Testimonials</Link>
              <Link href="#contact" color="text.secondary" underline="hover">Contact</Link>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" color="white" sx={{ mb: 2, fontWeight: 600 }}>
              Contact Info
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <LocationOnIcon color="primary" fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                 Nairobi, Kenya
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <PhoneIcon color="primary" fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  +254 113427928
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <EmailIcon color="primary" fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  zephrikatechnologies@gmail.com
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, opacity: 0.1 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Zephrika. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link href="#" color="text.secondary" variant="body2" underline="hover">Privacy Policy</Link>
            <Link href="#" color="text.secondary" variant="body2" underline="hover">Terms of Service</Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;