const box = document.getElementById('box')
const count = document.getElementById('count')
const resetBtn = document.getElementById('resetBtn')

let clickCount = 0

box.addEventListener('click', () => {
    clickCount++;
    box.style.background = 'lightgreen';
    box.textContent = 'clicked';
    count.textContent = clickCount;
});

box.addEventListener('dblclick', () => {
    box.style.background = 'orange';
    box.textContent = 'Double Clicked';
});

box.addEventListener('mouseover', () => {
    box.style.background = 'red';
    box.textContent = 'Mouse Over';
});

box.addEventListener('mouseout', () => {
    box.style.background = 'lightgray';
    box.textContent = 'Mouse Out';
});

box.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
    box.style.background = 'skyblue';
    box.textContent = 'Keyboard Activated';
    }
});

resetBtn.addEventListener('click', () => {
    clickCount = 0;
    box.style.background = 'lightgray';
    box.textContent = ' Hover or click me';
    count.textContent = 0;
});