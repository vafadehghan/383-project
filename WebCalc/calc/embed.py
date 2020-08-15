from ctypes import cdll
import json
import requests

lib = cdll.LoadLibrary("target/release/libembed.so")
data = {}
for x in range(0, 46):
    data[x] = lib.fib(x)

json_data = json.dumps(data)

# print(json_data)

url = "http://127.0.0.1:8000"
r = requests.post(url, data=data)
print(r.status_code, r.reason)