# CMPT 383 - PROJECT

1. What is the overall goal of the project (i.e. what does it do, or what problem is it solving)?
        - This project will calculate the Fibonacci sequence up to 40, and the Catalan numbers up to 18. This is done both recursively and with dynamic programming. The result is to compare the 2 methods of programming to see which is faster. This is done in a system language in the backend because Rust is generally faster than Python or Javascript at calculating complex equations. The Fibonacci and Catalan number calculators are not necessarily a complex calculation, but this can be substituted for a more complex one in the future. 
2. Which languages did you use, and what parts of the system are implemented in each?
    -   I used Rust, Python, and Javascript/Node.js. Rust will create a library to calculate the equations. The Python program acts as a middle man; it will call each function, time how long it took, and send the values to the Node.js server using a POST request. The Node server will listen at the endpoints for the data and store them. Then the Javascript code will fetch the data and display it on the HTML page.
3. What methods did you use to communicate between languages?
    - I used a REST server and a dynamic library. The Rust code will create a dybamic library that can be run through Python. Furthermore, Python can even give it any legal argument through the Python code. I've also created a Node.js server to receive values from the Python code through HTTP requests. 
4. Exactly what steps should be taken to get the project working, after getting your code? [This should start with  `vagrant up`  and can include one or two commands to start components after that.]
    1. vagrant up
    2. Open 383-project\WebCalc\calc\frontend\index.html
6. What features should we be looking for when marking your project?
    - The python code sends 2 POST requests, therefore the Node code had to differentiate between the 2. 
    - The vanilla JS had to get the data from the Node.js server. This is done using 'fetch'
    - Extra: Created an appealing front end to view the Fibonacci values.
    - Extra: Coded dynamic programming and recursive versions of the Catalan number and Fibonacci problems.
    - Extra: Timed each version and displayed the time on the front end. 
     

