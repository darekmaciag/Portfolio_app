import React, {useEffect, useState} from "react";
import { ServicesModalDescription } from './ServicesSectionElements';
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
                    <ServicesModalDescription key={index}>{service.name}</ServicesModalDescription>
                )
            } else{
                return(null
                )
            }
        }))
}