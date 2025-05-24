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
import { experienceLevels, jobTypes, locations, skills } from "../Jobs";


const DesktopFilter = () => {
  return (
    <div className="border-4 hidden lg:block w-72 bg-white border-pink-200 p-6 overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearAllFilters}
          className="text-blue-600 hover:text-blue-700 !rounded-button whitespace-nowrap"
        >
          Clear all
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
          <ScrollArea className="h-48">
            <div className="space-y-2">
              {locations.map((location) => (
                <div key={location} className="flex items-center">
                  <Checkbox
                    id={`location-${location}`}
                    checked={selectedLocations.includes(location)}
                    onCheckedChange={() => toggleLocation(location)}
                    className="mr-2"
                  />
                  <label
                    htmlFor={`location-${location}`}
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
                  id={`type-${type}`}
                  checked={selectedJobTypes.includes(type)}
                  onCheckedChange={() => toggleJobType(type)}
                  className="mr-2"
                />
                <label
                  htmlFor={`type-${type}`}
                  className="text-sm cursor-pointer"
                >
                  {type}
                </label>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
      {/* Experience Level */}
      <Collapsible defaultOpen className="mb-6">
        <CollapsibleTrigger className="flex items-center justify-between w-full text-sm font-medium mb-2">
          <span>Experience Level</span>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="space-y-2">
            {experienceLevels.map((level) => (
              <div key={level} className="flex items-center">
                <Checkbox
                  id={`exp-${level}`}
                  checked={selectedExperience.includes(level)}
                  onCheckedChange={() => toggleExperience(level)}
                  className="mr-2"
                />
                <label
                  htmlFor={`exp-${level}`}
                  className="text-sm cursor-pointer"
                >
                  {level}
                </label>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
      {/* Skills */}
      <Collapsible defaultOpen className="mb-6">
        <CollapsibleTrigger className="flex items-center justify-between w-full text-sm font-medium mb-2">
          <span>Skills</span>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ScrollArea className="h-48">
            <div className="space-y-2">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center">
                  <Checkbox
                    id={`skill-${skill}`}
                    checked={selectedSkills.includes(skill)}
                    onCheckedChange={() => toggleSkill(skill)}
                    className="mr-2"
                  />
                  <label
                    htmlFor={`skill-${skill}`}
                    className="text-sm cursor-pointer"
                  >
                    {skill}
                  </label>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CollapsibleContent>
      </Collapsible>
      <Button className="w-full bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap">
        Apply Filters
      </Button>
    </div>
  );
};

export default DesktopFilter;
