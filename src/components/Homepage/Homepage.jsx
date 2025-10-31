// src/components/Homepage/Homepage.jsx
import { styled } from '@mui/material/styles';
import { Typography, Container, Box, Button } from '@mui/material';
import backgroundImage from "../../assets/images/Zeph.jpg";
import Header from "../Header/Header.jsx";
import About from "../About/About.jsx";
import Services from "../Services/Services.jsx";
import ContactInformation from "../Contact/Contact.jsx";
import CustomDivider from "../../Helpers/CustomDivider.jsx";
// Hero Section Styles


const HeroSectionWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transform: 'scale(1)',
    animation: 'zoomBackground 20s ease-in-out infinite alternate',
    zIndex: -2,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: theme.palette.gradients.heroOverlay,
    backdropFilter: 'blur(2px)',
    zIndex: -1,
  },

  '@keyframes zoomBackground': {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(1.1)' },
  },
}));

const HeroContainer = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: '#fff',
}));

const HeroContent = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 'md',
}));

const AnimatedTypography = styled(Typography)(({ delay }) => ({
  opacity: 0,
  transform: 'translateY(30px)',
  animation: `fadeInUp 1s ease forwards`,
  animationDelay: `${delay}s`,
  '@keyframes fadeInUp': {
    '0%': { opacity: 0, transform: 'translateY(30px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
}));

const SectionDivider = styled(Box)(() => ({
  lineHeight: 0,
  overflow: 'hidden',
}));


// Homepage Component


function Homepage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSectionWrapper
        sx={(theme) => ({
          background: theme.palette.gradients.primary,
          color: theme.palette.common.white,
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        })}
      >
        <Header />

        <HeroContainer>
          <HeroContent
            sx={{
              opacity: 0,
              animation: `fadeInHero 2s ease forwards`,
              '@keyframes fadeInHero': {
                '0%': { opacity: 0, transform: 'translateY(30px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            {/* Company Name */}
            <AnimatedTypography
              variant="h3"
              component="h1"
              gutterBottom
              delay={0.3}
              sx={(theme) => ({
                fontWeight: 800,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                color: theme.palette.common.white,
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3rem' }, // responsive font size
                animation: `slideDown 1.2s ease forwards`,
                '@keyframes slideDown': {
                  '0%': { opacity: 0, transform: 'translateY(-30px)' },
                  '100%': { opacity: 1, transform: 'translateY(0)' },
                },
              })}
            >
              Zephrika Technologies
            </AnimatedTypography>

            {/* Catchphrase */}
            <AnimatedTypography
              variant="h4"
              component="h2"
              gutterBottom
              delay={0.6}
              sx={{
                fontWeight: 600,
                color: 'rgba(255,255,255,0.95)',
                fontSize: { xs: '1.2rem', sm: '1.6rem', md: '2rem' },
                animation: `fadeInUp 1.5s ease forwards`,
                animationDelay: '0.3s',
                opacity: 0,
                '@keyframes fadeInUp': {
                  '0%': { opacity: 0, transform: 'translateY(30px)' },
                  '100%': { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              Empowering Small Businesses Through Smart Digital Solutions.
            </AnimatedTypography>

            {/* Support Line */}
            <AnimatedTypography
              variant="h6"
              component="p"
              delay={0.9}
              sx={{
                color: 'rgba(255,255,255,0.85)',
                maxWidth: 700,
                mx: 'auto',
                mb: 4,
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.2rem' },
                lineHeight: 1.6,
                animation: `fadeInUp 1.8s ease forwards`,
                animationDelay: '0.6s',
                opacity: 0,
              }}
            >
              We design, build, and scale digital solutions that help your business grow — faster, smarter, and stronger in the digital economy.
            </AnimatedTypography>

            {/* CTA Button */}
            <Box
              sx={{
                opacity: 0,
                transform: 'translateY(20px)',
                animation: `fadeInUp 2s ease forwards`,
                animationDelay: `1s`,
                '@keyframes fadeInUp': {
                  '0%': { opacity: 0, transform: 'translateY(20px)' },
                  '100%': { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={(theme) => ({
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                  px: { xs: 3, md: 4 },
                  py: { xs: 1, md: 1.5 },
                  borderRadius: '50px',
                  background: theme.palette.gradients.secondary,
                  color: '#fff',
                  fontWeight: 600,
                  boxShadow: theme.shadows[2],
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: theme.palette.gradients.accent,
                    boxShadow: theme.shadows[4],
                    transform: 'scale(1.05)',
                  },
                })}
              >
                Get Started
              </Button>
            </Box>
          </HeroContent>
        </HeroContainer>
      </HeroSectionWrapper>



      {/*SECTION DIVIDER*/}

      <SectionDivider direction="down" />


      {/* About Section */}
      <Box
        id="about"
        sx={{
          position: "relative",
        }}
      >
        <About />
      </Box>

      {/*SECTION DIVIDER*/}

      <SectionDivider direction="down" />


      {/* Services Section */}
      <Box
        id="services"
      >
        <Services />
      </Box>

      {/*SECTION DIVIDER*/}

      <SectionDivider direction="down" />



      {/* Contact Section */}
      <Box
        id="contact"
      >
        <ContactInformation />
      </Box>
    </>
  );
}

export default Homepage;
