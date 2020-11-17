import { RomanizeService } from './romanize.service';

/*
Règles:
  1) Un nombre en chiffres romains se lit de gauche à droite ;
  2) Un même symbole n'est pas employé quatre fois de suite (sauf M) ;
  3) Tout symbole qui suit un symbole de valeur supérieure ou égale s’ajoute à celui-ci (exemple : 6 s'écrit VI) ;
  4) Tout symbole qui précède un symbole de valeur supérieure se soustrait à ce dernier ;
    * I doit être retranché à V ou à X quand I est devant V ou X (ex. : 4 s'écrit IV),
    * X doit être retranché à L ou à C quand X est devant L ou C (ex. : 40 s'écrit XL),
    * C doit être retranché à D ou à M quand C est devant D ou M (ex. : 900 s'écrit CM),
    * Par contre, ôter I de L ou de C n'est pas pratiqué (49 s'écrit XLIX et non IL ; 99 s'écrit XCIX et pas IC) ;
  5) Les symboles sont groupés par ordre décroissant, sauf pour les valeurs à retrancher selon la règle précédente (ex. : 1 030 s'écrit MXXX et non XXXM qui est une des façons de représenter 970note 1).


  994 s’écrit CMXCIV et se décompose comme suit: 100 soustrait à 1000 (900) + 10 soustrait à 100 (90) + 1 soustrait à 5 (4) = 994.
  49 s’écrit XLIX pour 10 soustrait à 50 (40) + 1 soustrait à 10 (9) = 49
  308 s’écrit CCCVIII pour 100+100+100 (300) + 5 + 1+1+1 (3) = 308

  Exemples: https://fr.wikipedia.org/wiki/Num%C3%A9ration_romaine#Exemples
*/

describe('Romanize service', () => {

});
