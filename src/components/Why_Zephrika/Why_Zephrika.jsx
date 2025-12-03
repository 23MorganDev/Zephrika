import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  useTheme,
  Avatar,
  Stack,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SavingsIcon from "@mui/icons-material/AttachMoney";
import InsightsIcon from "@mui/icons-material/ShowChart";
import PlanIcon from "@mui/icons-material/SwapHoriz";
import SecurityIcon from "@mui/icons-material/Lock";
import SupportIcon from "@mui/icons-material/HeadsetMic";
import SpeedIcon from "@mui/icons-material/FlashOn";


// Styled containers for the glassy dark cards seen in the example image
const Hero = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(10, 0),
  backgroundImage: `${theme.palette.gradients.sectionDark}`,
  backgroundBlendMode: "overlay, normal",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#fff",
  // subtle overlay to ensure text contrast
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, rgba(10,10,20,0.45), rgba(6,6,12,0.7))',
    zIndex: 0,
  },
}));

const HeroContent = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  paddingBottom: theme.spacing(6),
}));

const GlassCard = styled(Card)(({ theme }) => ({
  width: "100%",
  boxSizing: "border-box",
  minHeight: 140,
  borderRadius: 18,
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: theme.spacing(2),
  background: "rgba(18,18,28,0.45)",
  border: `1px solid rgba(255,255,255,0.06)`,
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
  boxShadow: "0 10px 30px rgba(2,6,23,0.5)",
  transition: "transform 0.28s ease, box-shadow 0.28s ease",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 18px 40px rgba(43, 22, 233, 0.67)",
  },
}));



const IconSquare = styled(Avatar)(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: 12,
  display: 'grid',
  placeItems: 'center',
  background: 'linear-gradient(180deg, rgba(90,79,207,0.12), rgba(1,48,100,0.08))',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03), 0 6px 18px rgba(11,13,30,0.6)',
  color: theme.palette.secondary.contrastText,
}));

const reasons = [
  {
    title: "Stop Overpaying",
    desc: "Avoid costly corporate packages — get solutions built for your budget, not someone else’s.",
    Icon: SavingsIcon,
  },
  {
    title: "Avoid Blind Decisions",
    desc: "Don’t rely on guesswork. Get clear insights so you always know what’s working and what isn't.",
    Icon: InsightsIcon,
  },
  {
    title: "Skip Rigid Packages",
    desc: "No more one-size-fits-all plans. Your tools scale only when you do nothing extra.",
    Icon: PlanIcon,
  },
  {
    title: "Reduce Security Risks",
    desc: "Protect your business from preventable tech risks with smart, secure setups built from day one.",
    Icon: SecurityIcon,
  },
  {
    title: "Never Be Left Alone",
    desc: "Avoid being stranded after launch get hands-on support whenever you need it.",
    Icon: SupportIcon,
  },
  {
    title: "Save Weeks of Time",
    desc: "Skip long corporate timelines. We deliver fast so your business doesn’t slow down.",
    Icon: SpeedIcon,
  },
];


function WhyChooseZephrika() {
  const theme = useTheme();

  return (
    <Hero component="section">
      <HeroContent maxWidth="lg" >
        <Typography variant="h2" sx={{ fontWeight: 800, mb: 1 }}>
          Why Choose Zephrika?
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 720, margin: '0 auto', opacity: 0.9 }}>
          Innovative tools and powerful insights designed to elevate your business. We partner with
          small and medium enterprises to build practical, affordable digital solutions.
        </Typography>

        <Box sx={{ mt: 6 }}>
          <Grid container spacing={3}>
            {reasons.map((r, idx) => (
              <Grid key={r.title} item xs={12} sm={6} md={4} sx={{display: "flex"}}>
                <GlassCard sx={{flexGrow:1 }}>
                  <IconSquare>
                    <r.Icon sx={{ fontSize: 28 }} />
                  </IconSquare>

                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700 }}>
                      {r.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, color: 'rgba(255,255,255,0.8)' }}>
                      {r.desc}
                    </Typography>
                  </Box>
                </GlassCard>
              </Grid>
            ))}
          </Grid>


          <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 6 }}>
            <Button variant="contained" size="large" sx={{ borderRadius: 12 }}>
              Get in touch
            </Button>
            <Button variant="outlined" size="large" sx={{ borderRadius: 12, color: '#fff', borderColor: 'rgba(255,255,255,0.12)' }}>
              Explore services
            </Button>
          </Stack>
        </Box>
      </HeroContent>
    </Hero>
  );
}

export default WhyChooseZephrika;   