import { Typography } from "@mui/material";

export const TextBig: React.FC<{ text: string }> = ({ text }) => (
  <Typography variant="h5" fontFamily="sans-serif">
    {text}
  </Typography>
);
