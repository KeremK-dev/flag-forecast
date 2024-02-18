window.onload=()=>{
    alert("Attention, the empire and country names are in Turkish. Please excuse me.")
}



var ulkeler = [
    { ad: "Gokturk", bayrak: "gokturk.jpg" },
    { ad: "Hun", bayrak: "Hun.jpg" },
    { ad: "Uygur", bayrak: "Uyghur.jpg" },
    { ad: "Azarbaycan", bayrak: "azerbaycan.jpg" },
    { ad: "Selcuklu", bayrak: "selcuklu.jpg" },
    { ad: "Türkiye", bayrak: "turkiye.jpg" },
    { ad: "Roma", bayrak: "roma.jpg" },
    { ad: "Mogol inp.", bayrak: "mogol.png" },
    { ad: "Hollanda", bayrak: "hollanda.jpg" },
    { ad: "Amerika", bayrak: "amerika.png" },
];

var suankiSoru = 0;
var dogruCevaplar = 0;
var yanlisCevaplar = 0;

oyunuBaslat();

function oyunuBaslat() {
    diziKaristir(ulkeler);
    suankiSoru = 0;
    dogruCevaplar = 0;
    yanlisCevaplar = 0;
    soruGoster();
}

function soruGoster() {
    if (suankiSoru < 10) {
        var ulke = ulkeler[suankiSoru];
        document.getElementById("soruno").textContent = "Soru " + (suankiSoru + 1);
        
        var imgElement = document.getElementById("img");
        imgElement.onload = function() {
            var butonlar = document.querySelectorAll(".cvp");
            var rasgeleUlkeler = rasgeleUlkeleriGetir(ulkeler, 4);
            diziKaristir(rasgeleUlkeler);

            var dogruIndex = Math.floor(Math.random() * 4);
            butonlar.forEach(function(buton, index) {
                if (index === dogruIndex) {
                    buton.textContent = ulke.ad;
                    buton.onclick = function() {
                        dogruCevaplar++;
                        suankiSoru++;
                        soruGoster();
                    };
                } else {
                    buton.textContent = rasgeleUlkeler[index].ad; 
                    buton.onclick = function() {
                        yanlisCevaplar++;
                        suankiSoru++;
                        soruGoster();
                    };
                }
            });
        };
        
        imgElement.src = ulke.bayrak;
    } else {
        alert("Doğru Cevaplar: " + dogruCevaplar + "\nYanlış Cevaplar: " + yanlisCevaplar);
    }
}


function rasgeleUlkeleriGetir(ulkeler, sayi) {
    var kopya = ulkeler.slice();
    diziKaristir(kopya);
    return kopya.slice(0, sayi);
}

function diziKaristir(dizi) {
    for (var i = dizi.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var gecici = dizi[i];
        dizi[i] = dizi[j];
        dizi[j] = gecici;
    }
}


var a_cvp = document.getElementById("a_cvp");
var b_cvp = document.getElementById("b_cvp");
var c_cvp = document.getElementById("c_cvp");
var d_cvp = document.getElementById("d_cvp");