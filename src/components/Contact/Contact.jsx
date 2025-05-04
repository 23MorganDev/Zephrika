import React from 'react';
import { styled } from '@mui/material/styles';
import {
    Typography,
    Container,
    Grid2 as Grid,
    Box,
    List,
    ListItem,
    ListItemText,
    Link,
    Divider,
    IconButton
} from '@mui/material';
import {
    LocationOn,
    Phone,
    Email,
    Facebook,
    Twitter,
    Instagram,
    Telegram
} from '@mui/icons-material';
import contactImage from "../../assets/images/c2.jpg";

const primaryAccent = '#00BFFF';

const ContactInfoContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#161A5C', // Alternative Background
    padding: theme.spacing(6, 0),
    color: '#FFFFFF', // Text Color (Secondary)
}));

const ContactInfoGrid = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(4),
}));

const SocialIcons = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'flex-start',
    gap: theme.spacing(2),
    '& svg': {
        color: primaryAccent,
        fontSize: '1.8rem',
    },
}));

function ContactInformation() {
    return (
        <ContactInfoContainer>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <ContactInfoGrid xs={12} md={4}>
                        <Typography variant="h6" gutterBottom sx={{ color: primaryAccent }}>
                            Zephrika Technology
                        </Typography>
                        <Typography variant="body2" paragraph sx={{color: '#FFFFFF'}}>
                            We are a leading technology company dedicated to providing innovative solutions for businesses of all sizes.
                        </Typography>
                        <img
                            src={contactImage}
                            alt="Company"
                            style={{ maxWidth: '100%', height: 'auto', marginTop: '16px', borderRadius: '8px' }}
                        />
                    </ContactInfoGrid>

                    <ContactInfoGrid xs={12} md={4}>
                        <Typography variant="h6" gutterBottom sx={{ color: primaryAccent }}>
                            Useful Links
                        </Typography>
                        <List>
                            <ListItem disablePadding>
                                <ListItemText>
                                    <Link href="#" color="inherit" sx={{color: '#FFFFFF'}}>
                                        Home
                                    </Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText>
                                    <Link href="#" color="inherit" sx={{color: '#FFFFFF'}}>
                                        Services
                                    </Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText>
                                    <Link href="#" color="inherit" sx={{color: '#FFFFFF'}}>
                                        About Us
                                    </Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText>
                                    <Link href="#" color="inherit" sx={{color: '#FFFFFF'}}>
                                        Contact Us
                                    </Link>
                                </ListItemText>
                            </ListItem>
                        </List>

                        <Typography variant="h6" gutterBottom sx={{ color: primaryAccent, marginTop: 3 }}>
                            Connect With Us
                        </Typography>
                        <SocialIcons>
                            <IconButton href="#" aria-label="Facebook">
                                <Facebook />
                            </IconButton>
                            <IconButton href="#" aria-label="Twitter">
                                <Twitter />
                            </IconButton>
                            <IconButton href="#" aria-label="Instagram">
                                <Instagram />
                            </IconButton>
                            <IconButton href="#" aria-label="Telegram">
                                <Telegram />
                            </IconButton>
                            <IconButton href="mailto:info@zephrika.com" aria-label="Email">
                                <Email />
                            </IconButton>
                        </SocialIcons>
                    </ContactInfoGrid>

                    <ContactInfoGrid xs={12} md={4}>
                        <Typography variant="h6" gutterBottom sx={{ color: primaryAccent }}>
                            Contact Us
                        </Typography>
                        <List>
                            <ListItem disablePadding sx={{color: '#FFFFFF'}}>
                                <LocationOn sx={{ marginRight: 1, color: primaryAccent }} />
                                <ListItemText primary="123 Main Street, City, Country" />
                            </ListItem>
                            <ListItem disablePadding sx={{color: '#FFFFFF'}}>
                                <Phone sx={{ marginRight: 1, color: primaryAccent }} />
                                <ListItemText primary="+1 123 456 7890" />
                            </ListItem>
                            <ListItem disablePadding sx={{color: '#FFFFFF'}}>
                                <Email sx={{ marginRight: 1, color: primaryAccent }} />
                                <ListItemText primary="info@zephrika.com" />
                            </ListItem>
                        </List>
                    </ContactInfoGrid>
                </Grid>
                <Divider sx={{ mt: 4, backgroundColor: primaryAccent }} />
                <Typography variant="body2" align="center" sx={{ pt: 2, color: '#FFFFFF' }}>
                    © {new Date().getFullYear()} Zephrika Technology. All rights reserved.
                </Typography>
            </Container>
        </ContactInfoContainer>
    );
}

export default ContactInformation;
