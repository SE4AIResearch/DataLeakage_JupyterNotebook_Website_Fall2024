//Based on code from https://github.com/SE4AIResearch/AntiCopyPaster_Website_Fall2023/tree/main

"use client"; // This directive allows the component to run on the client side.
import { Box, Chip, Container, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";
import { statusMUIColors, sprintData } from "./sprintData";
import "./sprint.css";

export default function Sprints() {
  return (
    <Box>
      <ResponsiveAppBar />

      {sprintData.map((sprint, i) => {
        return (
          <div key={i}>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ px: 5, pt: 5 }}
            >
              Sprint {i + 1}
            </Typography>
            <Box className="box-scroll">
              {sprint.map((task, j) => {
                return (
                  <Container className="complete" key={j}>
                    <Chip
                      label={task.status}
                      color={statusMUIColors[task.status]}
                      sx={{ fontSize: "1rem" }}
                    />
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", whiteSpace: "normal" }}
                    >
                      {task.title}
                    </Typography>
                    <Typography sx={{ whiteSpace: "normal" }}>
                      Members Involved: {task.members.join(", ")}
                    </Typography>
                  </Container>
                );
              })}
            </Box>
          </div>
        );
      })}
    </Box>
  );
}
