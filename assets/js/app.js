

$(".mobile_sidebar_icon_bar").click(function() {
    $(".sidebar").addClass("style-2")
})
$(".mobile_sidebar_icon_times").click(function() {
    $(".sidebar").removeClass("style-2")
})

// login and registrtion slider
var swiper = new Swiper(".mySwiper", {
     pagination: {
          el: ".swiper-pagination",
          clickable: true,
     },
});