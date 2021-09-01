import { FaChevronDown } from 'react-icons/fa';
import styled from 'styled-components';


export const SkillSectionWrapper = styled.section`
  padding: 2rem 0 4rem;

  @media screen and (min-width: 768px){
    padding: 6rem 0 2rem;
  }
`

export const SkillsContainer = styled.div`
  row-gap: 0;
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
  display: grid;
  gap: 1.5rem;

  @media screen and (max-width: 350px){
    margin-left: var(--mb-1);
    margin-right: var(--mb-1);
  }
  
  @media screen and (min-width: 568px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px){
    margin-left: auto;
    margin-right: auto;
  }
/* 
  @media screen and (min-width: 1024px){
    grid-template-columns: repeat(3, 1fr);;
  } */
`

export const SkillsContent = styled.div`

`

export const SkillsHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--mb-2-5);
  cursor: pointer;
`

export const SkillsIcon = styled.i`
  margin-right: var(--mb-0-75);
  font-size: 2rem;
  color: ${props => props.theme.firstColor};
`

export const SkillsTitle = styled.h1`
  color: ${props => props.theme.titleColor};
  font-weight: var(--font-semi-bold);
  font-size: var(--h3-font-size);

  @media screen and (max-width: 350px){
    font-size: var(--normal-font-size);
  }
`

export const SkillsSubtitle = styled.span`
  font-size: var(--small-font-size);
  color: ${props => props.theme.textColorLight};
`

export const SkillsArrow = styled(FaChevronDown)`
  margin-left: auto;
  transition: .4s;
  font-size: 2rem;
  color: ${props => props.theme.firstColor};

  :hover{
    color: ${props => props.theme.firstColorAlt};
  }
`

export const Arrow1 = styled(SkillsArrow)`
  transform: ${({togglelist1}) => (togglelist1 ? 'rotate(-180deg)' : "none")};
`

export const Arrow2 = styled(SkillsArrow)`
  transform: ${({togglelist2}) => (togglelist2 ? 'rotate(-180deg)' : "none")};
`

export const Arrow3 = styled(SkillsArrow)`
  transform: ${({togglelist3}) => (togglelist3 ? 'rotate(-180deg)' : "none")};
`

export const SkillList = styled.div`
  row-gap: 1.5rem;
  padding-left: 2.7rem;
  display: grid;
  gap: 1.5rem;
`

export const SkillList1 = styled(SkillList)`
  overflow: ${({togglelist1}) => (togglelist1 ? '' : 'hidden')};
  height: ${({togglelist1}) => (togglelist1 ? 'max-content' : '0')};
  margin-bottom: ${({togglelist1}) => (togglelist1 ? 'var(--mb-2-5)' : '')};
`

export const SkillList2 = styled(SkillList)`
  overflow: ${({togglelist2}) => (togglelist2 ? '' : 'hidden')};
  height: ${({togglelist2}) => (togglelist2 ? 'max-content' : '0')};
  margin-bottom: ${({togglelist2}) => (togglelist2 ? 'var(--mb-2-5)' : '')};
`

export const SkillList3 = styled(SkillList)`
  overflow: ${({togglelist3}) => (togglelist3 ? '' : 'hidden')};
  height: ${({togglelist3}) => (togglelist3 ? 'max-content' : '0')};
  margin-bottom: ${({togglelist3}) => (togglelist3 ? 'var(--mb-2-5)' : '')};
`

export const SkillsData = styled.div`

`

export const SkillsName = styled.h3`
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  color: ${props => props.theme.titleColor};
  font-weight: var(--font-semi-bold);
`

export const SkillsNumber = styled.span`

`
export const SkillsBar = styled.div`
  background-color: ${props => props.theme.firstColorLighter};
  height: 5px;
  border-radius: .25rem;
`

export const SkillsPrecentage = styled.span(props => ({
  height: '5px',
  borderRadius: '.25rem',
  display: 'block',
  backgroundColor: props.theme.firstColor,
  width: props.width
}));

export const SkillsTitles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--mb-0-5);
`