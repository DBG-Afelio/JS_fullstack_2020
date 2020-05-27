
/**
 * 
 * @param {string} email 
 * @returns booleen
 */
function validateEmail(email) {
    let valide = false;
    const tabArobase =  email.split('@');
    valide = tabArobase.length === 2;

    if (valide) {
        const tabPoint =  [...tabArobase[0].split('.'), ...tabArobase[1].split('.')];
        console.log(tabPoint);
        
        valide = tabPoint.every((partie) => partie.length !== 0);
    } 

    if (valide) {
        const strAvantArobase = tabArobase[0];
        valide = !(strAvantArobase.length === 0 || email.charAt(0) === '.' || strAvantArobase[strAvantArobase.length-1] === '.');
    }



    return valide;
}

function testValidateEmail() {
    const ul = createElement('ul','',document.body);
    const tabSuccess = [
        'dbg@gmail.com',
        'dbg@gmail.co.uk',
        'dbg@gmail.brussels',
        'dbg.s@gmail.brussels',
    ];
    const tabEchec = [
        'dbg.@gmail.com', 
        'd@b@gmail.com', 
        'd@b@gmail..com',
        '@gmail.com', 
        'dbg@gmail.c', 
        'dbg@@gmail.com', 
        'dbg.gmail.com', 
        'dbg$@gmail.com',
        'dbg@.gmail.com',
        'dbg@gmailcom',
        '.a@gmailcom',
    ];

    tabSuccess.forEach((mail) => {
        if (validateEmail(mail)) {
            createElement('li', `${mail} : should be valid : OK`, ul);
        } else {
            createElement('li', `${mail} : should be valid : KO`, ul);
        }
    })
    tabEchec.forEach((mail) => {
        if (!validateEmail(mail)) {
            createElement('li', `${mail} : should be invalid : OK`, ul);
        } else {
            createElement('li', `${mail} : should be invalid : KO`, ul);
        }
    })
   
}



function createElement(name, texte, parent) {
    const elem = document.createElement(name);
    const txt = document.createTextNode(texte);
    elem.appendChild(txt);
    parent.appendChild(elem);
    return elem;
}

testValidateEmail();