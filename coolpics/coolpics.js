let btn = document.querySelector('.menu-btn');
const menu = document.querySelector('menu');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');


const gallery = document.querySelector('.gallery');


}


function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}




handleResize();
window.addEventListener("resize", handleResize);


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }

})
