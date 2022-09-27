let toggler = document.getElementsByClassName("header__toggler")
let menu = document.getElementsByClassName("header-menu")

toggler[0].addEventListener("click", function (){
    toggler[0].classList.toggle('active')
    menu[0].classList.toggle('active')
})