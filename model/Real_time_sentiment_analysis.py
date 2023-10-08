from send_result import send_data

def model(call_data):
    from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
    import speech_recognition as sr
    import csv
    import os
    recognizer = sr.Recognizer()
    score=[]
    found_words = []
    # Load the CSV file and extract the words
    csv_file = "negative-words.txt"
    words = []
    with open(csv_file, 'r') as file:
        csv_reader = csv.reader(file)
        for row in csv_reader:
            words.extend(row)

    # Replace the code block that captures audio from the microphone with code that reads audio from a file


    emp_audio_files = call_data['empAudioPath']
    cust_audio_files= call_data['customerAudioPath']




    emp_audio_files=splt_audio(emp_audio_files,"e")
    cust_audio_files=splt_audio(cust_audio_files,"c")
    for cust_audio_file,emp_audio_file in zip(emp_audio_files, cust_audio_files):
        with sr.AudioFile(cust_audio_file) as source:
            print('Reading audio file...')
            cust_recordedaudio = recognizer.record(source)
            
            print('Done reading audio file.')



        with sr.AudioFile(emp_audio_file) as source:
            print('Reading audio file...')
            emp_recordedaudio = recognizer.record(source)
            
            print('Done reading audio file.')

        try:
            print('Printing the message..')
            cust_text = recognizer.recognize_google(cust_recordedaudio, language='en-IN')
            emp_text=recognizer.recognize_google(emp_recordedaudio, language='en-IN')
            print('Your message: {}'.format(cust_text))
            
            # Check if any words from the CSV file are present in the recorded audio
            
            for word in words:
                if word.lower() in emp_text.lower():
                    found_words.append(word)
            
            if found_words:
                print('Words from the CSV file found in the recorded audio:')
                print(found_words)
            else:
                print('No words from the CSV file found in the recorded audio.')
                
        except Exception as ex:
            print(ex)

        # Sentiment analysis
        Sentence = [str(cust_text)]
        analyser = SentimentIntensityAnalyzer()
        for i in Sentence:
            v = analyser.polarity_scores(i)
            neg=v['neg']
            neu=v['neu']
            pos=v['pos']
            scores=neg*1+neu*3+pos*5
            score.append(scores)
            print(scores)

      
        os.remove(cust_audio_file)
        os.remove(emp_audio_file)
    os.remove(call_data['empAudioPath'])
    os.remove(call_data['customerAudioPath'])
    del call_data['empAudioPath']
    del call_data['customerAudioPath']
    call_data["performance"]=score
    call_data["blackListed"]=found_words

    send_data(call_data)


def splt_audio(pth,a):
    from pydub import AudioSegment
    final_ans=[]
    input_file = pth
    audio = AudioSegment.from_file(input_file, format="wav")

    # Set the segment duration in milliseconds (10 seconds)
    segment_duration = 10 * 1000  # 10 seconds in milliseconds

    # Initialize the start position
    start_position = 0

    segment_number = 1

    # Iterate through the audio file and create 10-second segments
    while start_position < len(audio):
        end_position = start_position + segment_duration
        if end_position > len(audio):
            end_position = len(audio)

        segment = audio[start_position:end_position]

        # Save the segment as a new .wav file
        output_file = f"segment_{a}_{segment_number}.wav"
        segment.export(output_file, format="wav")

       
        start_position = end_position
        segment_number += 1

        final_ans.append(output_file)
    return final_ans
    
