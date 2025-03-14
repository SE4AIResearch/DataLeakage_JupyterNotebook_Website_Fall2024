"use client"; // This directive allows the component to run on the client side.
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Link,
  Typography,
} from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";
import { oneDriveBaseURL, resourceIds } from "./resourceData";
import InfoIcon from "@mui/icons-material/Info";

const chunkArray = (array: string[], chunkSize: number) => {
  const results = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    results.push(array.slice(i, i + chunkSize));
  }
  return results;
};

export default function Documentation() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Container maxWidth="md" sx={{ textAlign: "center", pt: "5vh" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderBottom: 1,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Get Started
          </Typography>
          <Typography variant="h6" marginBottom={2}>
            Learn how to install and use the Leakage Detector VS Code extension.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<InfoIcon />}
            href="/documentation/get-started"
            sx={{ marginBottom: 4, fontSize: "1.2rem", textTransform: "none" }}
          >
            Get Started
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderBottom: 1,
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ marginTop: 4 }}>
            About Data Leakage
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Data leakage in machine learning is when a model uses information
            during training that would not be available at the time of
            prediction like test data. This creates overly optimistic, invalid
            predictive models. Data leakage often occurs due to poor practices
            in machine learning code. This can include obvious mistakes like
            incorporating test data into the training set, as well as more
            subtle errors, such as inadvertently revealing test data
            distribution through preprocessing before training. Learn more about
            the different data leakage types in the links below.
          </Typography>

          <Box sx={{ marginBottom: 2 }}>
            <Link href="/documentation/leakage/multi-test" variant="h6">
              Multi-Test Leakage
            </Link>
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <Link href="/documentation/leakage/overlap" variant="h6">
              Overlap Leakage
            </Link>
          </Box>
          <Box sx={{ marginBottom: 4 }}>
            <Link href="/documentation/leakage/preprocessing" variant="h6">
              Preprocessing Leakage
            </Link>
          </Box>
        </Box>

        <Typography variant="h4" gutterBottom sx={{ marginTop: 4 }}>
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
