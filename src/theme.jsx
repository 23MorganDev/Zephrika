
import { createTheme } from "@mui/material/styles";
import { borderLeft } from "@mui/system";


const theme = createTheme({
  palette: {
    primary: {
      main: "#DC0130",        // ABSA crimson — replaces purple #4B2E83
      light: "#FF3358",       // bright red — replaces electric blue #220ff5
      dark: "#9E0022",        // deep crimson — replaces navy #013064
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#1C1C1E",
      light: "#3A3A3C",
      dark: "#0A0A0A",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#1a1a1a",     // unchanged
      secondary: "#444",      // unchanged
    },
    background: {
      default: "#f9fafc",     // unchanged — clean off-white
      paper: "#ffffff",       // unchanged — ABSA white
      light: "#fce8ec",       // soft red tint — replaces green #d4edda
      gradient: "linear-gradient(135deg, #DC0130 0%, #9E0022 100%)",
    },
    success: {
      main: "#155724",
      borderLeft: "5px solid #28a745",
    },
    failure: {
      main: "#721c24",
      borderLeft: "5px solid #dc3545",
    },

    gradients: {
      primary: "linear-gradient(90deg, #DC0130, #9E0022)",
      primaryHover: "linear-gradient(90deg, #FF3358, #DC0130)",
      secondary: "linear-gradient(135deg, #9E0022, #DC0130)",
      accent: "linear-gradient(90deg, #DC0130 0%, #FF3358 50%, #9E0022 100%)",
      sectionLight: "linear-gradient(180deg, #f9fafc 0%, #ffffff 100%)",
      sectionDark: "linear-gradient(180deg, #DC0130 0%, #9E0022 100%)",
      surface: "linear-gradient(135deg, #FFFFFF 0%, #f7f7f7 100%)",
      surfaceAlt: "linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)",
      card: "linear-gradient(145deg, rgba(255,255,255,0.85), rgba(255,255,255,0.65))",
      overlay: "linear-gradient(180deg, rgba(19,19,31,0.6), rgba(19,19,31,0.7))",
      heroOverlay: "rgba(0,0,0,0.55)",
    },

    customDividers: {
      primary: "#DC0130",
      secondary: "#9E0022",
      accent: "#FF3358",
      subtle: "#f5f5f5",
      brand: "#DC0130",
    },
  },

  customGradients: {
    primary: "linear-gradient(90deg, #DC0130, #9E0022)",
    secondary: "linear-gradient(135deg, #9E0022, #DC0130)",
    accent: "linear-gradient(90deg, #DC0130 0%, #FF3358 50%, #9E0022 100%)",
    heroOverlay: "rgba(0,0,0,0.55)",
  },

  typography: {
    // unchanged — your font stack is brand-neutral
    fontFamily: "'Inter', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
    h1: { fontFamily: "Georgia, serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4rem)" },
    h2: { fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3rem)" },
    h3: { fontFamily: "Georgia, serif", fontWeight: 600, fontSize: "clamp(1.75rem, 4vw, 2.25rem)" },
    h6: { fontFamily: "Georgia, serif", fontWeight: 600, fontStyle: "italic" },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    button: { fontWeight: 600, textTransform: "none", fontFamily: "Georgia, serif" },
  },

  shadows: [
    "none",
    "0px 2px 4px rgba(0,0,0,0.1)",
    "0px 4px 8px rgba(0,0,0,0.15)",
    "0px 8px 16px rgba(0,0,0,0.2)",
    "0px 12px 24px rgba(0,0,0,0.25)",
  ],

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "6px 16px",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "rgba(220,1,48,0.1)", // red tint on hover
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(255,255,255,0.9)", // keep white navbar — matches ABSA style
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        },
      },
    },
  },

  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },
});

while (theme.shadows.length < 25) {
  const i = theme.shadows.length;
  theme.shadows.push(`0px ${i}px ${i * 2}px rgba(0,0,0,0.1)`);
}

export default theme;