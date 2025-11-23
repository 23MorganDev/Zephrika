import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import WhyChooseZephrika from '../Why_Zephrika/Why_Zephrika.jsx';

import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import BrushIcon from '@mui/icons-material/Brush';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FlightIcon from '@mui/icons-material/Flight';
import CampaignIcon from '@mui/icons-material/Campaign';
import BuildIcon from '@mui/icons-material/Build';


//IMAGES INMPORTS
import personalSiteImg from '../../assets/images/WEBSITE.jpg';
import ecommerceImg from '../../assets/images/CART.jpg';
import tradingPlatformImg from '../../assets/images/WEBSITE.jpg';
import artShowcaseImg from '../../assets/images/ART2.png';
import smallBusinessImg from '../../assets/images/WEBSITE.jpg';
import corporateImg from '../../assets/images/WEBSITE.jpg';
import travelTourismImg from '../../assets/images/TRAVEL.jpg';
import marketingSiteImg from '../../assets/images/Zeph.jpg';
import maintenanceImg from '../../assets/images/SEO.jpg';

const websiteTypes = [
  { key: 'personal', label: 'Personal Sites', icon: <PersonIcon fontSize='large' />, desc: 'Portfolios, resumes, personal blogs and landing pages.', bg: personalSiteImg },
  { key: 'ecommerce', label: 'E-commerce', icon: <ShoppingCartIcon fontSize='large' />, desc: 'Shopfronts, carts, payment integration & order management.', bg: ecommerceImg },
  { key: 'trading', label: 'Trading Platforms', icon: <ShowChartIcon fontSize='large' />, desc: 'Real-time listings, dashboards & secure transactions.', bg: tradingPlatformImg },
  { key: 'art', label: 'Art Showcases', icon: <BrushIcon fontSize='large' />, desc: 'Galleries, high-res previews, and artist storefronts.', bg: artShowcaseImg },
  { key: 'business', label: 'Small Business', icon: <BusinessCenterIcon fontSize='large' />, desc: 'Service pages, contact funnels & booking systems.', bg: smallBusinessImg },
  { key: 'corporate', label: 'Corporate', icon: <AccountBalanceIcon fontSize='large' />, desc: 'Brand portals, investor relations & multi-team sites.', bg: corporateImg },
  { key: 'travel', label: 'Travel & Tourism', icon: <FlightIcon fontSize='large' />, desc: 'Itineraries, booking widgets & destination showcases.', bg: travelTourismImg },
  { key: 'marketing', label: 'Marketing Sites', icon: <CampaignIcon fontSize='large' />, desc: 'Landing pages, funnels & A/B capable layouts.', bg: marketingSiteImg },
  { key: 'maintenance', label: 'Website Maintenance', icon: <BuildIcon fontSize='large' />, desc: 'Ongoing updates, backups, security & monitoring.', bg: maintenanceImg },
];


function WebDesign() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>

      {/*Header componnet*/}

      <Header />


      <Box
        component='section'
        sx={{
          py: { xs: 6, sm: 10 },
          background: 'rgba(255, 255, 255, 0.05)', // subtle transparent overlay
          backdropFilter: 'blur(20px)', // the glass blur
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#fff',
        }}
      >
        <Container maxWidth='lg'>
          {/* Top intro */}
          <Box
            sx={{
              mb: 6,
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant='h2' sx={{ color: theme.palette.secondary.main, mb: 2 }}>
                Web Design & Development Services
              </Typography>
              <Typography variant='body1' sx={{ color: theme.palette.text.secondary, maxWidth: 780 }}>
                We build fast, accessible, and beautiful websites tailored to your goals — from single-page portfolios to enterprise portals. Every site is responsive, SEO friendly, and built using modern best practices.
              </Typography>
            </Box>

            <Box sx={{ minWidth: { md: 320 }, textAlign: { xs: 'left', md: 'right' } }}>
              <Typography variant='h6' sx={{ color: theme.palette.secondary.light, mb: 1 }}>
                Our process
              </Typography>
              <Typography variant='body2' sx={{ color: theme.palette.secondary.main, mb: 2 }}>
                Strategy → Design → Build → Launch → Maintain
              </Typography>
              <Button
                variant='contained'
                size='medium'
                sx={{
                  background: theme.customGradients.primary,
                  boxShadow: theme.shadows[6],
                  borderRadius: 2,
                  px: 3,
                  py: 1,
                }}
              >
                Start a Project
              </Button>
            </Box>
          </Box>

          {/* Card grid */}
          <Grid container spacing={4}>
            {websiteTypes.map((w) => (
              <Grid key={w.key} item xs={12} sm={6} md={4}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    p: 0,
                    overflow: 'hidden',
                    position: 'relative',
                    border: '1px solid rgba(255,255,255,0.12)',
                    boxShadow: '0 10px 30px rgba(8,12,20,0.25)',
                    transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 18px 40px rgba(8,12,20,0.32)',
                    },

                    // Background container
                    backgroundImage: `url(${w.bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',

                    // Overlay to blur and darken
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      backdropFilter: 'blur(2px)',       // the blur effect
                      WebkitBackdropFilter: 'blur(6px)',
                      zIndex: 0,
                    },
                  }}
                >
                  <CardContent sx={{ position: 'relative', zIndex: 1, pt: 4, pb: 5 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          boxShadow: '0 6px 18px rgba(7,10,18,0.2)',
                        }}
                      >
                        {w.icon}
                      </Box>

                      <Box sx={{ flex: 1 }}>
                        <Typography variant='h6' sx={{ fontWeight: 700, color: theme.palette.primary.dark }}>
                          {w.label}
                        </Typography>
                        <Typography variant='body2' sx={{ color: theme.palette.primary.dark }}>
                          {w.desc}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ mt: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Box sx={{ px: 1.5, py: 0.8, borderRadius: 1.5, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.04)', fontSize: 12 }}>
                        Responsive
                      </Box>
                      <Box sx={{ px: 1.5, py: 0.8, borderRadius: 1.5, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.04)', fontSize: 12 }}>
                        Performance
                      </Box>
                      <Box sx={{ px: 1.5, py: 0.8, borderRadius: 1.5, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.04)', fontSize: 12 }}>
                        SEO Ready
                      </Box>
                    </Box>

                    <Box sx={{ mt: 4 }}>
                      <Button
                        size='small'
                        variant='outlined'
                        sx={{
                          borderRadius: 2,
                          color: '#fff',
                          borderColor: 'rgba(255,255,255,0.12)',
                          textTransform: 'none',
                          background: theme.customGradients.accent,
                        }}
                      >
                        Learn more
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
            <Button variant='contained' sx={{ background: theme.customGradients.accent, px: 4, py: 1.25, borderRadius: 3 }}>
              Get a Quote
            </Button>
          </Box>
        </Container>
      </Box>

      {/*WHY CHOOSE US COMPONENT */}

      <WhyChooseZephrika />

      {/*FOOTER COMPONENT*/}

      <Footer />
    </>
  );
}

export default WebDesign;