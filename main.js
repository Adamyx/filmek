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
    carddiv.classList.add("card", "col-2", "m-2", "p-0", "col-xs-12");
    carddiv.style.boxShadow = "10px 15px 25px rgba(151, 9, 116, 0.5)";
    cardimg.classList.add("card-img-top", "img-fluid", "h-100");
    carddivbody.classList.add("card-body", "mt-3", "text-center");
    cardtitle.classList.add("card-title");
    
    
    carddelete.style.background = "linear-gradient(to right, var(--bs-pink), var(--bs-indigo))";
    carddelete.style.color = "white";
    carddelete.style.boxShadow = "5px 7px 15px rgba(151, 9, 116, 0.5)";
    carddelete.style.fontSize = "1rem";
    carddelete.style.marginTop = "10px";
    carddelete.style.width = "100%";
    
    carddelete.type = "button";
    carddelete.classList.add("btn");

    cardimg.src = kep.value.trim();
    cardtitle.innerText = cim.value;
    carddelete.value = "Törlés";

    carddelete.addEventListener("click", function() {
        carddiv.remove(this.closest);        
    })

    carddivbody.append(cardtitle);
    carddivbody.append(carddelete);
    carddiv.append(cardimg);
    carddiv.append(carddivbody);
    kartyahely.append(carddiv);
})