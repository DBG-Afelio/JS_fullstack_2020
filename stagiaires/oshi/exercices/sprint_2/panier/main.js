const tab_img=
  [{
      titre         : "Bulles",
      auteur        : "E. Lassaux",
      commentaire   : "Spécialisé dans les photos d'objet, \"Neness\" aime aussi photographier les animaux",
      Pays          : "Suède",
      Prix          : "208 euros",
      image         :   {
        grande          : "bulle_gd.jpg",
        moyenne         : "bulle_pt.jpg",
        petite          : "bulle_tpt.jpg",
        toute_petite    : "bulle_ttpt.jpg"
      },
      id :1
    },
    {
      titre : "L'Oeil du tig",
      auteur : "J. Herman",
      commentaire : "Tout droit sorti de la nouvelle école Portugaise, il nous donne là une de ses plus belle oeuvres",
      Pays : "Brasil",
      Prix : "228 euros",
      image : {
        grande : "escalier_gd.jpg",
        moyenne : "escalier_pt.jpg",
        petite : "escalier_tpt.jpg",
        toute_petite : "escalier_ttpt.jpg"
      },
      id :2
    },
    {
      titre : "Escape",
      auteur : "JTjiel",
      commentaire : "Ce Finlandais un peu déjanté, ouvre son coeur et son objectif",
      Pays : "Helsinski",
      Prix : "28 euros",
      image : {
        grande : "fenetre_gd.jpg",
        moyenne : "fenetre_pt.jpg",
        petite : "fenetre_tpt.jpg",
        toute_petite : "fenetre_ttpt.jpg"
      },
      id :3
    },
    {
      titre : "Intimité",
      auteur : "DBoo",
      commentaire : "Ce sympatique gailliard, nous invite chez lui en toute simplicité",
      Pays : "Helsinski",
      Prix : "28 euros",
      image : {
        grande : "interieur_gd.jpg",
        moyenne : "interieur_pt.jpg",
        petite : "interieur_tpt.jpg",
        toute_petite : "interieur_ttpt.jpg"
        },
      id :4
    },
    {
      titre : "Palettes",
      auteur : "Sabina",
      commentaire : "Oeuvre originale issue d'une artiste du sac",
      Pays : "Casablanka",
      Prix : "245 euros",
      image : {
        grande : "pantone_gd.jpg",
        moyenne : "pantone_pt.jpg",
        petite : "pantone_tpt.jpg",
        toute_petite : "pantone_ttpt.jpg"
      },
      id :5
    },
    {
      titre : "Untitled",
      auteur : "Anonyme",
      commentaire : "Oeuvre anonyme...",
      Pays : "Bruxelles",
      Prix : "8 euros",
      image : {
        grande : "roul_gd.jpg",
        moyenne : "roul_pt.jpg",
        petite : "roul_tpt.jpg",
        toute_petite : "roul_ttpt.jpg"
      },
      id :6
    },
    
    {
      titre : "Tourne tourne petit escalier",
      auteur : "Marie N.",
      commentaire : "Première photo d'une série d'une artiste trop vite disparue",
      Pays : "Huy",
      Prix : "43 euros",
      image : {
        grande : "tourne_gd.jpg",
        moyenne : "tourne_pt.jpg",
        petite : "tourne_tpt.jpg",
        toute_petite : "tourne_ttpt.jpg"
      },
      id :7
    },
    {
      titre : "Reflets",
      auteur : "Coppe",
      commentaire : "Cette photo un peu mégalo nous illustre la démesure de ce brave roumain",
      Pays : "Belgrade",
      Prix : "2.8 euros",
      image : {
        grande : "vitres_gd.jpg",
        moyenne : "vitres_pt.jpg",
        petite : "vitres_tpt.jpg",
        toute_petite : "vitres_ttpt.jpg"
                  },
      id :8
    },
    {
      titre : "Le lait tue",
      auteur : "S. alade",
      commentaire : "Du rêve dans un légume...",
      Pays : "Bressoux",
      Prix : "13 euros",
      image : {
        grande : "laitue_gd.jpg",
        moyenne : "laitue_pt.jpg",
        petite : "laitue_tpt.jpg",
        toute_petite : "laitue_ttpt.jpg"
                  },
      id :9
    },
    {
      titre : "Buildings",
      auteur : "Toto",
      commentaire : "Du grand, du lourd",
      Pays : "Varsovie",
      Prix : "12 euros",
      image : {
        grande : "immeuble_gd.jpg",
        moyenne : "immeuble_pt.jpg",
        petite : "immeuble_tpt.jpg",
        toute_petite : "immeuble_ttpt.jpg"
                  },
      id :10
    }];
