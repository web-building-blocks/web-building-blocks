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