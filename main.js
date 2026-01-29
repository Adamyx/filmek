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

    carddiv.classList.add("card", "col-3");
    cardimg.classList.add("card-img-top");
    carddivbody.classList.add("card-body");
    cardtitle.classList.add("card-title");
    carddelete.classList.add("btn");
    
    carddelete.style.background = "darkred";
    carddelete.style.color = "white";
    
    carddelete.type = "button";
    
    cardimg.src = kep.value.trim();
    cardimg.alt = "Itt egy kép látható a filmről";
    cardtitle.innerText = cim.value;
    carddelete.value = "Törlés";

    carddelete.addEventListener("click", function() {
        carddiv.remove();        
    })

    carddivbody.append(cardtitle);
    carddivbody.append(carddelete);
    carddiv.append(cardimg);
    carddiv.append(carddivbody);
    kartyahely.append(carddiv);
})