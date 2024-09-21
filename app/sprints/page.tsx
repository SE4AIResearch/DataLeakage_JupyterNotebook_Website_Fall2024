"use client"; // This directive allows the component to run on the client side.
import { Box, Container, Link, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";
import "../globals.css";

export default function Sprints() {
  return (
    <Box>
      <ResponsiveAppBar />
      <h2>Sprint 1</h2>
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
                <h3>Install Docker</h3>
                Members Involved: All
                <p>Done</p>
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
      </Table>
  
        
    </Box>
  );
}
