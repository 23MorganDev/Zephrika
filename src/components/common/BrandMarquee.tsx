import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const brands = [
  { name: 'TechFlow', logo: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/be344401-7e85-49c5-9ab9-9b6e0eeb9d53/brand-1-85d91120-1779487013088.webp' },
  { name: 'InnovateX', logo: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/be344401-7e85-49c5-9ab9-9b6e0eeb9d53/brand-2-4953161a-1779487013976.webp' },
  { name: 'CloudNet', logo: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/be344401-7e85-49c5-9ab9-9b6e0eeb9d53/brand-3-17c687d7-1779487013177.webp' },
  { name: 'Nexus IT', logo: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/be344401-7e85-49c5-9ab9-9b6e0eeb9d53/brand-4-2118dddd-1779487014144.webp' },
  { name: 'Quantum', logo: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/be344401-7e85-49c5-9ab9-9b6e0eeb9d53/brand-5-7dcfc66a-1779487014843.webp' },
  { name: 'Aether', logo: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/be344401-7e85-49c5-9ab9-9b6e0eeb9d53/brand-1-85d91120-1779487013088.webp' },
];

const BrandMarquee = () => {
  return (
    <Box sx={{ py: 6, overflow: 'hidden', backgroundColor: 'rgba(0,0,0,0.1)' }}>
      <Typography variant="subtitle2" align="center" color="text.secondary" sx={{ mb: 4, textTransform: 'uppercase', letterSpacing: 2 }}>
        Trusted by leading innovative brands
      </Typography>
      <Box sx={{ display: 'flex', width: '200%' }}>
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          style={{ display: 'flex', gap: '80px', alignItems: 'center' }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <Box
              key={index}
              sx={{
                width: 150,
                height: 60,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                filter: 'grayscale(1) brightness(2)',
                opacity: 0.6,
                transition: 'all 0.3s',
                '&:hover': { opacity: 1, filter: 'grayscale(0)' },
              }}
            >
              <img src={brand.logo} alt={brand.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </Box>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default BrandMarquee;