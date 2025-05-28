import Blog from "../blog/Blog";
import DreamJob from "./DreamJob";
import FeaturedCandidates from "./FeaturedCandidates";
import FeaturedCities from "./FeaturedCities";
import FeaturedJobs from "./FeaturedJobs";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import NewsArticles from "./NewsArticles";
import PopularJobCategories from "./PopularJobCategories";


const Home=()=>{
  return (
    <div className="overflow-hidden">
      <Blog />
      <Hero />
      <PopularJobCategories />
      <HowItWorks />
      <FeaturedJobs />
      <FeaturedCities />
      <DreamJob />
      <FeaturedCandidates />
      <NewsArticles />
    </div>
  )
}

export default Home;