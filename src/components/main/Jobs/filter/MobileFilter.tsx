import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Filter,
  Grid,
  List,
  MapPin,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { jobTypes, locations } from "../Jobs";

const MobileFilter = () => {
  return (
    <div>
      {/* Mobile Filter Button */}
      <div className="lg:hidden fixed bottom-4 right-4 z-40">
        <Button
          onClick={() => setShowMobileFilter(!showMobileFilter)}
          className="rounded-full h-14 w-14 shadow-lg bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap"
        >
          <Filter className="h-6 w-6" />
        </Button>
      </div>
      {/* Mobile Filter Drawer */}
      <div
        className={`top-20 fixed inset-0 ${
          showMobileFilter
            ? "backdrop-blur-sm"
            : "opacity-0 pointer-events-none"
        } duration-300 z-30`}
        onClick={() => setShowMobileFilter(false)}
      >
        <div
          className={`absolute ${
            showMobileFilter ? "translate-x-0" : "-translate-x-100"
          } transition-all duration-300 left-0 top-0 bottom-0 h-full w-80 bg-white shadow-xl p-4 overflow-y-auto `}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Filters</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowMobileFilter(false)}
              className="!rounded-button whitespace-nowrap"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          {/* Search Keyword */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Search</label>
            <div className="relative">
              <Input
                type="text"
                placeholder="Job title, keyword, company"
                className="w-full pl-10 pr-4 py-2 border rounded-md"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </div>
          {/* Location */}
          <Collapsible defaultOpen className="mb-6">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-sm font-medium mb-2">
              <span>Location</span>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ScrollArea className="h-36">
                <div className="space-y-2">
                  {locations.map((location) => (
                    <div key={location} className="flex items-center">
                      <Checkbox
                        id={`mobile-location-${location}`}
                        checked={selectedLocations.includes(location)}
                        onCheckedChange={() => toggleLocation(location)}
                        className="mr-2"
                      />
                      <label
                        htmlFor={`mobile-location-${location}`}
                        className="text-sm cursor-pointer"
                      >
                        {location}
                      </label>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CollapsibleContent>
          </Collapsible>
          {/* Salary Range */}
          <Collapsible defaultOpen className="mb-6">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-sm font-medium mb-2">
              <span>Salary Range (K/year)</span>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">${salaryRange[0]}K</span>
                  <span className="text-sm">${salaryRange[1]}K</span>
                </div>
                <Slider
                  defaultValue={salaryRange}
                  min={50}
                  max={200}
                  step={5}
                  value={salaryRange}
                  onValueChange={setSalaryRange}
                  className="mb-2"
                />
              </div>
            </CollapsibleContent>
          </Collapsible>
          {/* Job Type */}
          <Collapsible defaultOpen className="mb-6">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-sm font-medium mb-2">
              <span>Job Type</span>
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="space-y-2">
                {jobTypes.map((type) => (
                  <div key={type} className="flex items-center">
                    <Checkbox
                      id={`mobile-type-${type}`}
                      checked={selectedJobTypes.includes(type)}
                      onCheckedChange={() => toggleJobType(type)}
                      className="mr-2"
                    />
                    <label
                      htmlFor={`mobile-type-${type}`}
                      className="text-sm cursor-pointer"
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          <div className="flex space-x-3 mt-6">
            <Button
              variant="outline"
              className="flex-1 !rounded-button whitespace-nowrap"
              onClick={clearAllFilters}
            >
              Clear all
            </Button>
            <Button
              className="flex-1 bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap"
              onClick={() => setShowMobileFilter(false)}
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFilter;
