import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Service Icons
import LanguageIcon from '@mui/icons-material/Language';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BrushIcon from '@mui/icons-material/Brush';
import SecurityIcon from '@mui/icons-material/Security';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CodeIcon from '@mui/icons-material/Code';

// Process Icons
import SearchIcon from '@mui/icons-material/Search';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BuildIcon from '@mui/icons-material/Build';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

import backgroundImage from "../../assets/images/Zeph.jpg";

function ServicesPage() {
  const theme = useTheme();

  const services = [
    { title: "Web Development", icon: <LanguageIcon sx={{ fontSize: 48 }} /> },
    { title: "Mobile App Development", icon: <PhoneIphoneIcon sx={{ fontSize: 48 }} /> },
    { title: "UI/UX Design", icon: <BrushIcon sx={{ fontSize: 48 }} /> },
    { title: "Web Based PoS Systems", icon: <SecurityIcon sx={{ fontSize: 48 }} /> },
    { title: "Cloud Solutions", icon: <CloudIcon sx={{ fontSize: 48 }} /> },
    { title: "Data & AI Solutions", icon: <StorageIcon sx={{ fontSize: 48 }} /> },
    { title: "IT Support", icon: <SupportAgentIcon sx={{ fontSize: 48 }} /> },
    { title: "Custom Software", icon: <CodeIcon sx={{ fontSize: 48 }} /> },
  ];

  const processSteps = [
    {
      title: "Understand Needs",
      description: "We start by understanding your unique needs and challenges.",
      icon: <SearchIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
    },
    {
      title: "Design Strategy",
      description: "We design a customized strategy that aligns with your goals.",
      icon: <DesignServicesIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
    },
    {
      title: "Implement",
      description: "Our team implements the plan with precision and expertise.",
      icon: <BuildIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
    },
    {
      title: "Support",
      description: "We offer continuous support to ensure sustainable success.",
      icon: <HeadsetMicIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
    }
  ];

  return (
    <Box display="flex" flexDirection="column" sx={{ mt: 0 }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '500px',
          width: '100%',
          overflow: 'hidden',
          mb: 4,
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            inset: 0,
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: theme.palette.gradients.darkOverlay,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              color: theme.palette.common.white,
              fontWeight: 800,
              textAlign: 'center',
              textShadow: "0 4px 12px rgba(0,0,0,0.4)",
              fontSize: 'clamp(3rem, 8vw, 65px)',
            }}
          >
            Our Services
          </Typography>
        </Box>
      </Box>

      {/* Services Section with background */}
      <Box
        sx={{
          px: { xs: 2, md: 6 },
          py: { xs: 6, md: 10 },
          background: theme.palette.gradients.surface || theme.palette.gradients.surfaceAlt,
          position: "relative",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            maxWidth: "800px",
            mx: "auto",
            fontWeight: 600,
            textAlign: "center",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            color: theme.palette.primary.main,
            mb: 6,
          }}
        >
          Our Company Provides the Below<br />Services with Exceptional Quality
        </Typography>

        {/* Services Grid */}
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  background: theme.palette.background.paper,
                  borderRadius: 4,
                  border: `1px solid ${theme.palette.divider}`,
                  height: "100%",
                  minHeight: 220,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  p: 4,
                  boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: theme.palette.action.hover,
                    transform: "translateY(-6px)",
                    boxShadow: "0px 6px 18px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Box sx={{ fontSize: 48, color: theme.palette.primary.main }}>
                  {service.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mt: 2,
                    color: theme.palette.text.primary,
                  }}
                >
                  {service.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Process Section */}
        <Box sx={{ background: theme.palette.gradients.surfaceAlt, py: 6, mt: 6 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                textAlign: 'center',
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                color: theme.palette.primary.main,
                mb: 3,
              }}
            >
              The Process We Follow
            </Typography>

            <Typography
              sx={{
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                textAlign: 'center',
                maxWidth: 800,
                mx: 'auto',
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                color: theme.palette.text.secondary,
                mb: 5,
              }}
            >
              At Zephrika we follow a structured process to ensure the best results for our clients.
              Our approach includes understanding client needs, designing tailored solutions, implementing
              strategies, and providing ongoing support.
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {processSteps.map((step, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box
                    sx={{
                      background: theme.palette.background.paper,
                      borderRadius: 3,
                      p: 4,
                      height: '100%',
                      boxShadow: 3,
                      textAlign: 'center',
                      transition: "all 0.3s ease",
                      "&:hover": { transform: "translateY(-6px)", boxShadow: 6 }
                    }}
                  >
                    <Box mb={2}>{step.icon}</Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontFamily: "Georgia, serif",
                        fontStyle: "italic",
                        color: theme.palette.primary.main,
                        mb: 1,
                      }}
                    >
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
    </Box>
  );
}

export default ServicesPage;
