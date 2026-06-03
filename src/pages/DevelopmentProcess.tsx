import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stepper, Step, StepLabel, StepContent, Button, useTheme } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TerminalIcon from '@mui/icons-material/Terminal';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const steps = [
  {
    label: 'Phase 1: Discovery & Onboarding',
    description: 'We begin with a deep dive into your business objectives. Our team conducts initial consultations to understand your brand identity, target audience, and technical requirements.',
    icon: <AssignmentIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    details: [
      'Project Stakeholder Meetings',
      'Requirement Gathering & Analysis',
      'Project Roadmap Definition',
      'Asset & Content Collection'
    ]
  },
  {
    label: 'Phase 2: Strategy & Design Framework',
    description: 'Once we have a clear vision, we move into the architectural phase. We create wireframes and high-fidelity designs that align with the modern brand aesthetic Zephrika is known for.',
    icon: <PsychologyIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    details: [
      'UI/UX Wireframing',
      'Visual Identity Design',
      'Interactive Prototyping',
      'Design Approval & Feedback'
    ]
  },
  {
    label: 'Phase 3: Agile Development',
    description: 'Our development team brings the designs to life using cutting-edge technologies. We follow an agile framework, ensuring transparency and flexibility throughout the build process.',
    icon: <TerminalIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    details: [
      'Frontend & Backend Construction',
      'Continuous Integration/Deployment',
      'Weekly Progress Sprints',
      'Performance Optimization'
    ]
  },
  {
    label: 'Phase 4: QA & Delivery',
    description: 'Before the grand reveal, we put everything through rigorous testing. We ensure your digital solution is bug-free, secure, and ready to scale.',
    icon: <RocketLaunchIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    details: [
      'Cross-browser & Device Testing',
      'Security Vulnerability Assessment',
      'User Acceptance Testing (UAT)',
      'Official Launch & Handover'
    ]
  }
];

const DevelopmentProcess = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box sx={{
        bgcolor: '#1C1C1E',
        backgroundImage: `
    repeating-linear-gradient(0deg, rgba(207,18,57,0.18) 0px, rgba(207,18,57,0.18) 1px, transparent 1px, transparent 60px),
    repeating-linear-gradient(90deg, rgba(207,18,57,0.18) 0px, rgba(207,18,57,0.18) 1px, transparent 1px, transparent 60px)
  `,
        py: { xs: 8, md: 12 },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(28,28,30,0.70) 100%)',
          pointerEvents: 'none',
        }
      }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ color: 'primary.light', fontWeight: 700, letterSpacing: 2 }}>
            OUR METHODOLOGY
          </Typography>
          <Typography variant="h1" gutterBottom sx={{ fontWeight: 900, fontSize: { xs: '2.5rem', md: '3.5rem' }, color: '#ffffff' }}>
            Client Onboarding & Delivery Framework
          </Typography>
          <Typography variant="h6" sx={{ color: '#ffffff', opacity: 0.9 }}>
            A structured approach to transforming your vision into high-scale technological reality.
          </Typography>
        </Container>
      </Box>

      {/* Main Process Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: 'sticky', top: 100 }}>
              <Typography variant="h3" gutterBottom sx={{ color: 'primary.main' }}>
                How We Work
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                At Zephrika, we believe in radical transparency and meticulous planning. Our framework is designed to minimize friction and maximize quality.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                From the first "Hello" to the final launch, you are involved in every major decision point, ensuring the final product is exactly what your business needs.
              </Typography>
              <Button variant="contained" color="primary" size="large">
                Start Your Project
              </Button>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Stepper orientation="vertical" nonLinear activeStep={-1} sx={{ '& .MuiStepConnector-line': { borderColor: 'rgba(255,255,255,0.1)' } }}>
              {steps.map((step, index) => (
                <Step key={step.label} active={true}>
                  <StepLabel
                    icon={
                      <Box sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold'
                      }}>
                        {index + 1}
                      </Box>
                    }
                  >
                    <Typography variant="h4" sx={{ ml: 2, fontWeight: 700 }}>
                      {step.label}
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <Paper elevation={0} sx={{ p: 4, mb: 4, ml: 2, bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 4, border: '1px solid rgba(255,255,255,0.1)' }}>
                      <Box sx={{ display: 'flex', alignItems: { xs: 'flex-start', sm: 'center' }, gap: 2, mb: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
                        {step.icon}
                        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
                          {step.description}
                        </Typography>
                      </Box>
                      <Grid container spacing={2}>
                        {step.details.map((detail, idx) => (
                          <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                              <Typography variant="body2">{detail}</Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Paper>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Grid>
      </Container>

      {/* Philosophy Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h3" gutterBottom>The Zephrika Philosophy</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                We don't just write code; we solve business problems. Our delivery framework is built on the pillars of **Stability**, **Innovation**, and **Security**.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                By leveraging a reliable ecosystem and the flexibility of modern web frameworks, we deliver solutions that are not only beautiful but robust enough to handle the demands of the modern enterprise.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/be344401-7e85-49c5-9ab9-9b6e0eeb9d53/portfolio-1-bbed9a60-1779487014934.webp"
                alt="Philosophy"
                sx={{ width: '100%', borderRadius: 4, boxShadow: 10 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default DevelopmentProcess;