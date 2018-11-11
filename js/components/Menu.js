class Menu {
    constructor()
    {
        $('.nav-btn').on('click', function () {
            $('.nav').toggleClass('open');
            $('.btn-bar').toggleClass('active');
        })

    }
}

export default Menu;