const cim = document.getElementById("cim");
const mufaj = document.getElementById("mufaj");
const kep = document.getElementById("kep-url");
const body = document.querySelector("body");
const btn = document.getElementById("hozzaadas");
const kartyahely = document.getElementById("kartyak");

btn.addEventListener("click", function() {
    const carddiv = document.createElement("div");
    const cardimg = document.createElement("img");
    const carddivbody = document.createElement("div");
    const cardtitle = document.createElement("h5");
    const carddelete = document.createElement("input");

    if (cim.value == "" || kep.value == "") {
        alert("Valameik mező üres, kérem töltse ki az összes mezőt!");
        return
    }

    carddiv.id = "hely";
    carddiv.classList.add("card", "col-2", "m-2", "p-0");
    cardimg.classList.add("card-img-top");
    carddivbody.classList.add("card-body");
    cardtitle.classList.add("card-title");
    
    carddelete.type = "button";
    carddelete.classList.add("btn", "btn-danger", "text-white");

    cardimg.src = kep.value.trim();
    cardtitle.innerText = cim.value;

    carddivbody.append(cardtitle);
    carddivbody.append(carddelete);
    carddiv.append(cardimg);
    carddiv.append(carddivbody);
    kartyahely.append(carddiv);
})