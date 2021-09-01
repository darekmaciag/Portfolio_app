import React, {useState,useEffect} from 'react';
import { FaStar } from 'react-icons/fa';
import api from '../apis/api';
import { TitleSection } from '../TitleSection'
import { 
        TestimonialSectionWrapper,
        TestimonialContainer,
        TestimonialContent,
        TestimonialData,
        TestimonialHeader,
        TestimonialImg,
        TestimonialName,
        TestimonialClient,
        TestimonialDescription,
        TestimonialIconStar } from './TestimonialSectionElements';
import { SwiperSlide } from 'swiper/react';

        

const TestimonialSection = ({title,subtitle}) => {
    const [testimonialsData,setTestimonialsData] = useState([]);

    const fetchTestimonials  = async () =>{
        const response = await api.get('/testimonials/')
        setTestimonialsData(response.data)
    }
  
    useEffect(()=>{ fetchTestimonials() },[])


    return (
        <TestimonialSectionWrapper id="testimonials">
            <TitleSection title={title} subtitle={subtitle} />

                <TestimonialContainer>
                {testimonialsData.map((testimonial, index) =>{
                          return(
                    <SwiperSlide key={ `slide_${ index }`}>
                        <TestimonialContent>
                            <TestimonialData>
                                <TestimonialHeader>
                                    <TestimonialImg src={testimonial.image} alt={testimonial.alt}/>

                                    <div>
                                        <TestimonialName>{testimonial.name}</TestimonialName>
                                        <TestimonialClient>{testimonial.client}</TestimonialClient>
                                    </div>
                                </TestimonialHeader>
                                <div>
                                    <TestimonialIconStar><FaStar /></TestimonialIconStar>
                                    <TestimonialIconStar><FaStar /></TestimonialIconStar>
                                    <TestimonialIconStar><FaStar /></TestimonialIconStar>
                                    <TestimonialIconStar><FaStar /></TestimonialIconStar>
                                    <TestimonialIconStar><FaStar /></TestimonialIconStar>
                                </div>
                            </TestimonialData>
                            <TestimonialDescription>{testimonial.description}</TestimonialDescription>
                        </TestimonialContent>
                    </SwiperSlide>
                    )
                    })}
                </TestimonialContainer>
            </TestimonialSectionWrapper>
    );
};

export default TestimonialSection;
