"use client"; // This directive allows the component to run on the client side.
import { Box, Button, ButtonGroup, Container, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";
import { oneDriveBaseURL, resourceIds } from "./resourceData";

const chunkArray = (array: string[], chunkSize: number) => {
  const results = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    results.push(array.slice(i, i + chunkSize));
  }
  return results;
};

const Video: React.FC = () => {
  return (
    <video
      width="960"
      height="540"
      controls
      preload="none"
      style={{ marginTop: "1em", marginBottom: "2em" }}
    >
      <source src="/videos/instructionVideo.mp4" />
      Video not supported on your browser
    </video>
  );
};

export default function Documentation() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Container maxWidth="md" sx={{ textAlign: "center", pt: "5vh" }}>
        <Typography variant="h4">
          Installation Guide for Leakage Detector
        </Typography>
        {/* Docker setup */}
        <iframe
          src="/documents/leakage-detector-installation-guide.pdf"
          title="Leakage Detector Installation Guide"
          width="100%"
          height="600px"
          style={{ border: "none", marginTop: "1em", marginBottom: "2em" }}
        ></iframe>

        <Typography variant="h4">Docker Setup</Typography>
        {/* Docker setup */}
        <iframe
          src="/documents/docker-instructions.pdf"
          title="Docker Instructions"
          width="100%"
          height="600px"
          style={{ border: "none", marginTop: "1em", marginBottom: "2em" }}
        ></iframe>

        <Typography variant="h4">Tutorial Video</Typography>
        <Video />

        <Typography variant="h4" gutterBottom>
          Source Code
        </Typography>
        <Button
          variant="contained"
          color="info"
          href="https://github.com/SE4AIResearch/DataLeakage_JupyterNotebook_Fall2024/"
          sx={{ mb: 3, fontSize: "1.2rem", textTransform: "none" }}
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
          sx={{ mb: 3, fontSize: "1.2rem", textTransform: "none" }}
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

        <Typography variant="h4" sx={{ marginTop: 2 }} gutterBottom>
          Fall 2023 Resource Page
        </Typography>
        <Button
          variant="contained"
          color="info"
          href="https://se4airesearch.github.io/DataLeakage_Website_Fall2023/pages/resources/"
          sx={{ fontSize: "1.2rem", textTransform: "none" }}
        >
          Go to Resource Page
        </Button>

        {/* Add empty space at bottom */}
        <Box sx={{ height: "10vh" }}> </Box>
      </Container>
    </Box>
  );
}
