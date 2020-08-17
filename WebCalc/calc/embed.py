from ctypes import cdll
import json
import requests
import time

lib = cdll.LoadLibrary("target/release/libembed.so")
fibarr = {}
catarr = {}

t0 = time.time()
for x in range(0, 41):
    fibarr[x] = lib.fib(x)
t1 = time.time()
fibarr[41] = t1-t0
t0 = time.time()
for x in range(0, 41):
    fibarr[x] = lib.fibrec(x)
t1 = time.time()
fibarr[42] = t1-t0


t0 = time.time()
for x in range(0, 19):
    catarr[x] = lib.catalan(x)
t1 = time.time()
catarr[19] = t1-t0

t0 = time.time()
for x in range(0, 19):
    catarr[x] = lib.catalanrec(x)
t1 = time.time()
catarr[20] = t1-t0

fiburl = "http://127.0.0.1:8000/fib"
caturl = "http://127.0.0.1:8000/cat"
f = requests.post(fiburl, data=fibarr)
c = requests.post(caturl, data=catarr)

print(f.status_code, f.reason)
print(c.status_code, c.reason)