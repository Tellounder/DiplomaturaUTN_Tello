const alternar = document.getElementsByClassName('alternar')[0]


alternar.addEventListener('click',fuction(e) {
    e.currentTarget.classList.toggle('activo')
})