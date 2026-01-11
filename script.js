const box = document.getElementById('box')

function changeColor(color) {
    box.style.background = color
}

function changeSize() {
    box.style.width = '400px'
    box.style.height= '200px'
}

function makeRound() {
    box.style.borderRadius= '50px' ;
}

function makeCircle() {
    box.style.borderRadius = '50%'
    box.style.width = '200px'
    box.style.height= '200px'
}


function resetBox() {
    box.style.borderRadius = '50%'
    box.style.width = '300px'
    box.style.height= '150px'
    box.style.borderRadius= '10px'
    box.style.background = '#4da3ff'
}
