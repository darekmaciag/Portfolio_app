import React from 'react';
import { TitleSection } from '../TitleSection'
import { ButtonTheme } from '../ButtonElements';
import DynamicIcon from '../DynamicIcon';
import { 
        PortfolioSectionWrapper,
        PortfolioContainer,
        PortfolioContent,
        PortfolioImg,
        PortfolioTitle,
        PortfolioDescriptions,
        PortfolioButtonIcon,
        PortfolioData
         } from './PortfolioSectionElements';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'


const PortfolioSection = ({title,subtitle,img,alt,portfoliotitle,portfoliodescription,url}) => {
  SwiperCore.use([Navigation, Pagination]);

  const data = [
    {
      img:"aaa",
      alt:"aaa",
      title: "road1",
      description: "aaaa1",
      url:"aaa"
    },
    {
      img:"aaa",
      alt:"aaa",
      title: "road1",
      description: "aaaa1",
      url:"aaa"
    },
    {
      img:"aaa",
      alt:"aaa",
      title: "road1",
      description: "aaaa1",
      url:"aaa"
    },
  ];
  
  return (
            <PortfolioSectionWrapper id="portfolio">
                <TitleSection title={title} subtitle={subtitle} />
        
                <PortfolioContainer navigation={true} pagination={true}>
                        {data.map((portfolio, index) =>{
                          return(
                            <SwiperSlide key={ `slide_${ index }`}>
                                <PortfolioContent>
                                <PortfolioImg src={portfolio.img} alt={portfolio.alt} />

                                    <PortfolioData>
                                        <PortfolioTitle>{portfolio.title}</PortfolioTitle>
                                        <PortfolioDescriptions>{portfolio.description}</PortfolioDescriptions>
                                        <ButtonTheme to='/' styles={"small"} href={portfolio.url} rel="noreferrer" target="_blank">Demo
                                        <PortfolioButtonIcon><DynamicIcon icon={"FaArrowRight"} /></PortfolioButtonIcon>
                                        </ButtonTheme>
                                    </PortfolioData>
                                </PortfolioContent>
                            </SwiperSlide>
                          )
                        })}
                </PortfolioContainer>

            </PortfolioSectionWrapper>
    );
};

export default PortfolioSection;
