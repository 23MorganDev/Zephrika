
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4B2E83", // Deep purple
      light: "#220ff5ff",
      dark: "#013064",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#013064", // Navy blue
      light: "#4B6A9B",
      dark: "#001A33",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#444",
    },
    background: {
      default: "#f9fafc",
      paper: "#ffffff",
      gradient: "linear-gradient(135deg, #3d1f79ff 0%, #013064 100%)",
    },

    // Extended gradients
    gradients: {
      primary: "linear-gradient(90deg, #4B2E83, #013064)",
      primaryHover: "linear-gradient(90deg, #5A4FCF, #1B398F)",
      secondary: "linear-gradient(135deg, #013064, #4B2E83)",
      accent: "linear-gradient(90deg, #4B2E83 0%, #5A4FCF 50%, #013064 100%)",
      sectionLight: "linear-gradient(180deg, #f9fafc 0%, #ffffff 100%)",
      sectionDark: "linear-gradient(180deg, #4B2E83 0%, #013064 100%)",
      surface: "linear-gradient(135deg, #FFFFFF 0%, #f7f7f7 100%)",
      surfaceAlt: "linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)",


      card: "linear-gradient(145deg, rgba(255,255,255,0.85), rgba(255,255,255,0.65))",
      overlay: "linear-gradient(180deg, rgba(19,19,31,0.6), rgba(19,19,31,0.7))",

      // Retained hero overlay for compatibility
      heroOverlay: "rgba(0,0,0,0.55)",
    },

    customDividers: {
      primary: "#4B2E83",
      secondary: "#013064",
      accent: "#5A4FCF",
      subtle: "#f5f5f5",
      brand: "#4B2E83",
    },
  },

  customGradients: {
    primary: "linear-gradient(90deg, #4B2E83, #013064)",
    secondary: "linear-gradient(135deg, #013064, #4B2E83)",
    accent: "linear-gradient(90deg, #4B2E83 0%, #5A4FCF 50%, #013064 100%)",
    heroOverlay: "rgba(0,0,0,0.55)",
  },

  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
    h1: {
      fontFamily: "Georgia, serif",
      fontWeight: 800,
      fontSize: "clamp(2.5rem, 6vw, 4rem)",
    },
    h2: {
      fontFamily: "Georgia, serif",
      fontWeight: 700,
      fontSize: "clamp(2rem, 5vw, 3rem)",
    },
    h3: {
      fontFamily: "Georgia, serif",
      fontWeight: 600,
      fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
    },
    h6: {
      fontFamily: "Georgia, serif",
      fontWeight: 600,
      fontStyle: "italic",
    },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    button: {
      fontWeight: 600,
      textTransform: "none",
      fontFamily: "Georgia, serif",
    },
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
            backgroundColor: "rgba(75,46,131,0.1)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        },
      },
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

while (theme.shadows.length < 25) {
  const i = theme.shadows.length;
  theme.shadows.push(`0px ${i}px ${i * 2}px rgba(0,0,0,0.1)`);
}

export default theme;