import React, {useState,useEffect} from 'react';
import DynamicIcon from '../DynamicIcon';
import api from '../apis/api';
// import Video from '../videos/video.mp4'
import { HomeSection,

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
        ParticleBg
        } from './HomePageElements';
import { ButtonTheme,ButtonIcon } from '../ButtonElements';
import Typical from 'react-typical'
import MyParticle from './Particles';


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
        <ParticleBg>
            <MyParticle />
        </ParticleBg>
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
                <HomeSvg viewBox="-105 -105 210 210">
                        <mask id="mask0" mask-type="alpha">
                            <path d="M-103.988209,-0.656077C-105.300364,-80.697475,-83.649821,-104.768424,0,-104.378317C83.649821,-103.98821,104.644287,-85.290014,104.378317,0C104.112347,85.290014,87.586284,103.332132,0,104.378317C-87.586284,105.424502,-102.676055,84.633937,-103.988209,-0.656077Z"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M-103.988209,-0.656077C-105.300364,-80.697475,-83.649821,-104.768424,0,-104.378317C83.649821,-103.98821,104.644287,-85.290014,104.378317,0C104.112347,85.290014,87.586284,103.332132,0,104.378317C-87.586284,105.424502,-102.676055,84.633937,-103.988209,-0.656077Z"/>
                            <ImageBlob href={Home && Home.image} alt={Home && Home.alt} x='-105' y='-106' />
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
