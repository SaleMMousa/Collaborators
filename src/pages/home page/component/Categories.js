import React from "react";
import {  StyledImage, Typography } from "../../../App.Styled";
import {
  CategoriesHeader,
  CategoriesContainer,
  SwiperContainer,
} from "./Home.Styles";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function Categories() {
  const Card = ({ img, name }) => {
    return (
      <>
        <StyledImage src={img} width={"196px"} radius={"100%"} />
        <Typography fs="18" align="center" m="15">
          {name}
        </Typography>
      </>
    );
  };
  return (
    <CategoriesContainer>
      <CategoriesHeader>
        <Typography fs="34">Categories</Typography>
        <Typography bb="1px solid #000">See all categories</Typography>
      </CategoriesHeader>
      <SwiperContainer>
        <Swiper
          spaceBetween={64}
          slidesPerView={5.5}
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
    </CategoriesContainer>
  );
}

export default Categories;
