import React from 'react'
import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "Restaurant",
  description: "This is Restaurant Page",
};

const page = () => {
  return (
    <div className={styles.imgContainer}>
    <Image
      alt="An hotel badge photo"
      className={styles.img}
      src="https://plus.unsplash.com/premium_photo-1661676056771-f6c2711249e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
      fill={true}
    />
    <div className="text-center absolute inset-0 flex items-center justify-center">
      <h2 className=" text-4xl font-bold font-['Work_Sans'] ">
        Restaurant
      </h2>
    </div>
    <div className="absolute inset-0 bg-yellow-900 opacity-20"></div>
  </div>

  // restaurant section 
  );
};

export default page