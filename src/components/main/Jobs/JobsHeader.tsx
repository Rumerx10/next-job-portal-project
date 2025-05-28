import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Grid, List, MapPin } from "lucide-react";


interface JobsHeaderProps {
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
  totalJobs: number;
  length: number;
};

const JobsHeader:React.FC<JobsHeaderProps> = ({ viewMode, setViewMode, totalJobs, length }: JobsHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
      <div className="mb-4 md:mb-0">
        <h3 className="text-lg font-semibold">
          Showing {length} of {totalJobs} jobs
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
              <SelectItem value="salary-high">Highest Salary</SelectItem>
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
  );
}

export default JobsHeader;