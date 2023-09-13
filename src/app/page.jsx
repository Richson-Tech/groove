import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHotel } from "react-icons/fa";
import { MdBorderColor } from "react-icons/md";
import { SiGoogletranslate } from "react-icons/si";
import { VscServerEnvironment } from "react-icons/vsc";
import { BsEmojiSmileFill, BsCreditCard } from "react-icons/bs";
import png from "../../public/ss.png";

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

      {/* hospitabilities section */}

      <div className="h-96 bg-white text-2xl mt-10 mb-60">
        <div className="flex items-center justify-center flex-wrap flex-col">
          <h2 className="font-['Work_Sans'] text-5xl mb-10">
            All In One Solution <br />
            <span className="pl-5">
              For Your <span className="text-[#AA825D]">Hospitability </span>
            </span>{" "}
          </h2>
        </div>
        {/* divs for solutions for hotels */}

        <div className="flex flex-row justify-between gap-5 mb-16">
          <div className="flex flex-1 flex-col pl-20">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-[#E5D9CE]">
              <FaHotel size={25} className="text-[#AA825D]" />
            </div>
            <h2>Prebuilt Websites</h2>
            <p>
              All of the demo websites can be easily imported making it
              incredible easy to get started building your site.
            </p>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-[#E5D9CE]">
              <MdBorderColor size={25} className="text-[#AA825D]" />
            </div>
            <h2>Booking Management</h2>
            <p>
              Accommodation availability is automatically managed and can be
              viewed in the calendar dashboard.
            </p>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-[#E5D9CE]">
              <SiGoogletranslate size={25} className="text-[#AA825D]" />
            </div>
            <h2>Language Translation</h2>
            <p>
              A custom built multi language translation plugin is included
              allowing you to easily translate your site.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-5 mb-20">
          <div className="flex flex-1 flex-col pl-20">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-[#E5D9CE]">
              <VscServerEnvironment size={25} className="text-[#AA825D]" />
            </div>
            <h2>Convinient Environment</h2>
            <p>
              All pages and content can be edited using WP Bakery's drag and
              drop editor, no coding required.
            </p>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-[#E5D9CE]">
              <BsEmojiSmileFill size={25} className="text-[#AA825D]" />
            </div>
            <h2>Customer Friendly</h2>
            <p>
              Looks great and functions perfectly on mobile phones, tablets,
              laptops, and desktop computers.
            </p>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-[#E5D9CE]">
              <BsCreditCard size={25} className="text-[#AA825D]" />
            </div>
            <h2>Online Payments</h2>
            <p>
              WooCommerce support allows you to collect credit card payments in
              a wide variety of local currencies.
            </p>
          </div>
        </div>
      </div>

      {/* varies of rooms available  */}
      <div className="h-max bg-black text-2xl mt-10">
        <div className="flex items-center justify-center flex-wrap flex-col">
          <h1 className="font-['Work_Sans'] text-5xl mt-5 text-white mb-5">
            Demo Of Rooms
          </h1>
          <h6 className="text-white mb-10 font-[crimson]">
            The best experience you ever crave for Because comfort is more
            important
            <br />
            <span className="flex items-center justify-center">
              to see life from a different perspective.
            </span>
          </h6>
        </div>

        <div className="flex flex-row justify-between gap-5">
          <div className="flex flex-col flex-1">
            <Link href="/">
              <Image
                src="https://images.unsplash.com/photo-1608198399988-341f712c3711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                width={500}
                height={500}
                alt="Hotel room"
                className="rounded-md hover:opacity-50 hover:transition-all delay-75"
              />
              <p className="flex items-center justify-center text-white font-['Work_Sans'] pt-5">
                Standard Hotel
              </p>
            </Link>
          </div>
          <div className="flex flex-col flex-1">
            <Link href="/">
              <Image
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                width={500}
                height={500}
                alt="Hotel room"
                className="rounded-md hover:opacity-50 hover:transition-all delay-75"
              />
              <p className="flex items-center justify-center text-white font-['Work_Sans'] pt-5">
                Apartment
              </p>
            </Link>
          </div>
          <div className="flex flex-col flex-1">
            <Link href="/">
              <Image
                src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                width={500}
                height={500}
                alt="Hotel room"
                className="rounded-md hover:opacity-50 hover:transition-all delay-75"
              />
              <p className="flex items-center justify-center text-white font-['Work_Sans'] pt-5">
                Apartment 2
              </p>
            </Link>
          </div>
          <div className="flex flex-col flex-1">
            <Link href="/">
              <Image
                src="https://images.unsplash.com/photo-1594560913095-8cf34bab82ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                width={500}
                height={500}
                alt="Hotel room"
                className="rounded-md hover:opacity-50 hover:transition-all delay-75"
              />
              <p className="flex items-center justify-center text-white font-['Work_Sans'] pt-5">
                Bed & Breakfast
              </p>
            </Link>
          </div>
        </div>

        <div className="flex flex-row justify-between gap-5 mt-10">
          <div className="flex flex-col flex-1">
            <Link href="/">
              <Image
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                width={500}
                height={500}
                alt="Hotel room"
                className="rounded-md hover:opacity-50 hover:transition-all delay-75"
              />
              <p className="flex items-center justify-center text-white font-['Work_Sans'] pt-5">
                Town Villa
              </p>
            </Link>
          </div>
          <div className="flex flex-col flex-1">
            <Link href="/">
              <Image
                src="https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                width={500}
                height={500}
                alt="Hotel room"
                className="rounded-md hover:opacity-50 hover:transition-all delay-75"
              />
              <p className="flex items-center justify-center text-white font-['Work_Sans'] pt-5">
                City Hotel
              </p>
            </Link>
          </div>
          <div className="flex flex-col flex-1">
            <Link href="/">
              <Image
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJlYWNoJTIwaG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                width={500}
                height={500}
                alt="Hotel room"
                className="rounded-md hover:opacity-50 hover:transition-all delay-75"
              />
              <p className="flex items-center justify-center text-white font-['Work_Sans'] pt-5">
                Beach Resort
              </p>
            </Link>
          </div>
          <div className="flex flex-col flex-1">
            <Link href="/">
              <Image
                src="https://images.unsplash.com/photo-1567552379232-c32f3d41d353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJvdXRpcXVlJTIwaG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                width={500}
                height={500}
                alt="Hotel room"
                className="rounded-md hover:opacity-50 hover:transition-all delay-75"
              />
              <p className="flex items-center justify-center text-white font-['Work_Sans'] pt-5">
                Boutique Villa
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-5 mt-10 mb-10">
          <Link href="#">
            <Image
              src="https://img.freepik.com/free-photo/bedroom-hotel-with-defocused-double-bed_1232-890.jpg?size=626&ext=jpg"
              width={500}
              height={500}
              alt="Hotel room"
              className="rounded-md hover:opacity-50 hover:transition-all delay-75"
            />
            <p className="flex items-center justify-center text-white font-['Work_Sans'] pt-5 mb-10">
              More Coming Soon...
            </p>
          </Link>
        </div>
      </div>
      {/* BOOKING SYSTEM */}
      <div className="flex items-center justify-center font-['Work_Sans'] text-4xl mt-5">
        <h2 className="tracking-wider">
          The Complete{" "}
          <span className="text-[#AA825D]">
            {" "}
            Booking <br />
          </span>{" "}
          <span className="flex items-center justify-center">
            System You Need
          </span>
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-black text-base leading-8 tracking-wider">
          Soho Hotel comes packaged with it's own booking system custom built
          based on years of <br /> customer feedback. It should contain every
          feature you need, but if you feel something is <br /> missing please
          get in touch, I'm always open to feedback and feature requests
        </p>
      </div>
      <div className="box-content flex flex-row items-center justify-center mt-10">
        <Image src={png} height={100} width={628} />
      </div>
    </div>
  );
};

export default page;
