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
        <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
          What is Overlap Leakage?
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 4 }}>
          Overlap leakage refers to a situation in which there is unintentional
          sharing or overlap of information between the training and test
          datasets in a machine learning model.
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
          Causes of Overlap Leakage:
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 4 }}>
          This can occur when the same or highly similar data points are present
          in both the training and test sets. When the model is trained on a
          dataset that shares information with the test set, it may lead to
          overly optimistic performance evaluations and may not generalize well
          to new, unseen data.
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
          Solutions for Overlap Leakage:
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Fix overlap data leakage by using independent test data for
          evaluation, ensuring that no data points from the training set are
          present in the test set. This approach maintains the integrity of
          model evaluation by preserving the independence between training and
          testing data. Some techniques to prevent overlap leakage include:
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

        <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
          Example of Overlap Leakage Code
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Pretend that the examples shown below are Jupyter Notebook files. In
          the code below, line 9 has fit_resample(X,y) before train_test_split.
        </Typography>
        {/* GitHub Gist of code before Quick Fix */}
        <Frame
          style={{ width: "100%", height: "500px" }}
          initialContent={`<!DOCTYPE html><html><head></head><body><script src="${`https://gist.github.com/Ryantron/9f671ef62fa92451d7dbdef1f0e73cc2.js`}"></script></body></html>`}
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
          Our VS Code extension can perform Quick Fix to fix overlap leakage
          through a naive manual Quick Fix or through the GitHub Copilot
          AI-based Quick Fix. The variable associated with data leakage would be
          highlighted in red, and when you hover over it, you would see a pop up
          that says &quot;Data Leakage: OverlapLeakage.&quot; The pop up
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
          Once the manual quick fix was performed, it introduced a new dataset
          called X_X_train_new, separate from the original data, and a
          corresponding transformation. These changes ensure that the model
          evaluation and transformation processes are performed on entirely new
          data, preventing overlap between training and test data. The added
          test and transformation steps help maintain independence between
          datasets. However, using the transformed training data for evaluation
          can inadvertently maintain overlap if not handled separately.
        </Typography>
        {/* GitHub Gist of code after manual Quick Fix */}
        <Frame
          style={{ width: "100%", height: "500px" }}
          initialContent={`<!DOCTYPE html><html><head></head><body><script src="${`https://gist.github.com/Ryantron/fee392557bf9e227a0341a4922305d39.js`}"></script></body></html>`}
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
          Once the Copilot quick fix was performed, the overlap leakage is
          addressed by altering the point at which SMOTE oversampling is
          applied. Initially, the oversampling was applied before data
          splitting, which could lead to overlap between training and test
          datasets. By applying SMOTE only on the training data after the
          initial train-test split, this approach prevents any overlap or bias
          that could arise from synthetic data influencing both training and
          testing phases. Consequently, model evaluation remains valid and
          unbiased, as the test data is independent and reflects real-world
          scenarios.
        </Typography>
        {/* GitHub Gist of code after Copilot Quick Fix */}
        <Frame
          style={{ width: "100%", height: "500px" }}
          initialContent={`<!DOCTYPE html><html><head></head><body><script src="${`https://gist.github.com/Ryantron/ca0868e609546f2fb086cecb7ce3c791.js`}"></script></body></html>`}
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
