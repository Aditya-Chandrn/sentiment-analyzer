import json
import requests

performance = {
    0:1,
    5:0,
    10:2,
    15:5,
    20:2
}
performance_json = json.dumps(performance)
print(performance_json)

url = "http://localhost:5000/api/performance"
response = requests.post(url, 
                         data = performance_json, 
                         headers={"Content-Type": "application/json"}
                        )

print(response.text)
