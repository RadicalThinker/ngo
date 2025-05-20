"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState({});

  // Define navigation structure with categories and items
  const navStructure = [
    {
      name: "Admissions",
      href: "/forms/admission",
      icon: "📝",
      items: [
        { name: "New Admission", href: "/forms/admission", icon: "➕" },
        {
          name: "Declaration",
          href: "/forms/admission/declaration",
          icon: "📃",
        },
        {
          name: "Medical Sheet",
          href: "/forms/admission/medical-sheet",
          icon: "📋",
        },
        {
          name: "Physical Assessment",
          href: "/forms/admission/physical",
          icon: "🧍",
        },
        {
          name: "Questionnaire",
          href: "/forms/admission/questions",
          icon: "❓",
        },
        {
          name: "Undertaking",
          href: "/forms/admission/undertaking",
          icon: "✍️",
        },
      ],
    },
    {
      name: "Medical",
      href: null,
      icon: "🏥",
      items: [
        { name: "Medical Exams", href: "/forms/medical-exam", icon: "🔬" },
        { name: "Prescriptions", href: "/forms/prescription", icon: "💊" },
        {
          name: "Medical History",
          href: "/forms/medicals/history",
          icon: "📜",
        },
        { name: "Drug Tests", href: "/forms/medicals/drugs", icon: "💉" },
        { name: "Urine Tests", href: "/forms/medicals/urine", icon: "🧪" },
      ],
    },
    {
      name: "Counseling",
      href: "/forms/counseling",
      icon: "🧠",
      items: [],
    },
    {
      name: "Discharge",
      href: "/forms/discharge",
      icon: "🚪",
      items: [],
    },
  ];

  // Auto expand sections based on current path
  useEffect(() => {
    const newExpandedSections = { ...expandedSections };

    navStructure.forEach((section) => {
      // If current path is in this section's items, expand the section
      const shouldExpand = section.items.some(
        (item) => pathname === item.href || pathname.startsWith(item.href + "/")
      );

      if (shouldExpand) {
        newExpandedSections[section.name] = true;
      }
    });

    setExpandedSections(newExpandedSections);
  }, [pathname]);

  // Toggle section expansion
  const toggleSection = (sectionName) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  // Check if a nav item is active
  const isActive = (href) => {
    if (!href) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4 h-full overflow-auto">
      <h1 className="text-xl font-bold mb-6">Rehab Center</h1>
      <nav>
        <ul className="space-y-1">
          {navStructure.map((section) => (
            <li key={section.name} className="mb-1">
              {/* Section header */}
              <div
                className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
                  isActive(section.href)
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-100"
                }`}
                onClick={() =>
                  section.items.length > 0 ? toggleSection(section.name) : null
                }
              >
                <div className="flex items-center">
                  <span className="mr-2">{section.icon}</span>
                  {section.href ? (
                    <Link href={section.href} className="flex-grow">
                      {section.name}
                    </Link>
                  ) : (
                    <span>{section.name}</span>
                  )}
                </div>
                {section.items.length > 0 && (
                  <span className="text-xs">
                    {expandedSections[section.name] ? "▼" : "►"}
                  </span>
                )}
              </div>

              {/* Section items */}
              {section.items.length > 0 && expandedSections[section.name] && (
                <ul className="pl-4 mt-1 space-y-1">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`flex items-center p-2 rounded-lg text-sm ${
                          isActive(item.href)
                            ? "bg-blue-50 text-blue-600"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <span className="mr-2">{item.icon}</span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
