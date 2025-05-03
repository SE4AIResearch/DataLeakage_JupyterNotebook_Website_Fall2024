"use client"; // This directive allows the component to run on the client side.
import { Box, Container, Link, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";

const Video: React.FC = () => {
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/8MpmITIdiCo?si=x_OkcLLieG4QVL9H"
      allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
        <Box sx={{ borderBottom: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Get Started With Leakage Detector
          </Typography>
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

        {/* Links to dependency installation tutorial videos */}
        <Box sx={{ marginTop: 4, borderBottom: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Dependency Installation Tutorials
          </Typography>
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              YouTube videos to guide you through the installation of
              dependencies for the extension, depending on your OS.
            </Typography>
            <Link href="https://youtu.be/hNaawMSUvHQ" variant="h6">
              Windows
            </Link>
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <Link href="https://youtu.be/qa7-W8IIIE8" variant="h6">
              MacOS
            </Link>
          </Box>
          <Box sx={{ marginBottom: 4 }}>
            <Link href="https://youtu.be/bXXI99vvnyo" variant="h6">
              Linux
            </Link>
          </Box>
        </Box>

        <Typography variant="h4" sx={{ fontWeight: "bold", marginTop: 4 }}>
          Extension Demo Video
        </Typography>
        <Video />

        {/* Add empty space at bottom */}
        <Box sx={{ height: "10vh" }}> </Box>
      </Container>
    </Box>
  );
}
