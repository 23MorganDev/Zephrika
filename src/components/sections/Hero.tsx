import React from 'react';
import { Box, Typography, Button, Container, useTheme, useMediaQuery, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Zephrika from "../../assets/images/zephrika.png";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
      }}
    >
      {/* Background Overlay Decor */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}1a 0%, transparent 70%)`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="overline"
                sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3, mb: 2, display: 'block' }}
              >
                INNOVATIVE TECH SOLUTIONS
              </Typography>
              <Typography variant="h1" gutterBottom sx={{ fontWeight: 900 }}>
                Zephrika: Engineering <span style={{ color: theme.palette.primary.main }}>Future-Ready</span> Digital Experiences
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4, fontWeight: 400, maxWidth: 600 }}>
                We provide professional web design, hosting, and maintenance services that scale with your vision. Built on the principles of stability and innovation.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="contained" size="large" color="primary">
                  Explore Services
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}
                  startIcon={<PlayArrowIcon />}
                >
                  Watch Demo
                </Button>
              </Box>
            </motion.div>
          </Grid>
          {!isMobile && (
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 20,
                      left: 20,
                      right: -20,
                      bottom: -20,
                      border: `2px solid ${theme.palette.primary.main}`,
                      borderRadius: 4,
                      zIndex: -1,
                    },
                  }}
                >
                  <img
                    src={Zephrika}
                    alt="Innovation"
                    style={{ width: '100%', borderRadius: 8, boxShadow: '20px 20px 60px rgba(0,0,0,0.5)' }}
                  />
                </Box>
              </motion.div>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;