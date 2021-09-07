import styled from 'styled-components';
import { FaBuilding, FaCalendar, FaGraduationCap } from 'react-icons/fa';


export const SectionTitle = styled.h2`
  text-align: center;
  color: ${props => props.theme.titleColor};
  font-weight: var(--font-semi-bold);
`

export const SectionSubtitle = styled.span`
  display: block;
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-3);
  text-align: center;
`

export const QualificationSectionWrapper = styled.section`
  padding: 2rem 0 4rem;

  @media screen and (min-width: 768px){
    padding: 6rem 0 2rem;
  }
`

export const QualificationContainer = styled.div`
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);

  @media screen and (max-width: 350px){
    margin-left: var(--mb-1);
    margin-right: var(--mb-1);
  }

  @media screen and (min-width: 768px){
    margin-left: auto;
    margin-right: auto;
  }
`

export const QualificationTabs = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: var(--mb-2);

  @media screen and (min-width: 768px){
    justify-content: center;
  }
`

export const QualificationButton = styled.div`
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  &:hover{
  color: ${props => props.theme.firstColor};
  }
  
  @media screen and (min-width: 768px){
    margin: 0 var(--mb-1);
  }
`

export const QualificationSchoolIcon = styled(FaGraduationCap)`
   font-size: 1.8rem;
  margin-right: var(--mb-0-25);
  color: ${({openschoollist}) => (openschoollist ? '' : props => props.theme.firstColorAlt)};
`

export const QualificationWorkIcon = styled(FaBuilding)`
  font-size: 1.8rem;
  margin-right: var(--mb-0-25);
  color: ${({openworklist}) => (openworklist ? '' : props => props.theme.firstColorAlt)};
`

export const QualificationSections = styled.div`
  @media screen and (min-width: 568px){
    grid-template-columns: .6fr;
    justify-content: center;
  }
  
  @media screen and (min-width: 768px){
    margin-left: 2rem;
    margin-right: 2rem;
    grid-template-columns: .5fr;
  }
`

export const QualificationSchoolContent = styled.div`
  display: ${({openschoollist}) => (openschoollist ? 'none' : 'block')};
`

export const QualificationnWorkContent = styled.div`
  display: ${({openworklist}) => (openworklist ? 'none' : 'block')};
`

export const QualificationData = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
  grid-template-areas: ${({evenCol}) => (evenCol ? `'col3 col2 col1'` : `'col1 col2 col3'`)};
  
  @media screen and (max-width: 350px){
    gap: .5rem;
  }
`

export const QualificationTitle = styled.h3`
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
`

export const QualificationSubtitle = styled.span`
  display: inline-block;
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-1);
`

export const QualificationCalendar = styled.div`
  font-size: var(--smaller-font-size);
  color: ${props => props.theme.textColorLight};
`

export const QualificationCalendarIcon = styled(FaCalendar)`
  margin-right: 0.25rem;
`

export const QualificationRounder = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: ${props => props.theme.firstColor};
  border-radius: 50%;
`

export const QualificationLine = styled.span`
  display: block;
  width: 1px;
  height: 100%;
  background-color: ${props => props.theme.firstColor};
  transform: translate(6px, -7px);
`

export const Column1 = styled.div`
  grid-area: col1;
`

export const Column2 = styled.div`
  grid-area: col2;
`

export const Column3 = styled.div`
  grid-area: col3;
`
