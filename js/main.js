const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    items: 3,
});
$('.slider_btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})

$('.slider_btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})
