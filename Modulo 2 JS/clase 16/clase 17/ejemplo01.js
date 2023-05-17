const items = document.getElementsByClassName('item');

function cambiarVisivilidad() {
    const item = items[3]
    if (item.style.visibility == '') {
        item.style.visibility = 'hidden'
    } else {
        item.style.visibility = ''
    }
}

setInterval(cambiarVisivilidad, 1000)