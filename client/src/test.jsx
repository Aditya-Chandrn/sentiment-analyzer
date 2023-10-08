import React, { useEffect, useRef, useState } from 'react';
import styles from "./test.module.css";
import axios from 'axios';

const playAudio = async (audio) => {
    const blob = new Blob([new Uint8Array(audio.data)]);
    const audioUrl = URL.createObjectURL(blob);
    return audioUrl;
}

const Call = ({callData}) => {
    const empAudioRef = useRef(null);
    const customerAudioRef = useRef(null);

    const loadAudio = async () => {
        empAudioRef.current.src = await playAudio(callData.empAudio);
        customerAudioRef.current.src = await playAudio(callData.customerAudio);
    }

    useEffect(()=> {
        loadAudio()
    },[])

    return(
        <>
            Call Id : {callData.callId}<br/>
            Emp Id : {callData.empId}<br/>
            <audio ref={empAudioRef} controls/>
            <audio ref={customerAudioRef} controls/>
        </>
    )
}

const Test = () => {
    const [loading, setLoading] = useState(true);
    const [callData, setCallData] = useState({});

    const fetchCall = async () => {
        try{
            const response = await axios.get(`http://localhost:5000/api/call/fetch/call.emp.aditya_chandran.20200901.2.prod.ac.20210730.0.20230908.73139`);
            setCallData(response.data);
            setLoading(false);
        } catch(error) {
            console.log("Error fetching calls : ", error.message)
        }
    }

    useEffect(() => {    
        fetchCall()
    }, []);

    return (
        <div className={styles.test}>
            {
                loading ? <> Loading ...... </>
            :  
                <Call callData={callData}/>
            }
        </div>
    );
}

export default Test;