const colors_array = ["red","blue","green","yellow","purple","pink","orange"];
let colors_generated = [];
let actual_lvl = "";
let user_try = 0;
let used = false;
const indicator = document.querySelector(".nav-indicator");
const main_menu = document.querySelectorAll(".nav-item");
const selector = document.querySelectorAll(".selector");
const selectorColor = selector[0].querySelectorAll(".btn-circle");
const selectedColor = selector[1].querySelectorAll(".btn-circle");
const sendbtn = document.querySelector(".send-btn");
const result = document.querySelectorAll(".result");
const alert_box = document.querySelector(".alert");
const alert_text = document.querySelector(".alert-text");
const alert_confirm = document.querySelector(".confirmer");
let alert_mode = "";
let success = false;

function handleIndicator(element) {
    main_menu.forEach(item => {
        item.classList.remove("is-active");
        item.removeAttribute("style");
    });

    indicator.style.width = `${element.offsetWidth}px`;
    indicator.style.left = `${element.offsetLeft}px`;
    indicator.style.backgroundColor = element.getAttribute("active-color");

    element.classList.add("is-active");
    element.style.color = element.getAttribute("active-color");
}

function initColorSelector(lvl) {
    selector.forEach((item, i) => {
        item.style.display = "block";
    });
    selectorColor.forEach((item, i) => {
        if(i===7 && lvl === "niv_1") {
            item.style.display = "none";
        } else if(i===7) {
            item.style.display = "block";
            item.name = "black";
        } else {
            item.style.backgroundColor = colors_array[i];
            item.name = colors_array[i];
        }
    });
    selectedColor.forEach((item, i) => {
        item.name = "unset";
        item.style.backgroundColor = "grey";
    });
}

function selectColor(sel_color) {
    const sel_colors = [];
    selectedColor.forEach((item, i) => {
        if(item.name != "unset") {
            sel_colors.push(item.name);
        }
    });
    if(sel_color.style.backgroundColor != "grey" && sel_colors.length < selectedColor.length) {
        let pass = true;
        if(actual_lvl === "niv_1" || actual_lvl === "niv_2") {
            if(sel_color.name != "black") {
                sel_color.style.backgroundColor = "grey";
            }
        }
        selectedColor.forEach((item, i) => {
            if(item.name === "unset" && pass) {
                item.style.backgroundColor = sel_color.name;
                sel_colors.push(sel_color.name);
                item.name = sel_color.name;
                pass = false;
            }
        });
        if(sel_colors.length === 4) {
            sendbtn.style.display = "block";
        } else {
            sendbtn.style.display = "none";
        }
    }
}

function unselectColor(sel_color) {
    if(sel_color.name != "unset") {
        selectorColor.forEach((item, i) => {
            if(item.name === sel_color.name) {
                item.style.backgroundColor = sel_color.name;
            }
        });
        sel_color.name = "unset";
        sel_color.style.backgroundColor = "grey";
    }
}

function generateColor(lvl) {
    const generate_colors_array = [];
    switch (lvl) {
        case "niv_1":
            while (generate_colors_array.length < 4) {
                const newColor = colors_array[Math.floor(Math.random() * colors_array.length)];
                if(generate_colors_array.length === 0) {
                    generate_colors_array.push(newColor);
                } else {
                    let pass = true;
                    generate_colors_array.forEach((color, i) => {
                        if(newColor == color) {
                            pass = false;
                        }
                    })
                    if(pass) {
                        generate_colors_array.push(newColor);
                    }
                }
            }
            break;
        case "niv_2":
            while (generate_colors_array.length < 4) {
                const colors_array_hole = [...colors_array, "black"];
                const newColor = colors_array_hole[Math.floor(Math.random() * colors_array_hole.length)];
                if(generate_colors_array.length === 0) {
                    generate_colors_array.push(newColor);
                } else {
                    let pass = true;
                    generate_colors_array.forEach((color, i) => {
                        if(newColor === color && color != "black") {
                            pass = false;
                        }
                    })
                    if(pass) {
                        generate_colors_array.push(newColor);
                    }
                }
            }
            break;
        case "niv_3":
            while (generate_colors_array.length < 4) {
                const colors_array_hole = [...colors_array, "black"];
                const newColor = colors_array_hole[Math.floor(Math.random() * colors_array_hole.length)];
                generate_colors_array.push(newColor);
            }
            break;
    }
    return generate_colors_array;
}

