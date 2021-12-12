const UL = document.querySelector("#list");
const INPUT = document.querySelector("#task");

let uyari1 = document.querySelector("#liveToast1");
let uyari2 = document.querySelector("#liveToast2");

// Yapılacakların en son halini localStorage'a kayıt eden fonksiyon
function kayitlariEkle() {
  let icerikler = [];
  for (let i = 0; i < UL.children.length; i++) {
    let obj = {
      content: UL.children[i].innerHTML,
      isChecked: UL.children[i].classList[0] === "checked",
    };
    //icerikler[i] = UL.children[i].innerHTML;
    icerikler[i] = obj;
  }

  localStorage.setItem("icerikler", JSON.stringify(icerikler));
}

// Yapılacakların en son halini localStorage'dan getiren ve listeleyen fonksiyon
function kayitlariGetir() {
  let liItems = JSON.parse(localStorage.getItem("icerikler"));

  // Önceki tüm yapılacakların silinmesi
  UL.innerHTML = "";

  liItems.forEach((itemObj) => {
    let li = document.createElement("li");

    li.innerHTML = itemObj.content;
    if (itemObj.isChecked) {
      li.classList = "checked";
    }

    UL.append(li);
  });
}

if (localStorage.getItem("icerikler")) {
  kayitlariGetir();
}

// Ekleme Fonksiyonu
function newElement() {
  //Input içerik kontrolü
  if (INPUT.value.trim().length === 0) {
    uyari2.style = "display:block!important; opacity:1;";
    setTimeout(delToast, 4000, 2);

    INPUT.value = "";
  } else {
    // input'tan içerik alınıyor
    let newTask = INPUT.value;

    // Yeni görev oluşturulup, ul'ye ekleniyor.
    let li = document.createElement("li");
    let p = document.createElement("p");
    let span = document.createElement("span");

    p.innerHTML = newTask;
    p.setAttribute("onclick", "isMark(this)");
    span.innerHTML = "X";
    span.classList = "close";
    span.setAttribute("onclick", "delTask(this)");

    li.append(p);
    li.append(span);
    UL.append(li);

    // Ekleme işleminden sonra sıfırlama yapılıyor
    INPUT.value = "";

    uyari1.style = "display:block!important; opacity:1;";
    setTimeout(delToast, 4000, 1);

    // localStorage'a güncel hali ekleniyor.
    kayitlariEkle();
  }
}

// Silme Fonksiyonu
function delTask(e) {
  e.parentNode.remove();

  // localStorage'a güncel hali ekleniyor.
  kayitlariEkle();
}

// Yapıldı işaretlemesini sağlayan fonksiyon
function isMark(e) {
  // uzun hali
  /*if(e.parentNode.classList[0] === "checked") {
    e.parentNode.classList = "";
  } else {
    e.parentNode.classList = "checked";
  }*/

  // kısa hali
  e.parentNode.classList.toggle("checked");

  // localStorage'a güncel hali ekleniyor.
  kayitlariEkle();
}

// Toast uyarısını kaldırmak için
function delToast(id) {
  document.querySelector(`#liveToast${id}`).style = "opacity:0";
}
