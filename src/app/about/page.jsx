import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

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
        <div className="absolute inset-0 bg-yellow-900 opacity-50"></div>
      </div>
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
            <div className="flex flex-col items-center justify-center h-10 w-56 bg-black mt-10">
              <h2 className="text-white text-base font-[poppings]">REQUEST CUSTOM PRICE</h2>
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

      <div style="background-image: url(https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60)"
      width={300}
      height={300}
      className="h-4/5 bg">

      </div>
    </div>
  );
};

export default About;
