import React from 'react';
import {Container, StyledImage, Typography} from "../../App.Styled";
import {CategoriesHeader, StyledCard, StyledCardWrapper} from "./Home.Styles";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function Categories(props) {

    return (
        <Container>
            <CategoriesHeader>
                <Typography fontSize="34">Categories</Typography>
                <Typography >See all categories</Typography>
            </CategoriesHeader>

            <Swiper
                spaceBetween={64}
                slidesPerView={5}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <StyledImage src={require("../../assets/item1.png")} width={"196px"} radius={'100%'} />
                    <Typography fontSize="18" align="center">
                        Pink Panther
                    </Typography>
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImage src={require("../../assets/item2.png")} width={"196px"} radius={'100%'} />
                    <Typography fontSize="18" align="center">
                        Pink Panther
                    </Typography>
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImage src={require("../../assets/item3.png")} width={"196px"} radius={'100%'} />
                    <Typography fontSize="18" align="center">
                        Pink Panther
                    </Typography>
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImage src={require("../../assets/item4.png")} width={"196px"} radius={'100%'} />
                    <Typography fontSize="18" align="center">
                        Pink Panther
                    </Typography>
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImage src={require("../../assets/item5.png")} width={"196px"} radius={'100%'} />
                    <Typography fontSize="18" align="center">
                        Pink Panther
                    </Typography>
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImage src={require("../../assets/item5.png")} width={"196px"} radius={'100%'} />
                    <Typography fontSize="18" align="center">
                        Pink Panther
                    </Typography>
                </SwiperSlide>
                <SwiperSlide>
                    <StyledImage src={require("../../assets/item2.png")} width={"196px"} radius={'100%'} />
                    <Typography fontSize="18" align="center">
                        Pink Panther
                    </Typography>
                </SwiperSlide>

            </Swiper>


            <StyledCardWrapper>
                <StyledCard>
                    <StyledImage src={require("../../assets/splash.png")} alt="item image" />
                    <Typography fontSize={34} fontWeight={500}>
                        Splash
                    </Typography>
                    <Typography className='collection'>
                        See Collection
                    </Typography>

                </StyledCard>
                <StyledCard>
                    <StyledImage src={require("../../assets/Paste image.png")} alt="item image" />
                    <Typography fontSize={34} fontWeight={500}>
                        Splash
                    </Typography>
                    <Typography className='collection'>
                        See Collection
                    </Typography>

                </StyledCard>
            </StyledCardWrapper>




        </Container>
    );
}

export default Categories;