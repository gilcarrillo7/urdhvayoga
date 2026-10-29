// import * as React from "react";
// import { navigate } from "gatsby";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";
// import img1 from "../../images/home/img1.jpeg";
// import img2 from "../../images/home/img2.jpeg";
// import img3 from "../../images/home/img3.jpeg";

// const slides = [img1, img2, img3];

// export default function HeroSlider() {
//   return (
//     <section className="relative min-h-[85vh] sm:min-h-screen overflow-hidden">
//       <Swiper
//         modules={[Autoplay, EffectFade, Pagination]}
//         effect="fade"
//         loop
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         speed={1200}
//         className="h-full"
//       >
//         {slides.map((src, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative min-h-[85vh] sm:min-h-screen">
//               <img
//                 src={src}
//                 alt="Urdhva Yoga"
//                 className="absolute inset-0 h-full w-full object-cover"
//                 loading={index === 0 ? "eager" : "lazy"}
//               />
//               {/* Overlay más claro y elegante */}
//               <div className="absolute inset-0 " />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }
import * as React from "react";

const Carousel = () => {
  return (
    <div className="w-full">
      <div className="bg-[url('../images/home/imgA1.jpg')] w-full h-screen bg-cover bg-[30%] bg-no-repeat" />
    </div>
  );
};

export default Carousel;
