"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FormCard from "@/components/FormCard";
import {
  FiUsers,
  FiFileText,
  FiClipboard,
  FiCalendar,
  FiArrowRight,
} from "react-icons/fi";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const mainFeatures = [
    {
      title: "Patient Admission",
      icon: <FiUsers size={24} className="text-blue-500" />,
      description: "Register new patients and manage admission documents",
      href: "/forms/admission",
    },
    {
      title: "Medical Records",
      icon: <FiFileText size={24} className="text-green-500" />,
      description: "Track medical history, examinations and test results",
      href: "/forms/medicals/history",
    },
    {
      title: "Counseling Sessions",
      icon: <FiClipboard size={24} className="text-purple-500" />,
      description: "Document therapy sessions and patient progress",
      href: "/forms/counseling",
    },
    {
      title: "Discharge Process",
      icon: <FiCalendar size={24} className="text-orange-500" />,
      description: "Complete discharge forms and follow-up plans",
      href: "/forms/discharge",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-xl p-8 shadow-md">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Rehabilitation Center Management System
          </h1>
          <p className="text-lg opacity-90 mb-6">
            Streamline patient care with our comprehensive forms management
            solution
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/forms/admission"
              className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
            >
              New Admission <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mainFeatures.map((feature, index) => (
          <Link
            key={index}
            href={feature.href}
            className="block"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-full transition-all duration-200 ${
                hoveredCard === index ? "border-blue-300 shadow-md" : ""
              }`}
            >
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-lg bg-gray-50 mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              </div>
              <div className="text-blue-600 font-medium text-sm flex items-center mt-2">
                Access Forms <FiArrowRight className="ml-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick guide */}
      <FormCard
        title="System Guide"
        description="Learn how to use the rehabilitation center forms"
      >
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              1
            </div>
            <div>
              <h3 className="font-medium text-gray-800">
                Navigate with Sidebar
              </h3>
              <p className="text-gray-600 mt-1">
                Use the sidebar to access different form categories and
                management features
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              2
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Patient Workflow</h3>
              <p className="text-gray-600 mt-1">
                Start with admission forms, then proceed to medical assessments,
                counseling, and discharge
              </p>
            </div>
          </div>
        </div>
      </FormCard>

      {/* Footer */}
      <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
        <p>
          Rehabilitation Center Management System &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
