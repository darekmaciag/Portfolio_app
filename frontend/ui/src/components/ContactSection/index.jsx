import React, {useState,useEffect} from 'react';
import {  } from 'react-icons/fa';
import { TitleSection } from '../TitleSection'
import api from '../apis/api';
import { 
        ContactSectionWrapper,
        ContactContainer,
        ContactInformations,
        ContactIcon,
        ContactSendIcon,
        ContactTitle,
        ContactSubtitle,
        ContactContent,
        ContactLabel,
        ContactInput,
        ContactForm,
        ContactInputs,
        ContactInputArea,
        Button } from './ContactSectionElements';
import DynamicIcon from '../DynamicIcon';



const ContactSection = ({title, subtitle}) => {
    const [contactsData,setContactsData] = useState([]);

    const fetchContactsData  = async () =>{
        const response = await api.get('/contact/')
        setContactsData(response.data)
    }

    useEffect(()=>{ fetchContactsData() },[])
  
    return (
                <ContactSectionWrapper id="contact">
                <TitleSection title={title} subtitle={subtitle} />

                <ContactContainer>
                    <div>
                    {contactsData.map((contact, index) =>{
                          return(
                        <ContactInformations key={index}>
                            <ContactIcon><DynamicIcon icon={contact.icon}/></ContactIcon>

                            <div>
                                <ContactTitle>{contact.name}</ContactTitle>
                                <ContactSubtitle>{contact.description}</ContactSubtitle>
                            </div>
                        </ContactInformations>
                        )
                        })}
                    </div>
                    <ContactForm action="">
                        <ContactInputs>
                            <ContactContent>
                                <ContactLabel>Name</ContactLabel>
                                <ContactInput type="text" />
                            </ContactContent>
                            <ContactContent>
                                <ContactLabel>Email</ContactLabel>
                                <ContactInput type="email" />
                            </ContactContent>
                        </ContactInputs>
                        <ContactContent>
                            <ContactLabel>Subject</ContactLabel>
                            <ContactInput type="text" />
                        </ContactContent>
                        <ContactContent>
                            <ContactLabel>Message</ContactLabel>
                            <ContactInputArea name="" id="" cols="30" rows="10"></ContactInputArea>
                        </ContactContent>
                        <div>
                            <Button  to='/'>
                                Send Message
                                <ContactSendIcon />
                            </Button>
                        </div>
                    </ContactForm>
                </ContactContainer>

            </ContactSectionWrapper>
    );
};

export default ContactSection;
