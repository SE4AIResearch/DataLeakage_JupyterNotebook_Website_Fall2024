"use client"; // This directive allows the component to run on the client side.
import { Box, Container, Link, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";
import "../globals.css";
import "./sprint.css";

export default function Sprints() {
  return (
    <Box>
      <ResponsiveAppBar />
      {/* <h2>Sprint 1</h2>
      <Table sx={{ maxWidth: 650 }} aria-label="Example static collection table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Box sx={{ p: 1, border: '1px dashed grey', width: 250, height: 120 }}>
                <h3>Split team into two group.</h3>
                Members Involved: All
                <p>Done</p>
              </Box>
              </TableCell>

              <TableCell>
              <Box sx={{ p: 1, border: '1px dashed grey', width: 250, height: 120 }}>
                <h3>Review original codebase</h3>
                Members Involved: All
                <p>Done</p>
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <h2>Sprint 2</h2>
      <Table sx={{ maxWidth: 650 }} aria-label="Example static collection table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Box sx={{ p: 1, border: '1px dashed grey', width: 250, height: 120 }}>
                <h3>Read Fall 2023 Report</h3>
                Members Involved: All
                <p>Done</p>
              </Box>
            </TableCell>

            <TableCell>
              <Box sx={{ p: 1, border: '1px dashed grey', width: 250, height: 120 }}>
                <span>Done</span>
                <h3>Install Docker</h3>
                Members Involved: All
                
              </Box>
            </TableCell>

            <TableCell>
              <Box sx={{ p: 1, border: '1px dashed grey', width: 250, height: 120 }}>
                <h3>Create Short Quiz</h3>
                Members Involved: Owen
                <p>Done</p>
              </Box>
            </TableCell>

            <TableCell>
              <Box sx={{ p: 1, border: '1px dashed grey', width: 400, height: 120 }}>
                <h3>Complete Short Quiz</h3>
                Members Involved: Michael, Terrence, Arnav, Ryan, Jeffrey
                <p>Done</p>
              </Box>
            </TableCell>

            <TableCell>
              <Box sx={{ p: 1, border: '1px dashed grey', width: 250, height: 120 }}>
                <h3>Create Test VSCode Extension</h3>
                 Members Involved: All
                <p>Done</p>
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table> */}

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
