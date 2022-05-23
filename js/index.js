function tes() {
  console.log("aaa");
}

const ikons = document.querySelectorAll(".ikon");
for (let ikon of ikons) {
  ikon.addEventListener("click", function (event) {
    ikon.classList.toggle("active");
  });
}
