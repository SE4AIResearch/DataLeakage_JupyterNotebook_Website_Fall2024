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
  owen: number,
  michael: number,
  arnav: number,
  ryan: number,
  jeffrey: number,
  terrence: number
) {
  return { week, owen, michael, arnav, ryan, jeffrey, terrence };
}
// Add row data here
const rows = [
  createData(1, 2, 2, 2, 2, 2, 2),
  createData(2, 8.92, 3, 3.5, 4, 3, 3),
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
                Owen
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
                Arnav
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
                Jeffrey
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
                  {row.owen}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1em" }}>
                  {row.michael}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1em" }}>
                  {row.arnav}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1em" }}>
                  {row.ryan}
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1em" }}>
                  {row.jeffrey}
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
