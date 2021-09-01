import React, {useState,useEffect} from 'react';
import api from '../apis/api';
import { ButtonIcon, ButtonTheme } from '../ButtonElements';
import DynamicIcon from '../DynamicIcon';
import { 
        ProjectSectionWrapper,
        ProjectContainer,
        ProjectData,
        ProjectBg,
        ProjectTitle,
        ProjectDescription,
        ProjectImg,
         } from './ProjectSectionElements';



const ProjectSection = () => {
    const [projectData,setProjectData] = useState([]);

    const fetchProjectData  = async () =>{
        const response = await api.get('/yourproject/')
        setProjectData(response.data)
    }

    useEffect(()=>{ fetchProjectData() },[])

    const Project = projectData.at(0)

    return (
            <ProjectSectionWrapper id="project">
                <ProjectBg>
                    <ProjectContainer>
                        <ProjectData>
                            <ProjectTitle>{Project && Project.title}</ProjectTitle>
                            <ProjectDescription>{Project && Project.description}</ProjectDescription>
                            <ButtonTheme styles="white"  to='contact'>
                                Contact Me
                                <ButtonIcon><DynamicIcon icon={"FaRegPaperPlane"} /></ButtonIcon>
                            </ButtonTheme>
                        </ProjectData>
                        <ProjectImg src={Project && Project.image} alt={Project && Project.alt} />
                    </ProjectContainer>
                </ProjectBg>


            </ProjectSectionWrapper>
    );
};

export default ProjectSection;
