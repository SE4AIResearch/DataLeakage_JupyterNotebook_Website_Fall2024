export const statusMUIColors: 
{ 
    [key: string]: 
    "default" 
    | "success" 
    | "info" 
    | "error" 
    | "primary" 
    | "secondary" 
    | "warning" } = 
    {
        "Done": "success",
        "In Progress": "info",
        "Failed": "error",
    }

type Task = {
    title: string,
    status: "Done" | "In Progress" | "Failed",
    members: string[],
}

export const sprintData: Task[][] = [
    [
        {
            "title": "Split Teams Into Groups",
            "status": "Done",
            "members": ["All"],
        },
        {
            "title": "Review Original Codebase",
            "status": "Done",
            "members": ["All"],
        },
    ],
    [
        {
            "title": "Split Teams Into Groups",
            "status": "Done",
            "members": ["All"],
        },
        {
            "title": "Review Original Codebase",
            "status": "Done",
            "members": ["All"],
        }
    ],
]