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

export default function Preprocessing() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Container maxWidth="md" sx={{ textAlign: "center", pt: "5vh" }}>
        <Typography variant="h4" gutterBottom>
          What is Preprocessing Leakage?
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 4 }}>
          Preprocessing leakage occurs when information from the test set
          influences the preprocessing steps applied to the training set.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Causes of Preprocessing Leakage:
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 4 }}>
          If preprocessing steps are influenced by information from the test
          set, it can lead to overly optimistic performance estimates during
          model development and may result in poor generalization to new, unseen
          data.
        </Typography>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Solutions for Preprocessing Leakage:
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
                  Perform Preprocessing Independently: apply preprocessing steps
                  based on information from the train set without considering
                  the test set.
                </Typography>
              }
            />
          </ListItem>
          <Divider component="li" sx={{ bgcolor: "text.primary" }} />
          <ListItem>
            <ListItemText
              primary={
                <Typography variant="h6">
                  Use Pipelines: implement preprocessing steps within a pipeline
                  to ensure consistency and prevent information flow between the
                  training and test sets.
                </Typography>
              }
            />
          </ListItem>
          <Divider component="li" sx={{ bgcolor: "text.primary" }} />
          <ListItem>
            <ListItemText
              primary={
                <Typography variant="h6">
                  Handle Missing Values Appropriately: if missing values are
                  inputed, use methods based solely on information from the
                  training set. Avoid using global statistics or values derived
                  from the test set.
                </Typography>
              }
            />
          </ListItem>
        </List>

        <Typography variant="h4" gutterBottom>
          Example of Preprocessing Leakage Code
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          In the example shown below, there is preprocessing leakage because
          there is no split before the feature selection.
        </Typography>
        {/* GitHub Gist of Cindy Tran's code */}
        <Frame
          style={{ width: "100%", height: "500px" }}
          initialContent={`<!DOCTYPE html><html><head></head><body><script src="${`https://gist.github.com/cindy795tran/d7334c53961e3f2cc3e7cf5e77b45b40.js`}"></script></body></html>`}
        >
          <div />
        </Frame>

        <Typography variant="h4" sx={{ marginTop: 4 }} gutterBottom>
          How Quick Fix Would Be Performed
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 4 }}>
          Our VS Code extension can perform Quick Fix to fix preprocessing
          leakage through: TBD
        </Typography>
        <Typography variant="h4" gutterBottom>
          Quick Fix Result
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Once the quick fix is performed, you can see that before the
          gbc.fit(X_train,y_train) line, the split() line is written before it.
        </Typography>
        {/* GitHub Gist of Cindy Tran's code */}
        <Frame
          style={{ width: "100%", height: "500px" }}
          initialContent={`<!DOCTYPE html><html><head></head><body><script src="${`https://gist.github.com/cindy795tran/fe01d134aecdddfc9eac1ceb5cb75749.js`}"></script></body></html>`}
        >
          <div />
        </Frame>

        <Typography variant="h4" sx={{ marginTop: 4, marginBottom: 2 }}>
          Other Data Leakage Types:
        </Typography>

        <Box sx={{ marginBottom: 2 }}>
          <Link href="/documentation/leakage/multi-test" variant="h6">
            Multi-Test Leakage
          </Link>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Link href="/documentation/leakage/overlap" variant="h6">
            Overlap Leakage
          </Link>
        </Box>

        {/* Add empty space at bottom */}
        <Box sx={{ height: "10vh" }}> </Box>
      </Container>
    </Box>
  );
}
