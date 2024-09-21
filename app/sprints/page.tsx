"use client"; // This directive allows the component to run on the client side.
import { Box, Container, Link, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";

export default function Sprints() {
  return (
    <Box>
      <ResponsiveAppBar />
      <h2>Sprint 1</h2>
      <Table sx={{ maxWidth: 650 }} aria-label="Example static collection table">
        <TableHead>
          <TableRow>
          <TableCell>
            <Box sx={{ p: 2, border: '1px dashed grey', width: 200 }}>
              Split team into two groups
            </Box>
            </TableCell>

            <TableCell>
            <Box sx={{ p: 2, border: '1px dashed grey', width: 200 }}>
              Review original codebase
            </Box>
            </TableCell>
          </TableRow>
        </TableHead>
        </Table>
  
        
    </Box>
  );
}
