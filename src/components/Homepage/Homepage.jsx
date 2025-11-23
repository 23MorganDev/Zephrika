// src/components/Homepage/Homepage.jsx
import { styled } from '@mui/material/styles';
import { Typography, Container, Box, Button } from '@mui/material';
import backgroundImage from "../../assets/images/Home2.jpg";
import Header from "../Header/Header.jsx";
import About from "../About/About.jsx";
import Services from "../Services/Services.jsx";
import ContactInformation from "../Contact/Contact.jsx";
import WhyChooseZephrika from "../Why_Zephrika/Why_Zephrika.jsx";

// Hero Section Styles


// == Hero Wrapper ==
const HeroWrapper = styled(Box)(({ theme }) => ({
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",

    "&::after": {
        content: '""',
        position: "absolute",
        inset: 0,
        background:
            "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 100%)",
        zIndex: 1,
    },
}));

// == Content Wrapper ==
const HeroContent = styled(Container)(({ theme }) => ({
    position: "relative",
    zIndex: 2,
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "850px",
    paddingTop: theme.spacing(12),
}));


// == Text Animations ==
const FadeUp = styled(Typography)(({ delay }) => ({
    opacity: 0,
    transform: "translateY(30px)",
    animation: `fadeUp 1s ease forwards`,
    animationDelay: `${delay}s`,

    "@keyframes fadeUp": {
        "0%": { opacity: 0, transform: "translateY(30px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
    },
}));

const SectionDivider = styled(Box)(() => ({
    lineHeight: 0,
    overflow: "hidden",
}));


// == New Hero ==
function Homepage() {

    return (

        <>
            <Header />
            <HeroWrapper>

                <HeroContent maxWidth="lg">

                    {/* Title */}
                    <FadeUp
                        variant="h2"
                        delay={0.2}
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: "2.2rem", sm: "3rem", md: "4rem", lg: "4.8rem" },
                            lineHeight: 1.1,
                            mb: 2,
                        }}
                    >
                        Zephrika Technologies
                    </FadeUp>

                    {/* Subtitle */}
                    <FadeUp
                        variant="h4"
                        delay={0.5}
                        sx={{
                            fontWeight: 600,
                            color: "rgba(255,255,255,0.93)",
                            fontSize: { xs: "1.1rem", sm: "1.5rem", md: "2rem" },
                            mb: 3,
                        }}
                    >
                        Empowering Small Businesses Through Smart Digital Solutions.
                    </FadeUp>

                    {/* Supporting Text */}
                    <FadeUp
                        variant="h6"
                        delay={0.8}
                        sx={{
                            maxWidth: "700px",
                            color: "rgba(255,255,255,0.85)",
                            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
                            lineHeight: 1.7,
                            mb: 4,
                        }}
                    >
                        We design, build, and scale digital solutions that help your business grow —
                        faster, smarter, and stronger in the digital economy.
                    </FadeUp>

                    {/* CTA */}
                    <Box
                        sx={{
                            opacity: 0,
                            transform: "translateY(30px)",
                            animation: "fadeUp 1s ease forwards",
                            animationDelay: "1.1s",
                            "@keyframes fadeUp": {
                                "0%": { opacity: 0, transform: "translateY(30px)" },
                                "100%": { opacity: 1, transform: "translateY(0)" },
                            },
                        }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            sx={(theme) => ({
                                px: { xs: 3, md: 5 },
                                py: { xs: 1.2, md: 1.5 },
                                fontSize: { xs: "0.9rem", md: "1.1rem" },
                                fontWeight: 700,
                                borderRadius: "40px",
                                background: theme.palette.gradients.secondary,
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    background: theme.palette.gradients.accent,
                                },
                            })}
                        >
                            Get Started
                        </Button>
                    </Box>

                </HeroContent>
            </HeroWrapper>


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

            {/* Why Choose Us Section */}

            <Box
                id="why-choose-us">
                <WhyChooseZephrika />
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
