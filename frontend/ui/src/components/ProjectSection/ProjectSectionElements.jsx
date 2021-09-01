import styled from 'styled-components';


export const ProjectSectionWrapper = styled.section`
  text-align: center;
  padding: 2rem 0 4rem;

  @media screen and (min-width: 768px){
    text-align: initial;
    padding: 6rem 0 2rem;
  }

`

export const ProjectContainer = styled.div`
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
    background-color: ${props => props.theme.firstColorSecond};
    border-radius: 1rem;
    padding: 3rem 2.5rem 0;
    grid-template-columns: 1fr max-content;
    column-gap: 3rem;
    margin-left: auto;
    margin-right: auto;
  }
`

export const ProjectData = styled.div`
  @media screen and (min-width: 768px){
    padding-top: .8rem;
  }
`


export const ProjectBg = styled.div`
  background-color: ${props => props.theme.firstColorSecond};
  padding-top: 3rem;

  @media screen and (min-width: 768px){
    background: none;
  }

`

export const ProjectTitle = styled.h2`
  font-size: var(--h2-font-size);
  margin-bottom: var(--mb-0-75);
  color: #fff;
`

export const ProjectDescription = styled.p`
  margin-bottom: var(--mb-1-5);
  color: #fff;
`

export const ProjectImg = styled.img`
  width: 232px;
  justify-content: center;

  @media screen and (max-width: 350px){
    width: 200px;
  }
  
  @media screen and (max-width: 568px){
    margin-left: auto;
    margin-right: auto;
  }
`
