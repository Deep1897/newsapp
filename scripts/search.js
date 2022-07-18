// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
document.getElementById("home").addEventListener("click", function() {
    window.location.href = "index.html"
})




async function myfun() {
    var query = document.getElementById("search").value;

    let link = `https://masai-api.herokuapp.com/news?q=${query}`



    fetch(link).then((res) => {
        return res.json();
    }).then((res) => {
        console.log(res.articles);
        Append(res.articles)
    }).catch((err) => {
        console.log(err);
    })

}

// import myfun from '/index.js';

// myfun();


function Append(data) {

    data.forEach(function(el) {
        var main = document.createElement("div");
        var left = document.createElement("div");
        left.setAttribute("class", "left")
        var right = document.createElement("div");
        right.setAttribute("class", "right")
        var img = document.createElement("img");
        img.src = el.urlToImage;
        left.append(img)


        var title = document.createElement("h4");
        title.innerText = el.title;

        var des = document.createElement("p");
        des.innerText = el.description;



        right.append(title, des);
        main.append(left, right);

        main.addEventListener("click", function(l) {
            getA(el)
        })

        document.getElementById("results").append(main);
    })

}