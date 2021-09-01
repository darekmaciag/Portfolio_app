import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/swiper-bundle'
import 'swiper/swiper.scss';

export const TestimonialSectionWrapper = styled.section`
  padding: 2rem 0 4rem;

  @media screen and (min-width: 768px){
    padding: 6rem 0 2rem;
  }
`

export const TestimonialContainer = styled(Swiper)`
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
  overflow: inherit;

  
  @media screen and (max-width: 350px){
    margin-left: var(--mb-1);
    margin-right: var(--mb-1);
  }

  @media screen and (min-width: 768px){
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1024px) {
    .swiper-button-prev{
      left: -3.5rem;
    }
    .swiper-button-next{
      right: -3.5rem;
    }
  }

  .swiper-pagination {
    position: absolute;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
    bottom: 0 !important;
  }

  .swiper-button-prev{
    outline: none;
    left: -.5rem;
    color: ${props => props.theme.firstColor};

    &::after{
      font-size: 1.25rem;
    }
  }

  .swiper-button-next{
    outline: none;
    right: -.5rem;
    color: ${props => props.theme.firstColor};

    &::after{
      font-size: 1.25rem;
    }
 }

 .swiper-pagination-bullet{
  outline: none;
 }

 .swiper-pagination-bullet-active{
  background-color: ${props => props.theme.firstColor};
  }

  .swiper-container .swiper-pagination-testimonial{
    bottom: 0;
  }

 .swiper-container-horizontal > * .swiper-pagination-bullets{
  bottom: -2.5rem;
 }
`

export const TestimonialContent = styled.div`
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
`

export const TestimonialData = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--mb-1);

  @media screen and (max-width: 350px){
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

export const TestimonialHeader = styled.div`
  display: flex;

  @media screen and (max-width: 350px){
    flex-direction: column;
    align-items: center;
  }
`

export const TestimonialImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: var(--mb-0-75);

  @media screen and (max-width: 350px){
    margin-right: 0;
    margin-bottom: var(--mb-0-25);
  }
`

export const TestimonialName = styled.h3`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
`

export const TestimonialClient = styled.span`
  font-size: var(--small-font-size);
  color: ${props => props.theme.textColorLight};
`

export const TestimonialDescription = styled.p`
  margin-bottom: var(--mb-2-5);
  
  @media screen and (max-width: 350px){
    text-align: center;
  }
`

export const TestimonialIconStar = styled.i`
  color: ${props => props.theme.firstColor};
`




