import Slider from './components/Slider';
import Sections from './components/Sections';
import Menu from './components/Menu';

class Factory
{
    constructor()
    {
        const components = [
            {
                class: Menu,
                selector: '.wrapper'
            },
            {
                class: Slider,
                selector: '.slideshow',
                options: {
                    'page2': 'js-header',
                    'page3': 'slider3'
                }

            },
            {
                class: Sections,
                selector: '.cont',

            }
        ];

        components.forEach(component => {
            if(document.querySelector(component.selector) !== null){
                document.querySelectorAll(component.selector).forEach(
                    element => new component.class(element, component.options),

                )

            }
        });


    }
}
export default Factory;
