"use client"; // This directive allows the component to run on the client side.
import { Box, Button, ButtonGroup, Container, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";
import { oneDriveBaseURL, resourceIds } from"./resourceData";

const chunkArray = (array: string[], chunkSize: number) => {
  const results = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    results.push(array.slice(i, i + chunkSize));
  }
  return results;
};

export default function Documentation() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Container maxWidth="md" sx={{ textAlign: "center", pt: "5vh" }}>
        <Typography variant="h4">Docker Setup</Typography>
        {/* Docker setup */}
        <iframe
          src="/documents/docker-instructions.pdf"
          title="Docker Instructions"
          width="100%"
          height="600px"
          style={{ border: "none", marginTop: "1em", marginBottom: "2em" }}
        ></iframe>

<Typography variant="h4" gutterBottom>
          Source Code
        </Typography>
        <Button
          variant="contained"
          color="info"
          href="https://github.com/SE4AIResearch/DataLeakage_JupyterNotebook_Fall2024/"
          sx={{ mb: 2, fontSize: "1.2rem", textTransform: "none" }}
        >
          Go to Plugin Code
        </Button>
        <Typography variant="h4" gutterBottom>
          Website Code
        </Typography>
        <Button
          variant="contained"
          color="info"
          href="https://github.com/SE4AIResearch/DataLeakage_JupyterNotebook_Website_Fall2024/"
          sx={{ mb: 4, fontSize: "1.2rem", textTransform: "none" }}
        >
          Go to Website Code
        </Button>

        <Typography variant="h4" gutterBottom>
          Weekly Slides
        </Typography>
        {/* Button chunks of 3 */}
        {chunkArray(resourceIds, 3).map((group, index) => (
          <div key={index}>
            <ButtonGroup
              variant="contained"
              color="info"
              aria-label={`Button group for weeks ${index * 3 + 1} to ${
                index * 3 + group.length
              }`}
              sx={{ marginBottom: 2 }}
            >
              {group.map((link, i) => (
                <Button
                  key={i}
                  sx={{ fontSize: "1.2rem", textTransform: "none" }}
                  href={`${oneDriveBaseURL}${link}`}
                >
                  Week {index * 3 + i + 1}
                </Button>
              ))}
            </ButtonGroup>
          </div>
        ))}
        {/* Add empty space at bottom */}
        <Box sx={{ height: "10vh" }}> </Box>
      </Container>
    </Box>
  );
}
