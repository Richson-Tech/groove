import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="h-screen bg-zinc-900 relative">
        <div className="absolute flex flex-row mt-60 gap-14">

        <div className="flex flex-col justify-center items-center flex-1 text-white ">
          <h6 className=" font-['inter'] text-3xl">Welcome to Groove</h6>
          <h1 className="text-7xl font-['crimson']">The Peak Of Luxury</h1>
          <p className="flex items-center justify-center text-center text-2xl font-['yeseva']">
            Sleek hospitality steps from LOS airport We're next to Murtala
            Muhammed Airport's international terminal, with in-house immigration
            facilities for private jet passengers. A fusion of authentic African
            and modern design, our hotel features an indoor pool with adjoining
            terrace bar, a fitness center, and steam room. Our steak restaurant
            and two lounges complete your stay.
          </p>
        </div>
        <div className="flex flex-col flex-1 ">
          <Image src="https://images.unsplash.com/photo-1578991624414-276ef23a534f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjB3ZWxjb21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" width={800} height={600}/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default page;
