import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import cards from "@/data/cards";

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

      <div className="flex flex-row items-center justify-center gap-10 mt-10">
        {cards.map(({ id, p, h4, h6, src }) => (
          <>
            <div className="flex flex-col items-center justify-center">
              <div className="relative flex flex-row items-center justify-center">
                <Image
                  className="transition-transform transform scale-100 hover:scale-110 hover:duration-500"
                  alt="Images For Accomodation"
                  key={id}
                  src={src}
                  height={270}
                  width={263}
                />
              </div>
              <div className=" flex flex-row items-center justify-center ">
                <p className="absolute flex flex-row items-center justify-center text-sm leading-8 uppercase font-semibold text-center mb-16 bg-[#f3c300] h-10 w-32 text-white hover:bg-yellow-600">
                  {p}
                </p>
              </div>
              <div className="flex flex-col mt-5">
                <h4 className="text-2xl font-[yeseva] font-semibold leading-10 text-[#222222]">
                  {h4}
                </h4>
                <div className="flex flex-row items-center justify-center">
                  <h6 className="text-2xl font-[yeseva] font-semibold leading-10 text-[#52c5fd]">
                    {h6}
                  </h6>
                  <h6 className="font-base pl-1 text-[#52c5fd] font-[poppins]">
                    /night
                  </h6>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      {/* room booking section  */}
      <div className="flex flex-row items-center justify-center mt-16">
        <div className="h-36 w-3/5 bg-[#04091E]">
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col">
              <h2 className="text-white">BOOK</h2>
              <h2 className="text-white">YOUR ROOM</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
