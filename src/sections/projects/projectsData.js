import ohcLogin from "@/assets/images/sections/projects/OHC web app/Login.png";
import ohcAppointments from "@/assets/images/sections/projects/OHC web app/Appointments.png";
import ohcEmployee from "@/assets/images/sections/projects/OHC web app/Employee (2).png";
import ohcNotifications from "@/assets/images/sections/projects/OHC web app/Notifications.png";
import ohcOPD from "@/assets/images/sections/projects/OHC web app/OPD.png";
import ohcDocument from "@/assets/images/sections/projects/OHC web app/Document.png";
import ohcMedicalExam from "@/assets/images/sections/projects/OHC web app/Medical Exam.png";

import ehrWebDashboard from "@/assets/images/sections/projects/EHR- Web App/Dashboard.png";
import ehrWebPatientDash from "@/assets/images/sections/projects/EHR- Web App/Patient Dashboard.png";
import ehrWebLabOrders from "@/assets/images/sections/projects/EHR- Web App/Lab Orders.png";
import ehrWebVitals from "@/assets/images/sections/projects/EHR- Web App/Vitals (1).png";
import ehrWebReports from "@/assets/images/sections/projects/EHR- Web App/External Reports.png";
import ehrWebMedicalHistory from "@/assets/images/sections/projects/EHR- Web App/Medical history details.png";

import ehrAppDashboard from "@/assets/images/sections/projects/EHR- App/Patient dashboard.png";
import ehrAppHealthTracker from "@/assets/images/sections/projects/EHR- App/Health tracker screen.png";
import ehrAppFamilyDetail from "@/assets/images/sections/projects/EHR- App/Family Detail View.png";
import ehrAppLabReports from "@/assets/images/sections/projects/EHR- App/Lab Reports (Main Screen).png";
import ehrAppRecordList from "@/assets/images/sections/projects/EHR- App/Patient Record List.png";
import ehrAppCreateFamily from "@/assets/images/sections/projects/EHR- App/Create a Family.png";

import houseKeepingDashboard from "@/assets/images/sections/projects/Housekeeping/Client Dashboard.png";
import houseBookService from "@/assets/images/sections/projects/Housekeeping/Book Service.png";
import houseStaffDash from "@/assets/images/sections/projects/Housekeeping/Staff Dashboard.png";
import houseAttendance from "@/assets/images/sections/projects/Housekeeping/Attendance screen after clock in.png";
import houseEarnings from "@/assets/images/sections/projects/Housekeeping/Earnings.png";
import houseTaskDetail from "@/assets/images/sections/projects/Housekeeping/Task Detail 2.png";

