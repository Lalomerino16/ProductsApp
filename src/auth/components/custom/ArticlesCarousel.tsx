import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { imagesCarousel } from "@/mocks/ArticlesCarousel.mock";


export const ArticlesCarousel = () => {
    
    return(
        <Swiper
            className="w-full h-full"
            spaceBetween={0}
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            pagination={{
                clickable: true
            }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}
        >

            {imagesCarousel.map((imageCarosel) => (
                <SwiperSlide key={imageCarosel.id}>
                    <div className="flex h-full items-center justify-center">
                        <h2 className="text-3xl font-light">
                            Descubre nuevos productos
                        </h2>
                    </div>
                </SwiperSlide>
            ))}
            
        </Swiper>
    );

}