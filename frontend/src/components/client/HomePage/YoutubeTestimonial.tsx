import React from "react";
import VideoPlayer from "../VideoPlayer";

const YoutubeTestimonial: React.FC = () => {
  return (
    <div className=" px-3 sm:px-14 md:px-16 lg:px-20 xl:px-24 py-5 flex flex-col md:flex-row gap-8 items-center">
      {/* Video Player Section */}
      <div className="w-full md:w-1/2">
        <VideoPlayer />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Goodness Promise</h2>
        <p className="text-slate-900 mb-6 text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi autem
          commodi tenetur nostrum sapiente et ad, incidunt nulla iusto dolorem?
          Autem dolor veniam hic ratione eaque incidunt cupiditate, debitis
          iste. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
          autem commodi tenetur nostrum sapiente et ad, incidunt nulla iusto
          dolorem? Autem dolor veniam hic ratione eaque incidunt cupiditate,
          debitis iste.
        </p>

        <div className="flex flex-row gap-4 justify-center">
          <button className="uppercase text-sm font-medium rounded-md bg-[--primary-color] px-6 py-3 text-white">
            shop now
          </button>
          <button className="uppercase text-sm font-medium rounded-md bg-white border border-[--primary-color] px-6 py-3 text-[--primary-color]">
            our pledges
          </button>
        </div>
      </div>
    </div>
  );
};

export default YoutubeTestimonial;
