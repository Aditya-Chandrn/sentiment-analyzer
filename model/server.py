from flask import Flask, request
import os
import array

app = Flask(__name__)

@app.route("/api/upload",methods=['POST'])
def upload():
    if request.is_json:
        json_data = request.get_json()

        if "audio" in json_data:
            callId = json_data["callId"]
            audio = json_data["audio"]
            audio_buffer = audio["data"]
            buffer_to_audio(audio_buffer, callId)
            return "Audio received successfully"
        else:
            return "Couldn't find audio file in request"
    else:
        return "Expected JSON body"
    
def buffer_to_audio(audio_buffer, file_name):
    audio_data = array.array('B', audio_buffer).tobytes()
    os.makedirs("audio", exist_ok=True)
    audio_path = os.path.join(f"audio/{file_name}.audio.wav")

    with open(audio_path, "wb") as file:
        file.write(audio_data)

if __name__ == "__main__":
    app.run(port=8000)


