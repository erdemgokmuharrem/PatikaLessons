var isim = window.prompt("Lütfen isminizi giriniz: ");
var ad = document.getElementById("ad");
ad.innerHTML = isim;

var zaman = new Date();
//saat
var saat = zaman.getHours();
var vakit = document.getElementById("saat");
vakit.innerHTML = saat;
//dakika
var dk = document.getElementById("dakika");
var dakika = zaman.getMinutes();
dk.innerHTML = dakika;
//saniye
var sn = document.getElementById("saniye");
var saniye = zaman.getSeconds();
sn.innerHTML = saniye;
