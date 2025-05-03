let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;


    if (current === 'Dark'){
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        logo.setAttribute("src", "./byui-logo_white.png");

    
    
        //change body to dark
        //change logo to the new logo
    } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        logo.setAttribute("src", "./byui-logo_blue.webp");

        //Remove dark class from body
        //change logo back to original loop

    }
}