import React from 'react';
import { EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter';

import 'swiper/css';
import 'swiper/css/effect-fade';
import { Fade } from 'react-awesome-reveal';

const Banner = () => {
  return (
    <div>
      <div className="gadgetContainer lg:h-[600px]  bg-gradient-to-r from-[#f7f9f0] from-10% via-[#e4e7b6be] via-30% to-[#f0f7f9] to-90% dark:bg-gradient-to-r dark:from-[#f2f2d8] dark:from-10% dark:via-[#FCE7DC] dark:via-30% dark:to-[#fae1d4]  px-5 md:px-[50px] lg:px-[80px] ">
        <Swiper
          effect={'fade'}
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
          className="mySwiper"
        >
          {/* slide 1 */}
          <SwiperSlide>
            <div className="md:h-[500px] h-auto">
              <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
                <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
                  <p className="font-semibold text-[#FA8072] mb-3 text-center md:text-left">
                    Hot Category
                  </p>

                  <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                    Explore Your favourite Landsacape Painting
                  </p>
                  <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                    Stay ahead with the latest Carft & Painting.
                  </p>

                  <div className="flex justify-center md:justify-start">
                    <button className="bg-[#FA8072] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#FA8072]">
                      <span className="mr-3">
                        <i className="bx bx-hive"></i>
                      </span>
                      Explore Now
                    </button>
                  </div>
                </div>

                {/* left */}
                <div className="w-full md:max-h-[350px] flex-1 mb-10 md:mb-0">
                  <img
                    className="md:h-full h-[300px] object-cover w-full"
                    src="https://i.ibb.co/7nCSdJY/misty-landscape.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* slide 2 */}
          <SwiperSlide>
            <div className="md:h-[500px] h-auto">
              <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
                <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
                  <p className="font-semibold text-[#FA8072] mb-3 text-center md:text-left">
                    Hot Category
                  </p>
                  <Fade>
                    <p>Explore Your favourite Landsacape Painting</p>
                  </Fade>
                  <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                    Explore Potrait Art <br /> & Painting
                  </p>
                  <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                    Explore of your thinking portrait here
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <button className="bg-[#FA8072] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#f86f60]">
                      <span className="mr-3">
                        <i className="bx bx-hive"></i>
                      </span>
                      Explore Now
                    </button>
                  </div>
                </div>

                {/* left */}
                <div className="w-full md:max-h-[350px]  flex-1 mb-10 md:mb-0">
                  <img
                    className="md:h-full h-[300px]  object-fill w-full"
                    src="https://i.ibb.co/Ksy3yrf/potrait-elegant.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* slide 3 */}
          <SwiperSlide>
            <div className="md:h-[500px] h-auto">
              <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
                <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
                  <p className="font-semibold text-[#FA8072] mb-3 text-center md:text-left">
                    Top Category
                  </p>

                  <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                    Shop Smart, Shop <br /> Art & Craft
                  </p>
                  <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                    Find the perfect Painting for your lifestyle.
                  </p>

                  <div className="flex justify-center md:justify-start">
                    <button className="bg-[#FA8072] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#f87061]">
                      <span className="mr-3">
                        <i className="bx bx-hive"></i>
                      </span>
                      Explore Now
                    </button>
                  </div>
                </div>

                {/* left */}
                <div className="w-full md:max-h-[350px]  flex-1 mb-10 md:mb-0">
                  <img
                    className="md:h-full h-[300px] object-cover w-full"
                    src="https://i.ibb.co/2ScPN6n/oil-vibrant.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
