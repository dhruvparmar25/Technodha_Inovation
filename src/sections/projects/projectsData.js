import ohcLogin from "@/assets/images/sections/projects/OHC web app/Login.png";
import ohcAppointments from "@/assets/images/sections/projects/OHC web app/Appointments.png";
import ohcEmployee from "@/assets/images/sections/projects/OHC web app/Employee (2).png";
import ohcNotifications from "@/assets/images/sections/projects/OHC web app/Notifications.png";
import ohcOPD from "@/assets/images/sections/projects/OHC web app/OPD.png";

import ehrWebDashboard from "@/assets/images/sections/projects/EHR- Web App/Dashboard.png";
import ehrWebPatientDash from "@/assets/images/sections/projects/EHR- Web App/Patient Dashboard.png";
import ehrWebLabOrders from "@/assets/images/sections/projects/EHR- Web App/Lab Orders.png";
import ehrWebVitals from "@/assets/images/sections/projects/EHR- Web App/Vitals (1).png";
import ehrWebReports from "@/assets/images/sections/projects/EHR- Web App/External Reports.png";

import ehrAppDashboard from "@/assets/images/sections/projects/EHR- App/Patient dashboard.png";
import ehrAppHealthTracker from "@/assets/images/sections/projects/EHR- App/Health tracker screen.png";
import ehrAppFamilyDetail from "@/assets/images/sections/projects/EHR- App/Family Detail View.png";
import ehrAppLabReports from "@/assets/images/sections/projects/EHR- App/Lab Reports (Main Screen).png";
import ehrAppRecordList from "@/assets/images/sections/projects/EHR- App/Patient Record List.png";

import houseKeepingDashboard from "@/assets/images/sections/projects/Housekeeping/Client Dashboard.png";
import houseBookService from "@/assets/images/sections/projects/Housekeeping/Book Service.png";
import houseStaffDash from "@/assets/images/sections/projects/Housekeeping/Staff Dashboard.png";
import houseAttendance from "@/assets/images/sections/projects/Housekeeping/Attendance screen after clock in.png";
import houseEarnings from "@/assets/images/sections/projects/Housekeeping/Earnings.png";

export const projectsData = [
  {
    slug: "ohc-web-app",
    name: "OHC Web App",
    category: "Occupational Healthcare",
    short:
      "Enterprise web workflow for appointments, OPD, documents, and workforce operations.",
    description:
      "Built to unify appointment handling, OPD records, role-based workflows, compliance documentation, and staff operations into one enterprise web platform for industrial healthcare teams.",
    heroImage: ohcLogin,
    features: [
      "Role-based access for medical staff and management",
      "OPD and appointment flow with actionable dashboard",
      "Compliance and statutory reporting workflows",
    ],
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "Role-based Access Control"],
    deliveryPhases: [
      "Discovery and workflow mapping with operations teams",
      "UX architecture for dashboards, OPD, and compliance modules",
      "Engineering implementation with QA and release hardening",
    ],
    outcomes: [
      "Unified fragmented operations into one workflow-driven platform",
      "Improved visibility for medical staff and management",
      "Reduced operational delays in appointments and reporting",
    ],
    screenshots: [ohcAppointments, ohcEmployee, ohcNotifications, ohcOPD],
  },
  {
    slug: "ehr-web-app",
    name: "EHR Web App",
    category: "Digital Health Records",
    short:
      "Doctor-first medical dashboard with patient profiles, lab orders, vitals, and external reports.",
    description:
      "Designed for doctors and care teams to access medical history, vitals, lab orders, and external reports through a structured and efficient web interface.",
    heroImage: ehrWebDashboard,
    features: [
      "Patient-centric dashboard and profile management",
      "Vitals and lab order tracking for better continuity",
      "Linked external reports for complete clinical context",
    ],
    techStack: ["React", "Next.js", "Secure APIs", "Clinical Data Models", "Audit Logging"],
    deliveryPhases: [
      "Clinical workflow analysis with doctors and care teams",
      "Information architecture for patient timelines and records",
      "Module-by-module implementation with validation and QA",
    ],
    outcomes: [
      "Enabled faster access to patient context and medical history",
      "Improved continuity through structured vitals and lab tracking",
      "Provided complete care context with linked external reports",
    ],
    screenshots: [ehrWebPatientDash, ehrWebLabOrders, ehrWebVitals, ehrWebReports],
  },
  {
    slug: "ehr-mobile-app",
    name: "EHR Mobile App",
    category: "Patient Companion App",
    short:
      "Mobile-first healthcare journey for families, reports, health tracking, and secure authentication.",
    description:
      "Created for patients and families with a mobile-first experience that organizes health tracking, report access, family profiles, and daily records through a simple UX flow.",
    heroImage: ehrAppDashboard,
    features: [
      "Family profile and member health visibility",
      "Health tracker with accessible daily insights",
      "Lab reports and record list from a single flow",
    ],
    techStack: ["Flutter", "Firebase Auth", "Secure APIs", "Health Data Sync", "Analytics"],
    deliveryPhases: [
      "Patient journey definition across onboarding and daily usage",
      "Mobile UX design for records, reports, and family profiles",
      "Cross-platform implementation, QA, and release optimization",
    ],
    outcomes: [
      "Created a clear mobile flow for routine health management",
      "Improved report and record accessibility for families",
      "Increased trust with secure and reliable authentication flows",
    ],
    screenshots: [ehrAppHealthTracker, ehrAppFamilyDetail, ehrAppLabReports, ehrAppRecordList],
  },
  {
    slug: "housekeeping-app",
    name: "Housekeeping App",
    category: "On-demand Services",
    short:
      "Role-based mobile platform for clients and staff with bookings, schedules, attendance, and earnings.",
    description:
      "Developed as a dual-experience platform for on-demand housekeeping, where clients manage bookings while staff handle attendance, tasks, schedules, and earnings.",
    heroImage: houseKeepingDashboard,
    features: [
      "Client booking and service scheduling journey",
      "Staff dashboard for task and attendance operations",
      "Earnings and profile insights for workforce",
    ],
    techStack: ["Flutter", "Node.js", "Geo-location Services", "Attendance Tracking", "Realtime Notifications"],
    deliveryPhases: [
      "Dual-user workflow planning for clients and field staff",
      "Service booking, attendance, and earnings module design",
      "Operational rollout with QA and performance checks",
    ],
    outcomes: [
      "Standardized booking-to-delivery operations in one app",
      "Improved staff accountability with attendance and task visibility",
      "Enabled better planning through schedule and earnings insights",
    ],
    screenshots: [houseBookService, houseStaffDash, houseAttendance, houseEarnings],
  },
];

export function getProjectBySlug(slug) {
  return projectsData.find((project) => project.slug === slug);
}
