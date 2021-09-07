import React, {useState,useEffect} from 'react';
import { TitleSection } from '../TitleSection'
import api from '../apis/api';
import DynamicIcon from '../DynamicIcon';
import { 
        PortfolioSectionWrapper,
        PortfolioContainer,
        PortfolioContent,
        PortfolioImg,
        PortfolioTitle,
        PortfolioDescriptions,
        PortfolioButtonIcon,
        PortfolioButton,
        PortfolioData
         } from './PortfolioSectionElements';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'


const PortfolioSection = ({title,subtitle}) => {
  SwiperCore.use([Navigation, Pagination]);

  const [projectsData,setProjectsData] = useState([]);

  const fetchProjects  = async () =>{
      const response = await api.get('/projects/')
      setProjectsData(response.data)
  }

  useEffect(()=>{ fetchProjects() },[])
  
  return (
            <PortfolioSectionWrapper id="portfolio">
                <TitleSection title={title} subtitle={subtitle} />
        
                <PortfolioContainer navigation={true} pagination={true}>
                        {projectsData.map((portfolio, index) =>{
                          return(
                            <SwiperSlide key={ `slide_${ index }`}>
                                <PortfolioContent>
                                <PortfolioImg src={portfolio.image} alt={portfolio.alt} />

                                    <PortfolioData>
                                        <PortfolioTitle>{portfolio.name}</PortfolioTitle>
                                        <PortfolioDescriptions>{portfolio.description}</PortfolioDescriptions>
                                        <PortfolioButton styles={"small"} href={portfolio.github} rel="noreferrer" target="_blank">Show code
                                        <PortfolioButtonIcon><DynamicIcon icon={"FaArrowRight"} /></PortfolioButtonIcon>
                                        </PortfolioButton>
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
