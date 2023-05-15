const items = document.getElementsByClassName('item')

console.log(items)
4

function cambiarVisivilidad(numItem) {
  const item = items[numItem]
  if (item.style.visibility == "") {
    item.style.visibility = "hidden"
  } else {
    item.style.visibility = ""
  }
}

function cambiarDisplay(numItem) {
  const item = items[numItem]
  if (item.style.display == "") {
    item.style.display = 'none'
  }
  else {
  item.style.display = ""
}
}



