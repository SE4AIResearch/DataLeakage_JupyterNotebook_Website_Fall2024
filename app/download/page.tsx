"use client"; // This directive allows the component to run on the client side.
import {
  Box,
  Button,
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";
import DownloadIcon from "@mui/icons-material/Download";
import { useState } from "react";

export default function Download() {
  const [selectedOS, setSelectedOS] = useState("");

  const handleDownload = () => {
    if (!selectedOS) return;
    const urlMapping: Record<string, string> = {
      "Windows-x64": "/binaries/windows-x64.zip",
      "MacOS-ARM64": "/binaries/macos-arm64.zip",
      "MacOS-x64": "/binaries/macos-x64.zip",
      "Linux-x64": "/binaries/linux-x64.zip",
    };
    window.location.href = urlMapping[selectedOS];
  };

  return (
    <Box>
      <ResponsiveAppBar />
      <Container maxWidth="md" sx={{ textAlign: "center", pt: "5vh" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
          Download Binaries
        </Typography>
        {/* Dropdown menu to download binaries */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormControl variant="outlined" sx={{ minWidth: 200, my: 2 }}>
            <InputLabel id="os-select-label">Select OS</InputLabel>
            <Select
              labelId="os-select-label"
              id="os-select"
              value={selectedOS}
              onChange={(e) => setSelectedOS(e.target.value)}
              label="Select OS"
            >
              <MenuItem value="Windows-x64">Windows-x64</MenuItem>
              <MenuItem value="MacOS-ARM64">MacOS-ARM64</MenuItem>
              <MenuItem value="MacOS-x64">MacOS-x64</MenuItem>
              <MenuItem value="Linux-x64">Linux-x64</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            startIcon={<DownloadIcon />}
            onClick={handleDownload}
            sx={{ marginTop: 2, fontSize: "1.2rem", textTransform: "none" }}
          >
            Download
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
