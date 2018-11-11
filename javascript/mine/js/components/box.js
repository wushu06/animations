class Box
{
    constructor(element, options) {
        console.log(element);
        const btn = options.button;
        const box = document.querySelector(btn)

        box.addEventListener('click', () => {
            this.showBox(element);

        });


    }

    showBox(box) {
        box.classList.toggle('d-none')
    }
}

export default Box;