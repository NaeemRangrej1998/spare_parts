"use client";

import { Carousel } from "@material-tailwind/react";

export default function AutoPlayCarousel() {
  return (
    <Carousel
      autoplay={true}
      loop={true}
      autoplayDelay={3000} 
      transition={{ duration: 1 }}
      className=" h-full md:h-96"
    >
      <img
        src="/assets/images/banner_1.jpeg"
        alt="slide 1"
        className="h-full w-full object-fill"
      />

      <img
        src="/assets/images/banner_2.jpeg"
        alt="slide 2"
        className="h-full w-full object-fill"
      />

      <img
        src="/assets/images/banner_3.jpeg"
        alt="slide 3"
        className="h-full w-full object-fill"
      />
    </Carousel>
    // <Carousel
    //   autoplay
    //   loop
    //   autoplayDelay={3000}
    //   transition={{ duration: 1 }}
    //   className="h-96 md:h-96 bg-black"
    // >
    //   <img
    //     src="/assets/images/banner_1.jpeg"
    //     alt="slide 1"
    //     className="w-full h-auto md:h-full object-contain md:object-cover"
    //   />

    //   <img
    //     src="/assets/images/banner_2.jpeg"
    //     alt="slide 2"
    //     className="w-full h-auto md:h-full object-contain md:object-cover"
    //   />

    //   <img
    //     src="/assets/images/banner_3.jpeg"
    //     alt="slide 3"
    //     className="w-full h-auto md:h-full object-contain md:object-cover"
    //   />
    // </Carousel>
  );
}