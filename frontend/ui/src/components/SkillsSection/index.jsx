import React, {useState,useEffect} from 'react';
import api from '../apis/api';
import DynamicIcon from '../DynamicIcon';
import { TitleSection } from '../TitleSection'
import SkillsDetail from './SkillsDetailData';
import { 
        SkillSectionWrapper,
        SkillsContainer,
        SkillsContent,
        SkillsHeader,
        SkillsIcon,
        SkillsTitle,
        SkillsSubtitle,
        Arrow1,
        Arrow2,
        Arrow3,
        SkillList1,
        SkillList2,
        SkillList3,
       } from './SkillsSectionElements';

const SkillsSection = ({title,subtitle}) => {
    const [skillsInfo,setSkillsInfo] = useState([]);
    const [togglelist1, setTogglelist1] = useState(true)
    const [togglelist2, setTogglelist2] = useState(false)
    const [togglelist3, setTogglelist3] = useState(false)

    const fetchSkillsData  = async () =>{
        const response = await api.get('/skillsinfo/')
        setSkillsInfo(response.data)
    }

    useEffect(()=>{ fetchSkillsData() },[])



    const toggle1 = () => {
        setTogglelist1(!togglelist1)
    }

    const toggle2 = () => {
        setTogglelist2(!togglelist2)
    }

    const toggle3 = () => {
        setTogglelist3(!togglelist3)
    }

    const FirstColumn = skillsInfo.at(0)
    const SecondColumn = skillsInfo.at(1)
    const ThirdColumn = skillsInfo.at(2)

    return (
    <SkillSectionWrapper id="skills">
            <TitleSection title={title} subtitle={subtitle} />

        <SkillsContainer>
{/* <!-- =========================skills 1======================== --> */}
                <SkillsContent>
                    <SkillsHeader>
                        <SkillsIcon><DynamicIcon icon={FirstColumn && FirstColumn.icon} /></SkillsIcon>
                        <div>
                            <SkillsTitle>{FirstColumn && FirstColumn.name}</SkillsTitle>
                            <SkillsSubtitle>{FirstColumn && FirstColumn.description}</SkillsSubtitle>
                        </div>
                        <Arrow1 onClick={toggle1} togglelist1={togglelist1} />
                    </SkillsHeader>


                    <SkillList1 togglelist1={togglelist1}>

                    {SkillsDetail(FirstColumn && FirstColumn.id)}
      
                    </SkillList1>


                </SkillsContent>
{/* <!-- =========================skills 1======================== --> */}
                <SkillsContent>
                    <SkillsHeader>
                        <SkillsIcon><DynamicIcon icon={SecondColumn && SecondColumn.icon} /></SkillsIcon>
                        <div>
                            <SkillsTitle>{SecondColumn && SecondColumn.name}</SkillsTitle>
                            <SkillsSubtitle>{SecondColumn && SecondColumn.description}</SkillsSubtitle>
                        </div>
                        <Arrow2 onClick={toggle2} togglelist2={togglelist2} />
                    </SkillsHeader>


                    <SkillList2 togglelist2={togglelist2}>

                    {SkillsDetail(SecondColumn && SecondColumn.id)}
      
                    </SkillList2>


                </SkillsContent>
{/* <!-- =========================skills 1======================== --> */}
                <SkillsContent>
                    <SkillsHeader>
                        <SkillsIcon><DynamicIcon icon={ThirdColumn && ThirdColumn.icon} /></SkillsIcon>
                        <div>
                            <SkillsTitle>{ThirdColumn && ThirdColumn.name}</SkillsTitle>
                            <SkillsSubtitle>{ThirdColumn && ThirdColumn.description}</SkillsSubtitle>
                        </div>
                        <Arrow3 onClick={toggle3} togglelist3={togglelist3} />
                    </SkillsHeader>


                    <SkillList3 togglelist3={togglelist3}>

                    {SkillsDetail(ThirdColumn && ThirdColumn.id)}
      
                    </SkillList3>


                </SkillsContent>
{/* <!-- =========================skills 1======================== --> */}
        </SkillsContainer>
    </SkillSectionWrapper>
    );
};

export default SkillsSection;
