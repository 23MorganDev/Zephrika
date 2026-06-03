import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, image }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ height: 180, overflow: 'hidden', position: 'relative' }}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <Box
          sx={{
            position: 'absolute',
            bottom: -20,
            right: 20,
            width: 50,
            height: 50,
            bgcolor: 'primary.main',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 3,
          }}
        >
          {icon}
        </Box>
      </Box>
      <CardContent sx={{ pt: 4, flexGrow: 1 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
          {description}
        </Typography>
        <Button
          variant="text"
          color="primary"
          endIcon={<ArrowForwardIcon />}
          sx={{ p: 0, '&:hover': { backgroundColor: 'transparent', color: 'primary.light' } }}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;