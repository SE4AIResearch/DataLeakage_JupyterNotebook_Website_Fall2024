"use client"; // This directive allows the component to run on the client side.
import { Box, Container, Link, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";

export default function SignUpPage() {
  return (
    <Box>
      <ResponsiveAppBar />
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Week</TableCell>
            <TableCell align="center">Owen</TableCell>
            <TableCell align="center">Michael</TableCell>
            <TableCell align="center">Arnav</TableCell>
            <TableCell align="center">Ryan</TableCell>
            <TableCell align="center">Jeffrey</TableCell>
            <TableCell align="center">Terrence</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell align="center">2</TableCell>
            <TableCell align="center">2</TableCell>
            <TableCell align="center">2</TableCell>
            <TableCell align="center">2</TableCell>
            <TableCell align="center">2</TableCell>
            <TableCell align="center">2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell align="center">8.92</TableCell>
            <TableCell align="center">3</TableCell>
            <TableCell align="center">3.5</TableCell>
            <TableCell align="center">4</TableCell>
            <TableCell align="center">3</TableCell>
            <TableCell align="center">3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}
