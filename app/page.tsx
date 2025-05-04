import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";
import Image from "next/image";
import { contributors } from "@/app/contributorsData";
// import alomarPfp from "../public/images/alomar-pfp.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// Note: layout.tsx has the metadata (title, description), overridable

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

const Home: React.FC = () => {
  return (
    <Box>
      {/* Header and navigation */}
      <ResponsiveAppBar />

      {/* Headline and call to action buttons */}
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

        {/* Tutorial video (also on documentation page) */}
        <Video />

        {/* Project advisor section */}
        {/* Censored for now 
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
                <GitHubIcon aria-label="GitHub" />
              </Button>
              <Button
                variant="contained"
                sx={{ marginLeft: "1rem", color: "white", borderRadius: 4 }}
                href="https://www.linkedin.com/in/eman-abdullah-alomar-0251472b1/"
              >
                <LinkedInIcon aria-label="LinkedIn" />
              </Button>
            </Box>
          </Container>
        </Box>
        */}

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
                    <GitHubIcon aria-label="GitHub" />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ marginLeft: "1rem", color: "white", borderRadius: 4 }}
                    href={contributor.linkedinUrl}
                  >
                    <LinkedInIcon aria-label="LinkedIn" />
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
