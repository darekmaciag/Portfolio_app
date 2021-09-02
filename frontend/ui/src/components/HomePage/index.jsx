import React, {useState,useEffect} from 'react';
import DynamicIcon from '../DynamicIcon';
import api from '../apis/api';
import Video from '../videos/video.mp4'
import { HomeSection,
        HeroBg,
        VideoBg,
        HomeContainer,
        HomeContent,
        HomeSocial,
        HomeImg,
        HomeSvg,
        ImageBlob,
        HomeData,
        HomeTitle,
        HomeSubtitle,
        HomeDescriptions,
        HomeScroll,
        HomeScrollButton,
        HomeScrollMouse,
        HomeScrollName,
        HomeScrollArrow,
        HomeSocialIcon, 
        } from './HomePageElements';
import { ButtonTheme,ButtonIcon } from '../ButtonElements';
import Typical from 'react-typical'


const HomePageElements = () => {
    const [homesocialLinkData,setHomeSocialLinkData] = useState([]);
    const [homePageDetails,sethomePageDetails] = useState([]);

    const fetchSocialLinks  = async () =>{
        const response = await api.get('/socialicons/')
        setHomeSocialLinkData(response.data)
    }

    const fetchHomePage  = async () =>{
        const response = await api.get('/home/')
        sethomePageDetails(response.data)
    }

    useEffect(()=>{ fetchSocialLinks() },[])
    useEffect(()=>{ fetchHomePage() },[])

    const Home = homePageDetails.at(0)

    return (
        <HomeSection id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
        <HomeContainer>
            <HomeContent>
                <HomeSocial>
                {homesocialLinkData.map((contact, index) =>{
                          return(
                    <HomeSocialIcon key={index} href={contact.url} rel="noreferrer" target="_blank">
                        <DynamicIcon icon={contact.icon}/>
                    </HomeSocialIcon>
                        )
                    })}
                </HomeSocial>
                <HomeImg>
                    <HomeSvg viewBox="0 0 200 187">
                        <mask id="mask0" mask-type="alpha">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                            165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                            129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                            -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                            <ImageBlob href={Home && Home.image} alt={Home && Home.alt} x='12' y='12' />
                        </g>
                    </HomeSvg>
                </HomeImg>
                <HomeData>
                    <HomeTitle>{Home && Home.name}</HomeTitle>
                    <HomeSubtitle>
                        <Typical
                            steps={[Home && Home.subtitles1, 1000, Home && Home.subtitles2, 500, Home && Home.subtitles3, 500]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </HomeSubtitle>
                    <HomeDescriptions>{Home && Home.descriptions}</HomeDescriptions>
                    <ButtonTheme styles={'flex'} to="contact">
                        Contact Me <ButtonIcon><DynamicIcon icon={"FaRegPaperPlane"} /></ButtonIcon>
                    </ButtonTheme>
                </HomeData>
            </HomeContent>
            <HomeScroll>
                <HomeScrollButton to='about'>
                    <HomeScrollMouse />
                    <HomeScrollName>ScrollDown</HomeScrollName>
                    <HomeScrollArrow />
                </HomeScrollButton>
            </HomeScroll>
        </HomeContainer>
        </HomeSection>
    );
};

export default HomePageElements;
