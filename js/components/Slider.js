import $ from 'jquery';
class Slider
{
    constructor(elements, options)
    {
        console.log(options);
        this.sliderOne(options.page3);
        this.sliderTwo(options.page2);
    }

    sliderOne(check)
    {

        var delta,
            $check = true;


// Master DOManipulator v2 ------------------------------------------------------------
        var sliderCheck = document.getElementById(check)
        if(sliderCheck) {
            var items = document.querySelectorAll('.item');
            const controls = document.querySelectorAll('.control'),
                headerItems = document.querySelectorAll('.item-header'),
                descriptionItems = document.querySelectorAll('.item-description'),
                activeDelay = .76,
                interval = 5000;

            let current = 0;
            let last = 3;

            const slider = {
                init: () => {
                    controls.forEach(control => control.addEventListener('click', (e) => {
                        slider.clickedControl(e)
                    }));
                    controls[current].classList.add('active');
                    items[current].classList.add('active');
                },
                nextSlide: () => { // Increment current slide and add active class
                    slider.reset();
                    if (current === items.length - 1) current = -1; // Check if current slide is last in array

                    current++;

                    controls[current].classList.add('active');
                    items[current].classList.add('active');
                    slider.transitionDelay(headerItems);
                    slider.transitionDelay(descriptionItems);
                    setTimeout(function () {
                        $check = true;
                    }, 1000);

                },
                prevSlide: () => { // Increment current slide and add active class
                    slider.reset();
                    if (current === 0) current = 3; // Check if current slide is last in array
                    current--;
                    controls[current].classList.add('active');
                    items[current].classList.add('active');
                    slider.transitionDelay(headerItems);
                    slider.transitionDelay(descriptionItems);
                    setTimeout(function () {
                        $check = true;
                    }, 1000);

                },
                clickedControl: (e) => { // Add active class to clicked control and corresponding slide
                    slider.reset();
                    // clearInterval(intervalF);

                    const control = e.target,
                        dataIndex = Number(control.dataset.index);

                    control.classList.add('active');
                    items.forEach((item, index) => {
                        if (index === dataIndex) { // Add active class to corresponding slide
                            item.classList.add('active');
                        }
                    })
                    current = dataIndex; // Update current slide
                    slider.transitionDelay(headerItems);
                    slider.transitionDelay(descriptionItems);
                    // intervalF = setInterval(slider.nextSlide, interval); // Fire that bad boi back up
                },
                reset: () => { // Remove active classes
                    items.forEach(item => item.classList.remove('active'));
                    controls.forEach(control => control.classList.remove('active'));
                },
                transitionDelay: (items) => { // Set incrementing css transition-delay for .item-header & .item-description, .vertical-part, b elements
                    let seconds;

                    items.forEach(item => {
                        const children = item.childNodes; // .vertical-part(s)
                        let count = 1,
                            delay;

                        item.classList.value === 'item-header' ? seconds = .015 : seconds = .007;

                        children.forEach(child => { // iterate through .vertical-part(s) and style b element
                            if (child.classList) {
                                item.parentNode.classList.contains('active') ? delay = count * seconds + activeDelay : delay = count * seconds;
                                child.firstElementChild.style.transitionDelay = `${delay}s`; // b element
                                count++;
                            }
                        })
                    })
                },
            }

//let intervalF = setInterval(slider.nextSlide, interval);
            slider.init();


            $(window).bind('mousewheel', function (event) {
                if ($check === true) {
                    delta = event.originalEvent.wheelDelta;


                    if (delta > 0) {
                        $check = false;
                        slider.nextSlide();


                    }
                    else {
                        $check = false;
                        slider.prevSlide();


                    }
                }
            });
        }

    }
    sliderTwo(check)
    {
        var sliderCheck = document.getElementById(check)
        if(sliderCheck) {
            const $window = $(window);
            const $body = $('body');
            var $check = true;

            class Slideshow {
                constructor(userOptions = {}) {
                    const defaultOptions = {
                        $el: $('.slideshow'),
                        showArrows: false,
                        showPagination: true,
                        duration: 10000,
                        autoplay: false
                    }

                    let options = Object.assign({}, defaultOptions, userOptions);

                    this.$el = options.$el;
                    this.maxSlide = this.$el.find($('.js-slider-home-slide')).length;
                    this.showArrows = this.maxSlide > 1 ? options.showArrows : false;
                    this.showPagination = options.showPagination;
                    this.currentSlide = 1;
                    this.isAnimating = false;
                    this.animationDuration = 1200;
                    this.autoplaySpeed = options.duration;
                    this.interval;
                    this.$controls = this.$el.find('.js-slider-home-button');
                    this.autoplay = this.maxSlide > 1 ? options.autoplay : false;

                    this.$el.on('click', '.js-slider-home-next', (event) => this.nextSlide());
                    this.$el.on('click', '.js-slider-home-prev', (event) => this.prevSlide());
                    this.$el.on('click', '.js-pagination-item', event => {
                        if (!this.isAnimating) {
                            this.preventClick();
                            this.goToSlide(event.target.dataset.slide);
                        }
                    });

                    this.init();
                }

                init() {
                    this.goToSlide(1);

                    if (this.autoplay) {
                        this.startAutoplay();
                    }

                    if (this.showPagination) {
                        let paginationNumber = this.maxSlide;
                        let pagination = '<div class="pagination"><div class="container">';

                        for (let i = 0; i < this.maxSlide; i++) {
                            let item = `<span class="pagination__item js-pagination-item ${ i === 0 ? 'is-current' : ''}" data-slide=${i + 1}>${i + 1}</span>`;
                            pagination = pagination + item;
                        }

                        pagination = pagination + '</div></div>';

                        this.$el.append(pagination);
                    }
                }

                preventClick() {
                    this.isAnimating = true;
                    this.$controls.prop('disabled', true);
                    clearInterval(this.interval);

                    setTimeout(() => {
                        this.isAnimating = false;
                        this.$controls.prop('disabled', false);
                        if (this.autoplay) {
                            this.startAutoplay();
                        }
                    }, this.animationDuration);
                }

                goToSlide(index) {
                    this.currentSlide = parseInt(index);

                    if (this.currentSlide > this.maxSlide) {
                        this.currentSlide = 1;
                    }

                    if (this.currentSlide === 0) {
                        this.currentSlide = this.maxSlide;
                    }

                    const newCurrent = this.$el.find('.js-slider-home-slide[data-slide="' + this.currentSlide + '"]');
                    const newPrev = this.currentSlide === 1 ? this.$el.find('.js-slider-home-slide').last() : newCurrent.prev('.js-slider-home-slide');
                    const newNext = this.currentSlide === this.maxSlide ? this.$el.find('.js-slider-home-slide').first() : newCurrent.next('.js-slider-home-slide');

                    this.$el.find('.js-slider-home-slide').removeClass('is-prev is-next is-current');
                    this.$el.find('.js-pagination-item').removeClass('is-current');

                    if (this.maxSlide > 1) {
                        newPrev.addClass('is-prev');
                        newNext.addClass('is-next');
                    }

                    newCurrent.addClass('is-current');
                    this.$el.find('.js-pagination-item[data-slide="' + this.currentSlide + '"]').addClass('is-current');
                }

                nextSlide() {
                    this.preventClick();
                    this.goToSlide(this.currentSlide + 1);
                    setTimeout(function () {
                        $check = true;
                    }, 1000);
                }

                prevSlide() {
                    this.preventClick();
                    this.goToSlide(this.currentSlide - 1);
                    setTimeout(function () {
                        $check = true;
                    }, 1000);
                }

                startAutoplay() {
                    this.interval = setInterval(() => {
                        if (!this.isAnimating) {
                            this.nextSlide();
                        }
                    }, this.autoplaySpeed);
                }

                destroy() {
                    this.$el.off();
                }
            }

            (function () {
                let loaded = false;
                let maxLoad = 3000;

                function load() {
                    const options = {
                        showPagination: true
                    };

                    let slideShow = new Slideshow(options);
                }

                function addLoadClass() {
                    $body.addClass('is-loaded');

                    setTimeout(function () {
                        $body.addClass('is-animated');
                    }, 600);
                }

                $window.on('load', function () {
                    if (!loaded) {
                        loaded = true;
                        load();
                    }
                });

                setTimeout(function () {
                    if (!loaded) {
                        loaded = true;
                        load();
                    }
                }, maxLoad);

                addLoadClass();
            })();

            $(window).bind('mousewheel', function (event) {
                if ($check === true) {
                   var delta = event.originalEvent.wheelDelta;
                    var slide = new Slideshow();

                    if (delta > 0) {
                        $check = false;
                        slide.nextSlide();


                    }
                    else {
                        $check = false;
                        slide.prevSlide();


                    }
                }
            });
        }// end if slider check

    }
}

export default Slider;