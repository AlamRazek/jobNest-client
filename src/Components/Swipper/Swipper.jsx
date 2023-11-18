import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Swipper = () => {
  return (
    <div>
      <div>
        <h2 className="text-4xl text-center font-semibold my-4 lg:my-8 shadow-md p-4">
          Featured Companies or Partnerships
        </h2>
      </div>
      <div className="shadow-lg p-4 lg:p-8">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{ delay: 2000 }}
          loop={true}
          onSlideChange={() => console.log()}
          onSwiper={(swiper) => console.log()}
        >
          <SwiperSlide>
            <img
              src="https://mma.prnewswire.com/media/24227/microsoft_corp_logo226_9217jpg.jpg?p=facebook"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://g.foolcdn.com/art/companylogos/square/brk.b.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://media.potatopro.com/walmart-1200x589.jpg?width=480&height=480&mode=fit"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://logowik.com/content/uploads/images/167_tesla_motors.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Swipper;
