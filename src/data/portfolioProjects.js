import erpCover from "@/assets/images/sections/portfolio/ERP/IAM User Dashboard.png";
import erpAttendance from "@/assets/images/sections/portfolio/ERP/Attendance.png";
import erpLeave from "@/assets/images/sections/portfolio/ERP/Leave management.png";
import erpUsers from "@/assets/images/sections/portfolio/ERP/Users (3).png";
import erpBilling from "@/assets/images/sections/portfolio/ERP/Project Detail page UI Overview (5).png";
import erpWorkflow from "@/assets/images/sections/portfolio/ERP/Workflow (3).png";

export const portfolioProjects = [
  {
    id: "erp-system",
    slug: "erp-system",
    name: "ERP System",
    shortDescription:
      "A centralized enterprise platform that streamlines HR, attendance, workflows, and project operations in a single secure dashboard.",
    fullDescription:
      "Technodha's ERP System is built to unify daily business operations across departments. It helps teams manage users, departments, leave, attendance, and project workflows from one modern interface while improving process visibility and operational efficiency.",
    stack: ["React", "Node.js", "MongoDB", "REST API"],
    features: [
      { title: "User Lifecycle", text: "Employee and user lifecycle management", icon: "mdi:account-cog-outline" },
      { title: "Attendance", text: "Attendance and leave tracking", icon: "mdi:calendar-check-outline" },
      { title: "Org Setup", text: "Department, designation, and location setup", icon: "mdi:office-building-cog-outline" },
      { title: "Access Control", text: "Role and permission control", icon: "mdi:shield-key-outline" },
      { title: "Workflow Tracking", text: "Project workflow and status monitoring", icon: "mdi:source-branch-check" },
      { title: "Reports", text: "Client review and reporting modules", icon: "mdi:file-chart-outline" },
    ],
    highlights: [
      { value: "35%", label: "Efficiency improvement", icon: "mdi:trending-up" },
      { value: "40%", label: "Workflow optimization", icon: "mdi:chart-timeline-variant" },
      { value: "24/7", label: "Business visibility", icon: "mdi:monitor-dashboard" },
    ],
    image: erpCover,
    screenshots: [erpCover, erpAttendance, erpLeave, erpUsers, erpBilling, erpWorkflow],
    links: {
      demo: "",
      github: "",
    },
  },
];
