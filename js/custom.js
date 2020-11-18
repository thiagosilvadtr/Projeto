//smooth scroll for internal links
$(".custom").click(function (e) {
    e.preventDefault();
    let link = $(this).attr("href"),
        targetOffset = $(link).offset().top,
        menu = $("nav").innerHeight();
    $('html, body').animate({
        scrollTop: targetOffset - menu
    }, 500);
});

//external links
const linkExt = document.querySelectorAll(".card")[0];
linkExt.addEventListener("click", openLink, false)
function openLink() {
    window.open("https://monitordasdoacoes.netlify.app/pt", "_blank")
}

