"use client";
import Image from "next/image";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

const Banner = () => {
  return (
    <section className="bg-red-600 lg:min-h-[700px] pt-16 lg:pt-8 bg-image1">
      <div className="container mx-auto min-h-[768px] flex items-center justify-center">
        <MouseParallaxContainer
          globalFactorX={0.2}
          globalFactorY={0.2}
          resetOnLeave
          className="w-full flex flex-col lg:flex-row items-center justify-center"
        >
          {/* text */}
          <MouseParallaxChild factorX={0.1} factorY={0.2}>
            <div className="flex flex-col lg:flex-col lg:gap-y-10 items-center text-center lg:text-left flex-1 px-6 text-white">
              <div className="flex-1">
                <div className="font-banger text-[32px] text-white uppercase tracking-[0.03em]">
                  En İyi Burgerler Burda
                </div>
              </div>
              <h1 className="text-6xl lg:text-8xl font-banger text-white">
                Lezzetin adresi, <br />
                doyurucu bir ziyafet!
              </h1>
            </div>
          </MouseParallaxChild>
          {/* images */}
          <MouseParallaxChild factorX={0.2} factorY={0.1} className="relative">
            <div>
              {/* image */}
              <div>
                <Image
                  src={"/bg-image.png"}
                  width={800}
                  height={800}
                  alt="burger"
                  priority={1}
                />
              </div>
            </div>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
  );
};

export default Banner;
