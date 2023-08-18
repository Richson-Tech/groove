import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="h-96 relative">
        <Image
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
          fill={true}
          alt="Landing Page"
          className="h-screen object-cover"
        />
        {/* overlay */}
        <div className="absolute flex flex-col justify-center text-white items-center">
          <h6 className="">Welcome to Groove</h6>
          <h1 className="text-7xl">The Peak Of Luxury</h1>
          <p>
            Stay once, carry memories forever. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dicta minima atque temporibus sequi
            voluptate doloribus animi porro aliquam molestias ducimus tenetur
            vitae molestiae, fugiat ullam nisi nulla odio ea dolore! Nobis ea
            alias explicabo quia inventore eius doloremque necessitatibus
            similique pariatur libero assumenda a commodi, recusandae quis,
            earum dignissimos quod tempore dolores laborum quasi temporibus
            dolorum? Autem tempora pariatur neque. Et rem labore dolores eaque
            veniam animi quos, quod, recusandae expedita non blanditiis nobis
            voluptas aspernatur tempore sapiente porro error! Quasi quam nemo
            voluptatibus recusandae aliquam enim unde magni expedita!
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
