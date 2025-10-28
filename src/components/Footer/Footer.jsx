
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import companyLogo from "../../assets/images/zephrika-logo.png";

const sections = {
  "Add ons": [
    "Time and Attendance",
    "Perks & Benefits",
    "Payouts",
    "Performance Management",
    "Leaves and Time off",
    "Expense Management",
  ],
  "Built for you": [
    "MSMEs",
    "Startups",
    "Hospitality",
    "Construction",
    "Healthcare",
    "Transport",
  ],
  Company: [
    "About us",
    "Careers",
    "Press & Media",
    "Customer Testimonials",
    "Community",
    "Contact us",
  ],
  Resources: [
    "Blog",
    "Calculators",
    "FAQS",
    "Knowledgebase",
    "Country Guide",
  ],
};

function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        background: theme.palette.surface || theme.palette.background.default,
        borderTop: `1px solid ${theme.palette.customDividers?.subtle || "#eee"}`,
        pt: 6,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Left navigation columns */}
          {Object.entries(sections).map(([title, items]) => (
            <Grid item xs={12} sm={6} md={2} key={title}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, mb: 1, color: theme.palette.primary.main }}
              >
                {title}
              </Typography>
              <List dense disablePadding>
                {items.map((text) => (
                  <ListItem key={text} sx={{ py: 0.5 }}>
                    <ListItemText
                      primary={
                        <MuiLink
                          href="#"
                          underline="none"
                          sx={{
                            fontSize: "0.95rem",
                            color: theme.palette.text.secondary,
                            "&:hover": { color: theme.palette.primary.main },
                          }}
                        >
                          {text}
                        </MuiLink>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}

          {/* Logo + Contact Emails */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                height: "100%",
              }}
            >
              {/* Logo and company name */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Box
                  component="img"
                  src={companyLogo}
                  alt="Zephrika"
                  sx={{
                    height: 60,
                    mr: 1.5,
                    objectFit: "contain",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontWeight: 500,
                  }}
                >
                  © Zephrika Technologies, {new Date().getFullYear()}.
                </Typography>
              </Box>

              {/* Contact section */}
              <Box sx={{ mt: 0 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    mb: 0.5,
                    fontWeight: 700,
                    color: theme.palette.primary.main, 
                    letterSpacing: 0.5,
                  }}
                >
                  Contact
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    mb: 0.3,
                  }}
                >
                  marketing@zephrikatechnologies.com
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                  }}
                >
                  hello@zephrikatechnologies.com
                </Typography>
              </Box>
            </Box>
          </Grid>


          
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, color: theme.palette.primary.main }}>
              Socials
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "space-evenly", sm: "flex-start" },
                gap: { sm: 1.5, md: 1 },
                flexWrap: "wrap"
              }} >
              <IconButton aria-label="facebook" size="small"
                sx={{
                  transition: "color 0.3 ease",
                  "&:hover": { color: theme.palette.primary.main }
                }}>
                <FacebookIcon />
              </IconButton>

              <IconButton aria-label="linkedin" size="small"
                sx={{
                  transition: "color 0.3 ease",
                  "&:hover": { color: theme.palette.primary.main }
                }}>
                <LinkedInIcon />
              </IconButton>

              <IconButton aria-label="x" size="small"
                sx={{
                  transition: "color 0.3 ease",
                  "&:hover": { color: theme.palette.primary.main }
                }}>
                <TwitterIcon />
              </IconButton>

              <IconButton aria-label="instagram" size="small"
                sx={{
                  transition: "color 0.3 ease",
                  "&:hover": { color: theme.palette.primary.main }
                }}>
                <InstagramIcon />
              </IconButton>

              <IconButton aria-label="whatsapp" size="small"
                sx={{
                  transition: "color 0.3 ease",
                  "&:hover": { color: theme.palette.primary.main }
                }}>
                <WhatsAppIcon />
              </IconButton>

            </Box>
          </Grid>
        </Grid>

        {/* Bottom Legal Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            mt: 4,
            pt: 3,
            borderTop: `1px solid ${theme.palette.customDividers?.subtle || "#f0f0f0"}`,
          }}
        >
          <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
            © Zephrika Technologies, {new Date().getFullYear()}. All Rights Reserved.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mt: { xs: 1, sm: 0 } }}>
            <MuiLink href="#" variant="caption" sx={{ color: theme.palette.text.secondary }}>
              Cookie Policy
            </MuiLink>
            <MuiLink href="#" variant="caption" sx={{ color: theme.palette.text.secondary }}>
              Privacy Policy
            </MuiLink>
            <MuiLink href="#" variant="caption" sx={{ color: theme.palette.text.secondary }}>
              Terms of Service
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
