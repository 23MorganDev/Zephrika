import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Grid,
  Container,
  TextField,
  Button,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import backgroundImage from "../../assets/images/c2.jpg";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../Footer/Footer.jsx";

function ContactPage() {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = React.useState(null);
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    let tempErrors = {};
if (!/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(formData.name) || formData.name.length < 4 || formData.name.length > 20) {
  tempErrors.name = "Enter a valid name (4–12 letters, spaces allowed).";
}
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      tempErrors.email = "Invalid email format.";
    }
    if (formData.phone && !/^\d+$/.test(formData.phone)) {
      tempErrors.phone = "Phone must contain only numbers, no spaces.";
    }
    if (!formData.subject) tempErrors.subject = "Subject is required.";
    if (!formData.message) tempErrors.message = "Message is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }

    setLoading(true);

    //submit vakidated form data from the state instead of the DOM
    try {

      const payload = {
        access_key: "21041e22-abf5-4f81-8256-13ad92bbff15",
        botcheck: "",
        name:formData.name,
        email:formData.email,
        phone:formData.phone,
        subject:formData.subject,
        message:formData.message

      }
      const formPayload = new FormData();
      Object.entries(payload).forEach(([key, value]) => {
        formPayload.append(key, value);
      });

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };


  const contactInfo = [
    {
      title: "Location",
      details: "Zephrika Technology Center\nNairobi, Kenya",
      icon: "fas fa-map-marker-alt",
    },
    {
      title: "24/7 Support",
      details: "+254 703680907\n+254 113427928",
      icon: "fas fa-phone-alt",
    },
    {
      title: "Drop Us a Mail",
      details: "zephrikatechnologies.gmail.com",
      icon: "fas fa-envelope",
    },
    {
      title: "Service Hours",
      details: "Mon–Fri: 8 AM - 5 PM\nSat: 8 AM - 12 PM\nSunday: Closed",
      icon: "fas fa-clock",
    },
  ];

  return (
    <Box display="flex" flexDirection="column" sx={{ mt: 0 }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          height: "500px",
          width: "100%",
          overflow: "hidden",
          mb: 4,
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            inset: 0,
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: 2,
            zIndex: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(2.5rem, 7vw, 65px)",
              color: theme.palette.primary.main,
              fontWeight: 800,
              textAlign: "center",
            }}
          >
            Contact Us
          </Typography>
        </Box>
      </Box>

      {/* CONTACT SECTION */}
      <Container
        sx={{
          py: 10,
          background: "transparent",
          position: "relative",
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1 }}>

          {/* HEADING */}
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: theme.palette.primary.main,
                fontFamily: "Georgia, serif",
              }}
            >
              Contact & Join The Movement
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 700,
                mx: "auto",
                color: theme.palette.text.secondary,
                fontSize: "1.1rem",
              }}
            >
              Join our expanding network of satisfied clients and take your brand
              to the next level with our expert digital solutions. Get in touch
              with us today to discuss how we can bring your vision to life and
              create impactful digital experiences together!
            </Typography>
          </Box>

          {/* CONTACT CARDS */}
          <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
            {contactInfo.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 4,
                      backdropFilter: "blur(8px)",
                      background: theme.palette.gradients.card,
                      color: theme.palette.text.primary,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                      textAlign: "center",
                      p: 4,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                      },
                    }}
                  >
                    <i
                      className={`${item.icon} fa-2x`}
                      style={{ color: theme.palette.primary.main }}
                      aria-hidden
                    />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, mt: 2, mb: 1, color: theme.palette.primary.main }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        whiteSpace: "pre-line",
                        color: theme.palette.text.secondary,
                      }}
                    >
                      {item.details}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Box
              sx={{
                background: "transparent",
                borderRadius: 4,
                p: { xs: 4, md: 6 },
                boxShadow: 6,
                maxWidth: 900,
                mx: "auto",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  textAlign: "center",
                  color: theme.palette.primary.main,
                }}
              >
                Send Us a Message
              </Typography>

              {/* Success / Error Alerts */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <Box
                      sx={{
                        mb: 2,
                        p: { xs: 1.5, sm: 2 },
                        borderRadius: 2,
                        background: theme.palette.background.paper,
                        color: theme.palette.success.main,
                        borderLeft: `5px solid ${theme.palette.success.main}`,
                        fontSize: { xs: "0.85rem", sm: "1rem" },
                        fontWeight: 500,
                      }}
                    >
                      ✅ Your message has been sent successfully!
                    </Box>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <Box
                      sx={{
                        mb: 2,
                        p: { xs: 1.5, sm: 2 },
                        borderRadius: 2,
                        background: theme.palette.background.paper,
                        color: theme.palette.error.main,
                        borderLeft: `5px solid ${theme.palette.error.main}`,
                        fontSize: { xs: "0.85rem", sm: "1rem" },
                        fontWeight: 500,
                      }}
                    >
                      ❌ Failed to send message. Please try again.
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleFormSubmit} style={{ width: "100%" }}>

                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField label="Full Name"
                      name="name" fullWidth
                      required value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name} />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField label="Email Address"
                      name="email"
                      type="email"
                      fullWidth required value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email} />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField label="Phone Number"
                      name="phone"
                      type="tel"
                      fullWidth value={formData.phone}
                      onChange={handleChange}
                      error={!!errors.phone}
                      helperText={errors.phone} />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField label="Subject" name="subject" fullWidth value={formData.subject}
                      onChange={handleChange}
                      error={!!errors.subject}
                      helperText={errors.subject} />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Your Message"
                      name="message"
                      multiline
                      rows={5}
                      fullWidth
                      required
                      value={formData.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      helperText={errors.message}
                    />
                  </Grid>

                  <Grid item xs={12} textAlign="center">
                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={!loading && <Send />}
                      disabled={loading}
                      sx={{
                        px: { xs: 3, sm: 4, md: 5 },
                        py: { xs: 1, sm: 1.2, md: 1.5 },
                        borderRadius: { xs: "30px", md: "50px" },
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        fontWeight: 600,
                        minWidth: { xs: "140px", sm: "180px" },
                        background: theme.palette.gradients.primary,
                        color: theme.palette.primary.contrastText,
                        transition: "0.3s ease",
                        "&:hover": {
                          background: theme.palette.gradients.primaryHover,
                        },
                      }}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>

                  </Grid>
                </Grid>
              </form>
            </Box>
          </motion.div>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}

export default ContactPage;