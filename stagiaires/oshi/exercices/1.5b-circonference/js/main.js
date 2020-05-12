const color_selector = document.querySelectorAll('.color_controller');
const input = document.querySelectorAll('input');
const size_selector = document.querySelector("input[name='i_size']");
const color_output = document.querySelector('.l-square');
const svg_circle = document.querySelector('svg');

function control_SVG_Circle(rgba, size) {
    svg_circle.setAttribute("height", (size+10)*2);
    svg_circle.setAttribute("width", (size+10)*2);
    svg_circle.firstElementChild.setAttribute("cx", (size+10));
    svg_circle.firstElementChild.setAttribute("cy", (size+10));
    svg_circle.firstElementChild.setAttribute("r", size);
    svg_circle.firstElementChild.setAttribute("fill", "rgba("+[...rgba]+")");
}

input.forEach(selector => {
    selector.addEventListener('change', () => {
        const rgba = [];
        color_selector.forEach(selector => {
            rgba.push(selector.value);
        });
        control_SVG_Circle(rgba, Number(size_selector.value));
    })
});

document.forms[0].addEventListener("submit", function(e){
    e.preventDefault();
    const rgba = [];
    color_selector.forEach(selector => {
        rgba.push(selector.value);
    });
    control_SVG_Circle(rgba, Number(size_selector.value));
});