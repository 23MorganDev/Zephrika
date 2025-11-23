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
  textAlign: "center",
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
    boxShadow: "0 18px 40px rgba(2,6,23,0.6)",
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
    title: "Instant Savings",
    desc: "Get immediate savings on every purchase — we design affordable automation and cost-optimised workflows for small businesses.",
    Icon: SavingsIcon,
  },
  {
    title: "Real-Time Insights",
    desc: "Make smarter decisions with live data and actionable insights delivered in real-time to keep you ahead.",
    Icon: InsightsIcon,
  },
  {
    title: "Flexible Plans",
    desc: "Plans that adapt to your business: scalable, transparent and built for growth without heavy lock-ins.",
    Icon: PlanIcon,
  },
  {
    title: "Security & Trust",
    desc: "We prioritise secure design and best-practice workflows — small teams don't mean small protection.",
    Icon: SecurityIcon,
  },
  {
    title: "Dedicated Support",
    desc: "Founder-led onboarding and post-launch support so you never feel left behind.",
    Icon: SupportIcon,
  },
  {
    title: "Fast Execution",
    desc: "Rapid prototyping and iterative delivery: get working solutions faster and iterate with your users.",
    Icon: SpeedIcon,
  },
];

function WhyChooseZephrika() {
  const theme = useTheme();

  return (
    <Hero component="section">
      <HeroContent maxWidth="lg">
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
              <Grid key={r.title} item xs={12} sm={6} md={4}>
                <GlassCard>
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