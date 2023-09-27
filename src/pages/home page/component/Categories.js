import React from "react";
import {  StyledImage, Typography } from "../../../App.Styled";
import {
  CategoriesHeader,
  SwiperContainer,
} from "../Home.Styles";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function Categories() {
  const Card = ({ img, name }) => {
    return (
      <>
        <StyledImage src={img} width={"100%"} radius={"100%"} />
        <Typography fs="18" align="center" m="15">
          {name}
        </Typography>
      </>
    );
  };
  return (
    <>
    <CategoriesHeader>
        <Typography className="center" fs="34">Categories</Typography>
        <Typography className="none" bb="1px solid #000">See all categories</Typography>
      </CategoriesHeader>
      <SwiperContainer>
        <Swiper
          
          breakpoints={{
            1200: {
              spaceBetween:64,
          slidesPerView:5.5
            },
            1000: {
              spaceBetween:60,
          slidesPerView:5
            },
            950: {
              spaceBetween:55,
          slidesPerView:4.5
            },
            768: {
              spaceBetween:50,
          slidesPerView:4
            },
            680: {
              spaceBetween:40,
          slidesPerView:3.5
            },
            450: {
              spaceBetween:30,
          slidesPerView:3
            },
            200: {
              spaceBetween:24,
          slidesPerView:2.5
            },
          }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Card
              name={"Pink Panther"}
              img={require("../../../assets/item1.png")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name={"Gold Crest"}
              img={require("../../../assets/item2.png")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name={"Hot Lips"}
              img={require("../../../assets/item3.png")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name={"Brown Sugar"}
              img={require("../../../assets/item4.png")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name={"Red Velvet"}
              img={require("../../../assets/item5.png")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name={"Pink Panther"}
              img={require("../../../assets/item2.png")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name={"Pink Panther"}
              img={require("../../../assets/item1.png")}
            />
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
    </>
  );
}

export default Categories;
