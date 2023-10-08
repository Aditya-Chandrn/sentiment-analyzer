from flask import Flask, request
import os
import array
import shutil
from Real_time_sentiment_analysis import model

app = Flask(__name__)

@app.route("/api/upload",methods=['POST'])
def upload():
    if request.is_json:
        call_data = request.get_json()
        callId = call_data["callId"]

        empAudio = call_data["empAudioFile"]
        customerAudio = call_data["customerAudioFile"]
        empBuffer = empAudio["data"]
        customerBuffer = customerAudio["data"]

        model_data = set_model_data(call_data)
        model_data["empAudioPath"] = buffer_to_audio(empBuffer, callId, "EMP")
        model_data["customerAudioPath"] = buffer_to_audio(customerBuffer, callId, "CT")

        model(model_data)
        shutil.rmtree(f"audio/{callId}")
        return "Call data received successfully by model."
    else:
        return "Expected JSON body"
    
def buffer_to_audio(audio_buffer, callId, prefix):
    audio_data = array.array('B', audio_buffer).tobytes()
    os.makedirs(f"audio/{callId}", exist_ok=True)
    audio_path = os.path.join(f"audio/{callId}/{prefix}.audio.wav")

    with open(audio_path, "wb") as file:
        file.write(audio_data)

    return audio_path

def set_model_data(call_data):
    model_data = dict()
    model_data["callId"] = call_data["callId"]
    model_data["empId"] = call_data["empId"]
    model_data["prodId"] = call_data["prodId"]
    model_data["createdDate"] = call_data["createdDate"]
    
    return model_data


if __name__ == "__main__":
    app.run(port=8000)


