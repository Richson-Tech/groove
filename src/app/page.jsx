import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHotel } from "react-icons/fa";

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
              Muhammed Airport's international terminal, with in-house
              immigration facilities for private jet passengers. A fusion of
              authentic African and modern design, our hotel features an indoor
              pool with adjoining terrace bar, a fitness center, and steam room.
              Our steak restaurant and two lounges complete your stay.
            </p>
            <div className="flex justify-between gap-5">
              <Link href="/restaurant">
                <button className="bg-[#AA825D] text-white px-4 py-2 rounded transition hover:bg-white hover:text-black">
                  Check-In
                </button>
              </Link>
              <Link href="#">
                <button className="bg-[#AA825D] text-white px-4 py-2 rounded transition hover:bg-white hover:text-black">
                  Check-Out
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col flex-1 ">
            <Image
              src="https://images.unsplash.com/photo-1578991624414-276ef23a534f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjB3ZWxjb21lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
      <div className="h-96 bg-white text-2xl mt-10">
        <div className="flex items-center justify-center flex-wrap flex-col">
          <h2 className="font-['Work_Sans'] text-5xl">
            All In One Solution <br />
            <span className="pl-5">
              For Your <span className="text-[#AA825D]">Hospitability </span>
            </span>{" "}
          </h2>
        </div>
        {/* divs for solutions for hotels */}
        <div className="flex flex-row justify-between gap-5">
          <div className="flex flex-col">
            <FaHotel/>
            <h2>Prebuilt Websites</h2>
            <p>All of the demo websites can be easily imported making it incredible easy to get started building your site.</p>
          </div>
          <div className="flex flex-col">
            <FaHotel/>
            <h2>Booking Management</h2>
            <p>Accommodation availability is automatically managed and can be viewed in the calendar dashboard.</p>
          </div>
          <div className="flex flex-col">
            <FaHotel/>
            <h2>Language Translation</h2>
            <p>A custom built multi language translation plugin is included allowing you to easily translate your site.</p>
          </div>
          
        </div>
        <div className="flex flex-row justify-between gap-5">
          <div className="flex flex-col">
            <FaHotel/>
            <h2>Drag & Drop Interface</h2>
            <p>All pages and content can be edited using WP Bakery's drag and drop editor, no coding required.</p>
          </div>
          <div className="flex flex-col">
            <FaHotel/>
            <h2>Customer Friendly</h2>
            <p>Looks great and functions perfectly on mobile phones, tablets, laptops, and desktop computers.</p>
          </div>
          <div className="flex flex-col">
            <FaHotel/>
            <h2>Online Payments</h2>
            <p>WooCommerce support allows you to collect credit card payments in a wide variety of local currencies.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default page;
