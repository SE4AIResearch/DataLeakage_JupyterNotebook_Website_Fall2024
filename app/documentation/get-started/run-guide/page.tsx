"use client"; // This directive allows the component to run on the client side.
import { Box, Container, Link, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";

export default function GetStarted() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Container maxWidth="md" sx={{ textAlign: "center", pt: "5vh" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
          Run Guide for Leakage Detector
        </Typography>
        {/* TODO: replace embed with typed out guide */}
        <iframe
          src="/documents/leakage-detector-run-guide.pdf"
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
          Still Need Extension Installation Help?
        </Typography>
        <Typography variant="h6" marginBottom={2}>
          Learn more about installing the extension in the link below.
        </Typography>
        <Box sx={{ marginBottom: 2 }}>
          <Link href="/documentation/get-started/install-guide" variant="h6">
            Installing the Extension
          </Link>
        </Box>

        {/* Add empty space at bottom */}
        <Box sx={{ height: "10vh" }}> </Box>
      </Container>
    </Box>
  );
}
