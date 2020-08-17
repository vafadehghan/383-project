from ctypes import cdll
import json
import requests

lib = cdll.LoadLibrary("target/release/libembed.so")
fibarr = {}
catarr = {}
for x in range(0, 46):
    fibarr[x] = lib.fib(x)

for x in range(0, 19):
    catarr[x] = lib.catalan(x)

fiburl = "http://127.0.0.1:8000/fib"
caturl = "http://127.0.0.1:8000/cat"
f = requests.post(fiburl, data=fibarr)
c = requests.post(caturl, data=catarr)

print(f.status_code, f.reason)
print(c.status_code, c.reason)