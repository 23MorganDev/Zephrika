import React from 'react';
import { Box, Container, Typography, TextField, Button, Paper, Stack, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will get back to you soon.');
  };

  return (
    <Box id="contact" sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" color="primary" sx={{ fontWeight: 700, letterSpacing: 2 }}>
            GET IN TOUCH
          </Typography>
          <Typography variant="h2" sx={{ mt: 1 }}>
            Ready to Start Your Project?
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={4}>
              <Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                  Contact Information
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  Fill out the form and our team will get back to you within 24 hours.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                <Box sx={{ p: 2, bgcolor: 'secondary.main', borderRadius: 2, display: 'flex' }}>
                  <LocationOnIcon />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Location</Typography>
                  <Typography variant="body2" color="text.secondary">Nairobi, Kenya</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                <Box sx={{ p: 2, bgcolor: 'secondary.main', borderRadius: 2, display: 'flex' }}>
                  <PhoneIcon />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Call Us</Typography>
                  <Typography variant="body2" color="text.secondary">+254 113427928</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                <Box sx={{ p: 2, bgcolor: 'secondary.main', borderRadius: 2, display: 'flex' }}>
                  <EmailIcon />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Email Us</Typography>
                  <Typography variant="body2" color="text.secondary">zephrikatechnologies@gmail.com</Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Paper sx={{ p: 4, borderRadius: 4 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Full Name" variant="outlined" required />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Email Address" variant="outlined" required />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField fullWidth label="Subject" variant="outlined" />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;