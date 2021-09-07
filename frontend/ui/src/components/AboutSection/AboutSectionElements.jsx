import styled from 'styled-components';

export const AboutSectionWrapper = styled.section`
  padding: 2rem 0 4rem;

  @media screen and (min-width: 768px){
    padding: 6rem 0 2rem;
  }
`

export const AboutContainer = styled.div`
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
    column-gap: 5rem;
    margin-left: auto;
    margin-right: auto;
  }
`

export const AboutImg = styled.img`
  max-width: 100%;
  height: auto;
  width: 200px;
  border-radius: .5rem;
  justify-self: center;
  align-items: center;

  
  @media screen and (min-width: 768px){
    width: 350px;
  }
`

export const AboutData = styled.div`
`

export const AboutDescription = styled.p`
  text-align: center;
  margin-bottom: var(--mb-2-5);
  
  @media screen and (min-width: 768px){
    text-align: initial;
  }
`

export const AboutInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: var(--mb-2-5);
  
  @media screen and (min-width: 768px){
    justify-content: space-between;
  }
`

export const AboutInfoTitle = styled.span`
  font-size: var(--h2-font-size);
  font-weight: var(--font-semi-bold);
  color: var(--title-color);
  color: ${props => props.theme.titleColor};
  display: block;
  text-align: center;
`

export const AboutInfoName = styled.span`
  font-size: var(--smaller-font-size);
  display: block;
  text-align: center;
`

export const AboutButtons = styled.div`
  display: flex;
  justify-content: center;
  display: none;

  @media screen and (min-width: 768px){
    justify-content: initial;
  }
`

export const DownloadButton = styled.a`
  display: inline-block;
  align-items: center;
  padding:  1rem;
  border-radius: .5rem;
  font-weight: var(--font-medium);
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  justify-content: center;
  transition: all .2s ease-in-out;
  color: #fff;
  background-color: ${props => props.theme.firstColor};

  
  &:hover {
      transition: all .2s ease-in-out ;
      background-color:  ${props => props.theme.firstColorAlt};
      }
`
