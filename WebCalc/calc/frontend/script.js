window.onload = function () {
    if (window.location.pathname.split('/').pop() == "cat.html") {
        url = 'http://localhost:8000/catresult';
        const fib = document.getElementById('fib');
        fetch(url)
            .then(response => response.json())
            .then(data => {
                var table = document.getElementById("myTable");
                for (var i = 0; i <= 45; i++) {
                    var row = document.createElement("tr");
                    var key = document.createElement("td");
                    var val = document.createElement("td");
                    var keytext = document.createTextNode(i + ":");
                    var valtext = document.createTextNode(data[i].replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                    key.appendChild(keytext);
                    val.appendChild(valtext)
                    row.appendChild(key);
                    row.appendChild(val)
                    table.appendChild(row);
                }
            })
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    } else {
        url = 'http://localhost:8000/fibresult';
        const fib = document.getElementById('fib');
        fetch(url)
            .then(response => response.json())
            .then(data => {
                var table = document.getElementById("myTable");
                for (var i = 0; i <= 45; i++) {
                    var row = document.createElement("tr");
                    var key = document.createElement("td");
                    var val = document.createElement("td");
                    var keytext = document.createTextNode(i + ":");
                    var valtext = document.createTextNode(data[i].replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                    key.appendChild(keytext);
                    val.appendChild(valtext)
                    row.appendChild(key);
                    row.appendChild(val)
                    table.appendChild(row);
                }
            })
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

    }
}