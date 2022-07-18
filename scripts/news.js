// Ude Import export (MANDATORY)
data = JSON.parse(localStorage.getItem("news")) || [];

console.log(data)


function append(data) {

    data.forEach(function(el) {

        var div = document.createElement("div");

        var img = document.createElement("img");
        img.src = el.urlToImage;

        div.append(img);

        var h4 = document.createElement("h4");
        h4.innerText = el.title;


        var p = document.createElement("p");
        p.innerText = el.description;

        document.getElementById("detailed_news").append(div, h4, p)


    })
}

append(data);

document.getElementById("home").addEventListener("click", function() {
    window.location.href = "index.html"
})