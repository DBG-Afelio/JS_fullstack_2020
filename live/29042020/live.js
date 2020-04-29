function soumettre() {
    // Synthaxe DOM XML
    // const texte = document.getElementById('nom').value;
    // texte = document.getElementsByName('nom')[0].value;
    // texte = document.getElementsByTagName('input')[0].value;
    
    // // Synthaxe DOM HTML
    // texte = document.querySelector('#nom').value;
    // texte = document.querySelectorAll('#nom')[0].value;
    // texte = document
    //     .querySelector('form[name=\'formulaire\']')
    //     .querySelector('input[name=\'nom\']')
    //     .value;
    // texte = document
    //     .querySelector('form[name=\'formulaire\'] input[name=\'nom\']')
    //     .value;
    // texte = document.forms[0]
    //     .querySelector('input[name=\'nom\']')
    //     .value;
    // // Node
    // texte = document.forms[0]
    //         .firstChild
    //         .nextSibling
    //         .firstChild
    //         .nextSibling
    //         .value
    // // HTML Node
    // texte = document.forms[0]
    //         .children[0]
    //         .children[0]
    //         .value

    // // Synthaxe de formulaire
    // texte = document.forms[0][0].value;
    // texte = document.forms[0].nom.value;
    texte = document.forms.formulaire.nom.value;

    console.log('texte entré', texte);
    
    addLiToUl(document.getElementById('liste'), texte);
}


function addLiToUl(ulNode, texte){
    // Créer le li
    const liNode = document.createElement('li');
    // Créer le texte
    // liNode.innerHTML = texte;
    // liNode.textContent = texte;
    const textNode = document.createTextNode(texte);
    liNode.appendChild(textNode);
    
    // Attacher un <span>X</span>
    const spanNode = document.createElement('span');
    const xButton = document.createTextNode('X');
    spanNode.appendChild(xButton);
    liNode.appendChild(spanNode);
    
    // Attacher un évènement de click sur le span
    spanNode.addEventListener('click', function() {
        console.log('click', this);
        removeLi(this);
    })

    // Attacher le li au ul
    ulNode.appendChild(liNode);
}

function removeLi(spanNode) {
    const liNode = spanNode.parentNode;
    const ulNode = liNode.parentNode;
    ulNode.removeChild(liNode);
}
