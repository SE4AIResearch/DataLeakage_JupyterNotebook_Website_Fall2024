"use client"; // This directive allows the component to run on the client side.
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";
import Image from "next/image";
import { contributors } from "@/app/contributorsData";
import alomarPfp from "@/public/images/alomar-pfp.jpg";
import expoPhoto from "@/public/images/expo.jpg";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Home: React.FC = () => {
  return (
    <Box>
      {/* Header and navigation */}
      <ResponsiveAppBar />

      {/* Headline */}
      <Box sx={{ textAlign: "center", pt: "5vh" }}>
        {/* Expo */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Container sx={{ borderBottom: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Spring 2025 Stevens Innovation Expo
            </Typography>
          </Container>
          <Image
            src={expoPhoto}
            alt="Stevens Innovation Expo 2025 Group Photo"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "720px",
              maxHeight: "378px",
              objectFit: "cover",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              paddingLeft: "1rem",
              marginRight: "1rem",
            }}
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
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
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
