"use client"; // This directive allows the component to run on the client side.
import { Box, Button, Container, Typography, Stack } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import AppleIcon from '@mui/icons-material/Apple';

export default function Download() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Container maxWidth="md" sx={{ textAlign: "center", pt: "5vh" }}>
        <Typography variant="h4" gutterBottom>
          Download Binaries
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            startIcon={<MicrosoftIcon />}
            href="/binaries/windows-x64.zip"
            sx={{ fontSize: "1.2rem", textTransform: "none" }}
            download
          >
            Windows-x64
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AppleIcon />}
            href="/binaries/macos14-arm64.zip"
            sx={{ fontSize: "1.2rem", textTransform: "none" }}
            download
          >
            MacOS-ARM64
          </Button>
        </Stack>
        {/* <Button
          variant="contained"
          color="info"
          href="https://stevens0-my.sharepoint.com/:f:/g/personal/ealomar_stevens_edu/EoM72dehZWZClpFgI1-0IkUB7Uaq_lNdLejGz8rrI3bVQw?e=PQdtaT"
          sx={{ mb: 2, fontSize: "1.2rem", textTransform: "none" }}
        >
          Go to Binaries
        </Button> */}
      </Container>
    </Box>
  );
}
