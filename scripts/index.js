// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
// url=`https://masai-api.herokuapp.com/news/top-headlines?country=${country code}`

async function getdata(code) {
    url = `https://masai-api.herokuapp.com/news/top-headlines?country=${code}`;

    fetch(url).then((res) => {
        return res.json();
    }).then((res) => {
        console.log(res.articles)
        Append(res.articles)
    }).catch((err) => {
        console.log(err)
    });

}


function india() {
    var res = document.getElementById("result");
    res.innerHTML = null;
    let ind = "in";
    getdata(ind);
}



function china() {
    var res = document.getElementById("result");
    res.innerHTML = null;
    let ind = "ch";
    getdata(ind);
}




function united() {
    var res = document.getElementById("result");
    res.innerHTML = null;
    let ind = "uk";
    getdata(ind);
}



function usa() {
    var res = document.getElementById("result");
    res.innerHTML = null;
    let ind = "us";
    getdata(ind);
}



function newz() {
    var res = document.getElementById("result");
    res.innerHTML = null;
    let ind = "nz";
    getdata(ind);
}

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

        document.getElementById("result").append(main);
    })

}

function getA(el) {
    arr = [];
    console.log(el)
    arr.push(el);
    localStorage.setItem("news", JSON.stringify(arr));
    window.location.href = "news.html";

}



async function myfun() {

    var query = document.getElementById("search").value;

    let link = `https://masai-api.herokuapp.com/news?q=${query}`
    var res = document.getElementById("result");
    res.innerHTML = null;


    fetch(link).then((res) => {
        return res.json();
    }).then((res) => {
        console.log(res.articles);
        Append(res.articles)
    }).catch((err) => {
        console.log(err);
    })

}



document.getElementById("home").addEventListener("click", function() {
    var res = document.getElementById("result");
    res.innerHTML = null;

    united()
})

china();