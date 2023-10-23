import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import pictures from "@/data/pictures";

export const metadata = {
  title: "Gallery",
  description: "This is Gallery Page",
};

const Gallery = () => {
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
          <h2 className=" text-4xl font-bold font-['Work_Sans'] ">Gallery</h2>
        </div>
        <div className="absolute inset-0 bg-yellow-900 opacity-20"></div>
      </div>

      <div className="flex flex-col items-center justify-center mt-10">
        <h2 className="text-4xl leading-9 pb-3 font-bold">
          Royal Hotel Gallery
        </h2>
        <p className="text-sm text-[#777777]">
          Who are in extremely love with eco friendly system.
        </p>
      </div>

      {/* Pictures section  */}

      <div className="grid grid-cols-3 gap-4 ml-96 mr-96 mt-10">
        {pictures.map(({ id, src }) => (
          <>
            <div className="flex flex-col items-center justify-center">
              <div className="relative flex flex-row items-center justify-center">
                <Image
                  className="transition-transform transform scale-100 hover:scale-110 hover:duration-500"
                  alt="Images For Gallery"
                  key={id}
                  src={src}
                  height={270}
                  width={263}
                />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
