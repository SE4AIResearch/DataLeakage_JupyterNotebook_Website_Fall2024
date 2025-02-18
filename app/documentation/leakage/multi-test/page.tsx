"use client"; // This directive allows the component to run on the client side.
import {
  Box,
  Container,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import ResponsiveAppBar from "@/components/navbar";
import Frame from "react-frame-component";

export default function Multitest() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Container maxWidth="md" sx={{ textAlign: "center", pt: "5vh" }}>
        <Typography variant="h4" gutterBottom>
          What is Multi-test Leakage?
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 4 }}>
          Multi-test leakage refers to a situation in which information from
          multiple tests or experiments is unintentionally shared or used in a
          way that compromises the validity or independence of the tests.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Causes of Multi-test Leakage:
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 4 }}>
          Potential for multi-test leakage arises because the tokenization and
          padding processes are applied to the entire dataset before splitting
          it into training, validation, and test sets.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Solutions for Multi-test Leakage:
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Overall, by applying tokenization and padding separately for each
          split, one can ensure that the information regarding the structure of
          the data (e.g., token sequences, padding) is not shared between the
          train, validation, and test sets, reducing the risk of multi-test
          leakage.
        </Typography>
        <List
          sx={{
            border: "1px solid",
            borderRadius: 2,
            marginBottom: 4,
          }}
        >
          <ListItem>
            <ListItemText
              primary={
                <Typography variant="h6">
                  Tokenization and Padding Within Each Split: perform the
                  tokenization and padding separately for the train, validation,
                  and test sets after the split. This ensures that the
                  preprocessing steps are independent for each set, reducing the
                  risk of info leak.
                </Typography>
              }
            />
          </ListItem>
          <Divider component="li" sx={{ bgcolor: "text.primary" }} />
          <ListItem>
            <ListItemText
              primary={
                <Typography variant="h6">
                  Tokenization and Padding in a Pipeline: use a pipeline to
                  encapsulate the tokenization and padding processes. This
                  ensures that the same transformations are applied consistently
                  across different sets.
                </Typography>
              }
            />
          </ListItem>
        </List>

        <Typography variant="h4" gutterBottom>
          Example of Multi-test Leakage Code
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          In the example shown shown below, X_test is used more than once (in
          line 14 and line 18), hence the mult-test leakage.
        </Typography>
        {/* GitHub Gist of Cindy Tran's code */}
        <Frame
          style={{ width: "100%", height: "500px" }}
          initialContent={`<!DOCTYPE html><html><head></head><body><script src="${`https://gist.github.com/cindy795tran/ef1382e548d49a2ed8c2400de257a846.js`}"></script></body></html>`}
        >
          <div />
        </Frame>

        <Typography variant="h4" sx={{ marginTop: 4 }} gutterBottom>
          How Quick Fix Would Be Performed
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 4 }}>
          Our VS Code extension can perform Quick Fix to fix multi-test leakage
          through: TBD
        </Typography>
        <Typography variant="h4" gutterBottom>
          Quick Fix Result
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Once the quick fix is performed, you can see that line 14 and line 18
          now have different variable names for X_test. Line 14 X_test is now
          renamed to X_test_0 and line 18 X_test is renamed to X_test_1.
        </Typography>
        {/* GitHub Gist of Cindy Tran's code */}
        <Frame
          style={{ width: "100%", height: "500px" }}
          initialContent={`<!DOCTYPE html><html><head></head><body><script src="${`https://gist.github.com/cindy795tran/8b81227b3c2d4a8daa12bf80f488233b.js`}"></script></body></html>`}
        >
          <div />
        </Frame>

        <Typography variant="h4" sx={{ marginTop: 4, marginBottom: 2 }}>
          Other Data Leakage Types:
        </Typography>

        <Box sx={{ marginBottom: 2 }}>
          <Link href="/documentation/leakage/overlap" variant="h6">
            Overlap Leakage
          </Link>
        </Box>
        <Box sx={{ marginBottom: 6 }}>
          <Link href="/documentation/leakage/preprocessing" variant="h6">
            Preprocessing Leakage
          </Link>
        </Box>

        {/* Add empty space at bottom */}
        <Box sx={{ height: "10vh" }}> </Box>
      </Container>
    </Box>
  );
}
