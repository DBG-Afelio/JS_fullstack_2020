const formulaire = document.forms[0];
const color_selector = formulaire.querySelectorAll('.color_controller');
const size_selector = formulaire.querySelector("input[name='i_size']");
const svg = document.querySelectorAll('svg');
const marker = document.querySelector('.marker');
const submit_button = formulaire.querySelector("input[type='submit']");
const notification_aera = document.querySelector(".cover");
const notification_title = notification_aera.querySelector("h1");
const notification_message = notification_aera.querySelector("p");
let positionX = false;
let positionY = false;

function create_circle(rgba, size) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", positionX);
    circle.setAttribute("cy", positionY);
    circle.setAttribute("r", size);
    circle.setAttribute("fill", "rgba(" + [...rgba] + ")");
    circle.setAttribute("draggable", true);
    circle.addEventListener("click", function (e) {
        if(event.shiftKey) {
            svg[1].removeChild(circle);
        } else if (event.altKey) {
            copy_circle(circle);
        } else {
            go_first(circle);
        }
    });
    if(svg[1].getAttribute("height") < size*2) {
        svg[1].setAttribute("height", size*2);
    }
    svg[1].appendChild(circle);
    marker.style.display = "none";
    positionX = false;
    positionY = false;
}

function clearboard() {
    while (svg[1].firstChild) {
        svg[1].removeChild(svg[1].lastChild);
    }
}

function go_first(element) {
    if(!event.ctrlKey) {
        svg[1].removeChild(element);
        svg[1].appendChild(element);
    }
}

function copy_circle(element) {
    let colors = element.getAttribute("fill");
    svg[0].firstElementChild.setAttribute("fill", colors);
    colors = colors.replace("rgba(","")
    colors = colors.replace(")","");
    colors = colors.split(",");
    color_selector.forEach((selector, i) => {
        selector.value = colors[i];
    });
    size_selector.value = element.getAttribute("r");
}


color_selector.forEach(selector => {
    selector.addEventListener('input', () => {
        const rgba = [];
        color_selector.forEach(selector => {
            rgba.push(selector.value);
        });
        svg[0].firstElementChild.setAttribute("fill", "rgba(" + [...rgba] + ")");
    })
});

formulaire.addEventListener("submit", function (e) {
    e.preventDefault();
    const rayon = Number(size_selector.value)
    if (Number.isInteger(rayon)) {
        if(rayon > 0) {
            if (positionX && positionY) {
                const rgba = [];
                color_selector.forEach(selector => {
                    rgba.push(selector.value);
                });
                create_circle(rgba, rayon);
            } else {
                notification_title.textContent = "Pas de position";
                notification_message.textContent = "Veuillez donner une position au cercle en maintenant CTRL+CLIQUE GAUCHE dans le rectangle blanc";
                notification_aera.style.display = "block";
            }
        } else {
            notification_title.textContent = "Le rayon entré n'est pas positif";
            notification_message.textContent = "Veuillez entré un nombre entier plus grand que 0";
            notification_aera.style.display = "block";
        }
    } else {
        notification_title.textContent = "Le rayon entré n'est pas un nombre entier";
        notification_message.textContent = "Veuillez entré un nombre entier pour le rayon";
        notification_aera.style.display = "block";
    }
});

svg[1].addEventListener("click", function (e) {
    if(e.ctrlKey) {
        const rect = svg[1].getBoundingClientRect();
        marker.style.display = "block";
        const markerY = e.clientY - marker.offsetHeight + window.scrollY;
        const markerX = e.clientX - marker.offsetWidth / 2 + window.scrollX;
        positionX = Math.floor(e.clientX - rect.left);
        positionY = Math.floor(e.clientY - rect.top);
        marker.style.top = markerY + "px";
        marker.style.left = markerX + "px";
    }
});

document.addEventListener("keydown", event => {
    if(event.keyCode >= 16 && event.keyCode <= 18) {
        event.preventDefault();
        let cur;
        switch (event.keyCode) {
            case 17:
                cur = "./src/cursor.cur";
                svg[1].style.cursor = "url(./src/cursor.cur), pointer";
                break;
            case 16:
                cur = "./src/trash.cur";
                break;
            case 18:
                cur = "./src/copy.cur";
                break;
        }
        svg[1].querySelectorAll("circle").forEach(element => {
            element.style.cursor = "url("+cur+"), pointer";
        });
    }
});

document.addEventListener("keyup", event => {
    if(event.keyCode >= 16 && event.keyCode <= 18) {
        event.preventDefault();
        if(event.keyCode === 17) {
            svg[1].style.cursor = "default";
        }
        svg[1].querySelectorAll("circle").forEach(element => {
            element.style.cursor = "default";
        });
    }
});

notification_aera.querySelector("button").addEventListener("click", event => {
    notification_aera.style.display = "none";
});

document.querySelector("#clear_board").addEventListener("click", event => {
    clearboard();
});