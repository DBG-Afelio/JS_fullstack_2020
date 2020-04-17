window.addEventListener("DOMContentLoaded", () => {

  // LES ELEMENTS DU DOM SONT DECLARES AVEC CONST CAR ELEMENTS FIXE
  const submit = document.querySelector(".submit");
  const resultat = document.querySelector(".resultat");
  const restart = document.querySelector(".reset");

  // SAUF VALUE CAR LA SOMME ENTRE PAR L'UTILISATEUR PEUT ETRE VARIABLE

  let value;

  document.querySelector(".input").innerHTML = "";

  const rendu = montant => {

    // SI LE TYPE DU MONTANT EST DIFFERENT 

    if (isNaN(montant) || montant === 0) {

      return resultat.innerHTML = "Erreur : Entrer un montant valide";

    } else {

      // DECLARATION DES VARIABLES

      let billetDe500,
          billetDe200,
          billetDe100,
          billetDe50,
          billetDe20,
          billetDe10,
          billetDe5,
          piecesDe2,
          piecesDe1,
          piecesDe50,
          piecesDe20,
          piecesDe10,
          piecesDe05,
          piecesDe02,
          piecesDe01,
          reminder,
          cents;
          
      // ON DIVISE EN BILLETS DE 500

      billetDe500 = Math.floor(montant / 500);

      // ON GARDE LE RESTE (MODULO)

      reminder = montant % 500;

      // LE RESTE EST UTILISE TOUT LE LONG DE LA SEQUENCE DESCENDANTE 
      // AVEC LES MEMES OPERATIONS EN FONCTION DU TYPE DE MONNAIE

      billetDe200 = Math.floor(reminder / 200);
      reminder = reminder - billetDe200 * 200;

      billetDe100 = Math.floor(reminder / 100);
      reminder = reminder - billetDe100 * 100;

      billetDe50 = Math.floor(reminder / 50);
      reminder = reminder - billetDe50 * 50;

      billetDe20 = Math.floor(reminder / 20);
      reminder = reminder - billetDe20 * 20;

      billetDe10 = Math.floor(reminder / 10);
      reminder = reminder - billetDe10 * 10;

      billetDe5 = Math.floor(reminder / 5);
      reminder = reminder - billetDe5 * 5;

      piecesDe2 = Math.floor(reminder / 2);
      reminder = reminder - piecesDe2 * 2;

      piecesDe1 = Math.floor(reminder / 1);
      reminder = reminder - piecesDe1 * 1;

      // ON MULTIPLIE LE REMINDER PAR 100 POUR AVOIR LES CENTIMES EN ENTIER
      // ON UTILISE MATH.ROUND() CETTE FOIS CI POUR NE PAS PERDRE UN CENTIME...😅 
    
      cents = Math.round(reminder * 100);

      // ON REFAIT LA MEME OPERATION POUR LES CENTIMES

      piecesDe50 = Math.floor(cents / 50);
      cents = cents - piecesDe50 * 50;

      piecesDe20 = Math.floor(cents / 20);
      cents = cents - piecesDe20 * 20;

      piecesDe10 = Math.floor(cents / 10);
      cents = cents - piecesDe10 * 10;

      piecesDe05 = Math.floor(cents / 5);
      cents = cents - piecesDe05 * 5;

      piecesDe02 = Math.floor(cents / 2);
      cents = cents - piecesDe02 * 2;

      piecesDe01 = Math.floor(cents / 1);
      cents = cents - piecesDe01 * 1;

      return `<b>Je vous dois</b> 
                        <br>
                        <br>
                        <b>${billetDe500}</b> billet(s) de 500 euros,<br>
                        <b>${billetDe200}</b> billet(s) de 200 euros,<br>
                        <b>${billetDe100}</b> billet(s) de 100 euros,<br>
                        <b>${billetDe50}</b> billet(s) de 50 euros,<br>
                        <b>${billetDe20}</b> billet(s) de 20 euros,<br>
                        <b>${billetDe10}</b> billet(s) de 10 euros,<br>
                        <b>${billetDe5}</b> billet(s) de 5 euros,<br>
                        <b>${piecesDe2}</b> piece(s) de 2 euros,<br>
                        <b>${piecesDe1}</b> piece(s) de 1 euro<br> 
                        <br><br>
                        <b>et</b>
                        <br><br>
                        <b>${piecesDe50}</b> piece(s) de 50 centimes<br>
                        <b>${piecesDe20}</b> piece(s) de 20 centimes<br>
                        <b>${piecesDe10}</b> piece(s) de 10 centimes<br>
                        <b>${piecesDe05}</b> piece(s) de 5 centimes<br>
                        <b>${piecesDe02}</b> piece(s) de 2 centimes<br>
                        <b>${piecesDe01}</b> piece(s) de 1 centime<br>`;
    }
  };

  // QUAND L'UTILISATEUR VALIDE LE MONTANT 
  submit.addEventListener("click", () => {
    value = Number(document.querySelector(".input").value);
    resultat.innerHTML = rendu(value);
  });

  // RECOMMENCER
  restart.addEventListener("click", () => {
    resultat.innerHTML = "";
  });

});