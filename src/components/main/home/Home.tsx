import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import PopularJobCategories from "./PopularJobCategories";


const Home=()=>{
  return (
    <div className="h-[1200px]">
      <Hero />
      <PopularJobCategories />
      <HowItWorks />
    </div>
  )
}

export default Home;