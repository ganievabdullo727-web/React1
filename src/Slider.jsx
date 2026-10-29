import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";

const slides = [
  { title: "Слайд 1", text: "Короткое описание первого слайда" },
  { title: "Слайд 2", text: "Короткое описание второго слайда" },
  { title: "Слайд 3", text: "Короткое описание третьего слайда" },
  { title: "Слайд 4", text: "Короткое описание четвёртого слайда" },
  { title: "Слайд 5", text: "Короткое описание пятого слайда" },
  { title: "Слайд 6", text: "Короткое описание шестого слайда" },
  { title: "Слайд 7", text: "Короткое описание шестого слайда" },
  { title: "Слайд 8", text: "Короткое описание шестого слайда" },
  { title: "Слайд 9", text: "Короткое описание шестого слайда" },
  { title: "Слайд 10", text: "Короткое описание шестого слайда" },
  { title: "Слайд 11", text: "Короткое описание шестого слайда" },
  { title: "Слайд 12", text: "Короткое описание шестого слайда" },
  { title: "Слайд 13", text: "Короткое описание шестого слайда" },
  { title: "Слайд 14", text: "Короткое описание шестого слайда" },
  { title: "Слайд 15", text: "Короткое описание шестого слайда" },
  { title: "Слайд 16", text: "Короткое описание шестого слайда" },
  { title: "Слайд 17", text: "Короткое описание шестого слайда" },
  { title: "Слайд 18", text: "Короткое описание шестого слайда" },
  { title: "Слайд 19", text: "Короткое описание шестого слайда" },
  { title: "Слайд 20", text: "Короткое описание шестого слайда" },
  { title: "Слайд 21", text: "Короткое описание шестого слайда" },
  { title: "Слайд 22", text: "Короткое описание шестого слайда" },
  { title: "Слайд 23", text: "Короткое описание шестого слайда" },
  { title: "Слайд 24", text: "Короткое описание шестого слайда" },
  { title: "Слайд 25", text: "Короткое описание шестого слайда" },
  { title: "Слайд 26", text: "Короткое описание шестого слайда" },
  { title: "Слайд 27", text: "Короткое описание шестого слайда" },
  { title: "Слайд 28", text: "Короткое описание шестого слайда" },
  { title: "Слайд 29", text: "Короткое описание шестого слайда" },
  { title: "Слайд 30", text: "Короткое описание шестого слайда" }
];

export default function Slider() {
  return (
    <Swiper
      className="pretty-slider"
      modules={[Navigation, Pagination, Autoplay]}
      centeredSlides
      slidesPerView="auto"
      spaceBetween={24}
      speed={1500}
      grabCursor
      loop
      loopAdditionalSlides={2}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 1200,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
    >
      {slides.map((s, i) => (
        <SwiperSlide key={i}>
          <div className="slide-card">
            <span className="slide-num">{String(i + 1).padStart(2, "0")}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}