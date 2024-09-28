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

      {/* <div className="bubble">
        <h1>Sprint 1</h1>
        <div className="tasks">
          <div className="task" data-status="Done">
              <span className="tag">Done</span>
              <h2>Split Team into Groups</h2>
              <p>Members Involved: All</p>
          </div>
          <div className="task" data-status="Done">
              <span className="tag">Done</span>
              <h2>Review original codebase</h2>
              <p>Members Involved: All</p>
            </div>
        </div>
      </div>

      <div className="bubble">
        <h1>Sprint 2</h1>
        <div className="tasks">
          <div className="task" data-status="Done">
              <span className="tag">Done</span>
              <h2>Read Fall 2023 Report</h2>
              <p>Members Involved: All</p>
          </div>
          <div className="task" data-status="Done">
              <span className="tag">Done</span>
              <h2>Install Docker</h2>
              <p>Members Involved: All</p>
          </div>
          <div className="task" data-status="Done">
              <span className="tag">Done</span>
              <h2>Create Short Quiz</h2>
              <p>Members Involved: Owen</p>
          </div>
          <div className="task" data-status="Done">
              <span className="tag">Done</span>
              <h2>Complete Short Quiz</h2>
              <p>Members Involved: Michael, Terrence, Arnav, Ryan, Jeffrey</p>
          </div>
          <div className="task" data-status="Done">
              <span className="tag">Done</span>
              <h2>Create Test VSCode Extension</h2>
              <p>Members Involved: All</p>
          </div>
        </div>
      </div> */}

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
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            Split Teams Into Groups
          </Typography>
          <Typography component="p">Members Involved: All</Typography>
        </Container>

        <Container className="complete">
          <Chip label="Done" color="success" sx={{ fontSize: "1rem" }} />
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", color: "black" }}
          >
            Review Original Codebase
          </Typography>
          <Typography component="p">Members Involved: All</Typography>
        </Container>
      </Box>
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
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            Read Fall 2023 Report
          </Typography>
          <Typography component="p">Members Involved: All</Typography>
        </Container>

        <Container className="complete">
          <Chip label="Done" color="success" sx={{ fontSize: "1rem" }} />
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            Install Docker
          </Typography>
          <Typography component="p">Members Involved: All</Typography>
        </Container>
        <Container className="complete">
          <Chip label="Done" color="success" sx={{ fontSize: "1rem" }} />
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            Create Short Quiz
          </Typography>
          <Typography component="p">Members Involved: Owen</Typography>
        </Container>

        <Container className="complete">
          <Chip label="Done" color="success" sx={{ fontSize: "1rem" }} />
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            Complete Short Quiz
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Michael, Terrence, Arnav, Ryan, Jeffrey
          </Typography>
        </Container>
        <Container className="complete">
          <Chip label="Done" color="success" sx={{ fontSize: "1rem" }} />
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            Create Test VSCode Extension
          </Typography>
          <Typography component="p">Members Involved: All</Typography>
        </Container>
        </Box>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ px: 5, pt: 5 }}
      >
        Sprint 3
      </Typography>

      <Box className = "box-scroll">
        <Container className = "complete">
          <Chip label="Done" color="success" sx={{fontWeight: "bold"}}/>
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            Understand What Needs to Be Parsed from CSV and Facts File
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Terrence
          </Typography>
        </Container>

        <Container className = "complete">
          <Chip label="Done" color="success" sx={{fontWeight: "bold"}}/>
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            Implement Button for VS Code Extension
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Owen
          </Typography>
        </Container>

        <Container className = "complete">
          <Chip label="Done" color="success" sx={{fontWeight: "bold"}}/>
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            Understand What Needs to Be Parsed from CSV and Facts File
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Terrence
          </Typography>
        </Container>

        <Container className = "complete">
          <Chip label="Done" color="success" sx={{fontWeight: "bold"}}/>
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            Understand What Needs to Be Parsed from CSV and Facts File
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Terrence
          </Typography>
        </Container>

        <Container className = "complete">
          <Chip label="Done" color="success" sx={{fontWeight: "bold"}}/>
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            Figure Out Tasks for Website
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Michael, Ryan, Jeffrey
          </Typography>
        </Container>

        <Container className = "complete">
          <Chip label="Done" color="success" sx={{fontWeight: "bold"}}/>
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            Build Website with Next.js
          </Typography>
          <Typography component="p" sx={{ whiteSpace: "normal" }}>
            Members Involved: Michael, Ryan, Jeffrey
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
