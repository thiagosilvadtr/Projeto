
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.querySelector(".menu-cab").innerHTML =
            this.responseText;
    }
};
xhttp.open("GET", "header.html", true);
xhttp.send();