const panier = document.querySelector(".list_item");
const shop = document.querySelector(".shop");
const article = document.querySelector(".achat");
const affi_panier = document.querySelector(".affich_panier");
const input_value_command = document.querySelector(".quantite");
const titre_art = article.querySelector(".art_title");

function selectArticle(art) {
  const img_art = article.querySelector(".art_img");
  const by_from = article.querySelector(".by_from");
  const commentaire = article.querySelector(".commentaire");
  const prix = article.querySelector(".prix");
  titre_art.textContent = art.titre;
  if(getDivbyTitle(art.titre)){
    input_value_command.value = getDivbyTitle(art.titre).querySelector('input').value;
  } else {
    input_value_command.value = 0;
  }
  img_art.src = "./img/"+art.image.grande;
  by_from.textContent = "De "+art.auteur+", "+art.Pays;
  commentaire.textContent = art.commentaire;
  prix.textContent = art.Prix;
}

function getElementbyTitle(title) {
  return tab_img.find((e) => e.titre === title);
}

function getDivbyTitle(title) {
  const panier_list = panier.querySelectorAll('div');
  if(panier_list.length > 0) {
    const index_of = [...panier_list].findIndex((e)=>e.childNodes[1].textContent === title);
    if(index_of === -1) {
      return null;
    } else {
      return panier_list[index_of];
    }
  } else {
    return null;
  }
}

function priceToNumber(price) {
  return Number(price.split(" ")[0]);
}

function updateList(art = null, quantite = 0, div = null) {
  const panier_list = panier.querySelectorAll('div');
  const simple_panier = article.querySelector('.panier');
  const aff_quantite_item = simple_panier.querySelector('.nbr_item');
  const aff_prix_total = document.querySelectorAll('.total');
  let total_item = 0;
  let total_euro = 0;
  if(art) {
    if(quantite > 0) {
      const input = div.querySelector('input');
      const price = div.querySelector('span');
      input.value = quantite;
      price.textContent = "x"+art.Prix+" = "+(priceToNumber(art.Prix)*quantite)+"€";
    } else {
      panier.removeChild(div);
    }
  }
  [...panier_list].forEach(e => {
    const e_item = Number(e.querySelector('input').value);
    total_item = total_item + e_item;
    total_euro = total_euro + e_item * priceToNumber(getElementbyTitle(e.querySelector('p').textContent).Prix);
  });
  aff_quantite_item.textContent = total_item;
  [...aff_prix_total].forEach(e => {
    e.textContent = total_euro+" €";
  });
}

function commandArt(art, quantite) {
  const div = getDivbyTitle(art.titre);
  if(div === null) {
    const new_art = document.createElement('div');
    const img = document.createElement('img');
    const texte = document.createElement('p');
    const input_quantite = document.createElement('input');
    const price = document.createElement('span');
    img.src = "./img/"+art.image.toute_petite;
    texte.textContent = art.titre;
    texte.addEventListener('click', () => {
      selectArticle(art);
      article.style.display = 'grid';
      affi_panier.style.display = 'none';
    });
    input_quantite.setAttribute('type', 'number');
    input_quantite.setAttribute('min', '0');
    input_quantite.setAttribute('step', '1');
    input_quantite.addEventListener('input', () => {
      updateList(art,input_quantite.value,new_art);
    });
    new_art.appendChild(img);
    new_art.appendChild(texte);
    new_art.appendChild(input_quantite);
    new_art.appendChild(price);
    panier.appendChild(new_art);
    updateList(art, quantite, new_art);
  } else {
    updateList(art, quantite, div);
  }
}

tab_img.forEach(element => {
    const main_div = document.createElement('div');
    const img = document.createElement('img');
    const texte = document.createElement('p');
    const price = document.createElement('span');
    img.src = "./img/"+element.image.petite;
    texte.textContent = element.titre;
    price.textContent = element.Prix;
    main_div.appendChild(img);
    main_div.appendChild(texte);
    main_div.appendChild(price);
    main_div.addEventListener("click", () => {selectArticle(element)});
    shop.appendChild(main_div);
});

document.querySelector('.command').addEventListener('click', () => {
  commandArt(getElementbyTitle(titre_art.textContent), Number(input_value_command.value));
});

document.querySelector('.voir-panier').addEventListener('click', () => {
  article.style.display = 'none';
  affi_panier.style.display = 'block';
});

document.querySelector('.voir-article').addEventListener('click', () => {
  article.style.display = 'grid';
  affi_panier.style.display = 'none';
})

document.querySelector('.vider-panier').addEventListener('click', () => {
  while (panier.firstChild) {
    panier.removeChild(panier.lastChild);
    updateList();
  }
})

selectArticle(tab_img[0]);