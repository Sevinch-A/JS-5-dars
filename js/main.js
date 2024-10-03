//DOM IN JS

// let headTag = document.head;
// let bodyTag = document.body;
// let havola = documentURL;
// let formlar = document.forms;
// let rasmlar = document.images;
// let havolalar = document.links;
// console.log(havolalar);

//Ivents in JS; onclick,ondoubleclick, onchange,onfocus,onblur,oninput,onmoesemove

// function buttonniBosing(){
//     alert("Siz buttonni bostingiz")
// }
// function buttonniIkkiMartaBosing(){
//     alert("SIz buttonni ikki marta bostingiz")
// }
// function tanlash(event){
//     alert("siz hozir" + event.target.value + " tanladingiz")
// }
// function inputgaBosish(){
//     console.log("inputga bosildi!");
// }
// function inputdanChiqish(){
//     console.log("inputdan Chiqildi");
// }
// function yozish(event){
//     console.log(event.target.value);
// }
// document.querySelector(".text").addEventListener("copy",function(event){
//     console.log("Diqqat! Diqqat!" + event.target.value + "nomli hijjat ko'chirilyapti!");
// });

function harakatlanish(e){
    console.log(e.clientX,e.clientY)
}
function kirish(){
    console.log("Hududga kirildi")
}
function chiqish(){
    console.log("Hududdan chiqildi")
}