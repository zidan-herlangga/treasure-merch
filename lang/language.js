// Navbar = navLinkBahasa
// Judul = judulBahasa
// Paragraph = pBahasa
// Deskripsi Buku = deskripsiBuku
// Detail = detailBahasa
// Tombol = tombolBahasa

// let bahasa = "en";

// function ubahBahasa() {
//   let navbarLink = document.querySelectorAll(".navLinkBahasa");
//   let judulBahasa = document.querySelectorAll(".judulBahasa");
//   let pBahasa = document.querySelectorAll(".pBahasa");
//   let deskripsiBuku = document.querySelectorAll(".deskripsiBuku");
//   let detailBahasa = document.querySelectorAll(".detailBahasa");
//   let tombolBahasa = document.querySelector(".tombolKontol");

//   if (bahasa == "en") {
//     navbarLink.innerHTML = navbarLink.getAttribute("data-bahasa-en");
//     judulBahasa.innerHTML = judulBahasa.getAttribute("data-bahasa-en");
//     pBahasa.innerHTML = pBahasa.getAttribute("data-bahasa-en");
//     deskripsiBuku.innerHTML = deskripsiBuku.getAttribute("data-bahasa-en");
//     detailBahasa.innerHTML = detailBahasa.getAttribute("data-bahasa-en");
//     bahasa = "id";
//   } else if (bahasa == "id") {
//     navbarLink.innerHTML = navbarLink.getAttribute("data-bahasa-id");
//     judulBahasa.innerHTML = judulBahasa.getAttribute("data-bahasa-id");
//     pBahasa.innerHTML = pBahasa.getAttribute("data-bahasa-id");
//     deskripsiBuku.innerHTML = deskripsiBuku.getAttribute("data-bahasa-id");
//     detailBahasa.innerHTML = detailBahasa.getAttribute("data-bahasa-id");
//     tombolBahasa.innerHTML = tombolBahasa.getAttribute("data-bahasa-id");
//     bahasa = "en";
//   }
// }

// document.querySelector("tombolBahasa").addEventListener("click", ubahBahasa);

let bahasa = "en";

function ubahBahasa() {
  let navbarLink = document.querySelectorAll(".navLinkBahasa");
  let judulBahasa = document.querySelectorAll(".judulBahasa");
  let pBahasa = document.querySelectorAll(".pBahasa");
  let deskripsiBuku = document.querySelectorAll(".deskripsiBuku");
  let detailBahasa = document.querySelectorAll(".detailBahasa");
  let tombolBahasa = document.querySelector(".tombolBahasa");

  if (bahasa == "en") {
    for (let i = 0; i < navbarLink.length; i++) {
      navbarLink[i].innerHTML = navbarLink[i].getAttribute("data-bahasa-en");
    }
    for (let i = 0; i < judulBahasa.length; i++) {
      judulBahasa[i].innerHTML = judulBahasa[i].getAttribute("data-bahasa-en");
    }
    for (let i = 0; i < pBahasa.length; i++) {
      pBahasa[i].innerHTML = pBahasa[i].getAttribute("data-bahasa-en");
    }
    for (let i = 0; i < deskripsiBuku.length; i++) {
      deskripsiBuku[i].innerHTML =
        deskripsiBuku[i].getAttribute("data-bahasa-en");
    }
    for (let i = 0; i < detailBahasa.length; i++) {
      detailBahasa[i].innerHTML =
        detailBahasa[i].getAttribute("data-bahasa-en");
    }
    bahasa = "id";
  } else if (bahasa == "id") {
    for (let i = 0; i < navbarLink.length; i++) {
      navbarLink[i].innerHTML = navbarLink[i].getAttribute("data-bahasa-id");
    }
    for (let i = 0; i < judulBahasa.length; i++) {
      judulBahasa[i].innerHTML = judulBahasa[i].getAttribute("data-bahasa-id");
    }
    for (let i = 0; i < pBahasa.length; i++) {
      pBahasa[i].innerHTML = pBahasa[i].getAttribute("data-bahasa-id");
    }
    for (let i = 0; i < deskripsiBuku.length; i++) {
      deskripsiBuku[i].innerHTML =
        deskripsiBuku[i].getAttribute("data-bahasa-id");
    }
    for (let i = 0; i < detailBahasa.length; i++) {
      detailBahasa[i].innerHTML =
        detailBahasa[i].getAttribute("data-bahasa-id");
    }
    tombolBahasa.innerHTML = tombolBahasa.getAttribute("data-bahasa-id");
    bahasa = "en";
  }
}

document.querySelector(".tombolBahasa").addEventListener("click", ubahBahasa);
