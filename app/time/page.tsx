"use client"; // This directive allows the component to run on the client side.
import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";

function createData(
  week: number,
  arnav: number,
  jeffrey: number,
  michael: number,
  owen: number,
  ryan: number,
  terrence: number
) {
  return { week, arnav, jeffrey, michael, owen, ryan, terrence };
}
// Add row data here
// Alphabetical order: Arnav Jeffrey Michael Owen Ryan Terrence
const rows = [
  createData(1, 2, 2, 2, 2, 2, 2),
  createData(2, 3.5, 3, 3, 8.92, 4, 4),
  createData(3, 9, 5, 1.5, 11.43, 13, 4),
  createData(4, 15, 2, 2, 7.5, 4, 6),
  createData(5, 5, 2, 2, 7.17, 3, 4),
  createData(6, 5, 2, 2, 6.83, 3, 4),
  createData(7, 3, 1, 2, 3.58, 3, 1),
  createData(8, 3, 1, 2, 7.75, 4, 6),
  createData(9, 7, 6, 3, 8.83, 3, 10),
  createData(10, 6, 1.5, 1.5, 6.67, 8, 2),
  createData(11, 8, 4, 4, 16.67, 8, 10),
  createData(12, 2, 3, 1, 5.56, 2, 1),
  createData(13, 3, 1, 1, 4.5, 1, 1),
  createData(14, 3, 2, 2, 4.66, 3, 3),
  createData(15, 2.5, 1, 1, 3.5, 1, 2),
];

export default function SignUpPage() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Container
        maxWidth="sm"
        sx={{ textAlign: "center", pt: "5vh", pb: "2vh" }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Weekly Time Commitments
        </Typography>
        <Typography variant="h6" gutterBottom>
          Time counted by the hour.
        </Typography>
      </Container>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="time tracking table">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "aquamarine",
              }}
            >
              <TableCell sx={{ fontSize: "1em", fontWeight: "bold" }}>
                Week
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "1em", fontWeight: "bold" }}
              >
                Arnav
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "1em", fontWeight: "bold" }}
              >
                Jeffrey
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "1em", fontWeight: "bold" }}
              >
                Michael
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "1em", fontWeight: "bold" }}
              >
                Owen
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "1em", fontWeight: "bold" }}
              >
                Ryan
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontSize: "1em", fontWeight: "bold" }}
              >
                Terrence
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.week}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ fontSize: "1em" }}>
                  {row.week}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1em" }}>
                  {row.arnav}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1em" }}>
                  {row.jeffrey}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1em" }}>
                  {row.michael}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1em" }}>
                  {row.owen}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1em" }}>
                  {row.ryan}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1em" }}>
                  {row.terrence}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
