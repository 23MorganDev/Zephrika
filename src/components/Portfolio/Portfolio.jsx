import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Grid2 as Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    IconButton,
    Link,
    Slide,
    useScrollTrigger,
    styled,
    ThemeProvider,
    createTheme,
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion } from 'framer-motion';
import TradingDashboard from "../../assets/images/Stock_Trade_Dashboard.png";
import BeachRetreat from "../../assets/images/Beach_House_Website.png";
import Decor from "../../assets/images/Decor_House.png";
import WeatherChecker from "../../assets/images/Weather_Checker.png";
import RecipeFinder from "../../assets/images/Foodie_Recipe_Finder.png";

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
        accent: {  //added
            main: '#1246EA'
        }
    },
});

// Now extend it with proper access to the spacing and palette
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
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#f5f5f5', // Smoke White
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    fontWeight: 500,
                    borderRadius: theme.shape.borderRadius / 2,
                    backgroundColor: '#1246EA', //  Accent Color
                    color: '#fff',           // White
                    '&:hover': {
                        backgroundColor: '#1a1a1a' // Slightly lighter black on hover.  Consider changing this.
                    }
                }),
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#000000', // Black
                    '&:hover': {
                        color: '#1246EA', // Accent Color
                    },
                },
            },
        },
    },
});

// Custom Styling for Elevated Cards with Transition
const ProjectCard = styled(motion.div)(({ theme }) => ({
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    backgroundColor: '#ffffff', // White for cards
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.shadows[7],
    },
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
}));

// Hide on Scroll Component
function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

// Portfolio Page Component
const Portfolio = () => {
    const projects = [
        {
            title: 'Trading Dashboard',
            description: 'A sophisticated platform leveraging AI for data analysis and visualization.',
            image: TradingDashboard,
            technologies: ['React', 'Node.js', 'TensorFlow', 'Material UI'],
            liveUrl: 'https://finpouch.onrender.com',
            githubUrl: 'https://github.com/23MorganDev/FinPouch',
        },
        {
            title: 'Foodie',
            description: 'An AI powered Recipe Finder.',
            image: RecipeFinder,
            technologies: ['React ', 'Redux', 'MongoDB', 'Nodejs', 'OpenAI'],
            liveUrl: 'https://foodie-zwzi.onrender.com',
            githubUrl: 'https://github.com/23MorganDev/foodielicious',
        },
        {
            title: 'Mbuyuni House',
            description: 'An attractive Beach Retreat website and with booking features.',
            image: BeachRetreat,
            technologies: ['React', 'Express.js', 'MongoDB', 'Styled Components'],
            liveUrl: 'https://mbuyuni-house.onrender.com',
            githubUrl: 'https://github.com/23MorganDev/vacation_home',
        },
        {
            title: 'Decor',
            description: 'A Decor viewing website that displays different decor designs for a decor company',
            image: Decor,
            technologies: ['React', 'Web3.js', 'Solidity'],
            liveUrl: 'https://decor2025.onrender.com',
            githubUrl: 'https://github.com/23MorganDev/decor2025',
        },
        {
            title: 'Weather Checker',
            description: 'A simple application to check the current weather in any location.',
            image: WeatherChecker,
            technologies: ['React', 'OpenWeather API'],
            liveUrl: '#', // Replace with actual live URL if available
            githubUrl: '#', // Replace with actual GitHub URL if available
        },
        // You can add more projects here
    ];

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, backgroundColor: theme.palette.background.default, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

                {/* Hero Section */}
                <Box
                    sx={{
                        pt: 8,
                        pb: 6,
                        textAlign: 'center',
                        color: theme.palette.text.primary,
                    }}
                >
                    <Typography variant="h2" component="h1" gutterBottom color="text.primary">
                        My Portfolio
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" paragraph>
                        Showcasing my latest work and skills in web development.
                    </Typography>
                </Box>

                {/* Projects Grid */}
                <Box sx={{ py: 4, px: { xs: 3, sm: 6, md: 12 }, flexGrow: 1 }}>
                    <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                        {projects.map((project, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <ProjectCard
                                    whileHover={{ scale: 1.03, boxShadow: theme.shadows[7] }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    style={{ height: '100%' }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={project.image}
                                        alt={project.title}
                                        sx={{ objectFit: 'cover' }}
                                    />
                                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <Typography variant="h6" component="div" gutterBottom color="text.primary">
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1, flexGrow: 1 }}>
                                            {project.description}
                                        </Typography>
                                        <Box sx={{ mt: 1 }}>
                                            <Typography variant="caption" color="text.secondary">
                                                Technologies: {project.technologies.join(', ')}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                    <CardActions sx={{ padding: (theme) => theme.spacing(2) }}>
                                        <Button
                                            size="small"
                                            color="primary" 
                                            startIcon={<Launch />}
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View Project
                                        </Button>
                                        {project.githubUrl && (
                                            <IconButton
                                                color="blue" 
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="github"
                                                sx={{ ml: 'auto' }}
                                            >
                                                <GitHub />
                                            </IconButton>
                                        )}
                                    </CardActions>
                                </ProjectCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Footer */}
                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        textAlign: 'center',
                        color: theme.palette.text.secondary,
                        mt: 4,
                    }}
                >
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Portfolio;
