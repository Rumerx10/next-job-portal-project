"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JobsDataList } from "@/docs/docs";
import JobsHeader from "./JobsHeader";
import DesktopFilter from "./filter/DesktopFilter";
import MobileFilter from "./filter/MobileFilter";
import JobCardList from "./JobCardList";
import JobCardGrid from "./JobCardGrid";

const Jobs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("jobs");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [salaryRange, setSalaryRange] = useState<[number, number]>([50, 150]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const currentDate = new Date();

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(currentDate);

  const toggleJobType = (value: string) => {
    setSelectedJobTypes((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const toggleExperience = (value: string) => {
    setSelectedExperience((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const toggleLocation = (value: string) => {
    setSelectedLocations((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const toggleSkill = (value: string) => {
    setSelectedSkills((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const clearAllFilters = () => {
    setSelectedJobTypes([]);
    setSelectedExperience([]);
    setSelectedLocations([]);
    setSelectedSkills([]);
    setSalaryRange([50, 150]);
  };
  const totalJobs = JobsDataList.length;
  const itemsPerPage = 4;
  const totalPages = Math.ceil(totalJobs / itemsPerPage);
  const paginatedJobs = JobsDataList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="lg:container mx-auto w-full flex min-h-screen  bg-gray-50 mt-20 lg:mt-24">
      <div className="flex flex-col">
        {/* Content */}

        <div className="flex w-full">
          {/* Filters Sidebar - Desktop */}
          <DesktopFilter
            clearAllFilters={clearAllFilters}
            selectedLocations={selectedLocations}
            toggleLocation={toggleLocation}
            salaryRange={salaryRange}
            setSalaryRange={setSalaryRange}
            selectedJobTypes={selectedJobTypes}
            toggleJobType={toggleJobType}
            selectedExperience={selectedExperience}
            toggleExperience={toggleExperience}
            selectedSkills={selectedSkills}
            toggleSkill={toggleSkill}
          />

          {/* Mobile Filter Button */}
          <MobileFilter
            setShowMobileFilter={setShowMobileFilter}
            showMobileFilter={showMobileFilter}
            selectedLocations={selectedLocations}
            toggleLocation={toggleLocation}
            salaryRange={salaryRange}
            setSalaryRange={setSalaryRange}
            selectedJobTypes={selectedJobTypes}
            toggleJobType={toggleJobType}
            clearAllFilters={clearAllFilters}
          />

          {/* Jobs Grid */}
          <div className="w-10/12 flex-1 p-4 bg-gray-50 overflow-y-auto">
            {/* Jobs Header */}
            <JobsHeader
              viewMode={viewMode}
              setViewMode={setViewMode}
              totalJobs={totalJobs}
              length={paginatedJobs.length}
            />

            {/* Jobs Grid/List */}
            {viewMode === "grid" ? (
              <JobCardGrid
                jobs={paginatedJobs.map((job) => ({
                  ...job,
                  id: String(job.id),
                }))}
              />
            ) : (
              <JobCardList
                jobs={paginatedJobs.map((job) => ({
                  ...job,
                  id: String(job.id),
                }))}
              />
            )}
            {/* Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm">
              <div className="mb-4 sm:mb-0">
                <p className="text-sm text-gray-500">
                  Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                  {Math.min(currentPage * itemsPerPage, totalJobs)} of{" "}
                  {totalJobs} jobs
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="!rounded-button whitespace-nowrap"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>
                <div className="flex items-center space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className="!rounded-button whitespace-nowrap min-w-[32px]"
                      >
                        {page}
                      </Button>
                    )
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="!rounded-button whitespace-nowrap"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jobs;
