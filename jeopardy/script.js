const gridItems= document.querySelectorAll('.grid-item');
const active = document.querySelector('.active');
var modal = document.querySelector('.modal');

/*gridItem.addEventListener('click', () => {
    modal.classlist.add('.active');
})*/

/*
gridItems.forEach(gridItem => {
    gridItem.addEventListener('click', () => {
        gridItem.classList.add('active');
    })
}) */

gridItems.forEach(gridItem => {
    gridItem.addEventListener('click', () => {
        modal.classList.add('active');
    })
})

// Get the modal


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const btna = document.querySelector('.btna')
const input = document.querySelector('.input')

btna.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
}) 