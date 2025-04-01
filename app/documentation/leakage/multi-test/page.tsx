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
          Pretend that the examples shown below are Jupyter Notebook files. In
          the code below, X_test is used more than once (in line 14 and line
          18), hence the multi-test leakage.
        </Typography>
        {/* GitHub Gist of code before Quick Fix */}
        <Frame
          style={{ width: "100%", height: "500px" }}
          initialContent={`<!DOCTYPE html><html><head></head><body><script src="${`https://gist.github.com/Ryantron/8888a3e833105f7f86f917303ab31bc2.js`}"></script></body></html>`}
        >
          <div />
        </Frame>

        <Typography variant="h4" sx={{ marginTop: 4 }} gutterBottom>
          How Quick Fix Would Be Performed
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Our VS Code extension can perform Quick Fix to fix multi-test leakage
          through a naive manual Quick Fix or through the GitHub Copilot
          AI-based Quick Fix. The variable that is being used more than once
          would be highlighted in red, and when you hover over it, you would see
          a pop up that says &quot;Data Leakage: MultiTestLeakage.&quot; The
          pop up displays 3 options at the bottom, with one option that says
          &quot;Quick Fix&quot;: select this to open the Quick Fix menu. Then,
          you may select one of the light bulb icons to perform the manual Quick
          Fix or select the option &quot;Fix using Copilot&quot; to perform the
          Copilot AI-based Quick Fix. You must have the GitHub Copilot VS Code
          extension to fix using Copilot, which is discussed in the installation
          guide. These Quick Fix options attempt to resolve the data leakage.
        </Typography>
        <Box sx={{ marginBottom: 4 }}>
          <Link href="/documentation/get-started/install-guide" variant="h6">
            Installation Guide
          </Link>
        </Box>

        <Typography variant="h4" gutterBottom>
          Manual Quick Fix Result
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Once the manual quick fix was performed, the last three lines were
          added to the Jupyter Notebook as shown below. It introduced a new test
          data evaluation process to address the multi-test leakage issue. The
          last three lines load a separate test dataset (X_X_test_new,
          y_X_test_new), transform it using the same feature selection model,
          and evaluate the final model&apos;s performance on this new data. This
          process addressed multi-test leakage by ensuring that the evaluation
          is conducted on data that was not involved in the training, providing
          a more accurate assessment of the model&apos;s performance.
        </Typography>
        {/* GitHub Gist of code after manual Quick Fix */}
        <Frame
          style={{ width: "100%", height: "500px" }}
          initialContent={`<!DOCTYPE html><html><head></head><body><script src="${`https://gist.github.com/Ryantron/7165d330ec6050a27beba4c62cd1652e.js`}"></script></body></html>`}
        >
          <div />
        </Frame>

        <Typography variant="h4" gutterBottom sx={{ marginTop: 4 }}>
          GitHub Copilot Quick Fix Result
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Once the Copilot quick fix was performed, the code was modified to
          introduce a validation set (X_val, y_val) for model scoring,
          separating it from the final test set to reduce multi-test leakage.
          However, using X_val with the SelectPercentile transformation applied
          to the entire dataset inadvertently introduced pre-processing data
          leakage, as the feature selector was fit on the entire dataset,
          leading to the &quot;vectorizer fit on train and test data
          together&quot; issue.
        </Typography>
        {/* GitHub Gist of code after Copilot Quick Fix */}
        <Frame
          style={{ width: "100%", height: "500px" }}
          initialContent={`<!DOCTYPE html><html><head></head><body><script src="${`https://gist.github.com/Ryantron/ffb4b39078e636394b63715182d88f19.js`}"></script></body></html>`}
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
