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
      title: "Figure Out Tasks for Documentation Website",
      status: "Done",
      members: ["Jeffrey", "Michael", "Ryan"],
    },
    {
      title: "Build Documentation Website with Next.js",
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
      title: "Fix Button Bug in Activity Bar Switch",
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
      title: "Implement Quickfix & Debug Extension",
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
  // Sprint 10
  [
    {
      title: "Research Solution for Obtaining Leakage Sources",
      status: "In Progress",
      members: ["Terrence"],
    },
    {
      title: "Merge Changes for Button & Leakage Summary Webview",
      status: "Done",
      members: ["Terrence", "Ryan", "Owen"],
    },
    {
      title: "Refactor & Redesign Documentation Website",
      status: "Done",
      members: ["Arnav", "Ryan"],
    },
    {
      title: "Compile Docker-Free Solution for MacOS 14 & Windows 10-11",
      status: "Done",
      members: ["Arnav"],
    },
    {
      title: "Implement Highlight Leakage Error & Quickfix",
      status: "In Progress",
      members: ["Owen"],
    },
    {
      title: "Add Weeks 5-9 Info to Documentation Website",
      status: "Done",
      members: ["Ryan"],
    },
    {
      title: "Implement Quickfix",
      status: "Failed",
      members: ["Jeffrey"],
    },
    {
      title: "Publish Our VS Code Extension on VS Code Marketplace",
      status: "In Progress",
      members: ["Michael"],
    },
  ],
  // Sprint 11
  [
    {
      title: "Design Logo for VS Code Extension & Expo Poster",
      status: "In Progress",
      members: ["Jeffrey"],
    },
    {
      title: "Create Azure DevOps Organization & VS Code Marketplace Publisher",
      status: "Done",
      members: ["Michael"],
    },
    {
      title: "Publish Our VS Code Extension on VS Code Marketplace",
      status: "In Progress",
      members: ["Michael"],
    },
    {
      title: "Implement Highlight Leakage Error & Fix Table View Update Bug",
      status: "Done",
      members: ["Owen"],
    },
    {
      title: "Create Extension Demo Video & Upload Native Binaries to OneDrive",
      status: "Done",
      members: ["Owen"],
    },
    {
      title:
        "Merge Leakage Instances & Leakage Summary Tables into Leakage-Overview Webview",
      status: "Done",
      members: ["Ryan"],
    },
    {
      title:
        "Implement Webview Sync on File Switch in Active Editor & Add Click Row Feature to Leakage Instances Table",
      status: "Done",
      members: ["Ryan"],
    },
    {
      title:
        "Add Extension Button to Auto-Install Docker-Free Program for Windows & MacOS",
      status: "Done",
      members: ["Arnav"],
    },
    {
      title: "Compile Docker-Free Solution for Linux",
      status: "In Progress",
      members: ["Arnav"],
    },
    {
      title: "Resolve MacOS Antivirus Issue for Docker-Free Solution",
      status: "Done",
      members: ["Arnav", "Owen"],
    },
    {
      title: "Research Solution for Obtaining Leakage Sources",
      status: "In Progress",
      members: ["Terrence"],
    },
  ],
  // Sprint 12
  [
    {
      title: "Design New Poster Logos",
      status: "Done",
      members: ["Jeffrey"],
    },
    {
      title: "Publish Our VS Code Extension on VS Code Marketplace",
      status: "Done",
      members: ["Michael"],
    },
    {
      title: "Merge & Adapt Terrence's Changes in Leakage Classes",
      status: "Done",
      members: ["Owen"],
    },
    {
      title: "Fix Async Completion Timing for Arnav's Button",
      status: "Done",
      members: ["Owen"],
    },
    {
      title: "Create Documentation Page & Download Binaries Page for Website",
      status: "Done",
      members: ["Ryan"],
    },
    {
      title: "Compile Docker-Free Solution for Linux",
      status: "In Progress",
      members: ["Arnav"],
    },
    {
      title: "Research Solution for Obtaining Leakage Sources",
      status: "In Progress",
      members: ["Terrence"],
    },
  ],
  // Sprint 13
  [
    {
      title: "Upload Logo & Extension Icons on OneDrive",
      status: "Done",
      members: ["Jeffrey"],
    },
    {
      title:
        "Add Owen's Demo Video & Link of Previous Team's Documentation to Website",
      status: "Done",
      members: ["Michael"],
    },
    {
      title:
        "Connect Leakage Classes to Webview & Add Documentation Website Link to Extension",
      status: "Done",
      members: ["Owen"],
    },
    {
      title:
        "Modify Docker Instructions on Website & Review-Push Michael's Website Changes",
      status: "Done",
      members: ["Ryan"],
    },
    {
      title: "Compile Docker-Free Solution for Linux",
      status: "Done",
      members: ["Arnav"],
    },
    {
      title:
        "Communicate With Leakage-Analysis Author About Leakage Sources & Issues",
      status: "Done",
      members: ["Terrence"],
    },
    {
      title: "Research Solution for Obtaining Leakage Sources",
      status: "In Progress",
      members: ["Terrence"],
    },
  ],
  // Sprint 14
  [
    {
      title: "Document Logo Progress in the Fall 2024 Report",
      status: "Done",
      members: ["Jeffrey"],
    },
    {
      title: "Add Linux Binary to Website",
      status: "Done",
      members: ["Michael"],
    },
    {
      title:
        "Move Documentation Website Link in Extension & Fix Extension Bugs",
      status: "Done",
      members: ["Owen"],
    },
    {
      title:
        "Accept Michael's PR for Website & Add More Documentation to Website",
      status: "Done",
      members: ["Ryan"],
    },
    {
      title: "Test Docker-Free Solution for Different Linux Distros",
      status: "Done",
      members: ["Arnav"],
    },
    {
      title:
        "Overhaul the Data Extraction Process to Minimize Complexity & Obtain Leakage Sources",
      status: "In Progress",
      members: ["Terrence"],
    },
  ],
  // Sprint 15
  [
    {
      title: "Review & Edit the Fall 2024 Report",
      status: "Done",
      members: ["All"],
    },
  ],
];
