import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

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
};

interface JobCardListProps {
  jobs: Job[];
}

const JobCardList: React.FC<JobCardListProps> = ({ jobs }) =>{
  return (
    <div className="space-y-4 mb-8">
    {jobs.map((job) => (
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
                <h3 className="text-lg font-semibold">{job.position}</h3>
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
              <p className="text-sm text-gray-700 mb-3">{job.description}</p>
              <div>
                <p className="text-sm text-gray-700 mb-2">Required Skills:</p>
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
  )
};

export default JobCardList;
