import requests

def send_data(callData):
    url = "http://localhost:5000/api/performance"
    response = requests.post(url, 
                            json = callData, 
                            headers={"Content-Type": "application/json"}
                            )

    print(response.text)