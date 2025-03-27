
//close sidebar
document.querySelector(".toggle-sidebar").addEventListener("click", function () {
    let toggleImg = document.querySelector(".toggle-sidebar");
    let menuHide = document.querySelector(".menu");
    let menuSm = document.querySelector(".menu.menu-sm");

    toggleImg.classList.toggle("rotate");
    menuHide.classList.toggle("hide");
    menuSm.classList.toggle("nhide");
});
