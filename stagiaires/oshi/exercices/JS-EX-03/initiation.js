const exo=document.forms;

exo[0].ch1.addEventListener('focus', () => {
  exo[0].ch1.value="";
})

exo[1].ch1.addEventListener('focus', () => {
  exo[1].ch1.value="";
})

exo[1].ch1.addEventListener('blur', () => {
  if(exo[1].ch1.value === "") {
    exo[1].ch1.value=exo[1].ch1.defaultValue;
  }
})

exo[2].ch1.addEventListener('keydown', () => {
  exo[2].ch1.size++;
})

exo[3].cb1.addEventListener('click', () => {
  if(exo[3].cb1.checked) {
    exo[3].ch1.type="text";
  } else {
    exo[3].ch1.type="password";
  }
})

document.querySelector(".enfonce").addEventListener('mousedown', () => {
  exo[4].ch1.type="text";
})

document.querySelector(".enfonce").addEventListener('mouseup', () => {
  exo[4].ch1.type = "password";
})

exo[5].ch1.addEventListener('focus', () => {
  exo[5].ch1.blur();
})

exo[6].cb1.addEventListener('click', () => {
  if(exo[6].cb1.checked) {
    exo[6].ch1.focus();
    exo[6].ch1.value = 0;
  } else {
    exo[6].ch1.blur();
    exo[6].ch1.value = null;
  }
})

exo[6].ch1.addEventListener('focus', () => {
  if(!exo[6].cb1.checked) {
    exo[6].ch1.blur();
  }
})

exo[7].b1.addEventListener('click', () => {
  for(let i=1; i <= 2; i++) {
    let value = Number(exo[7].ch1.value);
    const checkedelement = document.getElementById("rb1_"+i);
    if(checkedelement.checked) {
      exo[7].ch1.value = value + Number(checkedelement.value);
    }
  }
})

exo[8].b1.addEventListener('click', () => {
  exo[8].ch1.defaultValue = exo[8].ch1.value;
})

exo[8].b2.addEventListener('click', () => {
  exo[8].ch1.value = exo[8].ch1.defaultValue;
})

exo[9].s1.addEventListener('change', () => {
  exo[9].ch1.value = exo[9].s1.value;
  exo[9].ch2.value = exo[9].s1.options[exo[9].s1.selectedIndex].text;
})

exo[10].s1.addEventListener('change', () => {
  const selected_options = [[],[]];
  Array.from(exo[10].s1.options).forEach(option => {
    if(option.selected) {
      selected_options[0].push(option.value);
      selected_options[1].push(option.text);
    }
  });
  exo[10].ch1.value = selected_options[0].join(", ");
  exo[10].ch2.value = selected_options[1].join(", ");
})
let index = 6;
exo[10].b1.addEventListener('click', () => {
  console.log("Click");
  const new_option = document.createElement("option");
  const new_option_text = document.createTextNode("Item "+index);
  new_option.appendChild(new_option_text);
  new_option.value = index;
  exo[10].s1.appendChild(new_option);
  index++;
})

exo[11].gauche.addEventListener('click', () => {
  permutte(1);
})

exo[11].droite.addEventListener('click', () => {
  permutte(-1);
})
let index_value = 6;
exo[11].b1.addEventListener('click', () => {
  console.log("Click");
  const new_input = document.createElement("input");
  new_input.value = index_value;
  new_input.type = "text";
  new_input.name = "c1";
  new_input.style.width = "51px";
  document.getElementsByClassName("data-controls")[0].appendChild(new_input);
  index_value++;
})

function permutte(sens) {
  const tab = exo[11].c1;
  let tab_tmp = [];

  if (sens === 1) {
    tab_tmp = Array.from(tab).slice(1).map(input => input.value);
    tab_tmp.push(tab[0].value);
  } else {
    tab_tmp = Array.from(tab).slice(0, tab.length - 1).map(input => input.value);
    tab_tmp.unshift(tab[tab.length - 1].value);
  }

  tab.forEach((element, c) => {
    element.value = tab_tmp[c];
  })
}

exo[12].droite.addEventListener('click', () => {
  Array.from(exo[12].s1.options).forEach(option => {
    if (option.selected) {
      exo[12].s2.appendChild(option);
    }
  });
})

exo[12].gauche.addEventListener('click', () => {
  Array.from(exo[12].s2.options).forEach(option => {
    if (option.selected) {
      exo[12].s1.appendChild(option);
    }
  });
})

