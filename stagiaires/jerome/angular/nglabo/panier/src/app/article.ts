export interface Article {
    titre : string,
    auteur : string,
    commentaire : string,
    Pays : string,
    Prix : string,
    image : {
      grande : string,
      moyenne : string,
      petite : string,
      toute_petite : string
                },
    id : number

}
