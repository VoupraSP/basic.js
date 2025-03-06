function coordenadasMouse(event) {
    const coordenadas = {
        x: event.x,
        y: event.y,
    }
    console.log(coordenadas);
}

window.addEventListener('mousemove', coordenadasMouse);


function scroll () {
    console.log(window.scrollY);
}

window.addEventListener("scroll", scroll);
