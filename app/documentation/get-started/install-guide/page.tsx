"use client"; // This directive allows the component to run on the client side.
import { Box, Container, Link, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";

export default function GetStarted() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Container maxWidth="md" sx={{ textAlign: "center", pt: "5vh" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
          Installation Guide for Leakage Detector
        </Typography>
        <iframe
          src="/documents/leakage-detector-installation-guide.pdf"
          title="Leakage Detector Installation Guide"
          width="100%"
          height="600px"
          style={{ border: "none", marginTop: "1em", marginBottom: "2em" }}
        ></iframe>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", marginTop: 4 }}
        >
          Next Steps
        </Typography>
        <Typography variant="h6" marginBottom={2}>
          Finished with the installation? Learn more about running the extension
          in the link below.
        </Typography>
        <Box sx={{ marginBottom: 2 }}>
          <Link href="/documentation/get-started/run-guide" variant="h6">
            Running the Extension
          </Link>
        </Box>

        {/* Add empty space at bottom */}
        <Box sx={{ height: "10vh" }}> </Box>
      </Container>
    </Box>
  );
}
