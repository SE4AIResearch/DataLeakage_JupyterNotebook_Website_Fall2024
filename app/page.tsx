import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";
import Image from "next/image";
import { contributors } from "@/app/contributorsData";
import alomarPfp from "../public/images/alomar-pfp.jpg";
import { GitHub, LinkedIn, Info } from "@mui/icons-material";
// Note: layout.tsx has the metadata (title, description), overridable

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

const Home: React.FC = () => {
  return (
    <Box>
      {/* Header and navigation */}
      <ResponsiveAppBar />

      {/* Headline */}
      <Box sx={{ textAlign: "center", pt: "5vh" }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Data Leakage Detector VS Code Extension
          </Typography>
          <Typography variant="h6" gutterBottom>
            We have developed a new Visual Studio Code extension that detects
            data leakage — mainly preprocessing, overlap and multi-test leakage
            — from Jupyter Notebook files. Data leakage happens when a model
            training data set makes use of test data in data science code,
            leading to inaccurate performance estimates. Beyond detection, we
            implemented two correction mechanisms named Quick Fix: a
            conventional approach that manually fixes the leakage and an
            LLM-driven approach that guides ML developers toward best practices
            for building ML pipelines.
          </Typography>
          <Typography variant="h6" gutterBottom>
            According to the paper &quot;Data Leakage in Notebooks: Static
            Detection and Better Processes&quot;, many model designers do not
            effectively separate their testing data from their evaluation and
            training data. We are developing an extension for the VS Code IDE
            that identifies instances of data leakage in ML code and provides
            suggestions on how to remove the leakage.
          </Typography>
          <Link href="https://doi.org/10.1145/3551349.3556918" variant="h6">
            Data Leakage Research Paper Link
          </Link>
        </Container>

        {/* Get Started */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: "5vh",
          }}
        >
          <Container sx={{ borderBottom: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Get Started
            </Typography>
          </Container>
          <Typography variant="h6" marginY={2}>
            Learn how to install and use the Leakage Detector VS Code extension
            with its dependencies.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Info />}
            href="/documentation/get-started"
            sx={{ fontSize: "1.2rem", textTransform: "none" }}
          >
            Get Started
          </Button>
        </Box>

        {/* Videos */}
        <Box sx={{ pt: "5vh" }}>
          <Container sx={{ borderBottom: 1 }}>
            <Typography variant="h4" fontWeight="bold">
              Extension Preview
            </Typography>
          </Container>
          {/* Preview demo video (also on documentation page) */}
          <Video
            src="https://www.youtube.com/embed/uyLLaxutzsg?si=W3pgfmX8QIQ9eT5F"
            title="Leakage Detector Preview Video"
          />

          <Container sx={{ borderBottom: 1 }}>
            <Typography variant="h4" fontWeight="bold">
              Full Demonstration
            </Typography>
          </Container>
          {/* Full demo video (also on documentation page) */}
          <Video
            src="https://www.youtube.com/embed/8MpmITIdiCo?si=x_OkcLLieG4QVL9H"
            title="Leakage Detector Full Demo Video"
          />
        </Box>

        {/* Project advisor section */}
        <Container sx={{ pt: "5vh", borderBottom: 1 }}>
          <Typography variant="h4" fontWeight="bold">
            Project Advisor
          </Typography>
        </Container>
        <Box
          sx={{
            display: "inline-block",
            maxWidth: "500px",
            width: "100%",
            mx: "auto",
            py: 2,
          }}
        >
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#eee",
              padding: 2,
              borderRadius: "8px",
              marginBottom: "1rem",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <Image
                src={alomarPfp}
                alt="Dr. Eman Abdullah AlOmar profile picture"
                width={100}
                height={100}
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  paddingLeft: "1rem",
                  marginRight: "1rem",
                }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold" }}
              >
                Dr. Eman Abdullah AlOmar
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Button
                variant="contained"
                sx={{ marginLeft: "1rem", color: "white", borderRadius: 4 }}
                href="https://github.com/EmanAlOmar"
                style={{ backgroundColor: "black" }}
              >
                <GitHub aria-label="GitHub" />
              </Button>
              <Button
                variant="contained"
                sx={{ marginLeft: "1rem", color: "white", borderRadius: 4 }}
                href="https://www.linkedin.com/in/eman-abdullah-alomar-0251472b1/"
              >
                <LinkedIn aria-label="LinkedIn" />
              </Button>
            </Box>
          </Container>
        </Box>
       

        {/* Contributor section */}
        <Container sx={{ pt: "5vh", borderBottom: 1 }}>
          <Typography variant="h4" fontWeight="bold">
            Contributors
          </Typography>
        </Container>
        <Box
          sx={{
            display: "inline-block",
            maxWidth: "500px",
            width: "100%",
            mx: "auto",
            py: 2,
          }}
        >
          <Stack spacing={2}>
            {contributors.map((contributor, index) => (
              <Container
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#eee",
                  padding: 2,
                  borderRadius: "8px",
                  marginBottom: "1rem",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexGrow: 1,
                  }}
                >
                  <Image
                    src={contributor.imageSrc}
                    alt={`${contributor.name} profile picture`}
                    width={100}
                    height={100}
                    style={{
                      objectFit: "cover",
                      borderRadius: "50%",
                      marginRight: "1rem",
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {contributor.name}
                  </Typography>
                </Box>

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <Button
                    variant="contained"
                    sx={{ marginLeft: "1rem", color: "white", borderRadius: 4 }}
                    href={contributor.githubUrl}
                    style={{ backgroundColor: "black" }}
                  >
                    <GitHub aria-label="GitHub" />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ marginLeft: "1rem", color: "white", borderRadius: 4 }}
                    href={contributor.linkedinUrl}
                  >
                    <LinkedIn aria-label="LinkedIn" />
                  </Button>
                </Box>
              </Container>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
