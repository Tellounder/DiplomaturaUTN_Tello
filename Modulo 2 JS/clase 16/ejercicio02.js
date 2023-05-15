const link = document.getElementById('link')

link.addEventListener('click', function(e) {


    e.preventDefault();
    alert('quisiste ir a: ' + e.currentTarget.href)
})