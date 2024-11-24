"use client"; // This directive allows the component to run on the client side.
import { Box, Container, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";

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
      </Container>
    </Box>
  );
}
