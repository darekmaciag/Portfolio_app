import React, { useState,useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { ButtonTheme } from '../ButtonElements';
import { TitleSection } from '../TitleSection';
import api from '../apis/api';
import DynamicIcon from '../DynamicIcon';
import ServicesDetail from './ServicesData';
import { 
        ServiceSectionWrapper,
        ServiceContainer,
        ServiceContent,
        ServicesIcon,
        ServicesTitle,
        ServicesButtonArrow,
        ServicesModal1,
        ServicesModal2,
        ServicesModal3,
        ServicesModalContent,
        ServicesModalTitle,
        ServicesModalClose,
        ServicesModalGrid
     } from './ServicesSectionElements';

const ServicesSection = ({title,subtitle}) => {
    const [openModal1, setOpenModal1] = useState(true)
    const [openModal2, setOpenModal2] = useState(true)
    const [openModal3, setOpenModal3] = useState(true)
    const [servicesInfo, setServicesInfo] = useState([]);

    const fetchServicesData  = async () =>{
        const response = await api.get('/serviceinfo/')
        setServicesInfo(response.data)
    }

    useEffect(()=>{ fetchServicesData() },[])

    const FirstColumn = servicesInfo.at(0)
    const SecondColumn = servicesInfo.at(1)
    const ThirdColumn = servicesInfo.at(2)

    const modal1 = () => {
        setOpenModal1(!openModal1)
    }
    const modal2 = () => {
        setOpenModal2(!openModal2)
    }
    const modal3 = () => {
        setOpenModal3(!openModal3)
    }

    return (
        <ServiceSectionWrapper id="services">
            <TitleSection title={title} subtitle={subtitle} />


        <ServiceContainer>
            {/* <!--==================== SERVICES 1 ====================--> */}
            <ServiceContent>
                <div>
                    <ServicesIcon><DynamicIcon icon={FirstColumn && FirstColumn.icon} /></ServicesIcon>
                    <ServicesTitle>{FirstColumn && FirstColumn.name}<br />{FirstColumn && FirstColumn.name2}</ServicesTitle>
                </div>
                
                <ButtonTheme to='services' styles={"link"} onClick={modal1} >
                    View more
                    <ServicesButtonArrow />
                </ButtonTheme>
                
                <ServicesModal1 openModal1={openModal1}>
                    <ServicesModalContent>
                        <ServicesModalTitle>{FirstColumn && FirstColumn.name}<br />{FirstColumn && FirstColumn.name2}</ServicesModalTitle>
                        <ServicesModalClose onClick={modal1}><FaTimes /></ServicesModalClose>

                        <ServicesModalGrid>
                                {ServicesDetail(FirstColumn && FirstColumn.id)}
                        </ServicesModalGrid>

                    </ServicesModalContent>
                </ServicesModal1>
            </ServiceContent>

            <ServiceContent>
                <div>
                    <ServicesIcon><DynamicIcon icon={SecondColumn && SecondColumn.icon} /></ServicesIcon>
                    <ServicesTitle>{SecondColumn && SecondColumn.name}<br />{SecondColumn && SecondColumn.name2}</ServicesTitle>
                </div>
                
                <ButtonTheme to='services' styles={"link"} onClick={modal2} >
                    View more
                    <ServicesButtonArrow />
                </ButtonTheme>
                
                <ServicesModal2 openModal2={openModal2}>
                    <ServicesModalContent>
                        <ServicesModalTitle>{SecondColumn && SecondColumn.name}<br />{SecondColumn && SecondColumn.name2}</ServicesModalTitle>
                        <ServicesModalClose onClick={modal2}><FaTimes /></ServicesModalClose>

                        <ServicesModalGrid>
                                {ServicesDetail(SecondColumn && SecondColumn.id)}
                        </ServicesModalGrid>

                    </ServicesModalContent>
                </ServicesModal2>
            </ServiceContent>

            <ServiceContent>
                <div>
                    <ServicesIcon><DynamicIcon icon={ThirdColumn && ThirdColumn.icon} /></ServicesIcon>
                    <ServicesTitle>{ThirdColumn && ThirdColumn.name}<br />{ThirdColumn && ThirdColumn.name2}</ServicesTitle>
                </div>
                
                <ButtonTheme to='services' styles={"link"} onClick={modal3} >
                    View more
                    <ServicesButtonArrow />
                </ButtonTheme>
                
                <ServicesModal3 openModal3={openModal3}>
                    <ServicesModalContent>
                        <ServicesModalTitle>{ThirdColumn && ThirdColumn.name}<br />{ThirdColumn && ThirdColumn.name2}</ServicesModalTitle>
                        <ServicesModalClose onClick={modal3}><FaTimes /></ServicesModalClose>

                        <ServicesModalGrid>
                                {ServicesDetail(ThirdColumn && ThirdColumn.id)}
                        </ServicesModalGrid>

                    </ServicesModalContent>
                </ServicesModal3>
            </ServiceContent>


        </ServiceContainer>
    </ServiceSectionWrapper>
    );
};

export default ServicesSection;
