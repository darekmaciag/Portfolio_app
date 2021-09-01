import React, {useState} from 'react';
import { TitleSection } from '../TitleSection'
import QualificationsDetail from './QualificationsData';
import {QualificationSectionWrapper,
        QualificationContainer,
        QualificationTabs,
        QualificationButton,
        QualificationSchoolIcon,
        QualificationWorkIcon,
        QualificationSections,
        QualificationSchoolContent,
        QualificationnWorkContent } from './QualificationsSectionElements';

const QualificationsSection = ({title,subtitle}) => {
    const [openworklist, setOpenworklist] = useState(1)
    const [openschoollist, setOpenschoollist] = useState(0)


    const toggleWork = () => {
        if(openworklist === 1){
            setOpenworklist(0);
            setOpenschoollist(1);
        } else{
            setOpenworklist(1)
        }
    }

    const toggleSchool = () => {
        if(openschoollist === 1){
            setOpenschoollist(0);
            setOpenworklist(1);
        } else{
            setOpenschoollist(1)
        }
    }

    return (
        <QualificationSectionWrapper id="qualifications">
                <TitleSection title={title} subtitle={subtitle} />

                <QualificationContainer>
                    <QualificationTabs>

                        <QualificationButton onClick={toggleSchool}>
                            <QualificationSchoolIcon openschoollist={openschoollist} />
                            Education
                        </QualificationButton>

                        <QualificationButton onClick={toggleWork}>
                            <QualificationWorkIcon openworklist={openworklist} />
                            Work
                        </QualificationButton>

                    </QualificationTabs>

                    <QualificationSections>

                            <QualificationSchoolContent openschoollist={openschoollist}>
                                {QualificationsDetail("schools")}
                            </QualificationSchoolContent>
                        
                            <QualificationnWorkContent openworklist={openworklist}>
                                {QualificationsDetail("works")}
                            </QualificationnWorkContent>

                    </QualificationSections>
                </QualificationContainer>
            </QualificationSectionWrapper>
    );
};

export default QualificationsSection;
