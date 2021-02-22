function createElement(data) {
    p = document.createElement("p");
    p.appendChild(document.createTextNode(data));
    document.body.append(p);
}

function queryWikipedia(callback) {
    let req = new XMLHttpRequest();

    req.addEventListener("load", function () {
        resp = JSON.parse(req.response);
        data = resp.query.pages['21721040'].extract;
        callback(data);
    });
    req.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
    req.send();
}
