//show menu item in mobile/tablet mode
function myFunction() {
    let btn = document.getElementsByClassName('btn')[0];
    let box = document.getElementsByClassName('menubox')[0];
    let menubtn = document.getElementsByClassName('menubtn')[0];
    let closebtn = document.getElementsByClassName('closebtn')[0];
    let isscroll = false;
    btn.onclick = () => {
        if (isscroll) {
            box.classList.remove('menubox-active');
            btn.classList.remove('active');
            menubtn.classList.toggle('hidden');
            closebtn.classList.toggle('hidden');
        } else {
            box.classList.add("menubox-active");
            btn.classList.add('active');
            menubtn.classList.toggle('hidden');
            closebtn.classList.toggle('hidden');
        }
        isscroll = !isscroll
    }
}

// Accordion
window.onload = function () {
    const collapsed1 = document.getElementById("collapsed1");
    const collapsed2 = document.getElementById("collapsed2");
    const expanded1 = document.getElementById("expanded1");
    const expanded2 = document.getElementById("expanded2");
    const icon1 = document.getElementById("icon1");
    const icon2 = document.getElementById("icon2");

    collapsed1.addEventListener("click", () => {
        expanded1.classList.toggle("hidden");
        icon1.classList.toggle("rotate");
    });

    collapsed2.addEventListener("click", () => {
        expanded2.classList.toggle("hidden");
        icon2.classList.toggle("rotate");
    });
}