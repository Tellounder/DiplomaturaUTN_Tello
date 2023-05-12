//seleccionar todos los li con clase item//
const items = document.getElementsByClassName('item')

// necesito algo que los recora > for

for(let i=0;i <items.length; i++) {

    items[i].style = 'color:blue; padding-left:' + (10* i) + 'px'
}