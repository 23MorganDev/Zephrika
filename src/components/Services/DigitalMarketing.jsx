import React from "react";
import { Box, Typography, Grid, Avatar, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import digitalMarketingIcon from "../../assets/images/SEO.jpg";
import Header from "../Header/Header.jsx";
import WhyChooseZephrika from "../Why_Zephrika/Why_Zephrika.jsx";
import Footer from "../Footer/Footer.jsx";

const services = [
    "SEO & SEM",
    "Social Media Marketing",
    "Content Marketing",
    "Email Campaigns",
    "Brand Strategy",
    "Paid Ads Management",
];

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
    }),
};

function DigitalMarketing() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            <Header />

            <Box sx={{ position: "relative", overflow: "hidden", py: 8 }}>

                {/* Blurred background */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background: theme.palette.gradients.sectionDark,
                        opacity: 0.75,
                        zIndex: 0
                    }}
                />

                {/* Content */}
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        textAlign: "center",
                        px: 2,
                        maxWidth: "900px",
                        mx: "auto",
                        borderRadius: "20px",
                        padding: { xs: 3, md: 6 },

                        // Glass look
                        background: "rgba(255,255,255,0.08)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",

                        // Subtle border & glow
                        border: "1px solid rgba(255,255,255,0.25)",
                        boxShadow: "0 8px 40px rgba(0,0,0,0.4)",

                        animation: "fadeIn 0.6s ease-out"
                    }}
                >

                    <Typography
                        component="div"
                        variant="h3"
                        sx={{
                            fontWeight: 800,
                            mb: 2,
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            color: theme.palette.primary.dark,
                            textShadow: "0px 2px 8px rgba(0,0,0,0.4)",
                        }}
                    >
                        Digital Marketing Services
                    </Typography>

                    <Typography
                        component="div"
                        variant="body1"
                        sx={{
                            maxWidth: 650,
                            mx: "auto",
                            mb: 6,
                            fontSize: { xs: "0.95rem", md: "1.1rem" },
                            color: theme.palette.secondary.contrastText,
                            opacity: 0.95,
                            fontWeight: 400,
                            lineHeight: 1.75,
                        }}
                    >
                        Smart, data-driven marketing that brings you customers, builds brand trust,
                        and scales your business. No fluff. No vanity metrics. Just results that convert into revenue.
                    </Typography>



                    {!isMobile && (
                        <Box
                            sx={{
                                width: { xs: 300, md: 650 },
                                height: { xs: 300, md: 650 },
                                mx: "auto",
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            {/* Center bubble wrapper */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: { xs: 180, md: 260 },
                                    height: { xs: 180, md: 260 },
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                    backdropFilter: "blur(10px)",
                                    background: "rgba(255,255,255,0.15)",
                                    border: "1px solid rgba(255,255,255,0.25)",
                                    boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
                                    zIndex: 10
                                }}
                            >
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                >
                                    <Avatar
                                        src={digitalMarketingIcon}
                                        alt="Digital Marketing Center"
                                        sx={{
                                            width: "90%",
                                            height: "90%",
                                            border: `4px solid ${theme.palette.primary.main}`,
                                            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.35)",
                                            objectFit: "cover",
                                            background: "rgba(255,255,255,0.15)",
                                            backdropFilter: "blur(6px)"
                                        }}
                                    />
                                </motion.div>
                            </Box>

                            {services.map((service, index) => {
                                const angle = (index / services.length) * Math.PI * 2;
                                const radius = 260;
                                const x = radius * Math.cos(angle);
                                const y = radius * Math.sin(angle);

                                return (
                                    <Box
                                        component={motion.div}
                                        whileHover={{ scale: 1.08, boxShadow: "0 8px 24px rgba(0,0,0,0.35)" }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                        key={service}
                                        sx={{
                                            position: "absolute",
                                            top: `calc(50% + ${y}px)`,
                                            left: `calc(50% + ${x}px)`,
                                            transform: "translate(-50%, -50%)",
                                            background: theme.palette.secondary.main,
                                            color: theme.palette.secondary.contrastText,
                                            width: 100,
                                            height: 100,
                                            borderRadius: "50%",
                                            fontSize: "0.85rem",
                                            boxShadow: 2,
                                            fontWeight: 600,
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            textAlign: "center",
                                            px: 1
                                        }}
                                    >
                                        {service}
                                    </Box>
                                );
                            })}
                        </Box>
                    )}


                    {/* Mobile version */}
                    {isMobile && (
                        <Grid container spacing={2} justifyContent="center">
                            {services.map((service) => (
                                <Grid item xs={10} key={service}>
                                    <Card
                                        sx={{
                                            p: 2,
                                            fontWeight: 600,
                                            textAlign: "center",
                                            boxShadow: 3,
                                            borderRadius: 2,
                                            background: theme.palette.background.paper,
                                            border: `1px solid ${theme.palette.primary.light}`
                                        }}
                                    >
                                        {service}
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    )}

                    {/* Story section */}
                    <Box sx={{ maxWidth: 800, mx: "auto", mt: 10, textAlign: "left" }}>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={0}
                        >
                            <Typography
                                component="div"
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    textAlign: "center",
                                    color: theme.palette.primary.light
                                }}
                            >
                                Why Digital Marketing Matters
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={1}
                        >
                            <Typography
                                sx={{
                                    mb: 3,
                                    textAlign: "center",
                                    color: theme.palette.text.primary,
                                    opacity: 0.9,
                                }}
                            >
                                Customers don’t walk into shops first anymore. They search,
                                scroll, compare, and decide online long before any conversation begins.
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={2}
                        >
                            <Typography
                                component="div"
                                variant="h6"
                                sx={{
                                    fontWeight: 700,
                                    mb: 3,
                                    color: theme.palette.secondary.dark
                                }}
                            >
                                The Real Benefits for Small Businesses
                            </Typography>
                        </motion.div>

                        {[
                            "Visibility on demand: If you're not online when people search, you don't exist.",
                            "Relationship-based selling: Education builds trust and drives conversion.",
                            "Predictable pipelines: Revenue becomes engineered, not random luck.",
                            "Scalable systems: Marketing machines that work even when you sleep.",
                            "Customer insights: Data shows what people want, so you scale faster."
                        ].map((text, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i + 3}
                            >
                                <Typography
                                    component="div"
                                    sx={{
                                        mb: 1.8,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        color: theme.palette.secondary.contrastText,
                                        fontSize: "1rem",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: "50%",
                                            background: theme.palette.primary.main,
                                        }}
                                    />
                                    {text}
                                </Typography>
                            </motion.div>
                        ))}

                    </Box>
                </Box>
            </Box>

            {/*WHY CHOOSE US COMPONENT*/}

            <WhyChooseZephrika />


            {/*FOOTER COMPONENT*/}

            <Footer />
        </>
    );
}

export default DigitalMarketing;
