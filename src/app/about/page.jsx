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
          className={styles.img}
          src="https://plus.unsplash.com/premium_photo-1661676056771-f6c2711249e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
          fill={true}
        />
      <div className="text-center absolute inset-0 flex items-center justify-center">
        <h2 className=" text-4xl font-bold font-['Work_Sans']">About Us</h2>
      </div>

      </div>
    </div>
  );
};

export default About;
