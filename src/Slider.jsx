import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";

let items = [
  { name: "HTML5", img: "/Group 12 (1).svg" },
  { name: "CSS3", img: "/Group 13.svg" },
  { name: "Sass", img: "/Vector.svg" },
  { name: "JavaScript", img: "/Group (6).svg" },
  { name: "React", img: "/Group 14.svg" },
  
];

export default function Slider() {
  const { t } = useTranslation();

  return (
    <div className="skills">
      <Swiper
        className="skills-slider"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={2}
        speed={800}
        grabCursor
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          520: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {items.map(({ name, img, translate }) => {
          const label = translate ? t(name) : name;
          return (
            <SwiperSlide key={name}>
              <div className="skill">
                <img src={img} alt={label} />
                <span>{label}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}