const cim = document.getElementById("cim");
const mufaj = document.getElementById("mufaj");
const kep = document.getElementById("kep");
const body = document.querySelector("body");
const btn = document.getElementById("btn");

const tablediv = document.createElement("div");

btn.addEventListener("click", function() {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    td1.innerHTML = cim.value;
    td2.innerHTML = mufaj.value;
    td3.innerHTML = kep.value;
})
