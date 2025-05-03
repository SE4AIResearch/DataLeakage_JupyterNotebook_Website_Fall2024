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
  Paper,
  styled,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
// For MUI theme in styled below
import type {} from "@mui/material/themeCssVarsAugmentation";
import ResponsiveAppBar from "@/components/navbar";
import DownloadIcon from "@mui/icons-material/Download";
import { useState } from "react";
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.primary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Download() {
  const [selectedWindowsBinary, setSelectedWindowsBinary] =
    useState("Windows-x64");
  const [selectedMacOSBinary, setSelectedMacOSBinary] = useState("");
  const [selectedLinuxBinary, setSelectedLinuxBinary] = useState("Linux-x64");

  const handleWindowsDownload = () => {
    if (!selectedWindowsBinary) return;
    const urlMapping: Record<string, string> = {
      "Windows-x64": "/binaries/windows-x64.zip",
    };
    window.location.href = urlMapping[selectedWindowsBinary];
  };

  const handleMacOSDownload = () => {
    if (!selectedMacOSBinary) return;
    const urlMapping: Record<string, string> = {
      "MacOS-ARM64": "/binaries/macos-arm64.zip",
      "MacOS-x64": "/binaries/macos-x64.zip",
    };
    window.location.href = urlMapping[selectedMacOSBinary];
  };

  const handleLinuxDownload = () => {
    if (!selectedLinuxBinary) return;
    const urlMapping: Record<string, string> = {
      "Linux-x64": "/binaries/linux-x64.zip",
    };
    window.location.href = urlMapping[selectedLinuxBinary];
  };

  return (
    <Box>
      <ResponsiveAppBar />
      <Container maxWidth="lg" sx={{ textAlign: "center", pt: "5vh" }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }} gutterBottom>
          Download Binaries
        </Typography>

        {/* https://mui.com/material-ui/react-grid/ */}
        {/* https://mui.com/material-ui/customization/breakpoints/#default-breakpoints */}
        {/* 12 column grid of OS-specific downloadable binaries */}
        <Box sx={{ flexGrow: 1 }}>
          {/* Windows Section */}
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Item>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  Windows
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  <Image
                    src="/images/windows.svg"
                    alt="Windows Logo"
                    width={100}
                    height={100}
                  />
                </Box>
                <FormControl
                  variant="outlined"
                  sx={{ minWidth: 150, marginY: 2 }}
                >
                  <InputLabel id="windows-select-label">
                    Select Version
                  </InputLabel>
                  <Select
                    labelId="windows-select-label"
                    id="windows-select"
                    value={selectedWindowsBinary}
                    onChange={(e) => setSelectedWindowsBinary(e.target.value)}
                    label="Select Version"
                  >
                    <MenuItem value="Windows-x64">Windows-x64</MenuItem>
                  </Select>
                </FormControl>
                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<DownloadIcon />}
                    onClick={handleWindowsDownload}
                    disabled={!selectedWindowsBinary}
                    sx={{ fontSize: "1.1rem", mb: 2, textTransform: "none" }}
                  >
                    Download
                  </Button>
                </Box>
              </Item>
            </Grid>

            {/* macOS Section */}
            <Grid size={{ xs: 12, sm: 4 }}>
              <Item>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  MacOS
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  <Image
                    src="/images/macos.svg"
                    alt="MacOS Logo"
                    width={100}
                    height={100}
                  />
                </Box>
                <FormControl
                  variant="outlined"
                  sx={{ minWidth: 150, marginY: 2 }}
                >
                  <InputLabel id="macos-select-label">
                    Select Version
                  </InputLabel>
                  <Select
                    labelId="macos-select-label"
                    id="macos-select"
                    value={selectedMacOSBinary}
                    onChange={(e) => setSelectedMacOSBinary(e.target.value)}
                    label="Select Version"
                  >
                    <MenuItem value="MacOS-ARM64">MacOS-ARM64</MenuItem>
                    <MenuItem value="MacOS-x64">MacOS-x64</MenuItem>
                  </Select>
                </FormControl>
                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<DownloadIcon />}
                    onClick={handleMacOSDownload}
                    disabled={!selectedMacOSBinary}
                    sx={{ fontSize: "1.1rem", mb: 2, textTransform: "none" }}
                  >
                    Download
                  </Button>
                </Box>
              </Item>
            </Grid>

            {/* Linux Section */}
            <Grid size={{ xs: 12, sm: 4 }}>
              <Item>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  Linux
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  <Image
                    src="/images/linux.svg"
                    alt="Linux Logo"
                    width={100}
                    height={100}
                  />
                </Box>
                <FormControl
                  variant="outlined"
                  sx={{ minWidth: 150, marginY: 2 }}
                >
                  <InputLabel id="linux-select-label">
                    Select Version
                  </InputLabel>
                  <Select
                    labelId="linux-select-label"
                    id="linux-select"
                    value={selectedLinuxBinary}
                    onChange={(e) => setSelectedLinuxBinary(e.target.value)}
                    label="Select Version"
                  >
                    <MenuItem value="Linux-x64">Linux-x64</MenuItem>
                  </Select>
                </FormControl>
                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<DownloadIcon />}
                    onClick={handleLinuxDownload}
                    disabled={!selectedLinuxBinary}
                    sx={{ fontSize: "1.1rem", mb: 2, textTransform: "none" }}
                  >
                    Download
                  </Button>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>

        {/* <Box
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
        </Box> */}
      </Container>
    </Box>
  );
}
