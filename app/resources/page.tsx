"use client"; // This directive allows the component to run on the client side.
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";
import "../globals.css"
//https://github.com/SE4AIResearch/DataLeakage_JupyterNotebook_Website_Fall2024/
export default function Resources() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Box sx={{ textAlign: "left", pt: "5vh" }}>
        <h2>Source Code</h2>
        <Button variant="contained" href="https://github.com/SE4AIResearch/DataLeakage_JupyterNotebook_Fall2024/">
              Plugin Code
        </Button>
        <br></br>
        <br></br>
        <Button variant="contained" href="https://github.com/SE4AIResearch/DataLeakage_JupyterNotebook_Website_Fall2024/">
              Website Code
        </Button>
        <h2>Week 1</h2>
        <Button variant="contained" href="https://docs.google.com/presentation/d/1E1ebly_8aZ3sP5-ta5DjYG2ETjui0gxEugu2oE9HEUo/edit?usp=sharing">
              Week 1 Slides
        </Button>
        <h2>Week 2</h2>
        <Button variant="contained" href="https://docs.google.com/presentation/d/1QDEsVZXuEm_hUe95__Pe__K4cmiR8G0bxx8NeyYBHPo/edit?usp=sharing">
              Week 2 Slides
        </Button>
      </Box>
    </Box>
  );
}
