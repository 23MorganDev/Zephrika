import React from 'react';
import {
  Typography,
  Button,
  Box,
  Grid2,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  Avatar, // For team member images
  Paper, // For card-like sections
} from '@mui/material';
import {
  CheckCircleOutline,
  LightbulbOutlined,
  RocketLaunchOutlined,
  GroupOutlined,
  VisibilityOutlined,
} from '@mui/icons-material';
import aboutImage from '../../assets/images/c1.jpg'; // Replace with a more modern/relevant image
import teamImage1 from '../../assets/images/c1.jpg'; // Example team image
import teamImage2 from '../../assets/images/c1.jpg'; // Example team image

const darkBackground = '#1a2027';
const lightText = '#e5e7eb';
const mediumText = '#9ca3af';

function AboutPage() {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: darkBackground, color: lightText, py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom sx={{ color: theme.palette.secondary.main, fontWeight: 700, textAlign: 'center' }}>
          About <Typography component="span" sx={{ color: theme.palette.secondary.main, fontWeight: 'bold' }}>Zephrika Technologies</Typography>
        </Typography>
        <Typography variant="h6" color={mediumText} paragraph sx={{ textAlign: 'center' }}>
          Igniting a technological renaissance in Africa.
        </Typography>
        <Grid2 container spacing={6} alignItems="center" sx={{ mb: 8 }}>
          <Grid2 item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              Founded with a powerful vision to spark a technological renaissance across Africa, Zephrika Technologies is a
              <Typography component="span" sx={{ color: theme.palette.secondary.main, fontWeight: 'bold' }}> solution-oriented startup</Typography> dedicated to crafting impactful, scalable, and innovative
              digital solutions for micro, small, and medium enterprises (MSMEs).
            </Typography>
            <Typography variant="body1" paragraph>
              Our core belief lies in the transformative power of <Typography component="span" sx={{ color: theme.palette.secondary.main, fontWeight: 'bold' }}>technology and knowledge</Typography> to elevate
              African businesses onto the global stage. We are driven by a deep commitment to contribute to sustainable
              development and foster a tech-driven ecosystem rooted in <Typography component="span" sx={{ color: theme.palette.secondary.main, fontWeight: 'bold' }}>African identity</Typography> while embracing
              global standards of excellence.
            </Typography>
            <Button variant="contained" color="secondary" size="large" sx={{ mt: 3 }}>
              Explore Our Solutions
            </Button>
          </Grid2>
          <Grid2 item xs={12} md={6}>
            <Box
              component="img"
              src={aboutImage}
              alt="About Zephrika Technologies"
              sx={{ maxWidth: '100%', height: 'auto', borderRadius: theme.shape.borderRadius, boxShadow: theme.shadows[8] }}
            />
          </Grid2>
        </Grid2>

        <Paper sx={{ py: 8, px: 3, backgroundColor: '#2d3748', color: lightText, borderRadius: theme.shape.borderRadius, mb: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 4, color: theme.palette.secondary.main, textAlign: 'center' }}>
            Our Core Values
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><LightbulbOutlined color="secondary" /></ListItemIcon>
              <ListItemText primary={<Typography variant="subtitle1"><Typography component="span" sx={{ color: theme.palette.secondary.main, fontWeight: 'bold' }}>Innovation:</Typography> We champion creative solutions and continuous improvement.</Typography>} />
            </ListItem>
            <Divider light />
            <ListItem>
              <ListItemIcon><RocketLaunchOutlined color="secondary" /></ListItemIcon>
              <ListItemText primary={<Typography variant="subtitle1"><Typography component="span" sx={{ color: theme.palette.secondary.main, fontWeight: 'bold' }}>Impact:</Typography> We are committed to delivering solutions that create meaningful change.</Typography>} />
            </ListItem>
            <Divider light />
            <ListItem>
              <ListItemIcon><GroupOutlined color="secondary" /></ListItemIcon>
              <ListItemText primary={<Typography variant="subtitle1"><Typography component="span" sx={{ color: theme.palette.secondary.main, fontWeight: 'bold' }}>Collaboration:</Typography> We believe in the power of teamwork and partnership.</Typography>} />
            </ListItem>
            <Divider light />
            <ListItem>
              <ListItemIcon><VisibilityOutlined color="secondary" /></ListItemIcon>
              <ListItemText primary={<Typography variant="subtitle1"><Typography component="span" sx={{ color: theme.palette.secondary.main, fontWeight: 'bold' }}>Vision:</Typography> We strive for the highest standards in everything we do.</Typography>} />
            </ListItem>
            <Divider light />
            <ListItem>
              <ListItemIcon><CheckCircleOutline color="secondary" /></ListItemIcon>
              <ListItemText primary={<Typography variant="subtitle1"><Typography component="span" sx={{ color: theme.palette.secondary.main, fontWeight: 'bold' }}>Integrity:</Typography> We operate with transparency and ethical practices.</Typography>} />
            </ListItem>
          </List>
        </Paper>

        <Box sx={{ py: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 4, color: theme.palette.secondary.main, textAlign: 'center' }}>
            Meet Our Team
          </Typography>
          <Typography variant="body1" color={mediumText} textAlign="center" marginBottom={4}>
            A passionate group of innovators and problem-solvers dedicated to the Zephrika vision.
          </Typography>
          <Grid2 container spacing={4} justifyContent="center">
            <Grid2 item xs={12} sm={6} md={4}>
              <Paper sx={{ p: 3, backgroundColor: '#374151', borderRadius: theme.shape.borderRadius, textAlign: 'center', boxShadow: theme.shadows[4] }}>
                <Avatar alt="Morgan Muthee" src={teamImage1} sx={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', mb: 1, mx: 'auto' }} />
                <Typography variant="h6" color={lightText} gutterBottom>Morgan Muthee</Typography>
                <Typography variant="subtitle2" color={mediumText}>Founder, CEO & CTO</Typography>
                {/* Add social media links or brief bio here if needed */}
              </Paper>
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4}>
              <Paper sx={{ p: 3, backgroundColor: '#374151', borderRadius: theme.shape.borderRadius, textAlign: 'center', boxShadow: theme.shadows[4] }}>
                <Avatar alt="Jane Smith" src={teamImage2} sx={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', mb: 1, mx: 'auto' }} />
                <Typography variant="h6" color={lightText} gutterBottom>Jane Smith</Typography>
                <Typography variant="subtitle2" color={mediumText}>COO</Typography>
                {/* Add social media links or brief bio here if needed */}
              </Paper>
            </Grid2>
            {/* Add more team members here */}
          </Grid2>
        </Box>

        {/* Optional: A section about your vision for Africa */}
        <Box sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 4, color: theme.palette.secondary.main }}>
            Our Vision for Africa
          </Typography>
          <Typography variant="body1" paragraph color={mediumText}>
            We envision an Africa where technology empowers every business, bridging gaps and fostering sustainable growth.
            Zephrika Technologies is committed to being a catalyst in this transformation, driving innovation and
            creating opportunities for African entrepreneurs to thrive in the digital age.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutPage;