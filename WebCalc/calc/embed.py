from ctypes import cdll

lib = cdll.LoadLibrary("target/release/libembed.so")

print(lib.fib(9))

print("done!")