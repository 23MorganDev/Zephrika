import React from 'react';
import { styled } from '@mui/material/styles';
import {
    Typography,
    Container,
    Box,
    Button,
} from '@mui/material';
import backgroundImage from "../../assets/images/Zeph.jpg"
import Header from "../Header/Header.jsx"
import About from "../About/About.jsx"
import Services from "../Services/Services.jsx"
import Portfolio from "../Portfolio/Portfolio.jsx"
import ContactInformation from "../Contact/Contact.jsx"

const HeroSectionWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    minHeight: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 0,
    },
    '& > *': {
        zIndex: 1,
        position: 'relative',
    },
}));

const HeroContainer = styled(Box)(({ theme }) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'Georgia, serif',
    fontStyle: 'italic',
}));

const HeroContent = styled(Container)(({ theme }) => ({
    padding: theme.spacing(4),
    maxWidth: 'md',
}));


function Homepage() {
    return (
        <>
            <HeroSectionWrapper>
                <Header />
                <HeroContainer>
                    <HeroContent>
                        <Typography
                            variant="h4"
                            component="h1"
                            gutterBottom
                            sx={{ fontWeight: 'bold', color: '#00BFFF' }}
                        >
                            What we do
                        </Typography>
                        <Typography
                            variant="h3"
                            component="h2"
                            gutterBottom
                            sx={{ fontWeight: 'bold', color: '#FFFFFF' }}
                        >
                            We Fuel Your Growth
                        </Typography>
                        <Typography
                            variant="h3"
                            component="h3"
                            gutterBottom
                            sx={{ fontWeight: 'bold', color: '#FFFFFF' }}
                        >
                            Through Software
                        </Typography>
                        <Typography variant="h5" paragraph sx={{ color: '#FFFFFF' }}>
                            Product strategy, design and software engineering solutions designed to strengthen and scale your business.
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{
                                backgroundColor: '#04073C',
                                color: '#FFFFFF',
                            }}
                        >
                            Get Started
                        </Button>
                    </HeroContent>
                </HeroContainer>
            </HeroSectionWrapper>

            {/* Other Sections */}
            <div id="about" >
                <About />
            </div>
            <div id="services">
                <Services />
            </div>
            <div id="portfolio">
                <Portfolio />
            </div>
            <div id="contact">
                <ContactInformation />
            </div>

        </>
    );
}

export default Homepage;
