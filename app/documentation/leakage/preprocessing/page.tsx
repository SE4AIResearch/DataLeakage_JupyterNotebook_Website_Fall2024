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
        <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
          What is Preprocessing Leakage?
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 4 }}>
          Preprocessing leakage occurs when information from the test set
          influences the preprocessing steps applied to the training set.
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
          Causes of Preprocessing Leakage:
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 4 }}>
          If preprocessing steps are influenced by information from the test
          set, it can lead to overly optimistic performance estimates during
          model development and may result in poor generalization to new, unseen
          data.
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
          Solutions for Preprocessing Leakage:
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Fix preprocessing leakage by moving feature selection after the
          train/test split and ensuring that any data-driven preprocessing steps
          are not influenced by test data. This approach helps you accurately
          evaluate your model&apos;s performance on data it has not seen during
          training. Some techniques to prevent preprocessing leakage include:
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

        <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
          Example of Preprocessing Leakage Code
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Pretend that the examples shown below are Jupyter Notebook files. In
          the code below, there is preprocessing leakage because there is no
          split before the feature selection.
        </Typography>
        {/* GitHub Gist of code before Quick Fix */}
        <Frame
          style={{ width: "100%", height: "500px" }}
          initialContent={`<!DOCTYPE html><html><head></head><body><script src="${`https://gist.github.com/Ryantron/e16ca813f8ad2f82ecd4ac3b126e5392.js`}"></script></body></html>`}
        >
          <div />
        </Frame>

        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginTop: 4 }}
          gutterBottom
        >
          How Quick Fix Would Be Performed
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Our VS Code extension can perform Quick Fix to fix preprocessing
          leakage through a naive manual Quick Fix or through the GitHub Copilot
          AI-based Quick Fix. The variable associated with data leakage would be
          highlighted in red, and when you hover over it, you would see a pop up
          that says &quot;Data Leakage: PreProcessingLeakage.&quot; The pop up
          displays 3 options at the bottom, with one option that says
          &quot;Quick Fix&quot;: select this to open the Quick Fix menu. Then,
          you may select one of the light bulb icons to perform the manual Quick
          Fix or select the option &quot;Fix using Copilot&quot; to perform the
          Copilot AI-based Quick Fix. You must have the GitHub Copilot VS Code
          extension to fix using Copilot, which is discussed in the installation
          guide. These Quick Fix options try to resolve the data leakage.
        </Typography>
        <Box sx={{ marginBottom: 4 }}>
          <Link href="/documentation/get-started/install-guide" variant="h6">
            Installation Guide
          </Link>
        </Box>

        <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
          Manual Quick Fix Result
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Once the manual quick fix was performed, it separated the data before
          making predictions with y_pred = gbc.predict(X_test), ensuring X_test
          was not influenced by the training processes. Initially, SelectKBest
          was applied to the entire dataset, leading to data leakage. However,
          the Quick Fix was incomplete, as SelectKBest was still not fully
          separated from the data splitting line because the train_test_split
          line was not fully transferred into a new line.
        </Typography>
        {/* GitHub Gist of code after manual Quick Fix */}
        <Frame
          style={{ width: "100%", height: "500px" }}
          initialContent={`<!DOCTYPE html><html><head></head><body><script src="${`https://gist.github.com/Ryantron/8131d261243c9da6fb6e0d8cf48ebb0f.js`}"></script></body></html>`}
        >
          <div />
        </Frame>

        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", marginTop: 4 }}
        >
          GitHub Copilot Quick Fix Result
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Once the Copilot quick fix was performed, it applied SelectKBest only
          after splitting the data, performing feature selection separately on
          the training set (X_train). This ensures that X_test remains
          independent from the feature selection process, addressing the
          preprocessing leakage. This change preserves the integrity of the test
          data by avoiding its influence on training decisions, effectively
          preventing leakage.
        </Typography>
        {/* GitHub Gist of code after Copilot Quick Fix */}
        <Frame
          style={{ width: "100%", height: "500px" }}
          initialContent={`<!DOCTYPE html><html><head></head><body><script src="${`https://gist.github.com/Ryantron/c499469bee19c43fc648cedb495a8f15.js`}"></script></body></html>`}
        >
          <div />
        </Frame>

        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginTop: 4, marginBottom: 2 }}
        >
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
