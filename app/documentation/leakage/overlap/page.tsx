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

export default function Overlap() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Container maxWidth="md" sx={{ textAlign: "center", pt: "5vh" }}>
        <Typography variant="h4" gutterBottom>
          What is Overlap Leakage?
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 4 }}>
          Overlap leakage refers to a situation in which there is unintentional
          sharing or overlap of information between the training and test
          datasets in a machine learning model.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Causes of Overlap Leakage:
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 4 }}>
          This can occur when the same or highly similar data points are present
          in both the training and test sets. When the model is trained on a
          dataset that shares information with the test set, it may lead to
          overly optimistic performance evaluations and may not generalize well
          to new, unseen data.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Solutions for Overlap Leakage:
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Managing the split between the training and testing datasets means
          reducing the risk of overlap leakage and obtaining more reliable
          performance evaluations for ML model.
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
                  Randomized Splitting: use a randomized approach when splitting
                  the dataset into training and testing sets. This helps ensure
                  that instances in the training set are not overly similar to
                  instances in the test set.
                </Typography>
              }
            />
          </ListItem>
          <Divider component="li" sx={{ bgcolor: "text.primary" }} />
          <ListItem>
            <ListItemText
              primary={
                <Typography variant="h6">
                  Stratified Sampling: if the dataset has class imbalances, use
                  stratified sampling to maintain the distribution of classes in
                  both the training and testing sets. This can help prevent
                  situations where certain classes are overrepresented or
                  underrepresented in one of the sets.
                </Typography>
              }
            />
          </ListItem>
          <Divider component="li" sx={{ bgcolor: "text.primary" }} />
          <ListItem>
            <ListItemText
              primary={
                <Typography variant="h6">
                  Temporal Splitting: if the data has a temporal dimension,
                  split the dataset based on time. The training set should
                  include data from earlier time periods, while the testing set
                  should include data from later time periods. This helps
                  simulate a more realistic scenario where the model needs to
                  generalize to future, unseen data.
                </Typography>
              }
            />
          </ListItem>
          <Divider component="li" sx={{ bgcolor: "text.primary" }} />
          <ListItem>
            <ListItemText
              primary={
                <Typography variant="h6">
                  Geographical Splitting: in some cases, especially in spatial
                  data, geographical splitting can be useful. Ensure that
                  instances from specific geographical regions are present in
                  either the training or testing set but not in both.
                </Typography>
              }
            />
          </ListItem>
        </List>

        <Typography variant="h4" gutterBottom>
          Example of Overlap Leakage Code
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          In this example below, the code had sampling happen before split. As
          seen in the code, line 9 has fit_resample(X,y) before
          train_test_split.
        </Typography>
        {/* GitHub Gist of Cindy Tran's code */}
        <Frame
          style={{ width: "100%", height: "500px" }}
          initialContent={`<!DOCTYPE html><html><head></head><body><script src="${`https://gist.github.com/cindy795tran/bb7596387f986b6477002e7c6965bc87.js`}"></script></body></html>`}
        >
          <div />
        </Frame>

        <Typography variant="h4" sx={{ marginTop: 4 }} gutterBottom>
          How Quick Fix Would Be Performed
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 4 }}>
          Our VS Code extension can perform Quick Fix to fix overlap leakage
          through: TBD
        </Typography>
        <Typography variant="h4" gutterBottom>
          Quick Fix Result
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Once the quick fix is performed, you can see that the train_test_split
          line is happening before the fit_resample line.
        </Typography>
        {/* GitHub Gist of Cindy Tran's code */}
        <Frame
          style={{ width: "100%", height: "500px" }}
          initialContent={`<!DOCTYPE html><html><head></head><body><script src="${`https://gist.github.com/cindy795tran/f64021175497534b85cb55919b6cb8ab.js`}"></script></body></html>`}
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
