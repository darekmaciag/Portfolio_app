import React, {useEffect, useState} from "react";
import { 
    QualificationData,QualificationTitle,QualificationSubtitle,QualificationCalendar,QualificationCalendarIcon,QualificationRounder,QualificationLine,
    Column1,
    Column2,
    Column3 } from './QualificationsSectionElements';
import api from '../apis/api';


export default function QualificationsDetail(props){    
    const [datas,setDatas] = useState([]);

    const fetchQualificationsData  = async () =>{
        const response = await api.get(`/${props}/`)
        setDatas(response.data)
    }

    useEffect(()=>{ fetchQualificationsData() },[])

    return(
        datas.map((place, index) => {
            const ile = index + 1
                return(
                    <QualificationData key={index}  evenCol={(index % 2 === 0) ? false : true }>
                    <Column1>
                        <QualificationTitle>{place.name}</QualificationTitle>
                        <QualificationSubtitle>{place.subtitle}</QualificationSubtitle>
                        <QualificationCalendar>
                            <QualificationCalendarIcon />{place.date}
                        </QualificationCalendar>
                    </Column1>
                    <Column2>
                        <QualificationRounder />
                        {ile < datas.length &&
                            <QualificationLine />
                            }
                    </Column2>
                    <Column3>
                    </Column3>
                </QualificationData> 
                )
        }))
}