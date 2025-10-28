
import React from "react";
import { Box, useTheme } from "@mui/material";

const CustomDivider = ({ direction = "down", color, opacity = 0.4, height = 40 }) => {
  const theme = useTheme();

  // Use provided color or fallback to theme primary
  const waveColor = color || theme.palette.primary.main;

  // Flip direction if divider is meant to curve upward instead of downward
  const transform = direction === "up" ? "rotate(180deg)" : "none";

  return (
    <Box
      component="div"
      sx={{
        position: "relative",
        lineHeight: 0,
        overflow: "hidden",
        transform,
        background: `linear-gradient(to bottom, ${waveColor} ${opacity * 100}%, transparent 100%)`,
        maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 80"
        style={{
          width: "100%",
          height: `${height}px`,
          display: "block",
        }}
      >
        <defs>
          <linearGradient id="softWaveGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={waveColor} stopOpacity={opacity} />
            <stop offset="100%" stopColor={waveColor} stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <path
          fill="url(#softWaveGradient)"
          d="M0,40 C360,60 1080,20 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </Box>
  );
};

export default CustomDivider;
