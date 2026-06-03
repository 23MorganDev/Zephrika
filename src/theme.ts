import { createTheme } from "@mui/material/styles";

/**
 * Zephrika Theme - Updated with Provided Brand Colors and Styles
 */
const theme = createTheme({
  palette: {
    primary: {
      main: "#DC0130",        // ABSA crimson
      light: "#FF3358",       // bright red
      dark: "#9E0022",        // deep crimson
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#1C1C1E",
      light: "#3A3A3C",
      dark: "#9E0022", 
      contrastText: "#ffffff",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#444"
    },
    background: {
      default: "#f9fafc",     
      paper: "#ffffff",       
    },
    success: {
      main: "#155724",
    },
    error: {
      main: "#721c24",
    },
  },

  // @ts-ignore - custom properties allowed in MUI theme via module augmentation or simple object access
  customGradients: {
    primary: "linear-gradient(90deg, #DC0130, #9E0022)",
    secondary: "linear-gradient(135deg, #9E0022, #DC0130)",
    accent: "linear-gradient(90deg, #DC0130 0%, #FF3358 50%, #9E0022 100%)",
    heroOverlay: "rgba(0,0,0,0.55)",
  },

  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
    h1: { fontFamily: "Georgia, serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4rem)" },
    h2: { fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3rem)" },
    h3: { fontFamily: "Georgia, serif", fontWeight: 600, fontSize: "clamp(1.75rem, 4vw, 2.25rem)" },
    h4: { fontFamily: "Georgia, serif", fontWeight: 600 },
    h5: { fontFamily: "Georgia, serif", fontWeight: 600 },
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
    ...Array(20).fill("").map((_, i) => {
      const offset = i + 5;
      return `0px ${offset}px ${offset * 2}px rgba(0,0,0,0.1)`;
    })
  ] as any,

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "6px 16px",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "rgba(220,1,48,0.1)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          // @ts-ignore - Webkit property
          WebkitBackdropFilter: "blur(10px)",
          color: "#1a1a1a",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
        },
      },
    },
  },

  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },
});

export default theme;