import React, {useEffect, useState} from "react";
import { FaRegCheckCircle } from 'react-icons/fa';
import { ServicesModalService,
        ServicesModalDescription,
        ServicesModalIcon } from './ServicesSectionElements';
import api from '../apis/api';


export default function ServicesDetail(props){    
    const [servicesDetailInfo,setServicesDetailInfo] = useState([]);

    const fetchServicesDetailData  = async () =>{
        const response = await api.get('/servicedetail/')
        setServicesDetailInfo(response.data)
    }

    useEffect(()=>{ fetchServicesDetailData() },[])

    return(
        servicesDetailInfo.map((service, index) => {
            if (service.service === props){
                return(
                    <ServicesModalService key={index}>
                        <ServicesModalIcon><FaRegCheckCircle /></ServicesModalIcon>
                        <ServicesModalDescription>{service.name}</ServicesModalDescription>
                    </ServicesModalService>
                )
            } else{
                return(null
                )
            }
        }))
}