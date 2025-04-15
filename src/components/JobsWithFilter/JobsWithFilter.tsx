// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
"use client"
import React, { useState } from "react";
import {
  Bell,
  Calendar,
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const JobsWithFilter: React.FC = () => {
  const [activeTab, setActiveTab] = useState("jobs");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(true);
  const [salaryRange, setSalaryRange] = useState([60, 160]);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("relevance");

  const jobTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Freelance",
    "Internship",
    "Remote",
  ];
  const experienceLevels = [
    "Entry Level",
    "Mid Level",
    "Senior Level",
    "Director",
    "Executive",
  ];
  const skillsList = [
    "UI Design",
    "UX Design",
    "Figma",
    "Adobe XD",
    "Sketch",
    "Design Systems",
    "Prototyping",
    "User Research",
    "Wireframing",
    "Adobe Suite",
    "Product Design",
    "Visual Design",
  ];
  const locations = [
    "San Francisco, CA",
    "New York, NY",
    "Austin, TX",
    "Seattle, WA",
    "Boston, MA",
    "Chicago, IL",
    "Los Angeles, CA",
    "Remote",
  ];

  const totalJobs = 48;
  const jobsPerPage = 10;
  const totalPages = Math.ceil(totalJobs / jobsPerPage);

  const handleJobTypeChange = (type: string) => {
    if (selectedJobTypes.includes(type)) {
      setSelectedJobTypes(selectedJobTypes.filter((t) => t !== type));
    } else {
      setSelectedJobTypes([...selectedJobTypes, type]);
    }
  };

  const handleExperienceChange = (level: string) => {
    if (selectedExperience.includes(level)) {
      setSelectedExperience(selectedExperience.filter((l) => l !== level));
    } else {
      setSelectedExperience([...selectedExperience, level]);
    }
  };

  const handleSkillChange = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const clearFilters = () => {
    setSalaryRange([60, 160]);
    setSelectedJobTypes([]);
    setSelectedExperience([]);
    setSelectedSkills([]);
  };

  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(currentDate);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 fixed h-full flex flex-col">
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
              >
                <Button
                  variant="ghost"
                  className="w-full justify-start !rounded-button whitespace-nowrap"
                >
                  <i className="fas fa-chart-pie mr-3"></i>
                  Dashboard
                </Button>
              </a>
            </li>
            <li>
              <Button
                variant="default"
                className="w-full justify-start !rounded-button whitespace-nowrap"
                onClick={() => setActiveTab("jobs")}
              >
                <i className="fas fa-briefcase mr-3"></i>
                Jobs
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start !rounded-button whitespace-nowrap"
                onClick={() => setActiveTab("applications")}
              >
                <i className="fas fa-file-alt mr-3"></i>
                Applications
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
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
                variant="ghost"
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
              <AvatarImage src="https://readdy.ai/api/search-image?query=professional%2520portrait%2520photo%2520of%2520a%2520young%2520man%2520with%2520short%2520dark%2520hair%2520wearing%2520a%2520business%2520casual%2520outfit%252C%2520neutral%2520background%252C%2520high%2520quality%2520professional%2520headshot&width=100&height=100&seq=1&orientation=squarish" />
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
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <a
                href="https://readdy.ai/home/1f363828-f8fa-4c5d-86e2-a12587e66c62/bfce1478-c156-4880-b2bf-4dddff2305b8"
                data-readdy="true"
                className="flex items-center text-blue-600 hover:text-blue-800 mr-4"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                <span className="font-medium">Back to Dashboard</span>
              </a>
              <h2 className="text-2xl font-bold">Recommended Jobs</h2>
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
                <AvatarImage src="https://readdy.ai/api/search-image?query=professional%2520portrait%2520photo%2520of%2520a%2520young%2520man%2520with%2520short%2520dark%2520hair%2520wearing%2520a%2520business%2520casual%2520outfit%252C%2520neutral%2520background%252C%2520high%2520quality%2520professional%2520headshot&width=100&height=100&seq=2&orientation=squarish" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex flex-1">
          {/* Filters Sidebar */}
          <div
            className={`${showFilters ? "w-80" : "w-0 opacity-0"} transition-all duration-300 bg-white border-r border-gray-200 overflow-hidden`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-blue-600 hover:text-blue-800 !rounded-button whitespace-nowrap"
                >
                  Clear All
                </Button>
              </div>

              <ScrollArea className="h-[calc(100vh-180px)] pr-4">
                <div className="space-y-6">
                  {/* Location Filter */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Location</h4>
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Search location..."
                        className="pl-10 w-full border-gray-300"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    </div>
                    <div className="mt-3 space-y-2">
                      {locations.map((location, index) => (
                        <div key={index} className="flex items-center">
                          <Checkbox id={`location-${index}`} className="mr-2" />
                          <label
                            htmlFor={`location-${index}`}
                            className="text-sm cursor-pointer"
                          >
                            {location}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Salary Range Filter */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">
                      Salary Range (K/year)
                    </h4>
                    <div className="px-2">
                      <Slider
                        value={salaryRange}
                        min={30}
                        max={250}
                        step={5}
                        onValueChange={setSalaryRange}
                        className="my-6"
                      />
                      <div className="flex items-center justify-between text-sm">
                        <span>${salaryRange[0]}K</span>
                        <span>${salaryRange[1]}K</span>
                      </div>
                    </div>
                  </div>

                  {/* Job Type Filter */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Job Type</h4>
                    <div className="space-y-2">
                      {jobTypes.map((type, index) => (
                        <div key={index} className="flex items-center">
                          <Checkbox
                            id={`type-${index}`}
                            checked={selectedJobTypes.includes(type)}
                            onCheckedChange={() => handleJobTypeChange(type)}
                            className="mr-2"
                          />
                          <label
                            htmlFor={`type-${index}`}
                            className="text-sm cursor-pointer"
                          >
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience Level Filter */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">
                      Experience Level
                    </h4>
                    <div className="space-y-2">
                      {experienceLevels.map((level, index) => (
                        <div key={index} className="flex items-center">
                          <Checkbox
                            id={`exp-${index}`}
                            checked={selectedExperience.includes(level)}
                            onCheckedChange={() =>
                              handleExperienceChange(level)
                            }
                            className="mr-2"
                          />
                          <label
                            htmlFor={`exp-${index}`}
                            className="text-sm cursor-pointer"
                          >
                            {level}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Filter */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Skills</h4>
                    <div className="relative mb-3">
                      <Input
                        type="text"
                        placeholder="Search skills..."
                        className="pl-10 w-full border-gray-300"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {selectedSkills.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="flex items-center gap-1 px-3 py-1"
                        >
                          {skill}
                          <X
                            className="h-3 w-3 cursor-pointer"
                            onClick={() => handleSkillChange(skill)}
                          />
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {skillsList
                        .filter((skill) => !selectedSkills.includes(skill))
                        .map((skill, index) => (
                          <div key={index} className="flex items-center">
                            <Checkbox
                              id={`skill-${index}`}
                              checked={selectedSkills.includes(skill)}
                              onCheckedChange={() => handleSkillChange(skill)}
                              className="mr-2"
                            />
                            <label
                              htmlFor={`skill-${index}`}
                              className="text-sm cursor-pointer"
                            >
                              {skill}
                            </label>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Apply Filters Button */}
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap">
                    Apply Filters
                  </Button>
                </div>
              </ScrollArea>
            </div>
          </div>

          {/* Jobs Listing */}
          <div className="flex-1 p-6 bg-gray-50">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex items-center justify-between">
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="mr-4 !rounded-button whitespace-nowrap"
                >
                  {showFilters ? (
                    <>
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Hide Filters
                    </>
                  ) : (
                    <>
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Show Filters
                    </>
                  )}
                </Button>
                <p className="text-gray-600">
                  Showing <span className="font-medium">{jobsPerPage}</span> of{" "}
                  <span className="font-medium">{totalJobs}</span> recommended
                  jobs
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px] h-9 !rounded-button whitespace-nowrap">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Most Relevant</SelectItem>
                      <SelectItem value="recent">Most Recent</SelectItem>
                      <SelectItem value="salary-high">
                        Highest Salary
                      </SelectItem>
                      <SelectItem value="salary-low">Lowest Salary</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex border rounded-md overflow-hidden">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="!rounded-none whitespace-nowrap"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="!rounded-none whitespace-nowrap"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Jobs Grid/List */}
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                  : "space-y-4"
              }
            >
              {/* Job Card 1 */}
              <Card
                className={`shadow-sm hover:shadow-md transition-shadow ${viewMode === "list" ? "flex" : ""}`}
              >
                <div className={viewMode === "list" ? "flex-1 flex" : ""}>
                  <CardHeader
                    className={`pb-2 ${viewMode === "list" ? "flex-shrink-0 w-1/3" : ""}`}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                        <img
                          src="https://readdy.ai/api/search-image?query=modern%2520tech%2520company%2520logo%2520with%2520blue%2520and%2520purple%2520gradient%2520colors%2520on%2520white%2520background%252C%2520minimalist%2520design%252C%2520professional%2520corporate%2520branding&width=100&height=100&seq=11&orientation=squarish"
                          alt="TechCorp"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold">
                          Senior UI Designer
                        </CardTitle>
                        <CardDescription>TechCorp Inc.</CardDescription>
                      </div>
                      <div className="ml-auto flex items-center">
                        <Badge className="bg-blue-100 text-blue-800 mr-2">
                          95% Match
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
                  <CardContent className={viewMode === "list" ? "flex-1" : ""}>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      <span>San Francisco, CA (Remote)</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <i className="fas fa-dollar-sign mr-2"></i>
                      <span>$120,000 - $150,000 / year</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-700 mb-2">
                        Required Skills:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Figma</Badge>
                        <Badge variant="secondary">UI Design</Badge>
                        <Badge variant="secondary">Design Systems</Badge>
                        <Badge variant="secondary">Prototyping</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                      We're looking for a Senior UI Designer to join our product
                      team. You'll be responsible for creating beautiful,
                      intuitive interfaces that delight our users.
                    </p>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <i className="fas fa-clock mr-2"></i>
                      <span>Posted 2 days ago</span>
                    </div>
                  </CardContent>
                </div>
                <CardFooter
                  className={`pt-0 ${viewMode === "list" ? "flex-shrink-0 w-1/6 flex flex-col items-end justify-center" : ""}`}
                >
                  <div
                    className={`${viewMode === "list" ? "space-y-2" : "flex space-x-2 w-full"}`}
                  >
                    <Button
                      className={`bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap ${viewMode === "list" ? "w-full" : "flex-1"}`}
                    >
                      Quick Apply
                    </Button>
                    <Button
                      variant="outline"
                      className={`!rounded-button whitespace-nowrap ${viewMode === "list" ? "w-full" : "flex-1"}`}
                    >
                      View Details
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              {/* Job Card 2 */}
              <Card
                className={`shadow-sm hover:shadow-md transition-shadow ${viewMode === "list" ? "flex" : ""}`}
              >
                <div className={viewMode === "list" ? "flex-1 flex" : ""}>
                  <CardHeader
                    className={`pb-2 ${viewMode === "list" ? "flex-shrink-0 w-1/3" : ""}`}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                        <img
                          src="https://readdy.ai/api/search-image?query=modern%2520finance%2520company%2520logo%2520with%2520green%2520and%2520blue%2520colors%2520on%2520white%2520background%252C%2520minimalist%2520design%252C%2520professional%2520corporate%2520branding&width=100&height=100&seq=12&orientation=squarish"
                          alt="FinEdge"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold">
                          UX Researcher
                        </CardTitle>
                        <CardDescription>FinEdge Solutions</CardDescription>
                      </div>
                      <div className="ml-auto flex items-center">
                        <Badge className="bg-blue-100 text-blue-800 mr-2">
                          92% Match
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
                  <CardContent className={viewMode === "list" ? "flex-1" : ""}>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      <span>New York, NY (Hybrid)</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <i className="fas fa-dollar-sign mr-2"></i>
                      <span>$110,000 - $135,000 / year</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-700 mb-2">
                        Required Skills:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">User Research</Badge>
                        <Badge variant="secondary">Usability Testing</Badge>
                        <Badge variant="secondary">Data Analysis</Badge>
                        <Badge variant="secondary">Interviewing</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                      Join our UX team to conduct research that shapes our
                      financial products. You'll lead user interviews, analyze
                      data, and provide insights to improve user experiences.
                    </p>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <i className="fas fa-clock mr-2"></i>
                      <span>Posted 3 days ago</span>
                    </div>
                  </CardContent>
                </div>
                <CardFooter
                  className={`pt-0 ${viewMode === "list" ? "flex-shrink-0 w-1/6 flex flex-col items-end justify-center" : ""}`}
                >
                  <div
                    className={`${viewMode === "list" ? "space-y-2" : "flex space-x-2 w-full"}`}
                  >
                    <Button
                      className={`bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap ${viewMode === "list" ? "w-full" : "flex-1"}`}
                    >
                      Quick Apply
                    </Button>
                    <Button
                      variant="outline"
                      className={`!rounded-button whitespace-nowrap ${viewMode === "list" ? "w-full" : "flex-1"}`}
                    >
                      View Details
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              {/* Job Card 3 */}
              <Card
                className={`shadow-sm hover:shadow-md transition-shadow ${viewMode === "list" ? "flex" : ""}`}
              >
                <div className={viewMode === "list" ? "flex-1 flex" : ""}>
                  <CardHeader
                    className={`pb-2 ${viewMode === "list" ? "flex-shrink-0 w-1/3" : ""}`}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                        <img
                          src="https://readdy.ai/api/search-image?query=modern%2520creative%2520agency%2520logo%2520with%2520orange%2520and%2520red%2520colors%2520on%2520white%2520background%252C%2520minimalist%2520design%252C%2520professional%2520corporate%2520branding&width=100&height=100&seq=13&orientation=squarish"
                          alt="CreativeX"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold">
                          Product Designer
                        </CardTitle>
                        <CardDescription>CreativeX Studio</CardDescription>
                      </div>
                      <div className="ml-auto flex items-center">
                        <Badge className="bg-blue-100 text-blue-800 mr-2">
                          89% Match
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
                  <CardContent className={viewMode === "list" ? "flex-1" : ""}>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      <span>Los Angeles, CA (On-site)</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <i className="fas fa-dollar-sign mr-2"></i>
                      <span>$115,000 - $140,000 / year</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-700 mb-2">
                        Required Skills:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">UI/UX</Badge>
                        <Badge variant="secondary">Product Thinking</Badge>
                        <Badge variant="secondary">Wireframing</Badge>
                        <Badge variant="secondary">Adobe Suite</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                      Creative agency seeking a talented Product Designer to
                      craft innovative digital experiences for our clients.
                      You'll work on a variety of projects from concept to
                      launch.
                    </p>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <i className="fas fa-clock mr-2"></i>
                      <span>Posted 1 day ago</span>
                    </div>
                  </CardContent>
                </div>
                <CardFooter
                  className={`pt-0 ${viewMode === "list" ? "flex-shrink-0 w-1/6 flex flex-col items-end justify-center" : ""}`}
                >
                  <div
                    className={`${viewMode === "list" ? "space-y-2" : "flex space-x-2 w-full"}`}
                  >
                    <Button
                      className={`bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap ${viewMode === "list" ? "w-full" : "flex-1"}`}
                    >
                      Quick Apply
                    </Button>
                    <Button
                      variant="outline"
                      className={`!rounded-button whitespace-nowrap ${viewMode === "list" ? "w-full" : "flex-1"}`}
                    >
                      View Details
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              {/* Job Card 4 */}
              <Card
                className={`shadow-sm hover:shadow-md transition-shadow ${viewMode === "list" ? "flex" : ""}`}
              >
                <div className={viewMode === "list" ? "flex-1 flex" : ""}>
                  <CardHeader
                    className={`pb-2 ${viewMode === "list" ? "flex-shrink-0 w-1/3" : ""}`}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                        <img
                          src="https://readdy.ai/api/search-image?query=modern%2520software%2520company%2520logo%2520with%2520blue%2520and%2520teal%2520colors%2520on%2520white%2520background%252C%2520minimalist%2520design%252C%2520professional%2520corporate%2520branding&width=100&height=100&seq=14&orientation=squarish"
                          alt="SoftMatrix"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold">
                          UI/UX Designer
                        </CardTitle>
                        <CardDescription>SoftMatrix Labs</CardDescription>
                      </div>
                      <div className="ml-auto flex items-center">
                        <Badge className="bg-blue-100 text-blue-800 mr-2">
                          87% Match
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
                  <CardContent className={viewMode === "list" ? "flex-1" : ""}>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      <span>Austin, TX (Remote)</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <i className="fas fa-dollar-sign mr-2"></i>
                      <span>$100,000 - $130,000 / year</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-700 mb-2">
                        Required Skills:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">UI Design</Badge>
                        <Badge variant="secondary">UX Design</Badge>
                        <Badge variant="secondary">Sketch</Badge>
                        <Badge variant="secondary">Figma</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                      Join our product team to design intuitive interfaces for
                      our SaaS platform. You'll collaborate with developers and
                      product managers to create seamless user experiences.
                    </p>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <i className="fas fa-clock mr-2"></i>
                      <span>Posted 5 days ago</span>
                    </div>
                  </CardContent>
                </div>
                <CardFooter
                  className={`pt-0 ${viewMode === "list" ? "flex-shrink-0 w-1/6 flex flex-col items-end justify-center" : ""}`}
                >
                  <div
                    className={`${viewMode === "list" ? "space-y-2" : "flex space-x-2 w-full"}`}
                  >
                    <Button
                      className={`bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap ${viewMode === "list" ? "w-full" : "flex-1"}`}
                    >
                      Quick Apply
                    </Button>
                    <Button
                      variant="outline"
                      className={`!rounded-button whitespace-nowrap ${viewMode === "list" ? "w-full" : "flex-1"}`}
                    >
                      View Details
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              {/* Job Card 5 */}
              <Card
                className={`shadow-sm hover:shadow-md transition-shadow ${viewMode === "list" ? "flex" : ""}`}
              >
                <div className={viewMode === "list" ? "flex-1 flex" : ""}>
                  <CardHeader
                    className={`pb-2 ${viewMode === "list" ? "flex-shrink-0 w-1/3" : ""}`}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                        <img
                          src="https://readdy.ai/api/search-image?query=modern%2520tech%2520startup%2520logo%2520with%2520purple%2520and%2520pink%2520gradient%2520colors%2520on%2520white%2520background%252C%2520minimalist%2520design%252C%2520professional%2520corporate%2520branding&width=100&height=100&seq=15&orientation=squarish"
                          alt="InnovateTech"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold">
                          Senior Product Designer
                        </CardTitle>
                        <CardDescription>InnovateTech Inc.</CardDescription>
                      </div>
                      <div className="ml-auto flex items-center">
                        <Badge className="bg-blue-100 text-blue-800 mr-2">
                          94% Match
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
                  <CardContent className={viewMode === "list" ? "flex-1" : ""}>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      <span>Seattle, WA (Hybrid)</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <i className="fas fa-dollar-sign mr-2"></i>
                      <span>$130,000 - $160,000 / year</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-700 mb-2">
                        Required Skills:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Product Design</Badge>
                        <Badge variant="secondary">User Research</Badge>
                        <Badge variant="secondary">Figma</Badge>
                        <Badge variant="secondary">Design Leadership</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                      Fast-growing startup seeking a Senior Product Designer to
                      lead our design efforts. You'll shape our product strategy
                      and mentor junior designers on the team.
                    </p>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <i className="fas fa-clock mr-2"></i>
                      <span>Posted 2 days ago</span>
                    </div>
                  </CardContent>
                </div>
                <CardFooter
                  className={`pt-0 ${viewMode === "list" ? "flex-shrink-0 w-1/6 flex flex-col items-end justify-center" : ""}`}
                >
                  <div
                    className={`${viewMode === "list" ? "space-y-2" : "flex space-x-2 w-full"}`}
                  >
                    <Button
                      className={`bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap ${viewMode === "list" ? "w-full" : "flex-1"}`}
                    >
                      Quick Apply
                    </Button>
                    <Button
                      variant="outline"
                      className={`!rounded-button whitespace-nowrap ${viewMode === "list" ? "w-full" : "flex-1"}`}
                    >
                      View Details
                    </Button>
                  </div>
                </CardFooter>
              </Card>

              {/* Job Card 6 */}
              <Card
                className={`shadow-sm hover:shadow-md transition-shadow ${viewMode === "list" ? "flex" : ""}`}
              >
                <div className={viewMode === "list" ? "flex-1 flex" : ""}>
                  <CardHeader
                    className={`pb-2 ${viewMode === "list" ? "flex-shrink-0 w-1/3" : ""}`}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                        <img
                          src="https://readdy.ai/api/search-image?query=modern%2520ecommerce%2520company%2520logo%2520with%2520green%2520and%2520yellow%2520colors%2520on%2520white%2520background%252C%2520minimalist%2520design%252C%2520professional%2520corporate%2520branding&width=100&height=100&seq=16&orientation=squarish"
                          alt="ShopWave"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold">
                          UX/UI Designer
                        </CardTitle>
                        <CardDescription>ShopWave Commerce</CardDescription>
                      </div>
                      <div className="ml-auto flex items-center">
                        <Badge className="bg-blue-100 text-blue-800 mr-2">
                          85% Match
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
                  <CardContent className={viewMode === "list" ? "flex-1" : ""}>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      <span>Chicago, IL (Remote)</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <i className="fas fa-dollar-sign mr-2"></i>
                      <span>$95,000 - $125,000 / year</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-700 mb-2">
                        Required Skills:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">E-commerce</Badge>
                        <Badge variant="secondary">UI Design</Badge>
                        <Badge variant="secondary">UX Design</Badge>
                        <Badge variant="secondary">Responsive Design</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                      E-commerce platform looking for a UX/UI Designer to
                      improve our shopping experience. You'll optimize
                      conversion rates and create delightful user journeys.
                    </p>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <i className="fas fa-clock mr-2"></i>
                      <span>Posted 4 days ago</span>
                    </div>
                  </CardContent>
                </div>
                <CardFooter
                  className={`pt-0 ${viewMode === "list" ? "flex-shrink-0 w-1/6 flex flex-col items-end justify-center" : ""}`}
                >
                  <div
                    className={`${viewMode === "list" ? "space-y-2" : "flex space-x-2 w-full"}`}
                  >
                    <Button
                      className={`bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap ${viewMode === "list" ? "w-full" : "flex-1"}`}
                    >
                      Quick Apply
                    </Button>
                    <Button
                      variant="outline"
                      className={`!rounded-button whitespace-nowrap ${viewMode === "list" ? "w-full" : "flex-1"}`}
                    >
                      View Details
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500">
                Showing{" "}
                <span className="font-medium">
                  {(currentPage - 1) * jobsPerPage + 1}-
                  {Math.min(currentPage * jobsPerPage, totalJobs)}
                </span>{" "}
                of <span className="font-medium">{totalJobs}</span> jobs
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="!rounded-button whitespace-nowrap"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" /> Previous
                </Button>

                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const pageNum = i + 1;
                  return (
                    <Button
                      key={i}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(pageNum)}
                      className="w-9 h-9 p-0 !rounded-button whitespace-nowrap"
                    >
                      {pageNum}
                    </Button>
                  );
                })}

                {totalPages > 5 && (
                  <>
                    <span className="text-gray-500">...</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(totalPages)}
                      className="w-9 h-9 p-0 !rounded-button whitespace-nowrap"
                    >
                      {totalPages}
                    </Button>
                  </>
                )}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="!rounded-button whitespace-nowrap"
                >
                  Next <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">
                  Jobs per page:
                </span>
                <Select
                  value={jobsPerPage.toString()}
                  onValueChange={(value) => console.log(value)}
                >
                  <SelectTrigger className="w-[80px] h-9 !rounded-button whitespace-nowrap">
                    <SelectValue placeholder="10" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsWithFilter;