exo[13].c02.disabled = true;
exo[13].c03.disabled = true;
exo[13].addEventListener('keyup', () => {
  if(exo[13].c01.value.length === 5) {
    exo[13].c02.disabled = false;
    exo[13].c02.focus();
    if(exo[13].c02.value.length === 5) {
      exo[13].c03.disabled = false;
      exo[13].c03.focus();
    } else {
      exo[13].c03.disabled = true;
      exo[13].c03.value = null;
    }
  } else {
    exo[13].c02.disabled = true;
    exo[13].c02.value = null;
    exo[13].c03.disabled = true;
    exo[13].c03.value = null;
  }
})

exo[14].cb1.addEventListener('click', () => {
  if (exo[14].cb1.checked) {
    exo[14].ch1.style.display = "none";
  } else {
    exo[14].ch1.style.display = "block";
  }
})

const actual_style = exo[15].ch1.style;
actual_style.width="170px";
actual_style.height="16px";
exo[15].ch1.addEventListener('focus', () => {
  actual_style.width = Number(parseInt(actual_style.width)+100)+"px";
  actual_style.height = Number(parseInt(actual_style.height)+100)+"px";
})
exo[15].ch1.addEventListener('blur', () => {
  actual_style.width = "170px";
  actual_style.height = "16px";
})

const exo_carres_1 = Array.from(document.getElementsByClassName("1_exo_carre carre"));
exo_carres_1.forEach((carre) => {
  carre.addEventListener("click", () => {
    exo_carres_1.map((allCarre) => allCarre.classList.remove("checked"));
    carre.classList.add("checked");
  });
});

const exo_carres_2 = Array.from(document.getElementsByClassName("2_exo_carre carre"));
const exo_classe_2 = document.getElementById("out").classList;
let last_class = "blanc";
exo_carres_2.forEach((carre) => {
  carre.addEventListener("click", () => {
    exo_carres_2.map((allCarre) => allCarre.classList.remove("checked"));
    carre.classList.add("checked");
    exo_classe_2.replace(last_class, carre.getAttribute("data-color"));
    last_class = carre.getAttribute("data-color");
  });
});
const imgs_url = 'https://pixabay.com/api/?key=15935321-ecb5695630be7347dafccf251&q=developement&per_page=200';
const request = new XMLHttpRequest();
request.open('GET', imgs_url);
request.responseType = 'json';
request.send();
let last_img_clicked;
function add_Img_exo() {
  const imgs = request.response.hits;
  const new_img = document.createElement("img");
  const img = Math.floor(Math.random() * 200);
  new_img.src = imgs[img].webformatURL;
  new_img_width = Number(imgs[img].webformatWidth/2);
  new_img_height = Number(imgs[img].webformatHeight/2);
  new_img.style.width = new_img_width+"px";
  new_img.style.height = new_img_height+"px";
  new_img.addEventListener('click', () => {
    last_img_clicked = new_img;
  })
  new_img.addEventListener('ondragstart', function(event) {
    event.dataTransfer.setData('text/plain',null);
  }, false);
  document.getElementById("exo-img-div-g").appendChild(new_img);
}
document.getElementById("add-img-exo-bonus").addEventListener('click', add_Img_exo);
const exobonusDivGauche = document.getElementById("exo-img-div-g");
const exobonusImgsGauche = exobonusDivGauche.getElementsByTagName("img");
const exobonusImgDroite = document.getElementById("idroite");
let dragged;
Array.from(exobonusImgsGauche).forEach((img) => {
  img.draggable = true;
  img.addEventListener('click', () => {
    last_img_clicked = img;
  })
})
exobonusImgDroite.addEventListener('click', () => {
  exobonusImgDroite.src = last_img_clicked.src;
  exobonusImgDroite.height = last_img_clicked.height;
  exobonusImgDroite.width = last_img_clicked.width;
})

document.addEventListener("drag", function(event) {
}, false);

document.addEventListener("dragstart", function(event) {
  dragged = event.target;
}, false);

document.addEventListener("dragend", function(event) {
  exobonusImgDroite.style.opacity = "1";
}, false);

document.addEventListener("dragover", function(event) {
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  if(event.target.className === "droite" || event.target === exobonusImgDroite) {
    exobonusImgDroite.style.opacity = "0.25";
  }
}, false);

document.addEventListener("dragleave", function(event) {
  if(event.target === exobonusImgDroite) {
    exobonusImgDroite.style.opacity = "1";
  }
}, false);

document.addEventListener("drop", function(event) {
  const data = event.dataTransfer.getData("text/plain");
  event.preventDefault();
  if (event.target.className === "droite" || event.target === exobonusImgDroite) {
    exobonusImgDroite.src = dragged.src;
    exobonusImgDroite.height = dragged.height;
    exobonusImgDroite.width = dragged.width;
  }
}, false);
