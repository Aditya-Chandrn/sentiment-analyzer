import requests

#call this function when model has completed analysis on audio file
def send_data(callData):
    #send data in this format only, nahin to duniya khatam hojayegi

    url = "http://localhost:5000/api/performance"
    response = requests.post(url, 
                            json = callData, 
                            headers={"Content-Type": "application/json"}
                            )

    print(response.text)


callData = {
    "callId" : "call.emp.aditya_chandran.20200901.2.prod.ac.20210730.0.20230905.72409",
    "createdDate" : "20230905",
    "empId": "emp.aditya_chandran.20200901.2",
    "prodId" : "prod.ac.20210730.0"
}

#mock data used for performance
#performance is the result from the model's analysis of audio
performance = {
    0:1,
    5:0,
    10:2,
    15:5,
    20:2
}

callData["performance"] = performance;

send_data(callData);