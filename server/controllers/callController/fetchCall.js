import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../configs/firestoreConfig.js";
import { driveService } from "../../configs/googleDriveConfig.js";

const fetchCall = async (id) => {
    const callRef = doc(firestore, "callData", id);

    try {
        const doc = await getDoc(callRef);
        if(!doc.exists){
            console.log("No such document");
            return;
        }

        let callData = doc.data();
        const audio = await getAudio(callData);
        
        callData.audio = audio;
        delete callData.audioDriveId;
        console.log(`Call data with id - ${id} - fetched successfully`);
        return callData;
    }
    catch(error) {
        console.log("Error fething call : ", error.message);
    }
};

const getAudio = async (callData) => {
    const audioDriveId = callData.audioDriveId;
    const file = await driveService.files.get({
            fileId: audioDriveId,
            alt: "media"
        },
        {responseType:"arraybuffer"}
    );

    const fileBuffer = Buffer.from(file.data);
    return fileBuffer;
}

export default fetchCall;