function restart() {
    colors_generated = generateColor(actual_lvl);
    sendbtn.style.display = "none";
    initColorSelector(actual_lvl);
    result.forEach((item, i) => {
        item.style.display = "none";
    });
    user_try = 0;
    success = false;
}

function verification_response(gen_colors, user_colors) {
    const good_position_index = [];
    const response = [];
    const bad_colors = [];
    user_colors.forEach((color, i) => {
        result[user_try].getElementsByClassName("btn-circle")[i].style.backgroundColor = color;
        if(color===gen_colors[i]) {
            good_position_index.push(1);
            response.push("black");
        } else {
            good_position_index.push(0);
            bad_colors.push(gen_colors[i]);
        }
        if(response.length === gen_colors.length) {
            success = true;
        }
    });
    user_colors.forEach((color, i) => {
        if(bad_colors.includes(color) && good_position_index[i] === 0) {
            response.push("white");
        }
    });
    return response;
}

function send(gen_colors, user_colors) {
    if(user_try === 10) {
        alert_box.style.display = "block";
        alert_box.style.backgroundColor = "red";
        alert_text.textContent = "Vous avez atteind le nombre maximum de tentative sans trouver la salution, voulez vous recommencez ?";
        alert_mode = "reset";
        used = false;
    } else {
        if(success) {
            alert_box.style.display = "block";
            alert_box.style.backgroundColor = "green";
            alert_text.textContent = "Vous avez réussi ! Voulez vous recommencez ?";
            alert_mode = "reset";
        } else {
            const black_and_white_results = result[user_try].getElementsByClassName("borw-result");
            result[user_try].style.display = "block";
            const good_color = verification_response(gen_colors, user_colors);
            Array.from(black_and_white_results).forEach((e, i) => {
                e.style.display = "none"
            });
            good_color.forEach((color, i) => {
                black_and_white_results[i].style.display = "block";
                black_and_white_results[i].style.backgroundColor = color;
            });
            if(success) {
                alert_box.style.display = "block";
                alert_box.style.backgroundColor = "green";
                alert_text.textContent = "Vous avez réussi ! Voulez vous recommencez ?";
                alert_mode = "reset";
                used = false;
            } else {
                user_try++;
            }
            if(user_try === 10) {
                alert_box.style.display = "block";
                alert_box.style.backgroundColor = "red";
                alert_text.textContent = "Vous avez atteind le nombre maximum de tentative sans trouver la salution, voulez vous recommencez ?";
                alert_mode = "reset";
                used = false;
            }
        }
    }
}

function alert_confirmed(mode) {
    switch(mode) {
        case "change_lvl":
            used = false;
            success = false;
            break;
        case "reset":
            used = false;
            restart();
            break;
    }
    alert_box.style.display = "none";
}

selectedColor.forEach((item, i) => {
    item.addEventListener("click", e => {
        unselectColor(item);
        sendbtn.style.display = "none";
    });
});

selectorColor.forEach((item, i) => {
    item.addEventListener("click", e => {
        selectColor(item);
        used = true;
    });
});

alert_confirm.addEventListener("click", e => {
    alert_confirmed(alert_mode);
});

main_menu.forEach((item, i) => {
    item.addEventListener("click", e => {
        if(used) {
            alert_box.style.display = "block";
            alert_box.style.backgroundColor = "red";
            alert_text.textContent = "En changeant de niveau, vous allez perdre votre progression actuel";
            alert_mode = "change_lvl";
        } else {
            handleIndicator(e.target);
            colors_generated = generateColor(item.name);
            actual_lvl = item.name;
            sendbtn.style.display = "none";
            initColorSelector(item.name);
            result.forEach((item, i) => {
                item.style.display = "none";
            });
            user_try = 0;
        }
    });
    item.classList.contains("is-active") && handleIndicator(item);
});

sendbtn.addEventListener("click", e => {
    const user_colors = [];
    selectedColor.forEach((item, i) => {
        user_colors.push(item.name);
    });
    send(colors_generated, user_colors);
});