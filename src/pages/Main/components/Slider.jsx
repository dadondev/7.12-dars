import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";

const urls = [
  "image-product-1.jpg",
  "image-product-2.jpg",
  "image-product-3.jpg",
  "image-product-4.jpg",
];
const StyledDiv = styled.div`
  display: block;

  @media (width>=1024px) {
    display: none;
  }
`;

const Slider = () => {
  return (
    <StyledDiv>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper z-10 max-h-[300px] sm:max-h-[450px]"
      >
        {urls.map((url, i) => (
          <SwiperSlide key={i}>
            <img src={url} alt="" className="object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledDiv>
  );
};

export default Slider;
