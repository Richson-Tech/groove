import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import cards from '@/data/cards'

export const metadata = {
  title: "Accomodation",
  description: "This is Accomodation Page",
};

const Accommodation = () => {
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
            Accomodation
          </h2>
        </div>
        <div className="absolute inset-0 bg-yellow-900 opacity-20"></div>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <h2 className="text-3xl leading-9 pb-3 font-semibold">
          Special Accomodation
        </h2>
        <p className="text-sm text-[#777777]">
          We all live in an age that belongs to the young at heart. Life that is
          becoming extremely fast
        </p>
      </div>

      {/* accomodations cards  */}

      <div className="flex flex-row items-center justify-center">
        <div className="relative ">
         {cards.map(({id,p,h5,h6,src})=>
         <Image className="relative" key={id} src={src} height={200} width={300}/>
         <p></p>
         )}
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
