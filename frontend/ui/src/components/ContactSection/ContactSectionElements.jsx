import { FaPaperPlane } from 'react-icons/fa';
import styled from 'styled-components';


export const ContactSectionWrapper = styled.section`
  padding: 2rem 0 4rem;

  @media screen and (min-width: 768px){
    padding: 6rem 0 2rem;
  }
`
export const ContactContainer = styled.div`
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
  display: grid;
  row-gap: 3rem;

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
`

export const ContactInformations = styled.div`
  display: flex;
  margin-bottom: var(--mb-2);
`

export const ContactIcon = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.firstColor};
  margin-right: var(--mb-0-75);
`

export const ContactSendIcon = styled(FaPaperPlane)`
  font-size: 1.25rem;
  margin-left: var(--mb-0-5);
  transition: .3s;
`

export const Button = styled.button`
  display: inline-block;
  background-color: ${props => props.theme.firstColor};
  color: #fff;
  padding: 1rem;
  border-radius: .5rem;
  font-size: 1rem;
  font-weight: var(--font-medium);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border: none;

  &:hover{
    background-color: ${props => props.theme.firstColorAlt};
  }
`

export const ContactTitle = styled.h3`
  color: ${props => props.theme.titleColor};
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
`

export const ContactSubtitle = styled.span`
  font-size: var(--small-font-size);
  color: ${props => props.theme.textColorLight};
`

export const ContactContent = styled.div`
  background-color: ${props => props.theme.inputColor};
  border-radius: .5rem;
  padding: .75rem 1rem .25rem;
`

export const ContactLabel = styled.label`
  font-size: var(--smaller-font-size);
  color: ${props => props.theme.titleColor};
`

export const ContactInput = styled.input`
  width: 100%;
  background-color: ${props => props.theme.inputColor};
  color: ${props => props.theme.textColor};
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  border: none;
  outline: none;
  padding: .25rem .5rem .5rem 0;
`

export const ContactInputArea = styled.textarea`
  width: 100%;
  background-color: ${props => props.theme.inputColor};
  color: ${props => props.theme.textColor};
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  border: none;
  outline: none;
  padding: .25rem .5rem .5rem 0;
`

export const ContactForm = styled.form`
  display: grid;
  gap: 1.5rem;
  
  @media screen and (min-width: 1024px){
    width: 460px;
  }
`

export const ContactInputs = styled.div`
  display: grid;
  gap: 1.5rem;

  @media screen and (min-width: 1024px){
    grid-template-columns: repeat(2, 1fr);
  }
`