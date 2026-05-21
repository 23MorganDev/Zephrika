
import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Icons
import LanguageIcon from '@mui/icons-material/Language';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BrushIcon from '@mui/icons-material/Brush';
import SecurityIcon from '@mui/icons-material/Security';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CodeIcon from '@mui/icons-material/Code';
import SearchIcon from '@mui/icons-material/Search';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BuildIcon from '@mui/icons-material/Build';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

import backgroundImage from "../../assets/images/Services.jpg";

function ServicesPage() {
  const theme = useTheme();

  const services = [
    { title: "Website Development", description: "Modern, responsive and fast-loading sites tailored for your business.", icon: <LanguageIcon sx={{ fontSize: 48 }} /> },
    { title: "UI/UX & Branding", description: "Beautiful interfaces and brand identities that stand out.", icon: <BrushIcon sx={{ fontSize: 48 }} /> },
    { title: "Cloud Integration & Management", description: "We serve as your intermediary—helping you choose, set up, and manage the best cloud or hosting provider for your needs. We do not host infrastructure ourselves; instead, we ensure you get reliable, scalable, and cost‑effective solutions from trusted providers.", icon: <CloudIcon sx={{ fontSize: 48 }} /> },
  ];


  const processSteps = [
    { title: "Understand Needs", description: "We learn your business goals, challenges, and vision.", icon: <SearchIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} /> },
    { title: "Design The Strategy", description: "We craft a digital solution that aligns with your goals.", icon: <DesignServicesIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} /> },
    { title: "Build & Deliver", description: "Agile development—fast, precise, reliable.", icon: <BuildIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} /> },
    { title: "Support & Scale", description: "We stay with you to ensure continuous growth and improvement.", icon: <HeadsetMicIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} /> },
  ];

  return (
    <Box display="flex" flexDirection="column">

      {/* HERO */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '350px', md: '500px' },
          overflow: 'hidden',
          mb: 4,
        }}
      >
        <Box
          sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            inset: 0,
            zIndex: -1,
          }}
        />

        <Box
          sx={{
            position: 'absolute', inset: 0,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.primary.light, fontWeight: 800, textAlign: 'center',
              fontSize: { xs: '2.5rem', md: 'clamp(2.5rem, 7vw, 68px)' },
              textShadow: theme.shadows[6]
            }}
          >
            Our Services
          </Typography>
        </Box>
      </Box>


      {/* SERVICES SECTION */}
      <Box sx={{ px: { xs: 2, md: 6 }, py: { xs: 6, md: 10 }, background: theme.palette.gradients.surface }}>

        <Typography
          variant="h2"
          sx={{
            ...theme.typography.h2,
            display: "inline-block",
            padding: {
              xs: "6px 18px",
              sm: "10px 26px",
              md: "12px 36px",
            },
            borderRadius: "50px",
            background: theme.palette.gradients.primary,
            color: theme.palette.primary.contrastText,
            fontWeight: 800,
            textAlign: "center",
            textShadow: theme.shadows[3],
            fontSize: {
              xs: "1.2rem",
              sm: "1.6rem",
              md: "clamp(2rem, 5vw, 3rem)",
            },
            boxShadow: theme.shadows[4],
            transition: "0.3s ease",
            margin: { xs: "16px 0", md: "24px 0" },
            "&:hover": {
              background: theme.palette.gradients.primaryHover,
              boxShadow: theme.shadows[6],
              transform: "translateY(-3px)",
            },
          }}
        >
          Tailored Digital Solutions for Your Business
        </Typography>

        <Typography
          sx={{
            textAlign: 'center', maxWidth: 900, mx: 'auto',
            mb: 6, color: theme.palette.text.secondary,
            fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.8
          }}
        >
          We don’t offer one-size-fits-all services. Every solution we create is designed to meet
          the unique needs of SMEs and mid-level businesses across Kenya and East Africa.
        </Typography>


        {/* Services Grid */}
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  background: theme.palette.background.paper,
                  borderRadius: 4,
                  p: 4,
                  minHeight: 260,
                  textAlign: 'center',
                  boxShadow: theme.shadows[3],
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-6px)', boxShadow: theme.shadows[6] }
                }}
              >
                <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>
                  {service.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography sx={{ color: theme.palette.text.secondary }}>
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>


      {/* PROCESS SECTION */}
      <Box sx={{ background: theme.palette.gradients.surfaceAlt, py: 10, px: 3 }}>
        <Container maxWidth="lg">

          {/* Title Wrapper */}
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              sx={{
                ...theme.typography.h2,
                display: "inline-block",
                padding: {
                  xs: "6px 18px",
                  sm: "10px 26px",
                  md: "10px 28px",
                },
                borderRadius: "50px",
                background: theme.palette.gradients.primary,
                color: theme.palette.primary.contrastText,
                fontWeight: 800,
                textAlign: "center",
                textShadow: theme.shadows[3],
                fontSize: {
                  xs: "1.2rem",
                  sm: "1.6rem",
                  md: "clamp(1.8rem, 3.8vw, 2.4rem)",
                },
                boxShadow: theme.shadows[4],
                transition: "0.3s ease",
                margin: { xs: "16px 0", md: "24px 0" },
                "&:hover": {
                  background: theme.palette.gradients.primaryHover,
                  boxShadow: theme.shadows[6],
                  transform: "translateY(-3px)",
                },
              }}
            >
              Our Process
            </Typography>
          </Box>

          {/* Subtitle */}
          <Typography
            sx={{
              maxWidth: 850,
              mx: "auto",
              textAlign: "center",
              color: theme.palette.text.secondary,
              mb: 6,
            }}
          >
            We follow a transparent, structured and client-focused process to ensure your project is delivered with excellence.
          </Typography>

          {/* Process Steps Grid */}
          <Grid container spacing={4} justifyContent="center">
            {processSteps.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    background: theme.palette.background.paper,
                    borderRadius: 3,
                    p: 4,
                    textAlign: "center",
                    boxShadow: theme.shadows[3],
                    transition: "0.3s",
                    "&:hover": { transform: "translateY(-6px)", boxShadow: theme.shadows[6] },
                  }}
                >
                  <Box mb={2}>{step.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {step.title}
                  </Typography>
                  <Typography sx={{ color: theme.palette.text.secondary }}>
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

        </Container>
      </Box>


    </Box>
  );
}

export default ServicesPage;
