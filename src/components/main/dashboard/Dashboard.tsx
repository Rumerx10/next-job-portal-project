// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import * as echarts from 'echarts';
import { useEffect } from 'react';

const Dashboard: React.FC = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Initialize chart after component mounts
  useEffect(() => {
    const chartDom = document.getElementById('activity-chart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Applications',
            type: 'bar',
            barWidth: '60%',
            data: [10, 7, 5, 12, 8, 3, 6],
            itemStyle: {
              color: '#6366f1'
            }
          }
        ]
      };
      myChart.setOption(option);
      
      // Resize chart when window size changes
      window.addEventListener('resize', () => {
        myChart.resize();
      });
      
      return () => {
        window.removeEventListener('resize', () => {
          myChart.resize();
        });
        myChart.dispose();
      };
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-white border-r border-gray-200 fixed h-full flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              JP
            </div>
            <h1 className="ml-3 text-xl font-bold">JobPortal</h1>
          </div>
        </div>
        
        <div className="flex-1 py-6 overflow-y-auto">
          <nav className="px-4 space-y-1">
            <button 
              onClick={() => setActivePage('dashboard')}
              className={`flex items-center w-full px-4 py-3 text-sm rounded-lg ${activePage === 'dashboard' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'} cursor-pointer !rounded-button whitespace-nowrap`}
            >
              <i className={`fas fa-chart-line mr-3 ${activePage === 'dashboard' ? 'text-indigo-600' : 'text-gray-400'}`}></i>
              Dashboard
            </button>
            
            <button 
              onClick={() => setActivePage('jobs')}
              className={`flex items-center w-full px-4 py-3 text-sm rounded-lg ${activePage === 'jobs' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'} cursor-pointer !rounded-button whitespace-nowrap`}
            >
              <i className={`fas fa-briefcase mr-3 ${activePage === 'jobs' ? 'text-indigo-600' : 'text-gray-400'}`}></i>
              Jobs
            </button>
            
            <button 
              onClick={() => setActivePage('applications')}
              className={`flex items-center w-full px-4 py-3 text-sm rounded-lg ${activePage === 'applications' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'} cursor-pointer !rounded-button whitespace-nowrap`}
            >
              <i className={`fas fa-file-alt mr-3 ${activePage === 'applications' ? 'text-indigo-600' : 'text-gray-400'}`}></i>
              Applications
            </button>
            
            <button 
              onClick={() => setActivePage('messages')}
              className={`flex items-center w-full px-4 py-3 text-sm rounded-lg ${activePage === 'messages' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'} cursor-pointer !rounded-button whitespace-nowrap`}
            >
              <i className={`fas fa-envelope mr-3 ${activePage === 'messages' ? 'text-indigo-600' : 'text-gray-400'}`}></i>
              Messages
              <Badge className="ml-auto bg-indigo-600 hover:bg-indigo-700">5</Badge>
            </button>
            
            <button 
              onClick={() => setActivePage('settings')}
              className={`flex items-center w-full px-4 py-3 text-sm rounded-lg ${activePage === 'settings' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'} cursor-pointer !rounded-button whitespace-nowrap`}
            >
              <i className={`fas fa-cog mr-3 ${activePage === 'settings' ? 'text-indigo-600' : 'text-gray-400'}`}></i>
              Settings
            </button>
          </nav>
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <Avatar className="h-10 w-10 border border-gray-200">
              <AvatarImage src="https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20of%20a%20young%20man%20with%20short%20brown%20hair%20wearing%20a%20business%20casual%20outfit%2C%20looking%20confident%20and%20approachable%2C%20high%20quality%20professional%20headshot%20on%20plain%20light%20background&width=100&height=100&seq=user-avatar&orientation=squarish" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">John Doe</p>
              <p className="text-xs text-gray-500">Premium Member</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-auto !rounded-button whitespace-nowrap">
                  <i className="fas fa-ellipsis-v text-gray-400"></i>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <i className="fas fa-user mr-2"></i> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <i className="fas fa-sign-out-alt mr-2"></i> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="ml-64 flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Welcome back, John!</h1>
              <p className="text-sm text-gray-500">{formattedDate}</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search jobs..."
                  className="w-64 pl-10 pr-4 py-2 rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
              </div>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="relative !rounded-button whitespace-nowrap">
                      <i className="fas fa-bell text-gray-600"></i>
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>You have 3 unread notifications</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <Button variant="ghost" size="icon" className="!rounded-button whitespace-nowrap">
                <i className="fas fa-cog text-gray-600"></i>
              </Button>
            </div>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="p-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Applied Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end">
                  <span className="text-3xl font-bold text-gray-900">42</span>
                  <span className="ml-2 text-sm font-medium text-green-600 flex items-center">
                    <i className="fas fa-arrow-up mr-1"></i> 12%
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">vs last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Saved Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end">
                  <span className="text-3xl font-bold text-gray-900">16</span>
                  <span className="ml-2 text-sm font-medium text-green-600 flex items-center">
                    <i className="fas fa-arrow-up mr-1"></i> 8%
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">vs last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Upcoming Interviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end">
                  <span className="text-3xl font-bold text-gray-900">5</span>
                  <span className="ml-2 text-sm font-medium text-green-600 flex items-center">
                    <i className="fas fa-arrow-up mr-1"></i> 20%
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">vs last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Profile Views</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end">
                  <span className="text-3xl font-bold text-gray-900">128</span>
                  <span className="ml-2 text-sm font-medium text-red-600 flex items-center">
                    <i className="fas fa-arrow-down mr-1"></i> 4%
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">vs last month</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Dashboard Sections */}
          <div className="grid grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="col-span-2 space-y-6">
              {/* Activity Chart */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Weekly Application Activity</CardTitle>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="!rounded-button whitespace-nowrap">
                          <i className="fas fa-ellipsis-h"></i>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Last 7 days</DropdownMenuItem>
                        <DropdownMenuItem>Last 30 days</DropdownMenuItem>
                        <DropdownMenuItem>Last 90 days</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent>
                  <div id="activity-chart" className="h-64 w-full"></div>
                </CardContent>
              </Card>
              
              {/* Recent Applications */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Recent Applications</CardTitle>
                    <Button variant="outline" size="sm" className="!rounded-button whitespace-nowrap">
                      View All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                                <i className="fab fa-google text-xl text-blue-500"></i>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">Google</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Senior Frontend Developer</div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">April 12, 2025</div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Button variant="ghost" size="sm" className="!rounded-button whitespace-nowrap">
                              <i className="fas fa-eye"></i>
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                                <i className="fab fa-microsoft text-xl text-orange-500"></i>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">Microsoft</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Product Designer</div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">April 10, 2025</div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Reviewed</Badge>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Button variant="ghost" size="sm" className="!rounded-button whitespace-nowrap">
                              <i className="fas fa-eye"></i>
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                                <i className="fab fa-apple text-xl text-gray-800"></i>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">Apple</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">iOS Developer</div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">April 8, 2025</div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Interview</Badge>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Button variant="ghost" size="sm" className="!rounded-button whitespace-nowrap">
                              <i className="fas fa-eye"></i>
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                                <i className="fab fa-amazon text-xl text-yellow-600"></i>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">Amazon</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Full Stack Developer</div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">April 5, 2025</div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Rejected</Badge>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Button variant="ghost" size="sm" className="!rounded-button whitespace-nowrap">
                              <i className="fas fa-eye"></i>
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-sm text-gray-500">Showing 4 of 42 applications</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" disabled className="!rounded-button whitespace-nowrap">
                        <i className="fas fa-chevron-left mr-1"></i> Previous
                      </Button>
                      <Button variant="outline" size="sm" className="!rounded-button whitespace-nowrap">
                        Next <i className="fas fa-chevron-right ml-1"></i>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              {/* Profile Completion */}
              <Card>
                <CardHeader>
                  <CardTitle>Profile Completion</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">80% completed</span>
                    <span className="text-sm font-medium text-indigo-600">4/5 sections</span>
                  </div>
                  <Progress value={80} className="h-2 bg-gray-200" />
                  
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      <span className="text-sm text-gray-700">Personal Information</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      <span className="text-sm text-gray-700">Education</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      <span className="text-sm text-gray-700">Work Experience</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      <span className="text-sm text-gray-700">Skills</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-circle text-gray-300 mr-2"></i>
                      <span className="text-sm text-gray-700">Portfolio</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white !rounded-button whitespace-nowrap">
                    Complete Profile
                  </Button>
                </CardContent>
              </Card>
              
              {/* Upcoming Interviews */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Interviews</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                        <i className="fab fa-apple text-xl text-gray-800"></i>
                      </div>
                      <div className="ml-4 flex-1">
                        <h4 className="text-sm font-medium text-gray-900">Apple Inc.</h4>
                        <p className="text-xs text-gray-500">iOS Developer</p>
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <i className="far fa-calendar mr-1"></i>
                          <span>April 17, 2025 • 10:00 AM</span>
                        </div>
                        <div className="flex items-center mt-1 text-xs text-gray-500">
                          <i className="fas fa-video mr-1"></i>
                          <span>Video Interview</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-3 space-x-2">
                      <Button variant="default" size="sm" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white !rounded-button whitespace-nowrap">
                        <i className="fas fa-video mr-1"></i> Join Call
                      </Button>
                      <Button variant="outline" size="sm" className="!rounded-button whitespace-nowrap">
                        <i className="far fa-calendar-alt"></i>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                        <i className="fab fa-microsoft text-xl text-orange-500"></i>
                      </div>
                      <div className="ml-4 flex-1">
                        <h4 className="text-sm font-medium text-gray-900">Microsoft</h4>
                        <p className="text-xs text-gray-500">Product Designer</p>
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <i className="far fa-calendar mr-1"></i>
                          <span>April 20, 2025 • 2:30 PM</span>
                        </div>
                        <div className="flex items-center mt-1 text-xs text-gray-500">
                          <i className="fas fa-map-marker-alt mr-1"></i>
                          <span>On-site Interview</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-3 space-x-2">
                      <Button variant="outline" size="sm" className="flex-1 !rounded-button whitespace-nowrap">
                        <i className="fas fa-directions mr-1"></i> Get Directions
                      </Button>
                      <Button variant="outline" size="sm" className="!rounded-button whitespace-nowrap">
                        <i className="far fa-calendar-alt"></i>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                        <i className="fab fa-facebook text-xl text-blue-600"></i>
                      </div>
                      <div className="ml-4 flex-1">
                        <h4 className="text-sm font-medium text-gray-900">Facebook</h4>
                        <p className="text-xs text-gray-500">UX Researcher</p>
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <i className="far fa-calendar mr-1"></i>
                          <span>April 22, 2025 • 11:15 AM</span>
                        </div>
                        <div className="flex items-center mt-1 text-xs text-gray-500">
                          <i className="fas fa-video mr-1"></i>
                          <span>Video Interview</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-3 space-x-2">
                      <Button variant="outline" size="sm" className="flex-1 !rounded-button whitespace-nowrap">
                        <i className="fas fa-video mr-1"></i> Join Call
                      </Button>
                      <Button variant="outline" size="sm" className="!rounded-button whitespace-nowrap">
                        <i className="far fa-calendar-alt"></i>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Recommended Jobs */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">Recommended Jobs</h2>
              <Button variant="outline" className="!rounded-button whitespace-nowrap">
                View All
              </Button>
            </div>
            
            <ScrollArea className="w-full whitespace-nowrap">
              <div className="flex space-x-6 pb-4">
                <Card className="w-80 flex-shrink-0">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                          <i className="fab fa-google text-xl text-blue-500"></i>
                        </div>
                        <div className="ml-3">
                          <CardTitle className="text-base">Senior Frontend Developer</CardTitle>
                          <CardDescription className="text-xs">Google • San Francisco, CA</CardDescription>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-500 !rounded-button whitespace-nowrap">
                        <i className="far fa-bookmark"></i>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <i className="fas fa-dollar-sign mr-1"></i>
                      <span>$120,000 - $150,000</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">React</Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">TypeScript</Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">Redux</Badge>
                    </div>
                    
                    <p className="text-xs text-gray-500 mb-4">
                      Join our team to build next-generation web applications. 5+ years of experience required.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <Button variant="outline" size="sm" className="!rounded-button whitespace-nowrap">
                      <i className="far fa-eye mr-1"></i> View
                    </Button>
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white !rounded-button whitespace-nowrap">
                      Quick Apply
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="w-80 flex-shrink-0">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                          <i className="fab fa-amazon text-xl text-yellow-600"></i>
                        </div>
                        <div className="ml-3">
                          <CardTitle className="text-base">Full Stack Developer</CardTitle>
                          <CardDescription className="text-xs">Amazon • Remote</CardDescription>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-500 !rounded-button whitespace-nowrap">
                        <i className="far fa-bookmark"></i>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <i className="fas fa-dollar-sign mr-1"></i>
                      <span>$110,000 - $140,000</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">Node.js</Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">React</Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">AWS</Badge>
                    </div>
                    
                    <p className="text-xs text-gray-500 mb-4">
                      Help build scalable cloud applications for millions of customers worldwide.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <Button variant="outline" size="sm" className="!rounded-button whitespace-nowrap">
                      <i className="far fa-eye mr-1"></i> View
                    </Button>
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white !rounded-button whitespace-nowrap">
                      Quick Apply
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="w-80 flex-shrink-0">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                          <i className="fab fa-apple text-xl text-gray-800"></i>
                        </div>
                        <div className="ml-3">
                          <CardTitle className="text-base">UX/UI Designer</CardTitle>
                          <CardDescription className="text-xs">Apple • Cupertino, CA</CardDescription>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-500 !rounded-button whitespace-nowrap">
                        <i className="far fa-bookmark"></i>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <i className="fas fa-dollar-sign mr-1"></i>
                      <span>$130,000 - $160,000</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">Figma</Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">Sketch</Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">User Research</Badge>
                    </div>
                    
                    <p className="text-xs text-gray-500 mb-4">
                      Create beautiful, intuitive interfaces for Apple products that millions of people use daily.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <Button variant="outline" size="sm" className="!rounded-button whitespace-nowrap">
                      <i className="far fa-eye mr-1"></i> View
                    </Button>
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white !rounded-button whitespace-nowrap">
                      Quick Apply
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="w-80 flex-shrink-0">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                          <i className="fab fa-microsoft text-xl text-orange-500"></i>
                        </div>
                        <div className="ml-3">
                          <CardTitle className="text-base">Data Scientist</CardTitle>
                          <CardDescription className="text-xs">Microsoft • Seattle, WA</CardDescription>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-500 !rounded-button whitespace-nowrap">
                        <i className="far fa-bookmark"></i>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <i className="fas fa-dollar-sign mr-1"></i>
                      <span>$125,000 - $155,000</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">Python</Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">Machine Learning</Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">SQL</Badge>
                    </div>
                    
                    <p className="text-xs text-gray-500 mb-4">
                      Work on cutting-edge ML models to solve complex business problems at scale.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <Button variant="outline" size="sm" className="!rounded-button whitespace-nowrap">
                      <i className="far fa-eye mr-1"></i> View
                    </Button>
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white !rounded-button whitespace-nowrap">
                      Quick Apply
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </ScrollArea>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

