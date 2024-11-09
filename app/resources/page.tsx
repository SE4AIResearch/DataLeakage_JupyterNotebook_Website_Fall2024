"use client"; // This directive allows the component to run on the client side.
import { Box, Button, Container, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";
import { oneDriveBaseURL, resourceIds } from "./resourceData";

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

        {resourceIds.map((link, i) => {
          return (
            <div key={i}>
              <Typography variant="h4" gutterBottom>
                Week {i + 1}
              </Typography>
              <Button
                variant="outlined"
                href={`${oneDriveBaseURL}${link}`}
                sx={{ mb: 2, fontSize: "1.2rem", textTransform: "none" }}
              >
                Week {i + 1} Slides
              </Button>
            </div>
          )
        })}
      </Container>
    </Box>
  );
}
