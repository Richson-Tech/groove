import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'


export const metadata = {
  title: "Contact",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className="h-5/6 bg-[#faf6f6]">
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
            className="ml-10"
          />
        </div>
        <div className="flex flex-col items-center justify-center h-4/6 w-4/12 pl-10 bg-white">
          <div className="mb-80">
            <h2 className="text-4xl font-bold mb-4 pt-10 font-[poppins]">
              Lets get <span className="text-[#9B804E]">Started </span>
            </h2>
            <p className="block text-lg font-[poppins] font-normal text-[#808080]">
              Far far away, behind the word mountains, far <br /> from the
              countries Vokalia and Consonantia, there live the blind texts.
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean.
            </p>
          </div>
        </div>
      </div>

      {/* get in touch section */}
      <div className=" pl-10">
        <div className="flex flex-row items-center justify-center gap-20">
          <div className="flex flex-col items-center justify-center h-max w-5/12 mb-72 bg-white">
            <h2 className="pt-10 text-3xl font-bold font-[PlayfairDisplay]">
              Get in touch
            </h2>
            <p className="text-base text-[#808080]">
              Your message was sent, thank you!
            </p>
            <div className="flex flex-row items-center justify-center gap-5 mt-5">
              <div className="flex flex-col items-center justify-center gap-3 ml-60">
                <label
                  htmlFor="name"
                  className="text-sm font-[poppins] font-semibold pr-28"
                >
                  FULL NAME
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-72 px-3 py-2 border-b-4 rounded-md"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-3 mr-96">
                <label
                  htmlFor="name"
                  className="text-sm font-[poppins] font-semibold pr-28"
                >
                  EMAIL ADDRESS
                </label>
                <input
                  type="Email"
                  placeholder="Email"
                  className="w-72 px-3 py-2 border-b-4 rounded-md"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center gap-5 mt-5 -ml-96">
              <div className="flex flex-col gap-3 ml-42">
                <label
                  htmlFor="name"
                  className="text-sm font-[poppins] font-semibold pr-28"
                >
                  SUBJECT
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-72 px-3 py-2 border-b-4 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-3 ml-42">
                <label
                  htmlFor="name"
                  className="text-sm font-[poppins] font-semibold pr-28"
                >
                  MESSAGE
                </label>
                <input
                  type="text"
                  placeholder="Message"
                  className="w-72 px-3 py-2 border-b-4 rounded-md"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Link href="/booknow" className="flex items-center p-4">
                <button className="h-10 bg-[#9B804E] font-[poppins] w-40 text-white hover:bg-transparent hover:text-[#9B804E] hover:border border-[#9B804E]">
                  SEND MESSAGE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
