//Based on code from https://github.com/SE4AIResearch/AntiCopyPaster_Website_Fall2023/tree/main

/* sx={{
    display: "inline-block",
    alignItems: "center",
    backgroundColor: "#eee",
    border: "1px solid",
    borderColor: "green",
    padding: 2,
    borderRadius: "8px",
    marginBottom: "1rem",
    width: "350px",
    minWidth: "350px",
    mx: "0.5rem"
  }} */
"use client"; // This directive allows the component to run on the client side.
import { Box, Chip, Container, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";
import "./sprint.css";

export default function Sprints() {
  return (
    <Box>
      <ResponsiveAppBar />

      {/* Sprint 1 */}
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ px: 5, pt: 5 }}
      >
        Sprint 1
      </Typography>
      <Box className="box-noscroll">
        <Container className="complete">
          <Chip label="Done" color="success" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Split Teams Into Groups
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: All
          </Typography>
        </Container>
        <Container className="complete">
          <Chip label="Done" color="success" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Review Original Codebase
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: All
          </Typography>
        </Container>
      </Box>

      {/* Sprint 2 */}
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ px: 5, pt: 5 }}
      >
        Sprint 2
      </Typography>
      <Box className="box-scroll">
        <Container className="complete">
          <Chip label="Done" color="success" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Read Fall 2023 Report
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: All
          </Typography>
        </Container>

        <Container className="complete">
          <Chip label="Done" color="success" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Install Docker
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: All
          </Typography>
        </Container>
        <Container className="complete">
          <Chip label="Done" color="success" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Create Short Quiz
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Owen
          </Typography>
        </Container>

        <Container className="complete">
          <Chip label="Done" color="success" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Complete Short Quiz
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Michael, Terrence, Arnav, Ryan, Jeffrey
          </Typography>
        </Container>
        <Container className="complete">
          <Chip label="Done" color="success" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Create Test VSCode Extension
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: All
          </Typography>
        </Container>
      </Box>

      {/* Sprint 3 */}
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ px: 5, pt: 5 }}
      >
        Sprint 3
      </Typography>

      <Box className="box-scroll">
        <Container className="complete">
          <Chip label="In Progress" color="info" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Understand Which CSV & Facts Files to Parse
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Terrence
          </Typography>
        </Container>

        <Container className="complete">
          <Chip label="Done" color="success" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Implement Button for VS Code Extension
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Owen
          </Typography>
        </Container>

        <Container className="complete">
          <Chip label="Done" color="success" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Figure Out Tasks for Website
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Michael, Ryan, Jeffrey
          </Typography>
        </Container>

        <Container className="complete">
          <Chip label="In Progress" color="info" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Build Website with Next.js
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Michael, Ryan, Jeffrey
          </Typography>
        </Container>

        <Container className="complete">
          <Chip label="Failed" color="error" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Try SWIG (Failed Due to Relying on Souffle)
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Arnav
          </Typography>
        </Container>

        <Container className="complete">
          <Chip label="Failed" color="error" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Try Visual Studio CLI with Chocolatey and vcpkg (Failed Due to
            Errors)
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Owen, Arnav
          </Typography>
        </Container>

        <Container className="complete">
          <Chip label="Failed" color="error" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Try Visual Studio GUI (Failed Because VS Didn&apos;t Recognize it as
            a Valid Project)
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Arnav
          </Typography>
        </Container>
      </Box>

      {/* Sprint 4 */}
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ px: 5, pt: 5 }}
      >
        Sprint 4
      </Typography>

      <Box className="box-scroll">
        <Container className="complete">
          <Chip label="In Progress" color="info" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Understand Which CSV & Facts Files to Parse
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Terrence
          </Typography>
        </Container>

        <Container className="complete">
          <Chip label="In Progress" color="info" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Develop Button for VS Code Extension
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Owen
          </Typography>
        </Container>

        <Container className="complete">
          <Chip label="In Progress" color="info" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Keep Researching Docker-free Algorithm
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Arnav
          </Typography>
        </Container>

        <Container className="complete">
          <Chip label="Done" color="success" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Update Info to All Website Pages
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Michael, Ryan, Jeffrey
          </Typography>
        </Container>

        <Container className="complete">
          <Chip label="Done" color="success" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Deploy Website to Vercel
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Ryan
          </Typography>
        </Container>
      </Box>

      {/* Sprint 5 */}
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ px: 5, pt: 5 }}
      >
        Sprint 5
      </Typography>

      <Box className="box-scroll">
        <Container className="complete">
          <Chip label="In Progress" color="info" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Understand Which CSV & Facts Files to Parse
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Terrence
          </Typography>
        </Container>

        <Container className="complete">
          <Chip label="In Progress" color="info" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Develop Button for VS Code Extension
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Owen
          </Typography>
        </Container>

        <Container className="complete">
          <Chip label="In Progress" color="info" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Keep Researching Docker-free Algorithm
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Arnav
          </Typography>
        </Container>

        <Container className="complete">
          <Chip label="Done" color="success" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", whiteSpace: "normal" }}
          >
            Create Tests for Button
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Ryan, Michael, Jeffrey
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
