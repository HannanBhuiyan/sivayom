

$(".mobile_sidebar_icon_bar").click(function() {
    $(".sidebar").addClass("style-2")
})
$(".mobile_sidebar_icon_times").click(function() {
    $(".sidebar").removeClass("style-2")
})

// login and registrtion slider
new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, 
}); 
 

new Swiper(".dashboard_swipper", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});