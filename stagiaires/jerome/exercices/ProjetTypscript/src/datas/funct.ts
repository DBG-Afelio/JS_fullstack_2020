
function checkErrorMessage (error:Error){
    let status;
    switch(error.message){

        case 'Format Invalide': status=400
        break;
        case 'Mots Interdit': status=403
        break;
        case 'Demande Introuvable': status=404
        break;
        case 'Element(s) Manquant(s)': status=403
        break;
        case 'Erreur': status=666
        break;
        default : status=500
    }
    return status;
}

module.exports = {checkErrorMessage}