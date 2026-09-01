import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { imagesCarousel } from "@/mocks/ArticlesCarousel.mock";

export const ArticlesCarousel = () => {
    return (
        <Swiper
            className="w-full h-full"
            spaceBetween={0}
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
        >
            {imagesCarousel.map((image) => (
                <SwiperSlide key={image.id}>
                    <img
                        src={image.image}
                        alt={`Producto ${image.id}`}
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};