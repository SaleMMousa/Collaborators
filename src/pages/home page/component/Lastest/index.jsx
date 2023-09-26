import React from "react";
import { Container, StyledImage, Typography } from "../../../../App.Styled";
import { LatestContent, LatestTitle, Oldprice, Staten } from "./StyledLatest";
import { Swiper, SwiperSlide } from "swiper/react";


function Latest() {
  const Card = ({ img, name, price, oldPrice, state }) => {
    return (
      <>
        <StyledImage src={img} width={"100%"} height={"413px"} />
        <Typography fw={'600'} ls={-0.4} mt="15">{name}</Typography>
        <Typography mt="15" fw={600}>
          {price}
          <Oldprice>
            {oldPrice}
          </Oldprice>
        </Typography>
        {state?<Staten>NEW</Staten>:""}
      </>
    );
  };
  return (
    <Container>
      <LatestContent>
        <LatestTitle>Latest Additions</LatestTitle>
        <LatestContent>
          <Swiper
            
          breakpoints={{
            1200: {
              spaceBetween:32,
          slidesPerView:4
            },
            1000: {
              spaceBetween:30,
          slidesPerView:3.5
            },
            950: {
              spaceBetween:28,
          slidesPerView:3
            },
            768: {
              spaceBetween:24,
          slidesPerView:2.5
            },
            620: {
              spaceBetween:20,
          slidesPerView:2
            },
            570: {
              spaceBetween:15,
          slidesPerView:1.5
            },
            200: {
              spaceBetween:16,
          slidesPerView:1.2
            },
          }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
            <Card
              name={"Cherry Cherry"}
              oldPrice={"$56.00"}
              price={"$56.00"}
              img={require("../../../../assets/latest1.png")}
              state={true}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name={"Pink Huice"}
              oldPrice={"$56.00"}
              price={"$56.00"}
              img={require("../../../../assets/latest2.png")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name={"Glossier Pack"}
              oldPrice={"$56.00"}
              price={"$56.00"}
              img={require("../../../../assets/latest3.png")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name={"Brown Sugar"}
              oldPrice={"$56.00"}
              price={"$56.00"}
              img={require("../../../../assets/latest4.png")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name={"Splash Mash"}
              oldPrice={"$56.00"}
              price={"$56.00"}
              img={require("../../../../assets/latest1.png")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name={"Pink Panther"}
              oldPrice={"$56.00"}
              price={"$56.00"}
              img={require("../../../../assets/latest1.png")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name={"Pink Panther"}
              price={"$56.00"}
              oldPrice={"$56.00"}
              img={require("../../../../assets/latest1.png")}
            />
            </SwiperSlide>
          </Swiper>
        </LatestContent>
      </LatestContent>
    </Container>
  );
}

export default Latest;
