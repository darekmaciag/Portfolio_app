import React, {useState,useEffect} from 'react';
import {  } from 'react-icons/fa';
import { TitleSection } from '../TitleSection'
import api from '../apis/api';
import { send } from 'emailjs-com';
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
    const [toSend, setToSend] = useState({
        from_name: '',
        reply_to: '',
        subject: '',
        message: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          toSend,
          process.env.REACT_APP_USER_ID,
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setToSend({
                from_name: '',
                reply_to: '',
                subject: '',
                message: '',
              })
              alert('Message was sent successfully!');
          })
          .catch((err) => {
            console.log('FAILED...', err);
            alert('Failed!');
          });
      };

      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

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
                    <ContactForm onSubmit={onSubmit}>
                        <ContactInputs>
                            <ContactContent>
                                <ContactLabel>Name</ContactLabel>
                                <ContactInput type="text" name='from_name' value={toSend.from_name} onChange={handleChange} required />
                            </ContactContent>
                            <ContactContent>
                                <ContactLabel>Email</ContactLabel>
                                <ContactInput type="email" name='reply_to' value={toSend.reply_to} onChange={handleChange} required />
                            </ContactContent>
                        </ContactInputs>
                        <ContactContent>
                            <ContactLabel>Subject</ContactLabel>
                            <ContactInput type="text" name='subject' value={toSend.subject} onChange={handleChange} required />
                        </ContactContent>
                        <ContactContent>
                            <ContactLabel>Message</ContactLabel>
                            <ContactInputArea cols="30" rows="10" name='message' value={toSend.message} onChange={handleChange} required />
                        </ContactContent>
                        <div>
                            <Button type='submit'>
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
