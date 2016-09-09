window.onload = function () {

    var wheel = new wheelnav("wheelDiv");

    //This is the place for code snippets from the documentation -> http://wheelnavjs.softwaretailoring.net/documentation.html

    wheel.createWheel(["#bottle", "#bottle", "#bottle", "#bottle"]);
    wheel.navigateWheel(4);

    //Insert generated JavaScript code from here -> http://pmg.softwaretailoring.net
    document.getElementById("bottle").attr.src = "images/stupid_bottle.png";

};
