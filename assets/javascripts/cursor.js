const div = document.createElement('div');
div.className = 'cursor'
const cursor = document.querySelector('.cursor');

let mouseX = 126;
let mouseY = 46;

let cursorX = mouseX;
let cursorY = mouseY;

let size = 8;

let speed = 0.2;

function animate() {
    let distX = mouseX - cursorX;
    let distY = mouseY - cursorY;

    cursorX = cursorX + (distX * speed);
    cursorY = cursorY + (distY * speed);

    size = size + 1;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    cursor.style.width = size + 'px';
    cursor.style.height = size + 'px';
    cursor.style.marginLeft = (-size/2) + 'px';
    cursor.style.marginTop = (-size/2) + 'px';

    requestAnimationFrame(animate);
}

animate();

document.addEventListener('mousemove', (event) => {
    mouseX = event.pageX;
    mouseY = event.pageY;
    size = 32;
})
