"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import ohcAppointments from "@/assets/images/sections/projects/OHC web app/Appointments.png";
import ohcEmployee from "@/assets/images/sections/projects/OHC web app/Employee (2).png";
import ohcNotifications from "@/assets/images/sections/projects/OHC web app/Notifications.png";
import ohcOPD from "@/assets/images/sections/projects/OHC web app/OPD.png";

import ehrWebPatientDash from "@/assets/images/sections/projects/EHR- Web App/Patient Dashboard.png";
import ehrWebLabOrders from "@/assets/images/sections/projects/EHR- Web App/Lab Orders.png";
import ehrWebVitals from "@/assets/images/sections/projects/EHR- Web App/Vitals (1).png";
import ehrWebReports from "@/assets/images/sections/projects/EHR- Web App/External Reports.png";

import ehrAppHealthTracker from "@/assets/images/sections/projects/EHR- App/Health tracker screen.png";
import ehrAppFamilyDetail from "@/assets/images/sections/projects/EHR- App/Family Detail View.png";
import ehrAppLabReports from "@/assets/images/sections/projects/EHR- App/Lab Reports (Main Screen).png";
import ehrAppRecordList from "@/assets/images/sections/projects/EHR- App/Patient Record List.png";

import houseBookService from "@/assets/images/sections/projects/Housekeeping/Book Service.png";
import houseStaffDash from "@/assets/images/sections/projects/Housekeeping/Staff Dashboard.png";
import houseAttendance from "@/assets/images/sections/projects/Housekeeping/Attendance screen after clock in.png";
import houseEarnings from "@/assets/images/sections/projects/Housekeeping/Earnings.png";

const projectDetails = [
  {
    slug: "ohc-web-app",
    title: "OHC Web App",
    subtitle: "Occupational Healthcare Platform",
    description:
      "Built to unify appointment handling, OPD records, role-based workflows, compliance documentation, and staff operations into one enterprise web platform for industrial healthcare teams.",
    features: [
      "Role-based access for medical staff and management",
      "OPD and appointment flow with actionable dashboard",
      "Compliance and statutory reporting workflows",
    ],
    images: [ohcAppointments, ohcEmployee, ohcNotifications, ohcOPD],
  },
  {
    slug: "ehr-web-app",
    title: "EHR Web App",
    subtitle: "Clinical Dashboard System",
    description:
      "Designed for doctors and care teams to access medical history, vitals, lab orders, and external reports through a structured and efficient web interface.",
    features: [
      "Patient-centric dashboard and profile management",
      "Vitals and lab order tracking for better continuity",
      "Linked external reports for complete clinical context",
    ],
    images: [ehrWebPatientDash, ehrWebLabOrders, ehrWebVitals, ehrWebReports],
  },
  {
    slug: "ehr-mobile-app",
    title: "EHR Mobile App",
    subtitle: "Family Health Companion",
    isMobileApp: true,
    description:
      "Created for patients and families with a mobile-first experience that organizes health tracking, report access, family profiles, and daily records through a simple UX flow.",
    features: [
      "Family profile and member health visibility",
      "Health tracker with accessible daily insights",
      "Lab reports and record list from a single flow",
    ],
    images: [ehrAppHealthTracker, ehrAppFamilyDetail, ehrAppLabReports, ehrAppRecordList],
  },
  {
    slug: "housekeeping-app",
    title: "Housekeeping App",
    subtitle: "Service Operations App",
    isMobileApp: true,
    description:
      "Developed as a dual-experience platform for on-demand housekeeping, where clients manage bookings while staff handle attendance, tasks, schedules, and earnings.",
    features: [
      "Client booking and service scheduling journey",
      "Staff dashboard for task and attendance operations",
      "Earnings and profile insights for workforce",
    ],
    images: [houseBookService, houseStaffDash, houseAttendance, houseEarnings],
  },
];

export default function ProjectsCaseStudies() {
  const [activePreview, setActivePreview] = useState(null);
  const router = useRouter();

  return (
    <section data-theme="light" className="py-12">
      <div className="max-w-[1230px] px-[15px] m-auto space-y-12">
        {projectDetails.map((project, projectIndex) => (
          <article
            key={project.title}
            className="rounded-[28px] border border-[#f2c5be] bg-[#fffdfc] p-5 md:p-8 lg:p-10 cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={() => router.push(`/projects/${project.slug}`)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                router.push(`/projects/${project.slug}`);
              }
            }}
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-[12px] font-medium tracking-[0.08em] uppercase text-[#FE9139]">{project.subtitle}</p>
                <h3 className="text-[#1A1A1F] text-[28px] leading-tight font-semibold mt-2">{project.title}</h3>
                <p className="text-support mt-4">{project.description}</p>
                <ul className="mt-5 grid gap-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="text-[15px] text-[#4E4E58] leading-7">
                      <span className="text-[#FB6557] mr-2">-</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-[#f6ddd8] px-4 py-3 text-center min-w-[180px] bg-white">
                <p className="text-[11px] uppercase tracking-[0.08em] text-[#8D6A65]">Deliverables</p>
                <p className="text-[30px] font-semibold text-[#FB6557] leading-tight mt-1">4+</p>
                <p className="text-[13px] text-[#5F5F6B]">Primary screens shown</p>
              </div>
            </div>

            <div className="mt-8 overflow-hidden group">
              <div
                className={`flex w-max gap-4 ${
                  projectIndex % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse"
                } group-hover:[animation-play-state:paused]`}
              >
                {[...project.images, ...project.images].map((image, index) => (
                  <button
                    type="button"
                    key={`${project.title}-${index}`}
                    onClick={(event) => {
                      event.stopPropagation();
                      setActivePreview({
                        image,
                        title: project.title,
                        screen: (index % project.images.length) + 1,
                      });
                    }}
                    onMouseDown={(event) => event.stopPropagation()}
                    className={`overflow-hidden rounded-2xl border border-[#f5dfda] bg-white p-2 text-left cursor-zoom-in ${
                      project.isMobileApp
                        ? "min-w-[170px] sm:min-w-[220px] xl:min-w-[260px]"
                        : "min-w-[260px] sm:min-w-[320px] xl:min-w-[360px]"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} screen ${index + 1}`}
                      className={`w-full rounded-xl object-cover transition-transform duration-500 hover:scale-105 ${
                        project.isMobileApp ? "h-[300px] sm:h-[340px] xl:h-[380px]" : "h-[200px]"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {activePreview && (
        <div
          className="fixed inset-0 z-[1000] bg-black/80 p-4 sm:p-8 flex items-center justify-center"
          onClick={() => setActivePreview(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-white/20 bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePreview(null)}
              className="absolute top-3 right-3 z-10 rounded-full bg-white/90 px-3 py-1 text-[13px] font-medium text-[#1A1A1F] hover:bg-white"
            >
              Close
            </button>
            <Image
              src={activePreview.image}
              alt={`${activePreview.title} screen ${activePreview.screen}`}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
