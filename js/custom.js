//smooth scroll for internal links
$(".custom").click(function (e) {
  e.preventDefault();
  let link = $(this).attr("href"),
    targetOffset = $(link).offset().top,
    menu = $("nav").innerHeight();
  $("html, body").animate(
    {
      scrollTop: targetOffset - menu,
    },
    500
  );
});

//external links
let linkExt = document.querySelectorAll(".card")[0];
linkExt.addEventListener("click", openLink, false);
function openLink() {
  window.open("https://monitordasdoacoes.netlify.app/pt", "_blank");
}

linkExt = document.querySelectorAll(".card")[1];
linkExt.addEventListener("click", openLink, false);
function openLink() {
  window.open("https://digitaldrumsplay.netlify.app/", "_blank");
}

linkExt = document.querySelectorAll(".card")[2];
linkExt.addEventListener("click", openLink, false);
function openLink() {
  window.open("https://previsaodotempotd.netlify.app/", "_blank");
}
