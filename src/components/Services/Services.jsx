import React from 'react';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import {
    Typography,
    Container,
    Grid2 as Grid,
    Card,
    CardContent,
    Box,
    Divider,
} from '@mui/material';
import {
    DesignServices,
    Code,
    Search,
    SettingsApplications,
    Storage,
    CloudQueue,
} from '@mui/icons-material';

// Import the theme from the portfolio page
let theme = createTheme({
    palette: {
        primary: {
            main: '#f5f5f5', // Smoke White
        },
        secondary: {
            main: '#f5f5f5', // Smoke White
        },
        text: {
            primary: '#000000', // Black
            secondary: '#666666', // Darker Gray
        },
        background: {
            default: '#f5f5f5', // Smoke White
            paper: '#ffffff', // White for cards
        },
        accent: {
            main: '#1246EA'
        }
    },
});

theme = createTheme(theme, {
    typography: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        h4: {
            fontWeight: 600,
            marginBottom: theme.spacing(1),
            color: '#000000' // Black
        },
        subtitle1: {
            fontStyle: 'italic',
            color: '#666666', // Darker Gray
            marginBottom: theme.spacing(2),
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                h2: {
                    color: theme.palette.accent.main, // Apply accent color
                },
                body2: {
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.accent.main, // Apply accent color
                },
            },
        },
    },
});

const ServiceCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '280px',
    height: '180px',
    transition: 'transform 0.3s ease-in-out, border 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: theme.shadows[8],
        border: `1px solid ${theme.palette.accent.main}`, // Apply accent color
    },
    backgroundColor: theme.palette.background.paper, // Use paper color from theme
    border: `1px solid rgba(0, 0, 0, 0.1)`, // Set a default border color

}));

const ServiceIcon = styled(Box)({
    width: '100%',
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3.5rem', // Increased icon size
    color: theme.palette.accent.main, // Apply accent color
});

const ServiceDescription = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    flexGrow: 1,
    '& p': {
        lineHeight: 1.2,
        fontSize: '0.9rem',
        color: theme.palette.text.primary, // Use primary text color
        fontFamily: '"Frutiger LT Pro", sans-serif',
        fontWeight: 400,
        letterSpacing: 'normal',
    },
}));

const services = [
    { title: 'Web Design', description: 'Crafting visually stunning and user-centric websites that leave a lasting impression.', icon: <DesignServices /> },
    { title: 'Web Development', description: 'Building robust and scalable web applications using the latest technologies.', icon: <Code /> },
    { title: 'SEO Optimization', description: 'Boosting your online visibility and driving organic traffic to your website.', icon: <Search /> },
    { title: 'Website Maintenance', description: 'Ensuring your website stays up-to-date, secure, and performing optimally.', icon: <SettingsApplications /> },
    { title: 'Web Hosting', description: 'Providing reliable and high-performance hosting solutions for your website.', icon: <Storage /> },
    { title: 'Cloud Hosting', description: 'Leveraging the power of cloud computing to deliver scalable and flexible hosting solutions.', icon: <CloudQueue /> },
];

function ServicesPage() {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth={false} sx={{
                py: 8,
                backgroundColor: theme.palette.background.default, // Use default background color
                minHeight: '100vh',
                width: '100vw',
                padding: 0,
                margin: 0,
                marginTop: '64px',
            }}>
                <Typography
                    variant="h4"
                    component="h2"
                    align="center"
                    gutterBottom

                >
                    Our Innovative Services
                </Typography>
                <Divider sx={{ mb: 4 }} />
                <Grid container spacing={3} justifyContent="center">
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} display="flex" justifyContent="center">
                            <ServiceCard>
                                <ServiceIcon>{service.icon}</ServiceIcon>
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        gutterBottom
                                        sx={{ fontSize: '1rem' }}
                                    >
                                        {service.title}
                                    </Typography>
                                    <ServiceDescription>
                                        <Typography variant="body2" >
                                            {service.description}
                                        </Typography>
                                    </ServiceDescription>
                                </CardContent>
                            </ServiceCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default ServicesPage;
