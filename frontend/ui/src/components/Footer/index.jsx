import React, {useState,useEffect} from 'react';
import DynamicIcon from '../DynamicIcon';
import api from '../apis/api';
import { FooterSectionWrapper,
        FooterBg,
        FooterContainer,
        FooterTitle,
        FooterSubtitle,
        FooterLinks,
        FooterLink,
        FooterSocials,
        FooterSocial,
        FooterCopy
         } from './FooterElements';

const Footer = () => {
    const [socialLinkData,setSocialLinkData] = useState([]);

    const fetchSocialLinks  = async () =>{
        const response = await api.get('/socialicons/')
        setSocialLinkData(response.data)
    }

    useEffect(()=>{ fetchSocialLinks() },[])
    return (

        <FooterSectionWrapper id="footer">
            <FooterBg>
                <FooterContainer>
                    <div>
                        <FooterTitle>dae43</FooterTitle>
                        <FooterSubtitle>Developer</FooterSubtitle>
                    </div>

                    <FooterLinks>
                        <li>
                            <FooterLink
                            to="skills" 
                            smooth={false}
                            duration={200}
                            spy={true}
                            exact='true'>Skills</FooterLink>
                        </li>
                        <li>
                            <FooterLink
                            to="portfolio" 
                            smooth={false}
                            duration={200}
                            spy={true}
                            exact='true'>Portfolio</FooterLink>
                        </li>
                        <li>
                            <FooterLink
                            to="contact" 
                            smooth={false}
                            duration={200}
                            spy={true}
                            exact='true'>Contact</FooterLink>
                        </li>
                    </FooterLinks>
                    <FooterSocials>
                    {socialLinkData.map((contact, index) =>{
                          return(
                        <FooterSocial key={index} href={contact.url} rel="noreferrer" target="_blank">
                            <DynamicIcon icon={contact.icon}/>
                        </FooterSocial>
                        )
                    })}
                    </FooterSocials>
                </FooterContainer>
                
                <FooterCopy></FooterCopy>
            </FooterBg>
        </FooterSectionWrapper>
    );
};

export default Footer;
