import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="h-3/6">

      <Image
        src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        fill={true}
        alt="Landing Page"
        className="object-fit"
      />
      </div>
    </div>
  );
};

export default page;
