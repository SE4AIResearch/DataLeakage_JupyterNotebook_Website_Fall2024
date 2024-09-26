import { Box, Container, Link, Stack, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";
import Image from "next/image";
import arnavPfp from "../public/images/arnav-pfp.jpg";
import jeffreyPfp from "../public/images/jeffrey-pfp.jpg";
import michaelPfp from "../public/images/michael-pfp.jpg";
import owenPfp from "../public/images/owen-pfp.jpg";
import ryanPfp from "../public/images/ryan-pfp.jpg";
import terrencePfp from "../public/images/terrence-pfp.jpg";
import alomarPfp from "../public/images/alomar-pfp.jpg";
// Note: layout.tsx has the metadata (title, description), overridable

const Home: React.FC = () => {
  return (
    <Box>
      {/* Header and navigation */}
      <ResponsiveAppBar />

      {/* Headline and call to action buttons */}
      <Box sx={{ textAlign: "center", pt: "5vh" }}>
        <Container>
          <Typography
            variant="h4"
            component="h1"
            fontWeight="bold"
            gutterBottom
          >
            Data Leakage VS Code Plugin
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Code quality is of paramount importance in all types of software
            development settings. Our project seeks to enable machine learning
            (ML) engineers to write better code by helping them find and fix
            instances of data leakage in their models. Data leakage is a problem
            where an ML model is unintentionally trained on data not present in
            the training dataset. As a result, the model effectively
            &quot;memorizes&quot; the data it trains on, leading to an overly
            optimistic estimate of model performance and an inability to make
            generalized predictions. To avoid introducing data leakage into
            their code, ML developers must carefully separate their data into
            training, evaluation, and test sets. Training data should be used to
            train the model, evaluation data should be used to confirm the
            accuracy of a model repeatedly, and test data should be used only
            once to determine the accuracy of a production-ready model.
            According to the paper &quot;Data Leakage in Notebooks: Static
            Detection and Better Processes&quot;, many model designers do not
            effectively separate their testing data from their evaluation and
            training data. We are developing a plugin for the PyCharm IDE that
            identifies instances of data leakage in ML code and provides
            suggestions on how to remove the leakage.
          </Typography>
          <Link href="https://doi.org/10.1145/3551349.3556918">
            Data Leakage Research Paper Link
          </Link>
        </Container>

        {/* Project advisor section */}
        <Container sx={{ pt: "5vh", borderBottom: 1 }}>
          <Typography variant="h4" component="h1" fontWeight="bold">
            Project Advisor
          </Typography>
        </Container>
        <Box
          sx={{
            maxWidth: "600px",
            mx: "auto",
            my: 2,
            display: "flex",
            alignItems: "center",
            backgroundColor: "#eee",
            borderRadius: "8px",
            marginBottom: "1rem",
          }}
        >
          <Image
            src={alomarPfp}
            alt="Dr. Eman Abdullah AlOmar profile picture"
            width={100}
            height={100}
            style={{
              objectFit: "cover",
              borderRadius: "8px",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              paddingLeft: "1rem",
              marginRight: "1rem",
            }}
          />
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            Dr. Eman Abdullah AlOmar
          </Typography>
        </Box>

        {/* Contributor section */}
        <Container sx={{ pt: "5vh", borderBottom: 1 }}>
          <Typography variant="h4" component="h1" fontWeight="bold">
            Contributors
          </Typography>
        </Container>
        <Box
          sx={{
            display: "inline-block",
            maxWidth: "600px",
            width: "100%",
            mx: "auto",
            py: 2,
          }}
        >
          <Stack spacing={2}>
            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#eee",
                padding: 2,
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            >
              <Image
                src={arnavPfp}
                alt="Arnav Marchareddy profile picture"
                width={100}
                height={100}
                style={{
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginRight: "1rem",
                }}
              />
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bold" }}
              >
                Arnav Marchareddy
              </Typography>
            </Container>

            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#eee",
                padding: 2,
                borderRadius: "8px", // Rounded corners
                marginBottom: "1rem",
              }}
            >
              <Image
                src={jeffreyPfp}
                alt="Jeffrey Busold profile picture"
                width={100}
                height={100}
                style={{
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginRight: "1rem",
                }}
              />
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bold" }}
              >
                Jeffrey Busold
              </Typography>
            </Container>

            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#eee",
                padding: 2,
                borderRadius: "8px", // Rounded corners
                marginBottom: "1rem",
              }}
            >
              <Image
                src={michaelPfp}
                alt="Michael Socas profile picture"
                width={100}
                height={100}
                style={{
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginRight: "1rem",
                }}
              />
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bold" }}
              >
                Michael Socas
              </Typography>
            </Container>

            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#eee",
                padding: 2,
                borderRadius: "8px", // Rounded corners
                marginBottom: "1rem",
              }}
            >
              <Image
                src={owenPfp}
                alt="Owen Truong profile picture"
                width={100}
                height={100}
                style={{
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginRight: "1rem",
                }}
              />
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bold" }}
              >
                Owen Truong
              </Typography>
            </Container>

            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#eee",
                padding: 2,
                borderRadius: "8px", // Rounded corners
                marginBottom: "1rem",
              }}
            >
              <Image
                src={ryanPfp}
                alt="Ryan Lee profile picture"
                width={100}
                height={100}
                style={{
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginRight: "1rem",
                }}
              />
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bold" }}
              >
                Ryan Lee
              </Typography>
            </Container>

            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#eee",
                padding: 2,
                borderRadius: "8px", // Rounded corners
                marginBottom: "1rem",
              }}
            >
              <Image
                src={terrencePfp}
                alt="Terrence Zhang profile picture"
                width={100}
                height={100}
                style={{
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginRight: "1rem",
                }}
              />
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bold" }}
              >
                Terrence Zhang
              </Typography>
            </Container>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