export const projectsData = [
  {
    slug: "ohc-web-app",
    name: "OHC Web App",
    category: "Occupational Healthcare",
    tagline: "Enterprise platform for industrial healthcare operations",
    industry: "Healthcare / Enterprise",
    year: "2025",
    duration: "5 months",
    platform: "Web (Desktop-first)",
    short:
      "Enterprise web workflow for appointments, OPD, documents, and workforce operations.",
    summary:
      "Unified appointment handling, OPD records, role-based workflows, compliance documentation, and staff operations into one enterprise web platform for industrial healthcare teams.",
    heroImage: ohcLogin,
    coverImage: ohcAppointments,
    metrics: [
      { value: "60%", label: "Faster appointment turnaround" },
      { value: "4x", label: "Fewer manual handoffs" },
      { value: "100%", label: "Encrypted data security" },
    ],
    problem: [
      "Industrial healthcare operations rely on dozens of moving parts — appointments, OPD records, medical exams, statutory reports, and staff schedules. Before this platform, all of it lived across spreadsheets, paper trails, and disconnected tools.",
      "The result was predictable. Reporting cycles stretched into days. Compliance gaps surfaced too late. Field staff worked without visibility into the records they were responsible for. And leadership had no single view of operational health at any given moment.",
      "The mandate was simple — bring everything into one role-aware platform that medical, compliance, and operations teams could trust, without forcing them to change the way they already work.",
    ],
    approach: [
      {
        title: "Discovery with operations teams",
        desc: "Mapped real workflows with doctors, OPD staff, and compliance officers to find friction points before designing a single screen.",
      },
      {
        title: "Role-based UX architecture",
        desc: "Designed dashboards, OPD, employee management, and compliance modules around clear access boundaries and decision-ready data.",
      },
      {
        title: "Engineering with QA hardening",
        desc: "Built the platform module-by-module with continuous QA, audit logging, and release checks for clinical-grade reliability.",
      },
    ],
    features: [
      "Role-based access for medical staff, HR, and management",
      "OPD and appointment flow with an actionable dashboard",
      "Compliance and statutory reporting workflows",
      "Centralised document management and medical exam records",
      "Notifications and task assignment across roles",
    ],
    techStack: [
      "Python",
      "Django",
      "Django REST Framework",
      "Celery",
      "PostgreSQL",
      "Redis",
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Role-based Access Control",
      "JWT Authentication",
      "AES-256 Encryption",
      "Audit Logging",
      "Docker",
      "Nginx",
      "AWS S3",
    ],
    results: [
      "Unified fragmented operations into one workflow-driven platform.",
      "Improved visibility for medical staff and management leadership.",
      "Reduced operational delays in appointments, OPD, and reporting cycles.",
      "Created an audit-ready trail across compliance and statutory workflows.",
    ],
    screenshots: [
      ohcAppointments,
      ohcOPD,
      ohcEmployee,
      ohcMedicalExam,
      ohcDocument,
      ohcNotifications,
    ],
  },
  {
    slug: "ehr-web-app",
    name: "EHR Web App",
    category: "Digital Health Records",
    tagline: "Doctor-first clinical dashboard for continuity of care",
    client: "Confidential — Multi-specialty Clinic Network",
    industry: "Healthcare / Clinical Software",
    year: "2025",
    duration: "6 months",
    platform: "Web (Desktop & Tablet)",
    short:
      "Doctor-first medical dashboard with patient profiles, lab orders, vitals, and external reports.",
    summary:
      "A structured web interface that gives doctors and care teams instant access to medical history, vitals, lab orders, and external reports — designed around real clinical workflows.",
    heroImage: ehrWebDashboard,
    coverImage: ehrWebPatientDash,
    metrics: [
      { value: "3x", label: "Faster access to patient history" },
      { value: "40%", label: "Less time per chart review" },
      { value: "0", label: "Critical data-loss incidents" },
    ],
    problem:
      "Care teams were losing time stitching together patient context from siloed lab systems, paper notes, and external PDFs. The information existed — it just wasn't accessible at the moment of care.",
    approach: [
      {
        title: "Clinical workflow analysis",
        desc: "Shadowed doctors and care teams to understand how patient context is actually consumed during consults and rounds.",
      },
      {
        title: "Patient-timeline information architecture",
        desc: "Designed every record around a patient timeline so vitals, labs, and external reports stay in chronological context.",
      },
      {
        title: "Module-by-module validation",
        desc: "Built and validated each module — patient dashboard, lab orders, vitals, reports — with the care team before moving forward.",
      },
    ],
    features: [
      "Patient-centric dashboard and profile management",
      "Vitals and lab order tracking with continuity-of-care visibility",
      "Linked external reports for complete clinical context",
      "Medical history timeline with quick filters",
      "Secure authentication with role-based clinical access",
    ],
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "Secure REST APIs",
      "Clinical Data Models",
      "Audit Logging",
      "Tailwind CSS",
    ],
    results: [
      "Enabled faster access to patient context and medical history.",
      "Improved continuity through structured vitals and lab tracking.",
      "Provided complete care context with linked external reports.",
      "Reduced chart-review time without changing how doctors work.",
    ],
    screenshots: [
      ehrWebPatientDash,
      ehrWebLabOrders,
      ehrWebVitals,
      ehrWebReports,
      ehrWebMedicalHistory,
    ],
  },
  {
    slug: "ehr-mobile-app",
    name: "EHR Mobile App",
    category: "Patient Companion App",
    tagline: "A simple health companion for families",
    client: "Confidential — Patient-facing health brand",
    industry: "Healthcare / Consumer Mobile",
    year: "2025",
    duration: "4 months",
    platform: "iOS & Android (Flutter)",
    short:
      "Mobile-first healthcare journey for families, reports, health tracking, and secure authentication.",
    summary:
      "Built for patients and families to manage health tracking, report access, family profiles, and daily records through a calm and trustworthy mobile experience.",
    heroImage: ehrAppDashboard,
    coverImage: ehrAppHealthTracker,
    isMobileApp: true,
    metrics: [
      { value: "92%", label: "Onboarding completion" },
      { value: "<2s", label: "Time to open any record" },
      { value: "4.6★", label: "Beta user satisfaction" },
    ],
    problem:
      "Patients and families had to call clinics or dig through emails to find old reports, track vitals, or share records between family members. The mobile experience for everyday health management didn't exist.",
    approach: [
      {
        title: "Define the everyday patient journey",
        desc: "Mapped real moments — booking a test, opening a report, sharing it with a parent — so the app supports routine health management, not just clinical events.",
      },
      {
        title: "Mobile UX with calm hierarchy",
        desc: "Designed for low-friction reading on small screens with reassuring color and typography for high-trust health content.",
      },
      {
        title: "Cross-platform delivery",
        desc: "Shipped iOS and Android from a single Flutter codebase with biometric auth, secure storage, and offline-tolerant flows.",
      },
    ],
    features: [
      "Family profile and member health visibility",
      "Health tracker with accessible daily insights",
      "Lab reports and record list from a single flow",
      "Secure biometric authentication with privacy controls",
      "Shareable patient-record links for family members",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Secure REST APIs",
      "Health Data Sync",
      "Biometric Authentication",
      "Analytics",
    ],
    results: [
      "Created a clear mobile flow for routine health management.",
      "Improved report and record accessibility for families.",
      "Increased trust with secure and reliable authentication flows.",
      "Reduced support calls about \"how do I find my report\".",
    ],
    screenshots: [
      ehrAppHealthTracker,
      ehrAppFamilyDetail,
      ehrAppLabReports,
      ehrAppRecordList,
      ehrAppCreateFamily,
    ],
  },
  {
    slug: "housekeeping-app",
    name: "Housekeeping App",
    category: "On-demand Services",
    tagline: "A dual-experience app for clients and field staff",
    client: "Confidential — On-demand services startup",
    industry: "Services / Operations",
    year: "2025",
    duration: "5 months",
    platform: "iOS & Android (Flutter)",
    short:
      "Role-based mobile platform for clients and staff with bookings, schedules, attendance, and earnings.",
    summary:
      "A two-sided platform where clients manage bookings while staff handle attendance, tasks, schedules, and earnings — built to standardise day-to-day operations on a single app.",
    heroImage: houseKeepingDashboard,
    coverImage: houseBookService,
    isMobileApp: true,
    metrics: [
      { value: "75%", label: "Reduction in scheduling errors" },
      { value: "2x", label: "Faster client booking flow" },
      { value: "98%", label: "Staff attendance accuracy" },
    ],
    problem:
      "Bookings, attendance, payouts, and task tracking were spread across phone calls, paper logs, and spreadsheets. Operations had no real-time view, staff had no clarity on earnings, and clients had no transparent booking experience.",
    approach: [
      {
        title: "Dual-user workflow planning",
        desc: "Defined two parallel journeys — client booking flow and staff operations — that share the same backend without compromising either side's UX.",
      },
      {
        title: "Modular product design",
        desc: "Designed the booking, attendance, task, and earnings modules as composable pieces so the same app supports growth into new service categories.",
      },
      {
        title: "Operational rollout",
        desc: "Shipped progressively with real field-staff feedback, hardening reliability and performance for low-end devices and patchy networks.",
      },
    ],
    features: [
      "Client booking and service scheduling journey",
      "Staff dashboard for task and attendance operations",
      "Earnings, payouts, and profile insights for workforce",
      "Geo-aware clock-in with shift-level attendance",
      "Real-time notifications across both user roles",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Node.js",
      "Geo-location Services",
      "Realtime Notifications",
      "Attendance Tracking",
      "PostgreSQL",
    ],
    results: [
      "Standardised booking-to-delivery operations in one app.",
      "Improved staff accountability with attendance and task visibility.",
      "Enabled better planning through schedule and earnings insights.",
      "Gave operations a real-time view that paper logs never could.",
    ],
    screenshots: [
      houseBookService,
      houseStaffDash,
      houseAttendance,
      houseEarnings,
      houseTaskDetail,
    ],
  },
];

export function getProjectBySlug(slug) {
  return projectsData.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug) {
  const index = projectsData.findIndex((project) => project.slug === slug);
  if (index === -1) return { prev: null, next: null };
  const prev = index > 0 ? projectsData[index - 1] : projectsData[projectsData.length - 1];
  const next = index < projectsData.length - 1 ? projectsData[index + 1] : projectsData[0];
  return { prev, next };
}
