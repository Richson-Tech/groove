import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import {
  MdDinnerDining,
  MdSportsTennis,
  MdOutlineDirectionsCarFilled,
} from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { BiSolidDrink } from "react-icons/bi";

export const metadata = {
  title: "About",
  description: "This is About Page",
};

const About = () => {
  return (
    <div className="h-max">
      <div className={styles.imgContainer}>
        <Image
          alt="An hotel badge photo"
          className={styles.img}
          src="https://plus.unsplash.com/premium_photo-1661676056771-f6c2711249e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
          fill={true}
        />
        <div className="text-center absolute inset-0 flex items-center justify-center">
          <h2 className=" text-4xl font-bold font-['Work_Sans']">About Us</h2>
        </div>
        <div className="absolute inset-0 bg-yellow-900 opacity-20"></div>
      </div>
      {/* about our history section  */}

      <div className="h-4/5 bg-white">
        <div className="flex flex-row items-center justify-center gap-20 mt-20">
          <div className="flex flex-col items-start justify-center mb-48">
            <h2 className="font-['poppins'] text-4xl mb-10 text-[#222222] font-bold">
              About Us <br /> Our History <br /> Mission & Vision
            </h2>
            <p className="text-base text-[#777777]">
              inappropriate behavior is often laughed off as “boys will be
              boys,” <br /> women face higher conduct standards especially in
              the workplace. <br /> That’s why it’s crucial that, as women, our
              behavior on the job is <br /> beyond reproach. inappropriate
              behavior is often laughed.
            </p>

            <div className="relative h-10 w-56 mt-10">
              <div className="absolute left-0 top-0 w-0 h-full bg-amber-600 transition-all duration-300 ease-in-out"></div>
              <div className="flex flex-col items-center justify-center h-full bg-black hover:bg-[#AA825D] transition-all duration-700 ease-in-out relative">
                <h2 className="text-white text-base font-[poppins]">
                  REQUEST CUSTOM PRICE
                </h2>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              alt="An hotel view"
              height={755}
              width={550}
              className="ml-10 mb-10"
            />
          </div>
        </div>
      </div>
      {/* facilities area */}

      <div className="h-max">
        <div className={styles.imgsContainer}>
          <Image
            alt="An hotel badge photo"
            className={styles.img}
            src="https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            fill={true}
          />
          <div className="absolute inset-0 bg-slate-800 opacity-90"></div>
          <div className="text-center absolute inset-0 flex flex-col items-center justify-start">
            <h2 className="text-white pt-20 text-4xl font-[poppins] font-semibold leading-10 tracking-normal">
              Royal Facilities
            </h2>
            <p className="text-base font-[poppins] pt-2 text-white leading-9">
              Who are in extremely love with eco friendly system.
            </p>
          </div>
          {/* cards for facilities area */}

          <div className="absolute inset-0 flex flex-row items-center justify-center gap-5 mb-16">
            {/* <!-- First set of divs --> */}
            <div className="w-80 pt-8 pr-10 pb-9 pl-10 bg-transparent-purple rounded-lg shadow-lg border-[#777777] border-2 border-lg text-white">
              <div className="flex flex-row items-center justify-start gap-2">
                <MdDinnerDining className="items-center mb-2 text-[#AA825D] text-2xl" />
                <h4 className="text-xl font-bold mb-2 font-[poppins]">
                  Restaurant
                </h4>
              </div>
              <p className="text-sm">
                Usage of the Internet is becoming more common due to rapid
                advancement of technology and power.
              </p>
            </div>

            <div className="w-80 pt-8 pr-10 pb-9 pl-10 bg-transparent-purple rounded-lg shadow-lg border-[#777777] border-2 border-lg text-white">
              <div className="flex flex-row items-center justify-start gap-2">
                <MdSportsTennis className="items-center mb-2 text-[#AA825D] text-2xl" />
                <h4 className="text-xl font-bold mb-2 font-[poppins]">
                  Sports CLub
                </h4>
              </div>
              <p className="text-sm">
                Usage of the Internet is becoming more common due to rapid
                advancement of technology and power.
              </p>
            </div>

            <div className="w-80 pt-8 pr-10 pb-9 pl-10 bg-transparent-purple rounded-lg shadow-lg border-[#777777] border-2 border-lg text-white">
              <div className="flex flex-row items-center justify-start gap-2">
                <FaSwimmingPool className="items-center mb-2 text-[#AA825D] text-2xl" />
                <h4 className="text-xl font-bold mb-2 font-[poppins]">
                  Swimming Pool
                </h4>
              </div>
              <p className="text-sm">
                Usage of the Internet is becoming more common due to rapid
                advancement of technology and power.
              </p>
            </div>
          </div>

          {/* <!-- Second set of divs with space in between  */}
          <div className="absolute inset-0 flex flex-row items-center justify-center gap-5 mt-96">
            <div className="w-80 pt-8 pr-10 pb-9 pl-10 bg-transparent-purple rounded-lg shadow-lg border-[#777777] border-2 border-lg text-white">
              <div className="flex flex-row items-center justify-start gap-2">
                <MdOutlineDirectionsCarFilled className="items-center mb-2 text-[#AA825D] text-2xl" />
                <h4 className="text-xl font-bold mb-2 font-[poppins]">
                  Rent a Car
                </h4>
              </div>
              <p className="text-sm">
                Usage of the Internet is becoming more common due to rapid
                advancement of technology and power.
              </p>
            </div>

            <div className="w-80 pt-8 pr-10 pb-9 pl-10 bg-transparent-purple rounded-lg shadow-lg border-[#777777] border-2 border-lg text-white">
              <div className="flex flex-row items-center justify-start gap-2">
                <CgGym className="items-center mb-2 text-[#AA825D] text-2xl" />
                <h4 className="text-xl font-bold mb-2 font-[poppins]">
                  Gymnesium
                </h4>
              </div>
              <p className="text-sm">
                Usage of the Internet is becoming more common due to rapid
                advancement of technology and power.
              </p>
            </div>

            <div className="w-80 pt-8 pr-10 pb-9 pl-10 bg-transparent-purple rounded-lg shadow-lg border-[#777777] border-2 border-lg text-white">
              <div className="flex flex-row items-center justify-start gap-2">
                <BiSolidDrink className="items-center mb-2 text-[#AA825D] text-2xl" />
                <h4 className="text-xl font-bold mb-2 font-[poppins]">Bar</h4>
              </div>
              <p className="text-sm">
                Usage of the Internet is becoming more common due to rapid
                advancement of technology and power.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* testimonials section */}
      <div className="h-max bg-[#f9f9ff]">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-[poppins] text-[#222222] font-semibold leading-10 mt-20">
            Testimonial from our Clients
          </h2>
          <p className="text-base text-[#777777] font-[poppins]">
            he French Revolution constituted for the conscience of the dominant
            aristocratic class a fall from
          </p>
          <div className="flex flex-row items-center justify-center gap-5 mt-20 mb-20">
            <div className="w-4/12 h-60 bg-white p-10">
              <div className="flex flex-row gap-6">
                <Image
                  className="rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  width={200}
                  height={300}
                />

                <p className="text-base font-[poppins] text-[#8c8d9e]">
                  As conscious traveling Paupers we must always be concerned
                  about our dear Mother Earth. If you think about it, you travel
                  across her face, and She is the
                </p>
              </div>
              <h4 className="text-base pt-8 leading-7 font[poppins]">
                Fanny Spencer
              </h4>
            </div>
            <div className="w-4/12 h-60 bg-white p-10">
              <div className="flex flex-row gap-6">
                <Image
                  className="rounded-full"
                  src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  width={200}
                  height={300}
                />

                <p className="text-base font-[poppins] text-[#8c8d9e]">
                  As conscious traveling Paupers we must always be concerned
                  about our dear Mother Earth. If you think about it, you travel
                  across her face, and She is the
                </p>
              </div>
              <h4 className="text-base pt-8 leading-7 font[poppins]">
                Fanny Spencer
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
