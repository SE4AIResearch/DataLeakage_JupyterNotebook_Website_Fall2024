"use client"; // This directive allows the component to run on the client side.
import { Box, Container, Link, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";

const Video: React.FC = () => {
  return (
    <iframe
      width="960"
      height="540"
      src="https://www.youtube.com/embed/cHnTZx1EqAE"
      title="Leakage Detector Video Tutorial"
      style={{ marginTop: "1em", marginBottom: "2em" }}
    ></iframe>
  );
};

export default function GetStarted() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Container maxWidth="md" sx={{ textAlign: "center", pt: "5vh" }}>
        <Typography variant="h4" gutterBottom>
          Get Started With Leakage Detector
        </Typography>
        <Box sx={{ borderBottom: 1 }}>
          <Box sx={{ marginBottom: 2 }}>
            <Link href="/documentation/get-started/install-guide" variant="h6">
              Installation Guide
            </Link>
          </Box>
          <Box sx={{ marginBottom: 4 }}>
            <Link href="/documentation/get-started/run-guide" variant="h6">
              Running the Extension
            </Link>
          </Box>
        </Box>

        <Typography variant="h4" sx={{ marginTop: 4 }}>
          Tutorial Video
        </Typography>
        <Video />

        {/* Add empty space at bottom */}
        <Box sx={{ height: "10vh" }}> </Box>
      </Container>
    </Box>
  );
}
