export const statusMUIColors: {
  [key: string]:
    | "default"
    | "success"
    | "info"
    | "error"
    | "primary"
    | "secondary"
    | "warning";
} = {
  Done: "success",
  "In Progress": "info",
  Failed: "error",
};

type Task = {
  title: string;
  status: "Done" | "In Progress" | "Failed";
  members: string[];
};

export const sprintData: Task[][] = [
  // Sprint 1
  [
    {
      title: "Split Teams Into Groups",
      status: "Done",
      members: ["All"],
    },
    {
      title: "Review Original Codebase",
      status: "Done",
      members: ["All"],
    },
  ],
  // Sprint 2
  [
    {
      title: "Read Fall 2023 Report",
      status: "Done",
      members: ["All"],
    },
    {
      title: "Install Docker",
      status: "Done",
      members: ["All"],
    },
    {
      title: "Create Short Quiz",
      status: "Done",
      members: ["Owen"],
    },
    {
      title: "Complete Short Quiz",
      status: "Done",
      members: ["Arnav", "Jeffrey", "Michael", "Ryan", "Terrence"],
    },
    {
      title: "Create Test VSCode Extension",
      status: "Done",
      members: ["All"],
    },
  ],
  // Sprint 3
  [
    {
      title: "Understand Which CSV & Facts Files to Parse",
      status: "In Progress",
      members: ["Terrence"],
    },
    {
      title: "Implement Button for VS Code Extension",
      status: "Done",
      members: ["Owen"],
    },
    {
      title: "Figure Out Tasks for Website",
      status: "Done",
      members: ["Jeffrey", "Michael", "Ryan"],
    },
    {
      title: "Build Website with Next.js",
      status: "In Progress",
      members: ["Jeffrey", "Michael", "Ryan"],
    },
    {
      title: "Try SWIG (Failed Due to Relying on Souffle)",
      status: "Failed",
      members: ["Arnav"],
    },
    {
      title:
        "Try Visual Studio CLI with Chocolatey and vcpkg (Failed Due to Errors)",
      status: "Failed",
      members: ["Arnav", "Owen"],
    },
    {
      title:
        "Try Visual Studio GUI (Failed Because VS Didn't Recognize it as a Valid Project)",
      status: "Failed",
      members: ["Arnav"],
    },
  ],
  // Sprint 4
  [
    {
      title: "Understand Which CSV & Facts Files to Parse",
      status: "In Progress",
      members: ["Terrence"],
    },
    {
      title: "Develop Button for VS Code Extension",
      status: "In Progress",
      members: ["Owen"],
    },
    {
      title: "Research Docker-Free Algorithm",
      status: "In Progress",
      members: ["Arnav"],
    },
    {
      title: "Update Info to All Website Pages",
      status: "Done",
      members: ["Jeffrey", "Michael", "Ryan"],
    },
    {
      title: "Deploy Website to Vercel",
      status: "Done",
      members: ["Ryan"],
    },
  ],
  // Sprint 5
  [
    {
      title: "Understand Which CSV & Facts Files to Parse",
      status: "In Progress",
      members: ["Terrence"],
    },
    {
      title: "Develop Button for VS Code Extension",
      status: "In Progress",
      members: ["Owen"],
    },
    {
      title: "Research Docker-Free Algorithm",
      status: "In Progress",
      members: ["Arnav"],
    },
    {
      title: "Create Tests for Button",
      status: "Done",
      members: ["Jeffrey", "Michael", "Ryan"],
    },
  ],
  // Sprint 6
  [
    {
      title: "Implement Parsing Classes for CSVs",
      status: "In Progress",
      members: ["Terrence"],
    },
    {
      title: "Extension Button PR Request",
      status: "Done",
      members: ["Owen"],
    },
    {
      title:
        "Compile Leakage-Analysis for Docker-Free Solution (Pyright Errors & Missing CSVs)",
      status: "Failed",
      members: ["Arnav"],
    },
    {
      title: "Extension Button PR Review",
      status: "Done",
      members: ["Jeffrey", "Ryan"],
    },
    {
      title: "Summarize Previous Team's Slides for Terrence",
      status: "Done",
      members: ["Jeffrey", "Michael", "Owen", "Ryan", "Terrence"],
    },
  ],
  // Sprint 7
  [
    {
      title: "Read Summaries of Previous Team's Slides",
      status: "Done",
      members: ["Terrence"],
    },
    {
      title: "Fix Button Bug From Activity Bar Switch",
      status: "Done",
      members: ["Owen"],
    },
    {
      title: "Compile Pyright for Leakage-Analysis (Pyright Errors)",
      status: "Failed",
      members: ["Arnav"],
    },
    {
      title: "Create Leakage Summary Tree View",
      status: "Done",
      members: ["Ryan"],
    },
    {
      title: "Create Leakage Instances Tree View",
      status: "Done",
      members: ["Michael"],
    },
  ],
  // Sprint 8
  [
    {
      title: "Finish Parsing CSVs",
      status: "Done",
      members: ["Terrence"],
    },
    {
      title: "Implement Quickfix & Fix Bugs",
      status: "In Progress",
      members: ["Terrence"],
    },
    {
      title:
        "Successfully Test a Docker & Souffle-Free Leakage Algorithm Setup for Linux",
      status: "Done",
      members: ["Arnav"],
    },
    {
      title: "Refactor Button Code for Easier JSON Implementation",
      status: "Done",
      members: ["Owen"],
    },
    {
      title: "Create Panel Web View for Leakage Summary",
      status: "Done",
      members: ["Ryan"],
    },
    {
      title: "Learn How Web View Works",
      status: "Done",
      members: ["Michael"],
    },
  ],
  // Sprint 9
  [
    {
      title: "Fix Bugs With Parsing CSVs & Discuss Improvements",
      status: "Done",
      members: ["Terrence"],
    },
    {
      title:
        "Add Utility Class & JSON for Mapping Jupyter Notebook to Python Files",
      status: "Done",
      members: ["Owen"],
    },
    {
      title:
        "Add Utility Class for Retrieving Jupyter Notebook Cell Index & Line Number From Python Line Number",
      status: "Done",
      members: ["Owen"],
    },
    {
      title: "Successfully Test Pyright for Windows 11 & MacOS",
      status: "Done",
      members: ["Arnav", "Michael", "Owen", "Ryan"],
    },
    {
      title: "Bundle a Fully Docker-Free Solution Prototype for Linux",
      status: "Done",
      members: ["Arnav"],
    },
    {
      title: "Implement Quickfix & Review Terrence's & Previous Group's Code",
      status: "In Progress",
      members: ["Jeffrey"],
    },
    {
      title: "Create Panel Web View for Leakage Instances",
      status: "Done",
      members: ["Michael"],
    },
  ],
];
