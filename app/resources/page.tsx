"use client"; // This directive allows the component to run on the client side.
import { Box, Button, Container, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";

export default function Resources() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Container maxWidth="md" sx={{ textAlign: "left", pt: "5vh" }}>
        <Typography variant="h4" gutterBottom>
          Source Code
        </Typography>
        <Button
          variant="contained"
          href="https://github.com/SE4AIResearch/DataLeakage_JupyterNotebook_Fall2024/"
          sx={{ mb: 2, fontSize: "1.2rem", textTransform: "none" }}
        >
          Plugin Code
        </Button>
        <Typography variant="h4" gutterBottom>
          Website Code
        </Typography>
        <Button
          variant="contained"
          href="https://github.com/SE4AIResearch/DataLeakage_JupyterNotebook_Website_Fall2024/"
          sx={{ mb: 4, fontSize: "1.2rem", textTransform: "none" }}
        >
          Website Code
        </Button>

        {/* Weekly breakdowns */}
        <Typography variant="h4" gutterBottom>
          Week 1
        </Typography>
        <Button
          variant="outlined"
          href="https://docs.google.com/presentation/d/1E1ebly_8aZ3sP5-ta5DjYG2ETjui0gxEugu2oE9HEUo/edit?usp=sharing"
          sx={{ mb: 2, fontSize: "1.2rem", textTransform: "none" }}
        >
          Week 1 Slides
        </Button>
        <Typography variant="h4" gutterBottom>
          Week 2
        </Typography>
        <Button
          variant="outlined"
          href="https://docs.google.com/presentation/d/1OJM9_Rmq2RwhpVb4TaRemJk5b8uwie4PWr5b8dLCbE8/edit?usp=sharing"
          sx={{ mb: 2, fontSize: "1.2rem", textTransform: "none" }}
        >
          Week 2 Slides
        </Button>
      </Container>
    </Box>
  );
}
