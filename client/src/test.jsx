import React, { useEffect, useRef, useState } from 'react';
import styles from "./test.module.css";
import axios from 'axios';

const Call = ({callData}) => {
    const audioRef = useRef(null);
    const playAudio = async () => {
        const blob = new Blob([new Uint8Array(callData.audio.data)]);
        const audioUrl = URL.createObjectURL(blob);
        audioRef.current.src = audioUrl;

        return () => {
            URL.revokeObjectURL(audioUrl);
        }
    }

    useEffect(()=> {
        playAudio();
    },[])

    return(
        <>
            Call Id : {callData.callId}<br/>
            Emp Id : {callData.empId}<br/>
            Audio Drive Id : {callData.audioDriveId}<br/>
            <audio ref={audioRef} controls/>
        </>
    )
}

const Test = () => {
    const [loading, setLoading] = useState(true);
    const [callData, setCallData] = useState({});

    const fetchCall = async () => {
        try{
            const response = await axios.get(`http://localhost:5000/api/call/fetch/call.emp.john_smith.20190726.0.prod.tv.20230829.1.20230906.86317`);
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