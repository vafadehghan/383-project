# CMPT 383 - PROJECT

1.   What is the overall goal of the project (i.e. what does it do, or what problem is it solving)?
	- This project will calculate the fibonacci numbers for the values 0 - 45. This is done in a system language in the backend because Rust is faster than python at calculating complex equations. The fibonacci calculator is not necessarily a complex calculation, but this can be substituted for a more complex one in the future. 
2. Which languages did you use, and what parts of the system are implemented in each?
	-	I used Rust, Python, and Javascript. Rust will create a library to calculate the equation. Python will call that function with arguments from 0 to 45, receive the value, and POST it to a Javascript server (Node.js). The Javascript program will read the values and print them onto an HTML page.
3. What methods did you use to communicate between languages?
	- I used a REST server, and a dynamic library. The rust code will create a library that can be run through Python. Furthermore, Python can even give it any legal argument through the Python code. I've also created a Node.js server to receive values from the python code through HTTP request. 
4. Exactly what steps should be taken to get the project working, after getting your code? [This should start with  `vagrant up`  and can include one or two commands to start components after that.]
	1. vagrant up
	2. Open 383-project\WebCalc\calc\frontend\index.html
6. What features should we be looking for when marking your project?
    Extra: Created a pretty front end to view the fibonacci values. 

