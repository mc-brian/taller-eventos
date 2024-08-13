document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("div").addEventListener("click", function () {
    alert("Hola! Soy el div");
  });

  document.querySelector("button").addEventListener("click", function (event) {
    alert("Hola!");
    event.stopPropagation();
  });
});
