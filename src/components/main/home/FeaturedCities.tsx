import React from "react";

const FeaturedCities = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 my-20">
      <div className="flex flex-col items-center justify-center gap-2 lg:gap-5">
      <div className="flex flex-col items-center justify-center gap-2 lg:gap-5 ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl lg:text-center font-semibold">
          Featured Cities{" "}
        </h1>
        <p className="text-medium text-gray-500 text-center">
          Explore job opportunities in these popular cities.
        </p>
      </div>
        <div>images</div>
      </div>
    </div>
  );
};

export default FeaturedCities;
