import React, {useEffect, useState} from "react";
import { 
SkillsData,
SkillsName,
SkillsNumber,
SkillsBar,
SkillsPrecentage,
SkillsTitles } from './SkillsSectionElements';
import api from '../apis/api';


export default function SkillsDetail(props){    
    const [skillsDetailInfo,setSkillsDetailInfo] = useState([]);

    const fetchSkillsDetailData  = async () =>{
        const response = await api.get('/skilldetail/')
        setSkillsDetailInfo(response.data)
    }

    useEffect(()=>{ fetchSkillsDetailData() },[])

    return(
        skillsDetailInfo.map((skill, index) => {
            if (skill.skill === props){
                return(
                    <SkillsData key={index}> 
                        <SkillsTitles>
                            <SkillsName>{skill.name}</SkillsName>
                            <SkillsNumber>{skill.level}</SkillsNumber>
                        </SkillsTitles>
                            <SkillsBar>
                                <SkillsPrecentage width={skill.level}/>
                            </SkillsBar>
                    </SkillsData>
                )
            } else{
                return(null
                )
            }
        }))
}