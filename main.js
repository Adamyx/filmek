const cim = document.getElementById("cim");
const mufaj = document.getElementById("mufaj");
const kep = document.getElementById("kep-url");
const body = document.querySelector("body");
const btn = document.getElementById("hozzaadas");

btn.addEventListener("click", function() {
    const carddiv = document.createElement("div");
    const cardimg = document.createElement("img");
    const carddivbody = document.createElement("div");
    const cardtitle = document.createElement("h5");
    const cardtext = document.createElement("p");
    const carddelete = document.createElement("input");

    if (cim.value == "" || kep.value == "") {
        alert("Valameik mező üres, kérem töltse ki az összes mezőt!");
        return
    }

    carddiv.classList.add("card");
    cardimg.classList.add("card-img-top");
    carddivbody.classList.add("card-body");
    cardtitle.classList.add("card-title");
    cardtext.classList.add("card-text");
    
    carddelete.type = "button";
    carddelete.classList.add("btn", "btn-danger", "text-white");
})