jQuery(document).ready(function ($) {
    /*
     * menu
     */

   /* $('.slideshow-items').on('init', function(event, slick, currentSlide, nextSlide){
        $('.item').addClass('active');
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.item').removeClass('active');
    }).on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.item').addClass('active');
    }).
    slick({
     arrows:true,
        dots: true,
        fade: true,
        speed: 1000,
        cssEase: 'linear'
    });



    const items = document.querySelectorAll('.item');
    var activeDelay = 1.76;
    var delay ;
    let count = 1;
    var length = $('.vertical-part').length;
    items.forEach(item => {
        document.querySelectorAll('.vertical-part').forEach(child => { // iterate through .vertical-part(s) and style b element

                delay;
                var seconds = .001;

            item.parentNode.classList.contains('active') ? delay = count * seconds + activeDelay : delay = count * seconds;

            child.firstElementChild.style.transitionDelay = `${delay}s`; // b element
            count++;

        })
    })

*/

});



