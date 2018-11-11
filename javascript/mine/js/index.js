import Hello from './components/hello';
import Box from './components/box';
import $ from 'jquery';
import slick from 'slick-carousel';

$('.your-class').slick({
    arrows: true,
    dots: true
});
const components = [
    {
        class: Hello,
        selector: '.hello'
    },
    {
        class: Box,
        selector: ['.box', '.sBox'],
        options: {
            'button': '.js-show-box'
        }
    }
]

components.forEach(component => {
    if(document.querySelector(component.selector) !== null){
        document.querySelectorAll(component.selector).forEach(
            element => new component.class(element, component.options)
            // init class and pass to it element and options

        )
    }
})