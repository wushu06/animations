
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>New Age - Start Bootstrap Theme</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="vendor/simple-line-icons/css/simple-line-icons.css">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
    <link rel="stylesheet" href="style.css">

    <!-- Plugin CSS -->
    <link rel="stylesheet" href="device-mockups/device-mockups.min.css">
    <link rel="stylesheet" href="page2.css">

    <!-- Custom styles for this template -->
    <link href="css/new-age.min.css" rel="stylesheet">
    <link rel="stylesheet" href="sections.css">

</head>

<body id="page-top" style="height: 100vh; overflow: hidden">
<div id="barba-wrapper">
    <div class="barba-container"><style>
    @import "https://fonts.googleapis.com/css?family=Fira+Sans:300,400";
    @import "https://fonts.googleapis.com/icon?family=Material+Icons";
    * {
        box-sizing: border-box;
    }

    body {
        background-color: #20b49c;
        font-family: "Fira Sans", Arial, sans-serif;
        font-size: 16px;
        line-height: 1.875em;
    }
    body::after {
        content: '';
        position: absolute;
        z-index: 99;
        background-color: rgba(24, 137, 118, 0.8);
        height: 100vh;
        width: 100vw;
        transition: 0.4s;
        opacity: 0;
        visibility: hidden;
    }

    a {
        text-decoration: none;
    }

    .nav-top {
        display: flex;
        align-items: center;
        position: fixed;
        z-index: 101;
        padding: 10px 20px;
        width: 100%;
        height: 50px;
        background-color: #188976;
    }
    .nav-top .hamburger {
        margin-left: auto;
        color: #fff;
        cursor: pointer;
    }

    .nav-drill {
        margin-top: 50px;
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
    }

    .nav-is-toggled .nav-drill {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    .nav-is-toggled::after {
        opacity: 1;
        visibility: visible;
    }

    .nav-drill {
        display: flex;
        position: fixed;
        z-index: 100;
        top: 0;
        right: 0;
        width: 250px;
        height: 100vh;
        background-color: #fff;
        overflow-y: auto;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
        transition: 0.45s;
    }
    .nav-items {
        flex: 0 0 100%;
    }
    .nav-item:not(:last-child) {
        border-bottom: solid 1px #daf9f4;
    }
    .nav-link {
        display: block;
        padding: 0.875em 1em;
        background-color: #fff;
        color: #20b49c;
        font-size: 1rem;
        line-height: 1.5em;
        font-weight: 300;
    }
    .nav-expand-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        background-color: #daf9f4;
        transition: 0.3s;
        visibility: hidden;
    }
    .nav-expand-content .nav-item:not(:last-child) {
        border-bottom: solid 1px #20b49c;
    }
    .nav-expand-content .nav-link {
        background-color: #daf9f4;
    }
    .nav-expand-content .nav-back-link {
        display: flex;
        align-items: center;
        background-color: #20b49c !important;
        color: #fff;
    }
    .nav-expand-content .nav-back-link::before {
        content: "chevron_left";
        margin-right: 0.5em;
        font-family: "Material Icons";
    }
    .nav-expand-link {
        display: flex;
        justify-content: space-between;
    }
    .nav-expand-link::after {
        content: "chevron_right";
        flex: 0 1 auto;
        font-family: "Material Icons";
    }
    .nav-expand.active > .nav-expand-content {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        visibility: visible;
    }
    .nav-expand .nav-expand-content {
        background-color: #daf9f4;
    }
    .nav-expand .nav-expand-content .nav-link {
        background-color: #daf9f4;
    }
    .nav-expand .nav-expand-content .nav-expand-content {
        background-color: #aff1e6;
    }
    .nav-expand .nav-expand-content .nav-expand-content .nav-link {
        background-color: #aff1e6;
    }
    .nav-expand .nav-expand-content .nav-expand-content .nav-expand-content {
        background-color: #84e9d9;
    }
    .nav-expand .nav-expand-content .nav-expand-content .nav-expand-content .nav-link {
        background-color: #84e9d9;
    }
    .nav-expand .nav-expand-content .nav-expand-content .nav-expand-content .nav-expand-content {
        background-color: #59e1cb;
    }
    .nav-expand .nav-expand-content .nav-expand-content .nav-expand-content .nav-expand-content .nav-link {
        background-color: #59e1cb;
    }

</style>
<header class="nav-top">
    <span class="hamburger material-icons" id="menu">menu</span>
</header>

<nav class="nav-drill" >
    <ul class="nav-items nav-level-1">
        <li class="nav-item nav-expand">
            <a class="nav-link nav-expand-link" href="#">
                Menu
            </a>
            <ul class="nav-items nav-expand-content">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Level 2
                    </a>
                </li>
                <li class="nav-item nav-expand">
                    <a class="nav-link nav-expand-link" href="#">
                        Menu
                    </a>
                    <ul class="nav-items nav-expand-content">
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Level 3
                            </a>
                        </li>
                        <li class="nav-item nav-expand">
                            <a class="nav-link nav-expand-link" href="#">
                                Menu
                            </a>
                            <ul class="nav-items nav-expand-content">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Level 4
                                    </a>
                                </li>
                                <li class="nav-item nav-expand">
                                    <a class="nav-link nav-expand-link" href="#">
                                        Menu
                                    </a>
                                    <ul class="nav-items nav-expand-content">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                Level 5 Directory
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                Level 5 Contact
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                Level 5 Quick links
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                Level 5 Launchpad
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Level 4 Directory
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Level 4 Contact
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Level 4 Quick links
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        Level 4 Launchpad
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Level 3 Directory
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Level 3 Contact
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Level 3 Quick links
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Level 3 Launchpad
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Level 2 Directory
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Level 2 Contact
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Level 2 Quick links
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Level 2 Launchpad
                    </a>
                </li>
            </ul>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">
                Directory
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">
                Contact
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">
                Quick links
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">
                Launchpad
            </a>
        </li>
    </ul>
</nav>

<script>


    //const navExpand = [].slice.call(document.querySelectorAll('.nav-expand')) // this works as well
    var navExpand = document.querySelectorAll('.nav-expand');
    // my way
    navExpand = [
        ...
        document.querySelectorAll('.nav-expand')
    ];
    const backLink = `<li class="nav-item">
                            <a class="nav-link nav-back-link" href="javascript:;">
                                Back
                            </a>
                        </li>`
    // my way
    navExpand.map(item=> {
        console.log(item.querySelector('.nav-expand-content'));
        item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink)
        item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
        item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
    })

    // this works too
   // navExpand.forEach(item => {

        /*item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink)
        item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
        item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))*/
   // })

    const menu = document.getElementById('menu')
    menu.addEventListener('click', function() {
        document.body.classList.toggle('nav-is-toggled')
    })
</script>

<?php include 'elements/footer.php' ?>