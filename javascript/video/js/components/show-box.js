export default class ShowBox {
    constructor(element) {
        const box = document.querySelector('body')
        const body = document.getElementById('body')

        body.addEventListener('click', () => {
           // this.showBox(box)
            alert('cli')
        })
    }

    showBox(box) {
        box.classList.toggle('d-none')
    }
}