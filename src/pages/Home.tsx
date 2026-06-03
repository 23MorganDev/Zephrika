import React from 'react';
import { Box, Container, Typography, Button, Card, CardMedia, Avatar, Rating, Grid, useTheme } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PaletteIcon from '@mui/icons-material/Palette';
import Hero from '../components/sections/Hero';
import ServiceCard from '../components/common/ServiceCard';
import BrandMarquee from '../components/common/BrandMarquee';
import Contact from '../components/sections/Contact';
import Zephrika from "../assets/images/zephrika.png"
import Tunaresq from "../assets/images/tunaresq.png"
import Salire from "../assets/images/salire.png"
import Sprint from "../assets/images/sprint.png"

const testimonials = [
  {
    name: 'Sarah',
    role: 'Mbogori Tours',
    content: 'Zephrika transformed our online presence. Their web design team is exceptionally creative and professional.',
    rating: 4,
    avatar: '',
  },
  {
    name: 'Michael K.',
    role: 'Founder, SalireAfrika',
    content: 'Reliable hosting and superb maintenance. We never have to worry about our site being down.',
    rating: 5,
    avatar: '',
  },
  {
    name: 'Lydia W.',
    role: 'Marketing Lead - Delight',
    content: 'The graphic design work they did for our rebranding was spectacular. Highly recommended!',
    rating: 3,
    avatar: '',
  },
];

const portfolioItems = [
  {
    title: 'Salire Afrika',
    category: 'Web Development',
    image: Salire,
    url: 'https://salire-afrika.onrender.com/',
  },
  {
    title: 'Sprint Kenya',
    category: 'Graphic Design',
    image: Sprint,
    url: 'https://sprintkenya.co.ke/',
  },
  {
    title: 'Tunaresq Platform',
    category: 'Software Design',
    image: Tunaresq,
    url: 'https://tunaresq.co.ke/',
  },
];

const Home = () => {
  const theme = useTheme();

  return (
    <Box>
      <Hero />
      <BrandMarquee />

      {/* About Summary */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Grid container spacing={8} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>WHO WE ARE</Typography>
            <Typography variant="h2" sx={{ mb: 4 }}>We Bridge the Gap Between Innovation and Stability</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Founded on the principle of providing high-scale technological innovation, Zephrika has been at the forefront of digital transformation. We don't just build websites; we create digital ecosystems.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Our team consists of industry experts who specialize in various tech stacks, ensuring that your business stays ahead of the curve.
            </Typography>
            <Button variant="outlined" color="primary" sx={{ mt: 2 }}>Our Story</Button>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: 'relative' }}>
              <img
                src={Zephrika}
                alt="About Zephrika"
                style={{
                  width: "100%",
                  minHeight: "300px",
                  border: "2px solid red",
                  objectFit: "cover",
                }}
              />
              <Box sx={{
                position: 'absolute',
                bottom: -30,
                left: -30,
                bgcolor: 'primary.main',
                p: 3,
                borderRadius: 4,
                boxShadow: 10,
                display: { xs: 'none', sm: 'block' }
              }}>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>2+</Typography>
                <Typography variant="body2">Years Experience</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Services Overview */}
      <Box sx={{ bgcolor: 'rgba(255,255,255,0.02)', py: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>OUR EXPERTISE</Typography>
            <Typography variant="h2">Services We Offer</Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <ServiceCard
                title="Web Designing"
                description="Custom, responsive designs tailored to your brand identity."
                icon={<CodeIcon sx={{ color: 'white' }} />}
                image="https://storage.googleapis.com/dala-prod-public-storage/generated-images/be344401-7e85-49c5-9ab9-9b6e0eeb9d53/service-web-design-dacf2cc6-1779487012826.webp"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <ServiceCard
                title="Web Hosting"
                description="Secure, fast, and reliable cloud hosting solutions."
                icon={<CloudQueueIcon sx={{ color: 'white' }} />}
                image="https://storage.googleapis.com/dala-prod-public-storage/generated-images/be344401-7e85-49c5-9ab9-9b6e0eeb9d53/service-hosting-ec4b9e42-1779487012998.webp"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <ServiceCard
                title="Maintenance"
                description="Continuous updates and support to keep your site running smooth."
                icon={<SettingsSuggestIcon sx={{ color: 'white' }} />}
                image="https://storage.googleapis.com/dala-prod-public-storage/generated-images/be344401-7e85-49c5-9ab9-9b6e0eeb9d53/service-maintenance-bd1d76fb-1779487013080.webp"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <ServiceCard
                title="Graphic Design"
                description="Breathtaking visuals that tell your brand's unique story."
                icon={<PaletteIcon sx={{ color: 'white' }} />}
                image="https://storage.googleapis.com/dala-prod-public-storage/generated-images/be344401-7e85-49c5-9ab9-9b6e0eeb9d53/service-graphic-design-8fa68c0c-1779487013201.webp"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Portfolio Section */}
      <Box id="portfolio" sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 6 }}>
            <Box>
              <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>PORTFOLIO</Typography>
              <Typography variant="h2">Selected Works</Typography>
            </Box>
            <Button variant="text" color="primary">View All Projects</Button>
          </Box>
          <Grid container spacing={4}>
            {portfolioItems.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card sx={{ borderRadius: 4, overflow: 'hidden', position: 'relative' }}>
                  <CardMedia component="img" height="300" image={item.image} alt={item.title} />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      bgcolor: 'rgba(26, 5, 20, 0.85)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                      '&:hover': { opacity: 1 },
                      p: 3,
                      textAlign: 'center'
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'primary.main', mb: 2 }}>{item.category}</Typography>
                    <Button
                      variant="contained"
                      size="small"
                      component="a"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Work
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box id="testimonials" sx={{ py: 12, bgcolor: `${theme.palette.primary.main}0d` }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>TESTIMONIALS</Typography>
            <Typography variant="h2">What Our Clients Say</Typography>
          </Box>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                  <Typography variant="body1" sx={{ mb: 4, fontStyle: 'italic', flexGrow: 1 }}>
                    "{testimonial.content}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar src={testimonial.avatar} alt={testimonial.name} />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{testimonial.name}</Typography>
                      <Typography variant="caption" color="text.secondary">{testimonial.role}</Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Contact />
    </Box>
  );
};

export default Home;