import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact",
  description: "This is Contact Page",
};

const Contact = () => {
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
          <h2 className=" text-4xl font-bold font-['Work_Sans'] ">
            Contact Us
          </h2>
        </div>
        <div className="absolute inset-0 bg-yellow-900 opacity-20"></div>
      </div>
      {/* about us section  */}

      <div className="flex flex-row items-center justify-center gap-20 mt-20">
        <div className="flex items-center justify-center">
          <Image
            src="https://media.istockphoto.com/id/506799337/photo/multiethnic-group-of-people-and-about-us-concept.webp?b=1&s=170667a&w=0&k=20&c=j2D-BjEdtv0VcnHceLg_Kivg7mOxvUJGzXVJpdGIcB0="
            alt="An hotel view"
            height={755}
            width={850}
            className="ml-10 mb-10"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-3/12">
          <div className="mb-80">
            <h2 className="text-4xl font-bold mb-4 font-[poppins]">
              Lets get started
            </h2>
            <p className="block text-lg font-[poppins] font-normal text-[#808080]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
