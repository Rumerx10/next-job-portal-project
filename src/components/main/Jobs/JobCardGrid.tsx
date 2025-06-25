import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import Link from "next/link";


interface Job {
  id: string;
  logo: string;
  company: string;
  position: string;
  matchPercentage: number;
  location: string;
  salary: string;
  skills: string[];
  description: string;
  postedDate: string;
}

interface JobCardListProps {
  jobs: Job[];
}

const JobCardGrid: React.FC<JobCardListProps> = ({ jobs }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {jobs.map((job) => (
        <Link key={job.id} href={`/jobs/${job.id}`}>
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
              <p className="text-sm text-gray-700 mb-2">Required Skills:</p>
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
        </Link>
        
      ))}
    </div>
  );
};

export default JobCardGrid;
