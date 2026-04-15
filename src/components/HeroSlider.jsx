import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const slides = [
  { imageUrl: "img/slider/one.jpg" },
  { imageUrl: "img/slider/two.jpg" },
  { imageUrl: "img/slider/three.jpg" },
  { imageUrl: "img/slider/four.jpg" },
  { imageUrl: "img/slider/five.jpg" },
  { imageUrl: "img/slider/six.jpg" },
  { imageUrl: "img/slider/seven.jpg" },
  { imageUrl: "img/slider/eight.jpg" },
  { imageUrl: "img/slider/nine.jpg" },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{ clickable: true }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img
            src={slide.imageUrl}
            alt={`slide-${index}`}
            className="h-125 w-full object-cover"
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;