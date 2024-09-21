//Based on code from https://github.com/SE4AIResearch/AntiCopyPaster_Website_Fall2023/tree/main
"use client"; // This directive allows the component to run on the client side.
import { Box, Container, Link, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";
import "../globals.css";
import "./sprint.css";

export default function Sprints() {
  return (
    <Box>
      <ResponsiveAppBar />

      <div className="bubble">
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
      </div>
  
        
    </Box>
  );
}
