import DreamJob from "./DreamJob";
import FeaturedCities from "./FeaturedCities";
import FeaturedJobs from "./FeaturedJobs";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import PopularJobCategories from "./PopularJobCategories";


const Home=()=>{
  return (
    <div className="">
      <Hero />
      <PopularJobCategories />
      <HowItWorks />
      <FeaturedJobs />
      <FeaturedCities />
      <DreamJob />
    </div>
  )
}

export default Home;