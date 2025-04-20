"use client"

import React, { useState, useEffect } from "react";
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
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
const Jobs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("jobs");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [salaryRange, setSalaryRange] = useState([50, 150]);
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
  const jobTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Freelance",
    "Internship",
  ];
  const experienceLevels = [
    "Entry Level",
    "Mid Level",
    "Senior Level",
    "Director",
    "Executive",
  ];
  const locations = [
    "Remote",
    "San Francisco, CA",
    "New York, NY",
    "Austin, TX",
    "Seattle, WA",
    "Los Angeles, CA",
    "Chicago, IL",
    "Boston, MA",
  ];
  const skills = [
    "UI Design",
    "UX Design",
    "Figma",
    "Sketch",
    "Adobe XD",
    "Prototyping",
    "User Research",
    "Design Systems",
    "HTML/CSS",
    "JavaScript",
    "React",
    "Product Design",
  ];
  const jobsData = [
    {
      id: 1,
      company: "TechCorp Inc.",
      logo: "https://readdy.ai/api/search-image?query=modern%20tech%20company%20logo%20with%20blue%20and%20purple%20gradient%20colors%20on%20white%20background%20minimalist%20design%20professional%20corporate%20branding%20with%20simple%20geometric%20shapes%20and%20clean%20typography&width=100&height=100&seq=101&orientation=squarish",
      position: "Senior UI Designer",
      location: "San Francisco, CA (Remote)",
      salary: "$120,000 - $150,000 / year",
      skills: ["Figma", "UI Design", "Design Systems", "Prototyping"],
      postedDate: "2 days ago",
      description:
        "Join our innovative team to create beautiful, intuitive interfaces for our enterprise software solutions. You'll work closely with product managers and developers to deliver exceptional user experiences.",
      matchPercentage: 95,
    },
    {
      id: 2,
      company: "FinEdge Solutions",
      logo: "https://readdy.ai/api/search-image?query=modern%20finance%20company%20logo%20with%20green%20and%20blue%20colors%20on%20white%20background%20minimalist%20design%20professional%20corporate%20branding%20with%20clean%20lines%20and%20abstract%20financial%20symbol&width=100&height=100&seq=102&orientation=squarish",
      position: "UX Researcher",
      location: "New York, NY (Hybrid)",
      salary: "$110,000 - $135,000 / year",
      skills: [
        "User Research",
        "Usability Testing",
        "Data Analysis",
        "Interviewing",
      ],
      postedDate: "3 days ago",
      description:
        "Lead user research initiatives to inform product design decisions. You'll conduct interviews, usability tests, and analyze data to provide actionable insights to our design and product teams.",
      matchPercentage: 88,
    },
    {
      id: 3,
      company: "CreativeX Studio",
      logo: "https://readdy.ai/api/search-image?query=modern%20creative%20agency%20logo%20with%20orange%20and%20red%20colors%20on%20white%20background%20minimalist%20design%20professional%20corporate%20branding%20with%20artistic%20elements%20and%20clean%20typography&width=100&height=100&seq=103&orientation=squarish",
      position: "Product Designer",
      location: "Los Angeles, CA (On-site)",
      salary: "$115,000 - $140,000 / year",
      skills: ["UI/UX", "Product Thinking", "Wireframing", "Adobe Suite"],
      postedDate: "1 day ago",
      description:
        "Design innovative digital products for our diverse client base. You'll take projects from concept to completion, working with cross-functional teams to deliver exceptional user experiences.",
      matchPercentage: 92,
    },
    {
      id: 4,
      company: "SoftMatrix Labs",
      logo: "https://readdy.ai/api/search-image?query=modern%20software%20company%20logo%20with%20blue%20and%20teal%20colors%20on%20white%20background%20minimalist%20design%20professional%20corporate%20branding%20with%20tech-inspired%20geometric%20elements&width=100&height=100&seq=104&orientation=squarish",
      position: "UI/UX Designer",
      location: "Austin, TX (Remote)",
      salary: "$100,000 - $130,000 / year",
      skills: ["UI Design", "UX Design", "Sketch", "Figma"],
      postedDate: "5 days ago",
      description:
        "Create intuitive and engaging user experiences for our SaaS platform. You'll collaborate with product managers and engineers to design features that delight our users and solve complex problems.",
      matchPercentage: 85,
    },
    {
      id: 5,
      company: "GlobalRetail Inc.",
      logo: "https://readdy.ai/api/search-image?query=modern%20retail%20company%20logo%20with%20green%20and%20orange%20colors%20on%20white%20background%20minimalist%20design%20professional%20corporate%20branding%20with%20shopping%20or%20retail%20related%20symbol&width=100&height=100&seq=105&orientation=squarish",
      position: "Digital Designer",
      location: "Chicago, IL (Hybrid)",
      salary: "$90,000 - $115,000 / year",
      skills: ["UI Design", "Branding", "Illustration", "Typography"],
      postedDate: "1 week ago",
      description:
        "Join our digital team to create compelling visual designs for our e-commerce platform and marketing campaigns. You'll work on a variety of projects from website updates to digital advertising.",
      matchPercentage: 78,
    },
    {
      id: 6,
      company: "InnovateTech",
      logo: "https://readdy.ai/api/search-image?query=modern%20technology%20startup%20logo%20with%20purple%20and%20blue%20colors%20on%20white%20background%20minimalist%20design%20professional%20corporate%20branding%20with%20innovative%20tech%20symbol&width=100&height=100&seq=106&orientation=squarish",
      position: "Senior Product Designer",
      location: "Seattle, WA (On-site)",
      salary: "$130,000 - $160,000 / year",
      skills: [
        "Product Design",
        "UI/UX",
        "Design Leadership",
        "Design Thinking",
      ],
      postedDate: "2 days ago",
      description:
        "Lead product design initiatives for our growing startup. You'll mentor junior designers, establish design processes, and create exceptional user experiences for our enterprise software.",
      matchPercentage: 91,
    },
    {
      id: 7,
      company: "HealthTech Solutions",
      logo: "https://readdy.ai/api/search-image?query=modern%20healthcare%20technology%20company%20logo%20with%20blue%20and%20green%20colors%20on%20white%20background%20minimalist%20design%20professional%20corporate%20branding%20with%20medical%20or%20health%20related%20symbol&width=100&height=100&seq=107&orientation=squarish",
      position: "UX/UI Designer",
      location: "Boston, MA (Remote)",
      salary: "$105,000 - $135,000 / year",
      skills: ["Healthcare UX", "UI Design", "Accessibility", "Figma"],
      postedDate: "4 days ago",
      description:
        "Design intuitive interfaces for our healthcare management platform. You'll work closely with clinical experts to create solutions that improve patient care and provider efficiency.",
      matchPercentage: 86,
    },
    {
      id: 8,
      company: "EduLearn",
      logo: "https://readdy.ai/api/search-image?query=modern%20education%20technology%20company%20logo%20with%20blue%20and%20yellow%20colors%20on%20white%20background%20minimalist%20design%20professional%20corporate%20branding%20with%20education%20or%20learning%20symbol&width=100&height=100&seq=108&orientation=squarish",
      position: "Interaction Designer",
      location: "Remote",
      salary: "$95,000 - $120,000 / year",
      skills: [
        "Interaction Design",
        "Prototyping",
        "User Testing",
        "Educational UX",
      ],
      postedDate: "1 week ago",
      description:
        "Create engaging learning experiences for our educational platform. You'll design interactive elements, animations, and intuitive interfaces that make learning accessible and enjoyable for students of all ages.",
      matchPercentage: 82,
    },
    {
      id: 9,
      company: "MediaStream",
      logo: "https://readdy.ai/api/search-image?query=modern%20media%20streaming%20company%20logo%20with%20red%20and%20black%20colors%20on%20white%20background%20minimalist%20design%20professional%20corporate%20branding%20with%20entertainment%20or%20media%20symbol&width=100&height=100&seq=109&orientation=squarish",
      position: "Visual Designer",
      location: "Los Angeles, CA (Hybrid)",
      salary: "$100,000 - $125,000 / year",
      skills: [
        "Visual Design",
        "Brand Design",
        "Motion Graphics",
        "Illustration",
      ],
      postedDate: "3 days ago",
      description:
        "Join our creative team to design visually stunning assets for our streaming platform. You'll create everything from UI components to marketing materials that capture our brand's unique voice.",
      matchPercentage: 79,
    },
    {
      id: 10,
      company: "FutureMobility",
      logo: "https://readdy.ai/api/search-image?query=modern%20transportation%20technology%20company%20logo%20with%20blue%20and%20silver%20colors%20on%20white%20background%20minimalist%20design%20professional%20corporate%20branding%20with%20mobility%20or%20transportation%20symbol&width=100&height=100&seq=110&orientation=squarish",
      position: "UX Designer",
      location: "Detroit, MI (On-site)",
      salary: "$110,000 - $140,000 / year",
      skills: ["UX Design", "User Research", "Wireframing", "Prototyping"],
      postedDate: "5 days ago",
      description:
        "Design the future of mobility experiences for our automotive innovation lab. You'll create user-centered interfaces for next-generation vehicles and transportation services.",
      matchPercentage: 84,
    },
    {
      id: 11,
      company: "CloudSolutions",
      logo: "https://readdy.ai/api/search-image?query=modern%20cloud%20computing%20company%20logo%20with%20blue%20and%20white%20colors%20on%20light%20background%20minimalist%20design%20professional%20corporate%20branding%20with%20cloud%20or%20technology%20symbol&width=100&height=100&seq=111&orientation=squarish",
      position: "Product Designer",
      location: "Remote",
      salary: "$115,000 - $145,000 / year",
      skills: ["Product Design", "UI/UX", "Design Systems", "Figma"],
      postedDate: "2 days ago",
      description:
        "Design intuitive interfaces for our cloud management platform. You'll work on complex enterprise software, simplifying workflows and creating delightful user experiences.",
      matchPercentage: 90,
    },
    {
      id: 12,
      company: "EcoTech Innovations",
      logo: "https://readdy.ai/api/search-image?query=modern%20environmental%20technology%20company%20logo%20with%20green%20and%20blue%20colors%20on%20white%20background%20minimalist%20design%20professional%20corporate%20branding%20with%20sustainability%20or%20eco-friendly%20symbol&width=100&height=100&seq=112&orientation=squarish",
      position: "UX/UI Designer",
      location: "Portland, OR (Hybrid)",
      salary: "$95,000 - $125,000 / year",
      skills: ["UI Design", "UX Design", "Sustainable Design", "Figma"],
      postedDate: "1 week ago",
      description:
        "Join our mission-driven team to design digital products that promote sustainability. You'll create interfaces for applications that help businesses and consumers reduce their environmental impact.",
      matchPercentage: 83,
    },
  ];
  const toggleJobType = (value: string) => {
    setSelectedJobTypes((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };
  const toggleExperience = (value: string) => {
    setSelectedExperience((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };
  const toggleLocation = (value: string) => {
    setSelectedLocations((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };
  const toggleSkill = (value: string) => {
    setSelectedSkills((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };
  const clearAllFilters = () => {
    setSelectedJobTypes([]);
    setSelectedExperience([]);
    setSelectedLocations([]);
    setSelectedSkills([]);
    setSalaryRange([50, 150]);
  };
  const totalJobs = jobsData.length;
  const itemsPerPage = 8;
  const totalPages = Math.ceil(totalJobs / itemsPerPage);
  const paginatedJobs = jobsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 fixed h-full flex flex-col z-30">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white p-2 rounded-md">
              <i className="fas fa-briefcase text-xl"></i>
            </div>
            <h1 className="text-xl font-bold">JobConnect</h1>
          </div>
        </div>
        <nav className="flex-1 px-4 py-2">
          <ul className="space-y-1">
            <li>
              <a
                href="https://readdy.ai/home/1f363828-f8fa-4c5d-86e2-a12587e66c62/bfce1478-c156-4880-b2bf-4dddff2305b8"
                data-readdy="true"
                className="flex items-center w-full px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 cursor-pointer"
              >
                <i className="fas fa-chart-pie mr-3"></i>
                Dashboard
              </a>
            </li>
            <li>
              <Button
                variant={activeTab === "jobs" ? "default" : "ghost"}
                className="w-full justify-start !rounded-button whitespace-nowrap"
                onClick={() => setActiveTab("jobs")}
              >
                <i className="fas fa-briefcase mr-3"></i>
                Jobs
              </Button>
            </li>
            <li>
              <Button
                variant={activeTab === "applications" ? "default" : "ghost"}
                className="w-full justify-start !rounded-button whitespace-nowrap"
                onClick={() => setActiveTab("applications")}
              >
                <i className="fas fa-file-alt mr-3"></i>
                Applications
              </Button>
            </li>
            <li>
              <Button
                variant={activeTab === "messages" ? "default" : "ghost"}
                className="w-full justify-start !rounded-button whitespace-nowrap"
                onClick={() => setActiveTab("messages")}
              >
                <i className="fas fa-comment-alt mr-3"></i>
                Messages
                <Badge className="ml-auto bg-blue-500">3</Badge>
              </Button>
            </li>
            <li>
              <Button
                variant={activeTab === "settings" ? "default" : "ghost"}
                className="w-full justify-start !rounded-button whitespace-nowrap"
                onClick={() => setActiveTab("settings")}
              >
                <i className="fas fa-cog mr-3"></i>
                Settings
              </Button>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20of%20a%20young%20man%20with%20short%20dark%20hair%20wearing%20a%20business%20casual%20outfit%20neutral%20background%20high%20quality%20professional%20headshot&width=100&height=100&seq=113&orientation=squarish" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">UI/UX Designer</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto !rounded-button whitespace-nowrap"
            >
              <i className="fas fa-ellipsis-v"></i>
            </Button>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="ml-64 flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="flex items-center justify-between p-4">
            <div>
              <h2 className="text-2xl font-bold">Recommended Jobs</h2>
              <p className="text-gray-500">{formattedDate}</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search jobs, companies..."
                  className="w-64 pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>
              <div className="relative cursor-pointer">
                <Bell className="h-6 w-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  4
                </span>
              </div>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20of%20a%20young%20man%20with%20short%20dark%20hair%20wearing%20a%20business%20casual%20outfit%20neutral%20background%20high%20quality%20professional%20headshot&width=100&height=100&seq=114&orientation=squarish" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        {/* Content */}
        <div className="flex flex-1">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden md:block w-72 bg-white border-r border-gray-200 p-6 overflow-y-auto">
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
          {/* Mobile Filter Button */}
          <div className="md:hidden fixed bottom-4 right-4 z-20">
            <Button
              onClick={() => setShowMobileFilter(true)}
              className="rounded-full h-14 w-14 shadow-lg bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap"
            >
              <Filter className="h-6 w-6" />
            </Button>
          </div>
          {/* Mobile Filter Drawer */}
          {showMobileFilter && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
              <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl p-4 overflow-y-auto">
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
                  <label className="block text-sm font-medium mb-2">
                    Search
                  </label>
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
          )}
          {/* Jobs Grid */}
          <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
            {/* Jobs Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold">
                  Showing {paginatedJobs.length} of {totalJobs} jobs
                </h3>
                <p className="text-sm text-gray-500">
                  Personalized for your profile and preferences
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center">
                  <span className="text-sm mr-2">Sort by:</span>
                  <Select defaultValue="relevant">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevant">Most Relevant</SelectItem>
                      <SelectItem value="recent">Most Recent</SelectItem>
                      <SelectItem value="salary-high">
                        Highest Salary
                      </SelectItem>
                      <SelectItem value="salary-low">Lowest Salary</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2 bg-gray-100 rounded-md p-1">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="!rounded-button whitespace-nowrap"
                  >
                    <Grid className="h-4 w-4 mr-1" />
                    Grid
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="!rounded-button whitespace-nowrap"
                  >
                    <List className="h-4 w-4 mr-1" />
                    List
                  </Button>
                </div>
              </div>
            </div>
            {/* Jobs Grid/List */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {paginatedJobs.map((job) => (
                  <Card
                    key={job.id}
                    className="shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center mb-2">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                          <img
                            src={job.logo}
                            alt={job.company}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-semibold">
                            {job.position}
                          </CardTitle>
                          <CardDescription>{job.company}</CardDescription>
                        </div>
                        <div className="ml-auto flex items-center">
                          <Badge className="bg-blue-100 text-blue-800 mr-2">
                            {job.matchPercentage}% Match
                          </Badge>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-gray-400 hover:text-blue-500 !rounded-button whitespace-nowrap"
                          >
                            <i className="fas fa-bookmark"></i>
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <i className="fas fa-dollar-sign mr-2"></i>
                        <span>{job.salary}</span>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-gray-700 mb-2">
                          Required Skills:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                        {job.description}
                      </p>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <i className="fas fa-clock mr-2"></i>
                        <span>Posted {job.postedDate}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0 flex space-x-2">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap">
                        Quick Apply
                      </Button>
                      <a
                        href="https://readdy.ai/home/1f363828-f8fa-4c5d-86e2-a12587e66c62/ca7ffb7c-f73b-4c17-a5a3-8802c4a484df"
                        data-readdy="true"
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          className="w-full !rounded-button whitespace-nowrap"
                        >
                          View Details
                        </Button>
                      </a>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4 mb-8">
                {paginatedJobs.map((job) => (
                  <Card
                    key={job.id}
                    className="shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-4 md:p-6">
                      <div className="flex flex-col md:flex-row md:items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                            <img
                              src={job.logo}
                              alt={job.company}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">
                              {job.position}
                            </h3>
                            <p className="text-gray-600">{job.company}</p>
                          </div>
                        </div>
                        <div className="md:ml-auto flex items-center">
                          <Badge className="bg-blue-100 text-blue-800 mr-2">
                            {job.matchPercentage}% Match
                          </Badge>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-gray-400 hover:text-blue-500 !rounded-button whitespace-nowrap"
                          >
                            <i className="fas fa-bookmark"></i>
                          </Button>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4 mt-4">
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <i className="fas fa-dollar-sign mr-2"></i>
                            <span>{job.salary}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <i className="fas fa-clock mr-2"></i>
                            <span>Posted {job.postedDate}</span>
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm text-gray-700 mb-3">
                            {job.description}
                          </p>
                          <div>
                            <p className="text-sm text-gray-700 mb-2">
                              Required Skills:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {job.skills.map((skill) => (
                                <Badge key={skill} variant="secondary">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-3 mt-4">
                        <Button className="bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap">
                          Quick Apply
                        </Button>
                        <a
                          href="https://readdy.ai/home/1f363828-f8fa-4c5d-86e2-a12587e66c62/ca7ffb7c-f73b-4c17-a5a3-8802c4a484df"
                          data-readdy="true"
                        >
                          <Button
                            variant="outline"
                            className="!rounded-button whitespace-nowrap"
                          >
                            View Details
                          </Button>
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
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
                    ),
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
