"use client"; // This directive allows the component to run on the client side.
import { Box, Container, Link, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";

interface VideoProps {
  src: string;
  title: string;
}

const Video: React.FC<VideoProps> = ({ src, title }) => {
  return (
    <iframe
      src={src}
      title={title}
      allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      style={{
        width: "100%",
        maxWidth: "600px",
        minHeight: "315px",
        marginTop: "1em",
        marginBottom: "2em",
      }}
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

        {/* Videos */}
        <Box>
          <Container sx={{ marginTop: 4, borderBottom: 1 }}>
            <Typography variant="h4" fontWeight="bold">
              Extension Preview
            </Typography>
            {/* Preview demo video (also on documentation page) */}
            <Video
              src="https://www.youtube.com/embed/uyLLaxutzsg?si=W3pgfmX8QIQ9eT5F"
              title="Leakage Detector Preview Video"
            />
          </Container>

          <Container sx={{ marginTop: 4, borderBottom: 1 }}>
            <Typography variant="h4" fontWeight="bold">
              Full Demonstration
            </Typography>

            {/* Full demo video (also on documentation page) */}
            <Video
              src="https://www.youtube.com/embed/8MpmITIdiCo?si=x_OkcLLieG4QVL9H"
              title="Leakage Detector Full Demo Video"
            />
          </Container>
        </Box>

        {/* Add empty space at bottom */}
        <Box sx={{ height: "10vh" }}> </Box>
      </Container>
    </Box>
  );
}
