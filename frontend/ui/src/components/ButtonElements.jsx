import styled from "styled-components";
import { Link } from "react-scroll";

export const ButtonTheme = styled(Link)`
    display: ${({styles}) => (styles ==="flex" ? 'inline-flex' : styles ==="small" ? 'inline-flex' : 'inline-block' )};
    align-items: ${({styles}) => (styles==="flex" ? 'center' : styles==="small" ? 'center' : 'initial' )};
    padding:  ${({styles}) => (styles==="small" ? '.75rem 1rem' : styles==="link" ? '0' : '1rem' )};
    border-radius: .5rem;
    font-weight: var(--font-medium);
    outline: none;
    border: none;
    text-decoration: none;
    cursor: pointer;
    justify-content: center;
    transition: all .2s ease-in-out;
    color:  ${({styles}) => (styles==="link" ? props => props.theme.firstColor : styles==="white" ?props => props.theme.firstColor : '#fff' )};
    background-color: ${({styles}) => (styles==="link" ? 'transparent' : styles==="white" ? '#fff' :props => props.theme.firstColor )};

    
    &:hover {
        transition: all .2s ease-in-out ;
        color:  ${({styles}) => (styles==="link" ?props => props.theme.firstColorAlt : styles==="white" ? '#fff' : '' )};
        background-color:  ${({styles}) => (styles==="link" ? 'transparent' : styles==="white" ?props => props.theme.firstColorAlt :props => props.theme.firstColorAlt )};
        }
`

export const ButtonIcon = styled.i`
  font-size: 1.25rem;
  margin-left: var(--mb-0-5);
  transition: all .1s ease-in-out;
`
  
