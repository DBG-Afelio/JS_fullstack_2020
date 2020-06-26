import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog de chatons';

  posts = [
    {
      nom: "Rufus",
      description: "Rufus est le plus gros.",
      sexe: "Male",
      loveIts: 0,
      created_at: ""
    },
    {
      nom: "Racine",
      description: "Rufus est le craintif.",
      sexe: "Male",
      loveIts: 0,
      created_at: ""
    },
    {
      nom: "Raya",
      description: "Raya est l'exploratrice.",
      sexe: "Female",
      loveIts: 0,
      created_at: ""
    },
    {
      nom: "R2",
      description: "R2 est inconnu.",
      sexe: "Male",
      loveIts: 0,
      created_at: ""
    },
    {
      nom: "R3",
      description: "R3 est inconnu également.",
      sexe: "Male",
      loveIts: 0,
      created_at: ""
    }
  ];

  picture = "urltothepicture"

  picture2 = "https://pic.clubic.com/v1/images/1772982/raw"



}
