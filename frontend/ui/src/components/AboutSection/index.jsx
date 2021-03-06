import React, {useState,useEffect} from 'react';
import { TitleSection } from '../TitleSection'
import {
        AboutSectionWrapper,
        AboutContainer,
        AboutImg,
        AboutData,
        AboutDescription,
        AboutInfo,
        AboutInfoTitle,
        AboutInfoName,
        AboutButtons,
        DownloadButton
         } from './AboutSectionElements';
import { ButtonIcon } from '../ButtonElements';
import DynamicIcon from '../DynamicIcon';
import api from '../apis/api';


const AboutSection = ({title, subtitle}) => {
    const [aboutInfo,setAboutInfo] = useState([]);

    const fetchAbouts  = async () =>{
        const response = await api.get('/about/')
        setAboutInfo(response.data)
    }

    useEffect(()=>{ fetchAbouts() },[])


    const About = aboutInfo.at(0)

    return (
        <AboutSectionWrapper id="about">
                    <TitleSection title={title} subtitle={subtitle} />
        <AboutContainer>
            <AboutImg src={About && About.image} alt={About && About.image_alt} />


            <AboutData>
                <AboutDescription>{About && About.about_description}</AboutDescription>
                <AboutInfo>
                <div>
                        <AboutInfoTitle>{About && About.info_title1}</AboutInfoTitle>
                        <AboutInfoName>{About && About.info_subtitle1}<br />{About && About.info_subtitle1a}</AboutInfoName>
                    </div>
                    <div>
                        <AboutInfoTitle>{About && About.info_title2}</AboutInfoTitle>
                        <AboutInfoName>{About && About.info_subtitle2}<br />{About && About.info_subtitle2a}</AboutInfoName>
                    </div>
                    <div>
                        <AboutInfoTitle>{About && About.info_title3}</AboutInfoTitle>
                        <AboutInfoName>{About && About.info_subtitle3}<br />{About && About.info_subtitle3a}</AboutInfoName>
                    </div>
                </AboutInfo>

                <AboutButtons>
                    <DownloadButton href={About && About.download} download={About && About.download}>Download CV
                        <ButtonIcon><DynamicIcon icon={"FaDownload"}></DynamicIcon></ButtonIcon>
                    </DownloadButton>
                </AboutButtons>
            </AboutData>
        </AboutContainer>
    </AboutSectionWrapper>
    );
};

export default AboutSection;
