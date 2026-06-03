import React from 'react';
import { Box, Container, Typography, Paper, Button, Divider, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CodeIcon from '@mui/icons-material/Code';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PaletteIcon from '@mui/icons-material/Palette';

const serviceDetails = [
  {
    title: 'Web Designing',
    icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    description: 'We create visually stunning, user-centric websites that drive engagement and conversion. Our design process involves deep research into your brand and target audience.',
    features: ['Responsive Layouts', 'UI/UX Optimization', 'Brand Integration', 'Interactive Elements'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/be344401-7e85-49c5-9ab9-9b6e0eeb9d53/service-web-design-dacf2cc6-1779487012826.webp'
  },
  {
    title: 'Web Hosting',
    icon: <CloudQueueIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    description: 'Blazing fast cloud hosting with 99.9% uptime. We provide secure servers that can handle high traffic loads with ease, ensuring your business is always online.',
    features: ['SSD Storage', 'SSL Certificates', 'Daily Backups', 'Global CDN'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/be344401-7e85-49c5-9ab9-9b6e0eeb9d53/service-hosting-ec4b9e42-1779487012998.webp'
  },
  {
    title: 'Web Maintenance',
    icon: <SettingsSuggestIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    description: 'Keep your website healthy and up-to-date with our comprehensive maintenance packages. We handle the technical stuff while you focus on your business.',
    features: ['Security Patches', 'Speed Optimization', 'Content Updates', '24/7 Monitoring'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/be344401-7e85-49c5-9ab9-9b6e0eeb9d53/service-maintenance-bd1d76fb-1779487013080.webp'
  },
  {
    title: 'Graphic Design',
    icon: <PaletteIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    description: 'From logos to social media assets, our designers create impactful visuals that capture your brand essence and resonate with your audience.',
    features: ['Logo Design', 'Print Materials', 'Social Media Graphics', 'Brand Guidelines'],
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/be344401-7e85-49c5-9ab9-9b6e0eeb9d53/service-graphic-design-8fa68c0c-1779487013201.webp'
  }
];

const Services = () => {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: '#1a0008',
          backgroundImage: `
  repeating-linear-gradient(0deg, rgba(207,18,57,0.18) 0px, rgba(207,18,57,0.18) 1px, transparent 1px, transparent 60px),
  repeating-linear-gradient(90deg, rgba(207,18,57,0.18) 0px, rgba(207,18,57,0.18) 1px, transparent 1px, transparent 60px)
`,
          position: 'relative',
          py: 12,
          textAlign: 'center',
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(26,0,8,0.65) 100%)',
            pointerEvents: 'none',
          }
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h1" gutterBottom sx={{ fontWeight: 900, color: '#ffffff' }}>Our Services</Typography>
          <Typography variant="h6" sx={{ color: '#ffffff' }}>
            Comprehensive technology solutions designed for the modern enterprise. Scale with confidence.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 12 }}>
        {serviceDetails.map((service, index) => (
          <Box key={index} sx={{ mb: 12 }}>
            <Grid container spacing={8} sx={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', alignItems: 'center' }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  {service.icon}
                  <Typography variant="h3">{service.title}</Typography>
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', mb: 4 }}>
                  {service.description}
                </Typography>
                <Grid container spacing={2}>
                  {service.features.map((feature, idx) => (
                    <Grid size={{ xs: 6 }} key={idx}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CheckCircleIcon color="primary" fontSize="small" />
                        <Typography variant="body2">{feature}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Button variant="contained" color="primary" sx={{ mt: 6 }}>
                  Get Started with {service.title}
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Paper
                  elevation={20}
                  sx={{
                    borderRadius: 4,
                    overflow: 'hidden',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 4,
                      zIndex: 1
                    }
                  }}
                >
                  <img src={service.image} alt={service.title} style={{ width: '100%', display: 'block' }} />
                </Paper>
              </Grid>
            </Grid>
            {index < serviceDetails.length - 1 && <Divider sx={{ mt: 12, opacity: 0.05 }} />}
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Services;