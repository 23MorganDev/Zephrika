import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import backgroundImage from "../../assets/images/Zeph.jpg";

function AboutPage() {
  const theme = useTheme();

  const teamMembers = [
    { name: 'Morgan Muthee', role: 'Founder and Chief Maverick' },
    { name: 'Stanley Maina', role: 'Chief Operating Officer (COO)' },
    { name: 'Lucky Kathumo', role: 'Lead Designer and Head of Marketing and Customer Outreach' },
    { name: 'Felister Wanza', role: 'Web Developer and Social Media Management ' },
    { name: 'Joseph Gicharu', role: 'AI Agents Developer'}


  ];

  return (
    <Box display="flex" flexDirection="column">
      {/* Hero Section */}
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
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            inset: 0,
            zIndex: -1,
            transition: theme.transitions.create('transform', {
              duration: 6000,
              easing: theme.transitions.easing.easeInOut,
            }),
            '&:hover': { transform: 'scale(1.05)' },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              ...theme.typography.h2,
              color: theme.palette.common.white,
              fontWeight: 800,
              textAlign: 'center',
              textShadow: theme.shadows[6],
              fontSize: { xs: '2rem', md: 'clamp(2.5rem, 6vw, 70px)' },
            }}
          >
            About Us
          </Typography>
        </Box>
      </Box>

      {/* Who We Are */}
      <Box
        sx={{
          background: theme.palette.gradients.surface,
          color: theme.palette.text.primary,
          py: { xs: 4, md: 6 },
          px: { xs: 2, md: 6 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            ...theme.typography.h4,
            color: theme.palette.primary.main,
            fontWeight: 700,
          }}
        >
          Who We Are
        </Typography>
        <Typography
          sx={{
            maxWidth: 900,
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: 1.7,
            color: theme.palette.text.secondary,
          }}
        >
          Zephrika Technologies is a forward-thinking technology company dedicated
          to helping businesses establish powerful digital footprints. We craft
          modern websites, scalable applications, and digital solutions that blend
          innovation with reliability.
        </Typography>
      </Box>

      {/* Vision & Mission */}
      <Box
        sx={{
          background: theme.palette.gradients.primary,
          color: theme.palette.common.white,
          py: { xs: 4, md: 6 },
          px: { xs: 2, md: 6 },
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            maxWidth: 1200,
            mx: 'auto',
          }}
        >
          {[
            { title: "Our Vision", text: "To be a globally recognized leader in digital innovation, empowering businesses to thrive through cutting-edge technology and sustainable solutions." },
            { title: "Our Mission", text: "To empower businesses by delivering tailored, innovative, and scalable digital solutions that drive growth, engagement, and long-term success." }
          ].map((item, i) => (
            <Box
              key={i}
              sx={{
                flex: 1,
                p: 3,
                borderRadius: 3,
                backgroundColor: 'rgba(0,0,0,0.25)',
                boxShadow: theme.shadows[3],
                transition: theme.transitions.create('transform', {
                  duration: 500,
                }),
                '&:hover': { transform: 'translateY(-4px)' },
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Meet Our Team */}
      <Box
        sx={{
          background: theme.palette.gradients.surfaceAlt,
          py: { xs: 4, md: 6 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 700,
          }}
        >
          Meet Our Team
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
            mt: 4,
          }}
        >
          {teamMembers.map((member, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: '100%', sm: '45%', md: '285px' },
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  height: 350,
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: theme.shadows[4],
                  transition: theme.transitions.create('transform', {
                    duration: 400,
                  }),
                  '&:hover': { transform: 'scale(1.03)' },
                }}
              >
                <img
                  src={backgroundImage}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 'bold',
                  mt: 2,
                }}
              >
                {member.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                }}
              >
                {member.role}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default AboutPage;
