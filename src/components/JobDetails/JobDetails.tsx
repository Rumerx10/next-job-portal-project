// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Bell,
  ChevronLeft,
  MapPin,
  Share2,
  Bookmark,
  Clock,
  Building,
  Users,
  Globe,
  Briefcase,
  GraduationCap,
  Languages,
  Award,
  Heart,
  Printer,
  Flag,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const JobDetails: React.FC = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const swiperModules = [Pagination, Autoplay];

  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(currentDate);

  const jobDetails = {
    id: 1,
    title: "Senior UI Designer",
    company: "TechCorp Inc.",
    logo: "https://readdy.ai/api/search-image?query=modern%2520tech%2520company%2520logo%2520with%2520blue%2520and%2520purple%2520gradient%2520colors%2520on%2520white%2520background%2520minimalist%2520design%2520professional%2520corporate%2520branding%2520with%2520simple%2520geometric%2520shapes%2520and%2520clean%2520typography&width=100&height=100&seq=101&orientation=squarish",
    location: "San Francisco, CA (Remote)",
    salary: "$120,000 - $150,000 / year",
    postedDate: "April 13, 2025",
    applicationDeadline: "May 15, 2025",
    matchPercentage: 95,
    employmentType: "Full-time",
    experience: "5+ years",
    education: "Bachelor's degree in Design or related field",
    applicants: 78,
    companySize: "501-1,000 employees",
    industry: "Technology, Software & IT",
    founded: 2012,
    website: "www.techcorpinc.com",
    about:
      "TechCorp Inc. is a leading enterprise software company specializing in cloud-based solutions for businesses of all sizes. Our mission is to simplify complex technological challenges through intuitive, powerful software that empowers organizations to achieve their goals.",
    description:
      "We're looking for a Senior UI Designer to join our growing product team. In this role, you'll create beautiful, intuitive interfaces for our enterprise software solutions. You'll work closely with product managers, UX researchers, and developers to deliver exceptional user experiences that solve complex problems for our customers.",
    responsibilities: [
      "Lead the visual design process for new features and products",
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Develop and maintain design systems and component libraries",
      "Collaborate with UX researchers to incorporate user feedback",
      "Work with front-end developers to ensure accurate implementation",
      "Participate in design critiques and provide constructive feedback",
      "Stay up-to-date with industry trends and best practices",
      "Mentor junior designers and contribute to team growth",
    ],
    requirements: [
      "5+ years of experience in UI design for digital products",
      "Strong portfolio demonstrating exceptional visual design skills",
      "Proficiency in Figma and other design tools",
      "Experience with design systems and component libraries",
      "Understanding of accessibility standards and best practices",
      "Excellent communication and collaboration skills",
      "Problem-solving mindset and attention to detail",
    ],
    preferred: [
      "Experience in SaaS or enterprise software design",
      "Knowledge of front-end development (HTML, CSS, JavaScript)",
      "Background in UX research or user-centered design",
      "Experience with animation and interactive prototyping",
      "Understanding of data visualization principles",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "Flexible work arrangements (remote or hybrid)",
      "Unlimited PTO policy",
      "Professional development budget",
      "401(k) matching program",
      "Home office stipend",
      "Wellness programs and gym membership",
    ],
    requiredSkills: [
      "UI Design",
      "Figma",
      "Design Systems",
      "Prototyping",
      "Visual Design",
      "User-Centered Design",
    ],
    languages: ["English (Required)", "Spanish (Preferred)"],
  };

  const similarJobs = [
    {
      id: 1,
      title: "Senior Product Designer",
      company: "InnovateTech",
      logo: "https://readdy.ai/api/search-image?query=modern%2520technology%2520startup%2520logo%2520with%2520purple%2520and%2520blue%2520colors%2520on%2520white%2520background%2520minimalist%2520design%2520professional%2520corporate%2520branding%2520with%2520innovative%2520tech%2520symbol&width=100&height=100&seq=106&orientation=squarish",
      location: "Seattle, WA (On-site)",
      salary: "$130,000 - $160,000 / year",
      matchPercentage: 91,
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "CloudSolutions",
      logo: "https://readdy.ai/api/search-image?query=modern%2520cloud%2520computing%2520company%2520logo%2520with%2520blue%2520and%2520white%2520colors%2520on%2520light%2520background%2520minimalist%2520design%2520professional%2520corporate%2520branding%2520with%2520cloud%2520or%2520technology%2520symbol&width=100&height=100&seq=111&orientation=squarish",
      location: "Remote",
      salary: "$115,000 - $145,000 / year",
      matchPercentage: 90,
    },
    {
      id: 3,
      title: "Product Designer",
      company: "CreativeX Studio",
      logo: "https://readdy.ai/api/search-image?query=modern%2520creative%2520agency%2520logo%2520with%2520orange%2520and%2520red%2520colors%2520on%2520white%2520background%2520minimalist%2520design%2520professional%2520corporate%2520branding%2520with%2520artistic%2520elements%2520and%2520clean%2520typography&width=100&height=100&seq=103&orientation=squarish",
      location: "Los Angeles, CA (On-site)",
      salary: "$115,000 - $140,000 / year",
      matchPercentage: 92,
    },
    {
      id: 4,
      title: "UX Researcher",
      company: "FinEdge Solutions",
      logo: "https://readdy.ai/api/search-image?query=modern%2520finance%2520company%2520logo%2520with%2520green%2520and%2520blue%2520colors%2520on%2520white%2520background%2520minimalist%2520design%2520professional%2520corporate%2520branding%2520with%2520clean%2520lines%2520and%2520abstract%2520financial%2520symbol&width=100&height=100&seq=102&orientation=squarish",
      location: "New York, NY (Hybrid)",
      salary: "$110,000 - $135,000 / year",
      matchPercentage: 88,
    },
  ];

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
              <a
                href="https://readdy.ai/home/1f363828-f8fa-4c5d-86e2-a12587e66c62/467aceff-6e01-434d-9dd4-faef32cdc004"
                data-readdy="true"
                className="flex items-center w-full px-3 py-2 text-sm font-medium rounded-md bg-blue-50 text-blue-600 cursor-pointer"
              >
                <i className="fas fa-briefcase mr-3"></i>
                Jobs
              </a>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start !rounded-button whitespace-nowrap"
              >
                <i className="fas fa-file-alt mr-3"></i>
                Applications
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full justify-start !rounded-button whitespace-nowrap"
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
              <AvatarImage src="https://readdy.ai/api/search-image?query=professional%2520portrait%2520photo%2520of%2520a%2520young%2520man%2520with%2520short%2520dark%2520hair%2520wearing%2520a%2520business%2520casual%2520outfit%2520neutral%2520background%2520high%2520quality%2520professional%2520headshot&width=100&height=100&seq=113&orientation=squarish" />
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
            <div className="flex items-center">
              <a
                href="https://readdy.ai/home/1f363828-f8fa-4c5d-86e2-a12587e66c62/467aceff-6e01-434d-9dd4-faef32cdc004"
                data-readdy="true"
                className="flex items-center text-gray-600 hover:text-blue-600 mr-6 cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                <span className="text-sm font-medium">Back to Jobs</span>
              </a>
              <h2 className="text-2xl font-bold">{jobDetails.title}</h2>
            </div>
            <div className="flex items-center space-x-6">
              <div className="relative cursor-pointer">
                <Bell className="h-6 w-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  4
                </span>
              </div>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://readdy.ai/api/search-image?query=professional%2520portrait%2520photo%2520of%2520a%2520young%2520man%2520with%2520short%2520dark%2520hair%2520wearing%2520a%2520business%2520casual%2520outfit%2520neutral%2520background%2520high%2520quality%2520professional%2520headshot&width=100&height=100&seq=114&orientation=squarish" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Job Header */}
        <div className="bg-white border-b border-gray-200 py-6 px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-start md:items-center mb-6 md:mb-0">
              <div className="w-16 h-16 rounded-lg overflow-hidden mr-5 flex-shrink-0">
                <img
                  src={jobDetails.logo}
                  alt={jobDetails.company}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-1">{jobDetails.title}</h1>
                <div className="flex items-center mb-2">
                  <span className="text-lg text-gray-700 font-medium">
                    {jobDetails.company}
                  </span>
                  <Badge className="ml-3 bg-blue-100 text-blue-800">
                    {jobDetails.matchPercentage}% Match
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-y-2">
                  <div className="flex items-center text-gray-600 mr-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{jobDetails.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mr-4">
                    <i className="fas fa-dollar-sign mr-1"></i>
                    <span className="text-sm">{jobDetails.salary}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mr-4">
                    <Briefcase className="h-4 w-4 mr-1" />
                    <span className="text-sm">{jobDetails.employmentType}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">
                      Posted on {jobDetails.postedDate}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap">
                <i className="fas fa-paper-plane mr-2"></i>
                Apply Now
              </Button>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      className="!rounded-button whitespace-nowrap"
                      onClick={() => setIsSaved(!isSaved)}
                    >
                      {isSaved ? (
                        <>
                          <i className="fas fa-bookmark mr-2 text-blue-600"></i>{" "}
                          Saved
                        </>
                      ) : (
                        <>
                          <Bookmark className="h-4 w-4 mr-2" /> Save Job
                        </>
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {isSaved ? "Remove from saved jobs" : "Save this job"}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="!rounded-button whitespace-nowrap"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Share this job</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto py-8 px-6 gap-8">
          {/* Left Column - Job Details */}
          <div className="w-full lg:w-2/3">
            <Tabs
              defaultValue="description"
              className="mb-8"
              onValueChange={setActiveTab}
            >
              <TabsList className="w-full grid grid-cols-4">
                <TabsTrigger
                  value="description"
                  className="!rounded-button whitespace-nowrap"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger
                  value="company"
                  className="!rounded-button whitespace-nowrap"
                >
                  Company
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="!rounded-button whitespace-nowrap"
                >
                  Reviews
                </TabsTrigger>
                <TabsTrigger
                  value="interview"
                  className="!rounded-button whitespace-nowrap"
                >
                  Interview Process
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <section className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">
                        Job Description
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {jobDetails.description}
                      </p>

                      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
                        <div className="flex items-center mb-2">
                          <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                          <h4 className="font-medium">Job Details</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500 mb-1">
                              Employment Type
                            </p>
                            <p className="font-medium">
                              {jobDetails.employmentType}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 mb-1">
                              Experience Level
                            </p>
                            <p className="font-medium">
                              {jobDetails.experience}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 mb-1">Education</p>
                            <p className="font-medium">
                              {jobDetails.education}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 mb-1">
                              Application Deadline
                            </p>
                            <p className="font-medium">
                              {jobDetails.applicationDeadline}
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">
                        Responsibilities
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {jobDetails.responsibilities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">
                        Requirements
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {jobDetails.requirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">
                        Preferred Qualifications
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {jobDetails.preferred.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-xl font-semibold mb-4">
                        Benefits & Perks
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {jobDetails.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start">
                            <div className="mt-1 mr-3 text-green-500">
                              <i className="fas fa-check-circle"></i>
                            </div>
                            <p className="text-gray-700">{benefit}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="company" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-lg overflow-hidden mr-4">
                        <img
                          src={jobDetails.logo}
                          alt={jobDetails.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          {jobDetails.company}
                        </h3>
                        <p className="text-gray-600">{jobDetails.industry}</p>
                      </div>
                    </div>

                    <section className="mb-8">
                      <h4 className="text-lg font-semibold mb-3">
                        About the Company
                      </h4>
                      <p className="text-gray-700 mb-6">{jobDetails.about}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                        <div className="flex items-start">
                          <Building className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-500">
                              Company Size
                            </p>
                            <p className="font-medium">
                              {jobDetails.companySize}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Users className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-500">Founded</p>
                            <p className="font-medium">{jobDetails.founded}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Globe className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                          <div>
                            <p className="text-sm text-gray-500">Website</p>
                            <p className="font-medium text-blue-600 hover:underline cursor-pointer">
                              {jobDetails.website}
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="mb-8">
                      <h4 className="text-lg font-semibold mb-3">
                        Company Photos
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="aspect-video rounded-lg overflow-hidden">
                          <img
                            src="https://readdy.ai/api/search-image?query=modern%2520tech%2520office%2520space%2520with%2520open%2520floor%2520plan%2520featuring%2520collaborative%2520workspaces%2520natural%2520lighting%2520and%2520contemporary%2520furniture%2520professional%2520environment%2520with%2520clean%2520design%2520aesthetic&width=400&height=225&seq=201&orientation=landscape"
                            alt="Office space"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden">
                          <img
                            src="https://readdy.ai/api/search-image?query=tech%2520company%2520team%2520meeting%2520in%2520modern%2520conference%2520room%2520with%2520diverse%2520professionals%2520collaborating%2520around%2520a%2520table%2520with%2520laptops%2520and%2520digital%2520displays%2520bright%2520professional%2520environment&width=400&height=225&seq=202&orientation=landscape"
                            alt="Team meeting"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden">
                          <img
                            src="https://readdy.ai/api/search-image?query=tech%2520company%2520break%2520room%2520with%2520modern%2520amenities%2520including%2520comfortable%2520seating%2520coffee%2520bar%2520and%2520recreational%2520activities%2520bright%2520inviting%2520space%2520designed%2520for%2520relaxation%2520and%2520casual%2520collaboration&width=400&height=225&seq=203&orientation=landscape"
                            alt="Break room"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </section>

                    <section>
                      <h4 className="text-lg font-semibold mb-3">Location</h4>
                      <div className="rounded-lg overflow-hidden h-64 bg-gray-100">
                        <img
                          src="https://readdy.ai/api/search-image?query=san%2520francisco%2520city%2520map%2520view%2520with%2520streets%2520and%2520landmarks%2520visible%2520clean%2520modern%2520map%2520design%2520with%2520location%2520pin%2520marking%2520office%2520location%2520professional%2520cartography%2520style&width=800&height=400&seq=204&orientation=landscape"
                          alt="Company location map"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </section>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          Employee Reviews
                        </h3>
                        <div className="flex items-center">
                          <div className="flex items-center text-yellow-400 mr-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                          <span className="font-medium">4.5 out of 5</span>
                          <span className="text-gray-500 ml-2">
                            (124 reviews)
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <Button
                          variant="outline"
                          className="!rounded-button whitespace-nowrap"
                        >
                          <i className="fas fa-filter mr-2"></i>
                          Filter Reviews
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium mb-2">Work/Life Balance</h4>
                        <div className="flex items-center">
                          <Progress value={85} className="h-2 flex-1 mr-3" />
                          <span className="font-medium">4.3</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium mb-2">
                          Compensation & Benefits
                        </h4>
                        <div className="flex items-center">
                          <Progress value={90} className="h-2 flex-1 mr-3" />
                          <span className="font-medium">4.5</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium mb-2">
                          Career Opportunities
                        </h4>
                        <div className="flex items-center">
                          <Progress value={80} className="h-2 flex-1 mr-3" />
                          <span className="font-medium">4.0</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium mb-2">Company Culture</h4>
                        <div className="flex items-center">
                          <Progress value={95} className="h-2 flex-1 mr-3" />
                          <span className="font-medium">4.8</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="border-b border-gray-200 pb-6">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-semibold">
                            Great place to grow your career
                          </h4>
                          <div className="flex items-center text-yellow-400">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">
                          Senior Designer • Current Employee • 2+ years
                        </p>
                        <p className="text-gray-700 mb-3">
                          The company has a fantastic culture that encourages
                          creativity and innovation. Management is supportive
                          and there are plenty of opportunities for professional
                          growth. Work-life balance is respected and the
                          benefits are competitive.
                        </p>
                        <div className="flex items-center text-sm">
                          <div className="flex items-center mr-4">
                            <i className="fas fa-thumbs-up text-gray-500 mr-1"></i>
                            <span>Helpful (24)</span>
                          </div>
                          <div className="text-blue-600 cursor-pointer">
                            Read more
                          </div>
                        </div>
                      </div>

                      <div className="border-b border-gray-200 pb-6">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-semibold">
                            Challenging work with smart colleagues
                          </h4>
                          <div className="flex items-center text-yellow-400">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">
                          UI Designer • Former Employee • 1 year
                        </p>
                        <p className="text-gray-700 mb-3">
                          I learned a lot during my time here. The projects were
                          challenging and interesting, and I worked with some
                          incredibly talented people. The only downside was
                          occasional long hours during product launches.
                        </p>
                        <div className="flex items-center text-sm">
                          <div className="flex items-center mr-4">
                            <i className="fas fa-thumbs-up text-gray-500 mr-1"></i>
                            <span>Helpful (18)</span>
                          </div>
                          <div className="text-blue-600 cursor-pointer">
                            Read more
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <h4 className="font-semibold">
                            Excellent benefits and work environment
                          </h4>
                          <div className="flex items-center text-yellow-400">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">
                          Product Designer • Current Employee • 3+ years
                        </p>
                        <p className="text-gray-700 mb-3">
                          The company truly cares about its employees. The
                          benefits are excellent, and there's a strong emphasis
                          on professional development. The design team is
                          collaborative and supportive, making it a great place
                          to grow your skills.
                        </p>
                        <div className="flex items-center text-sm">
                          <div className="flex items-center mr-4">
                            <i className="fas fa-thumbs-up text-gray-500 mr-1"></i>
                            <span>Helpful (31)</span>
                          </div>
                          <div className="text-blue-600 cursor-pointer">
                            Read more
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <Button
                        variant="outline"
                        className="!rounded-button whitespace-nowrap"
                      >
                        Load More Reviews
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="interview" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6">
                      Interview Process
                    </h3>

                    <div className="space-y-6 mb-8">
                      <div className="flex">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                            <span className="font-medium">1</span>
                          </div>
                          <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">
                            Application Review
                          </h4>
                          <p className="text-gray-700 mb-3">
                            Our recruiting team will review your application and
                            portfolio to assess your qualifications against the
                            job requirements.
                          </p>
                          <p className="text-gray-500 text-sm">
                            Typical response time: 1-2 weeks
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                            <span className="font-medium">2</span>
                          </div>
                          <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">
                            Initial Screening
                          </h4>
                          <p className="text-gray-700 mb-3">
                            A 30-minute phone or video call with a recruiter to
                            discuss your background, experience, and interest in
                            the role.
                          </p>
                          <p className="text-gray-500 text-sm">
                            Duration: 30 minutes
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                            <span className="font-medium">3</span>
                          </div>
                          <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">
                            Design Challenge
                          </h4>
                          <p className="text-gray-700 mb-3">
                            You'll be given a design challenge to complete
                            within a specified timeframe. This helps us
                            understand your design process, problem-solving
                            abilities, and execution skills.
                          </p>
                          <p className="text-gray-500 text-sm">
                            Duration: 3-5 days to complete
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                            <span className="font-medium">4</span>
                          </div>
                          <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">
                            Portfolio Presentation
                          </h4>
                          <p className="text-gray-700 mb-3">
                            You'll present your portfolio and design challenge
                            solution to the design team, explaining your
                            process, decisions, and outcomes.
                          </p>
                          <p className="text-gray-500 text-sm">
                            Duration: 1 hour
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                            <span className="font-medium">5</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">
                            Final Interviews
                          </h4>
                          <p className="text-gray-700 mb-3">
                            A series of interviews with design team members,
                            cross-functional partners, and leadership to assess
                            your technical skills, collaboration abilities, and
                            cultural fit.
                          </p>
                          <p className="text-gray-500 text-sm">
                            Duration: 3-4 hours (typically split across multiple
                            sessions)
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
                      <h4 className="font-semibold text-lg mb-3">
                        Interview Tips
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                          <p className="text-gray-700">
                            Be prepared to discuss your design process in
                            detail, including how you approach research,
                            ideation, and iteration.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                          <p className="text-gray-700">
                            Showcase your ability to collaborate with
                            cross-functional teams and incorporate feedback into
                            your work.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                          <p className="text-gray-700">
                            Highlight your experience with design systems and
                            component libraries.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                          <p className="text-gray-700">
                            Be ready to discuss how you measure the success of
                            your designs and iterate based on data.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Similar Jobs */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Similar Jobs</h3>
              <ScrollArea className="w-full whitespace-nowrap pb-4">
                <div className="flex space-x-4">
                  {similarJobs.map((job) => (
                    <Card
                      key={job.id}
                      className="w-[300px] flex-shrink-0 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                            <img
                              src={job.logo}
                              alt={job.company}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-base">
                              {job.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {job.company}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2 mb-3">
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-3.5 w-3.5 mr-1.5" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <i className="fas fa-dollar-sign mr-1.5"></i>
                            <span>{job.salary}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <Badge className="bg-blue-100 text-blue-800">
                            {job.matchPercentage}% Match
                          </Badge>
                          <Button
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap"
                          >
                            Apply
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="w-full lg:w-1/3 space-y-6">
            {/* Application Card */}
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Application</h3>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">
                      Application Deadline
                    </span>
                    <span className="text-sm font-medium">
                      {jobDetails.applicationDeadline}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Applicants</span>
                    <span className="text-sm font-medium">
                      {jobDetails.applicants}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Estimated Time to Apply
                    </span>
                    <span className="text-sm font-medium">5-10 minutes</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="mb-4">
                  <h4 className="font-medium mb-3">Required Documents</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      <span className="text-sm">Resume/CV</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      <span className="text-sm">Portfolio</span>
                    </div>
                    <div className="flex items-center">
                      <i className="far fa-circle text-gray-400 mr-2"></i>
                      <span className="text-sm text-gray-600">
                        Cover Letter (Optional)
                      </span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap">
                  <i className="fas fa-paper-plane mr-2"></i>
                  Apply Now
                </Button>

                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    By applying, you agree to our Terms and Privacy Policy
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Skills Card */}
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Skills & Requirements
                </h3>

                <div className="mb-6">
                  <h4 className="font-medium text-sm mb-3">Required Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {jobDetails.requiredSkills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-blue-50 text-blue-700 border border-blue-100"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">Experience</h4>
                      <span className="text-sm text-gray-600">
                        {jobDetails.experience}
                      </span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">Education</h4>
                      <span className="text-sm text-gray-600">
                        Bachelor's Degree
                      </span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Languages</h4>
                    <div className="space-y-2">
                      {jobDetails.languages.map((language, index) => (
                        <div key={index} className="flex items-center">
                          <i className="fas fa-check-circle text-green-500 mr-2"></i>
                          <span className="text-sm">{language}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Card */}
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  About the Company
                </h3>

                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden mr-3">
                    <img
                      src={jobDetails.logo}
                      alt={jobDetails.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{jobDetails.company}</h4>
                    <p className="text-sm text-gray-600">
                      {jobDetails.industry}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                  {jobDetails.about}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <Building className="h-4 w-4 text-gray-500 mr-2" />
                    <span>{jobDetails.companySize}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                    <span>Headquarters: San Francisco, CA</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Globe className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-blue-600 hover:underline cursor-pointer">
                      {jobDetails.website}
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full !rounded-button whitespace-nowrap"
                >
                  View Company Profile
                </Button>
              </CardContent>
            </Card>

            {/* Actions Card */}
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Actions</h3>

                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="w-full !rounded-button whitespace-nowrap"
                    onClick={() => setIsSaved(!isSaved)}
                  >
                    {isSaved ? (
                      <>
                        <i className="fas fa-bookmark text-blue-600 mr-2"></i>{" "}
                        Saved
                      </>
                    ) : (
                      <>
                        <Bookmark className="h-4 w-4 mr-2" /> Save Job
                      </>
                    )}
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full !rounded-button whitespace-nowrap"
                  >
                    <Share2 className="h-4 w-4 mr-2" /> Share
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full !rounded-button whitespace-nowrap"
                  >
                    <Printer className="h-4 w-4 mr-2" /> Print
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full !rounded-button whitespace-nowrap"
                  >
                    <Flag className="h-4 w-4 mr-2" /> Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-auto">
          <div className="max-w-6xl mx-auto py-8 px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="bg-blue-600 text-white p-2 rounded-md">
                    <i className="fas fa-briefcase text-xl"></i>
                  </div>
                  <h1 className="text-xl font-bold">JobConnect</h1>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Find your dream job with JobConnect, the leading platform for
                  connecting talented professionals with top companies.
                </p>
                <div className="flex space-x-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-600 hover:text-blue-600 !rounded-button whitespace-nowrap"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-600 hover:text-blue-600 !rounded-button whitespace-nowrap"
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-600 hover:text-blue-600 !rounded-button whitespace-nowrap"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-600 hover:text-blue-600 !rounded-button whitespace-nowrap"
                  >
                    <i className="fab fa-instagram"></i>
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">For Job Seekers</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="hover:text-blue-600 cursor-pointer">
                    Browse Jobs
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Career Resources
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Resume Builder
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Salary Calculator
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Job Alerts
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">For Employers</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="hover:text-blue-600 cursor-pointer">
                    Post a Job
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Browse Candidates
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Recruiting Solutions
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Pricing Plans
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Resources
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="hover:text-blue-600 cursor-pointer">
                    About Us
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Contact Us
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Privacy Policy
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Terms of Service
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Help Center
                  </li>
                </ul>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <p className="text-sm text-gray-500 mb-4 md:mb-0">
                © 2025 JobConnect. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <i className="fab fa-cc-visa text-gray-600 text-xl mr-2"></i>
                  <i className="fab fa-cc-mastercard text-gray-600 text-xl mr-2"></i>
                  <i className="fab fa-cc-paypal text-gray-600 text-xl"></i>
                </div>
                <div className="text-sm text-gray-500">
                  <select className="bg-transparent border-none outline-none">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default JobDetails;
