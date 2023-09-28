import { Breadcrumbs, Link, Rating, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { BsEye } from 'react-icons/bs';

export const ProductDetails = () => {
    const imagesPath = [
        '../../../../assets/latest3.png',
        '../../../../assets/latest1.png',
        '../../../../assets/latest2.png',
        '../../../../assets/latest4.png',
    ]
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            Home
        </Link>,
        <Link underline="hover" key="2" color="inherit" href="/products">
            Clothing
        </Link>,
        <Typography key="3" color="text.primary">
            Huishō Pijama
        </Typography>,
    ]
    const timer = {
        days: 5,
        hours: 30,
        minutes: 30,
        seconds: 30
    }
    return (
        <Wrapper>
            <LeftWrapper>
                <ActiveImage src={require('../../../../assets/latest3.png')} />
                <WrapperImages>
                    {imagesPath.map(imagePath => (
                        <img src={require('../../../../assets/latest3.png')}  alt=""/>
                    ))}
                </WrapperImages>
            </LeftWrapper>
            <RightWrapper>

                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>

                <Typography variant="h2" margin={"10px 0"}>
                    Huishō Pijama
                </Typography>


                <Typography variant="p" width={"30%"} color={'#3E3E59'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt et dolore
                </Typography>

                <RatingReviewsWrapper>
                    <Rating readOnly value={5} />
                    <Typography variant="p" color={'#3E3E59'}>
                        <strong>23</strong> Reviews
                    </Typography>
                </RatingReviewsWrapper>
                <PriceWrapper>
                    <Typography variant={"h5"} fontSize={"26px"} fontWeight={600}>   $86.00</Typography>
                    <StyledDel> $104.00</StyledDel>
                </PriceWrapper>
                <ViewsWrapper>
                    <BsEye fontSize={"24px"} />
                    <Typography variant="p" color={'##121212'}> <strong>32</strong> people are looking at this product</Typography>
                </ViewsWrapper>
                <hr color='#F5F5F5' />

                <Typography fontSize={"16px"} marginTop={3}>
                    <SpanText>Hurry up, </SpanText>offer expired in:
                </Typography>
                <TimerWrapper>
                    {Object.keys(timer).map((unit) => {
                        return (
                            <UnitWrapper>
                                <Typography padding={3} borderRadius={"50px"} lineHeight={1}  sx={
                                    { backgroundColor: "#F5F5F5" }
                                }> {timer[unit] > 9 ? timer[unit] : `0${timer[unit]}`}  </Typography>
                                <Typography> {unit} </Typography>
                            </UnitWrapper>

                        )
                    })}
                </TimerWrapper>
                <hr color='#F5F5F5' />

            </RightWrapper>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 1108px;
    width: 100%;
`;

const LeftWrapper = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ActiveImage = styled.img`
    width: 100%;
    height: 80%;
`;

const WrapperImages = styled.div`
    width: 100%;
    height: 18%;
    display: flex;
    gap: 3%;
`;

const RightWrapper = styled.div`
    flex-basis: 40%;
`;

const RatingReviewsWrapper = styled.div`
    display: flex;
    gap: 1.5%;
    margin-top: 12px;
    margin-bottom: 16px;
    align-items: center;
`;

export const StyledDel = styled("del")`
  color: #A7A7A7;
  margin: 0 5px;
  font-size: 16px;
  font-weight: 400;
`;

export const PriceWrapper = styled.div`
  margin: 0 5px;
  display: flex;
  align-items: center;
  gap: 1.5%;
`;

export const ViewsWrapper = styled.div`
  margin: 24px 0;
  display: flex;
  gap: 1.5%;
  align-items: center;
`;

export const SpanText = styled.span`
  font-size: 16px;
  color: #DC3545;
  font-weight: 600;
`;

export const TimerWrapper = styled.div`
display: flex;
gap: 3%;
margin-top: 12px;
margin-bottom: 24px;
`;

export const UnitWrapper = styled.div`
    text-align: center;
`;

