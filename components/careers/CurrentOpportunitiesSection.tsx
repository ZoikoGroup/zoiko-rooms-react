"use client";

import React, { useState, useMemo } from "react";
import { Search, MapPin, Building2, Clock, ArrowRight } from "lucide-react";
import JobDetailsModal from "../popups/careers/JobDetailsModal";

interface Role {
  id: string;
  title: string;
  category: string;
  location: string;
  workplaceType: "Hybrid" | "Remote" | "On-site";
  employmentType: string;
  isModalRole?: boolean;
}

const ROLES_DATA: Role[] = [
  {
    id: "1",
    title: "Backend Engineer, Room Passport Platform",
    category: "Engineering",
    location: "Berlin, Germany",
    workplaceType: "Hybrid",
    employmentType: "Full-time",
    isModalRole: true,
  },
  {
    id: "2",
    title: "Trust & Safety Analyst",
    category: "Trust & Safety",
    location: "Remote (EU)",
    workplaceType: "Remote",
    employmentType: "Full-time",
  },
  {
    id: "3",
    title: "Product Designer, Seeker Experience",
    category: "Product",
    location: "Berlin, Germany",
    workplaceType: "Hybrid",
    employmentType: "Full-time",
  },
  {
    id: "4",
    title: "Provider Success Manager",
    category: "Provider Operations",
    location: "Lisbon, Portugal",
    workplaceType: "On-site",
    employmentType: "Full-time",
  },
  {
    id: "5",
    title: "Recruiting Coordinator",
    category: "People",
    location: "Remote (EU)",
    workplaceType: "Remote",
    employmentType: "Full-time",
  },
  {
    id: "6",
    title: "Data Scientist, Marketplace Health",
    category: "Engineering",
    location: "Nairobi, Kenya",
    workplaceType: "Hybrid",
    employmentType: "Full-time",
  },
];

export default function CurrentOpportunitiesSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("Any team");
  const [selectedLocation, setSelectedLocation] = useState("Any location");
  const [selectedWorkplace, setSelectedWorkplace] =
    useState("Any workplace type");

  // State for Job Details Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter lists derived from data
  const teams = [
    "Any team",
    ...Array.from(new Set(ROLES_DATA.map((r) => r.category))),
  ];
  const locations = [
    "Any location",
    ...Array.from(new Set(ROLES_DATA.map((r) => r.location))),
  ];
  const workplaceTypes = ["Any workplace type", "Hybrid", "Remote", "On-site"];

  // Filtered roles logic
  const filteredRoles = useMemo(() => {
    return ROLES_DATA.filter((role) => {
      const matchesSearch =
        searchTerm === "" ||
        role.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        role.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        role.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesTeam =
        selectedTeam === "Any team" || role.category === selectedTeam;
      const matchesLocation =
        selectedLocation === "Any location" ||
        role.location === selectedLocation;
      const matchesWorkplace =
        selectedWorkplace === "Any workplace type" ||
        role.workplaceType === selectedWorkplace;

      return (
        matchesSearch && matchesTeam && matchesLocation && matchesWorkplace
      );
    });
  }, [searchTerm, selectedTeam, selectedLocation, selectedWorkplace]);

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedTeam("Any team");
    setSelectedLocation("Any location");
    setSelectedWorkplace("Any workplace type");
  };

  const handleRoleClick = (role: Role) => {
    if (role.isModalRole) {
      setIsModalOpen(true);
    } else {
      // Fallback action for other roles
      console.log(`Viewing role: ${role.title}`);
    }
  };

  return (
    <>
      <section
        id="open-roles"
        className="flex flex-col items-center justify-center py-12 md:py-20 text-[#1C1917]"
      >
        <div className="max-w-6xl w-full px-4 sm:px-6">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D91414] mb-3">
              Open Roles
            </p>
            <h2 className="text-[36px] font-serif font-bold text-[#1C1917] leading-tight tracking-tight mb-4">
              Current opportunities
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-normal max-w-lg">
              Only currently open, approved roles are listed below — closed or
              paused roles are removed, not archived here.
            </p>
          </div>

          {/* Filter Bar Controls */}
          <div className="flex flex-col items-center max-w-3xl mx-auto mb-12 space-y-4">
            {/* Search Input */}
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-4 flex items-center text-[#A8A29E] pointer-events-none">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search by title, team, or location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-white rounded-full border border-[#E7DFD3] text-xs text-[#1C1917] placeholder-[#A8A29E] shadow-xs focus:outline-none focus:ring-2 focus:ring-[#182232]"
              />
            </div>

            {/* Dropdown Filters & Reset Button */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full pt-1">
              <select
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
                className="bg-white border border-[#E7DFD3] rounded-full px-4 py-2 text-xs text-[#44403C] font-medium shadow-xs focus:outline-none focus:ring-2 focus:ring-[#182232] cursor-pointer"
              >
                {teams.map((team) => (
                  <option key={team} value={team}>
                    {team}
                  </option>
                ))}
              </select>

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-white border border-[#E7DFD3] rounded-full px-4 py-2 text-xs text-[#44403C] font-medium shadow-xs focus:outline-none focus:ring-2 focus:ring-[#182232] cursor-pointer"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>

              <select
                value={selectedWorkplace}
                onChange={(e) => setSelectedWorkplace(e.target.value)}
                className="bg-white border border-[#E7DFD3] rounded-full px-4 py-2 text-xs text-[#44403C] font-medium shadow-xs focus:outline-none focus:ring-2 focus:ring-[#182232] cursor-pointer"
              >
                {workplaceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              <button
                onClick={handleResetFilters}
                type="button"
                className="text-xs font-semibold text-[#D91414] hover:underline px-2 py-1 transition-colors cursor-pointer"
              >
                Reset filters
              </button>
            </div>

            <p className="text-xs text-[#A8A29E] pt-2">
              Showing {filteredRoles.length} of {ROLES_DATA.length} open roles
            </p>
          </div>

          {/* Roles Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {filteredRoles.map((role) => (
              <div
                key={role.id}
                className="bg-white rounded-2xl border border-[#E7DFD3] p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-all hover:shadow-md hover:border-[#D6CBB8]"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <h3 className="text-base sm:text-lg font-bold text-[#1C1917] leading-snug">
                    {role.title}
                  </h3>
                  <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF2FE] text-[11px] font-semibold text-[#1E40AF] border border-[#BFDBFE]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E40AF]" />
                    {role.category}
                  </span>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#A8A29E] font-normal mb-5">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#A8A29E]" />
                      {role.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#A8A29E]" />
                      {role.workplaceType}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#A8A29E]" />
                      {role.employmentType}
                    </span>
                  </div>

                  {/* Trigger Button to open Modal */}
                  <button
                    type="button"
                    onClick={() => handleRoleClick(role)}
                    className="inline-flex items-center text-xs font-bold text-[#D91414] hover:underline group cursor-pointer"
                  >
                    View role
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredRoles.length === 0 && (
            <div className="w-full text-center py-12 bg-white rounded-2xl border border-[#E7DFD3]">
              <p className="text-sm font-medium text-[#78716C] mb-2">
                No open roles match your selected criteria.
              </p>
              <button
                onClick={handleResetFilters}
                className="text-xs font-bold text-[#D91414] underline cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Render Modal */}
      <JobDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onApply={() => {
          alert("Redirecting to application...");
          setIsModalOpen(false);
        }}
      />
    </>
  );
}
