// Updated AboutPage component focused on company identity instead of individuals.
import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import backgroundImage from "../../assets/images/About3.jpg";

function AboutPage() {
  const theme = useTheme();

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
              color: theme.palette.primary.light,
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
          Zephrika Technologies is a disruptive African born tech consultancy
          empowering SMEs and mid-sized businesses with modern, affordable, and
          scalable digital solutions. We merge innovation, speed, and deep client
          understanding to deliver solutions tailored to each business’s unique needs.
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
            { title: "Our Vision", text: "To become Kenya’s and East Africa’s leading IT consulting powerhouse driving SME digital transformation and enabling businesses to compete globally while maintaining their uniqueness." },
            { title: "Our Mission", text: "To empower SMEs with custom-built digital solutions that enhance customer acquisition, streamline operations, and unlock sustainable growth one innovative solution at a time." }
          ].map((item, index) => (
            <Box
              key={index}
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

      {/* What Drives Us */}
      <Box
        sx={{
          background: theme.palette.gradients.surfaceAlt,
          py: { xs: 4, md: 6 },
          px: { xs: 3, md: 6 },
          textAlign: 'center',
        }}
      >
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
          What Drives Us
        </Typography>
        <Typography
          sx={{
            maxWidth: 950,
            mx: 'auto',
            color: theme.palette.text.secondary,
            fontSize: { xs: '1rem', md: '1.15rem' },
            lineHeight: 1.8,
          }}
        >
          At Zephrika, we believe technology should elevate businesses not complicate
          them. That’s why we operate with a client first mindset, delivering
          affordability, speed, and long-term partnership. We walk with you from
          problem identification to solution development and post-launch growth.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
            mt: 4,
            maxWidth: 1200,
            mx: 'auto',
          }}
        >
          {[
            {
              title: 'Tailored Solutions',
              text: 'Every solution is custom built never one-size-fits-all. Your business is unique, and your digital presence should be too.',
            },
            {
              title: 'Affordable Innovation',
              text: 'We deliver premium-grade solutions at MSME-friendly pricing without compromising quality or speed.',
            },
            {
              title: 'End-to-End Support',
              text: 'From ideation to deployment and beyond we stay with you to ensure your digital tools keep delivering value.',
            },
            {
              title: 'Agile Execution',
              text: 'Speed is in our DNA. We build, refine, and deliver fast so your business can move faster.',
            },
          ].map((feature, index) => (
            <Box
              key={index}
              sx={{
                flex: { xs: '100%', sm: '45%', md: '22%' },
                p: 3,
                borderRadius: 3,
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[3],
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: theme.shadows[6],
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: theme.palette.primary.main }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                {feature.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default AboutPage;
