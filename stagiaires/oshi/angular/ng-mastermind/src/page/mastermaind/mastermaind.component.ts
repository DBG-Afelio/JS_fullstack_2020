import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mastermaind',
  templateUrl: './mastermaind.component.html',
  styleUrls: ['./mastermaind.component.css']
})
export class MastermaindComponent implements OnInit {

  public colors: string[] = ["red","blue","green","yellow","purple","pink","orange"];
  public colors_f: string[];
  public results: string[][][] = [];
  private colors_generated: string[];
  public actual_lvl: number;
  private used: boolean = false;
  public success: boolean = false;


  constructor() { }

  ngOnInit() {    
  }

  changeLvl(lvl: number) {
    this.actual_lvl = lvl;
    this.used = true;
    this.success = false;
    this.results = [];
    this.colors_generated = this.generateColors(lvl);
  }

  generateColors(lvl:number):string[] {
    const generate_colors: string[] = [];
    this.colors_f = lvl > 1 ? [...this.colors, "black"] : [...this.colors];
    while (generate_colors.length < 4) {
      const newColor: string = this.colors_f[Math.floor(Math.random() * this.colors_f.length)];
      if(generate_colors.length === 0 || (lvl === 1 && !generate_colors.includes(newColor)) || (lvl === 2 && (newColor === 'black' || !generate_colors.includes(newColor))) || lvl === 3) {
        generate_colors.push(newColor);
      }
    }
    return generate_colors;
  }

  newResult(user_colors:string[]):void {
    if(this.results.length < 10 && !this.success){
      this.results.push([user_colors,this.verification_response(this.colors_generated, user_colors)]);
    }
  }

  verification_response(gen_colors, user_colors) {
    const response = [];
    const bad_colors = [];
    const index_verify = [];
    gen_colors.forEach((color, i) => {
        if(color===user_colors[i]) {
            response.push("black");
            index_verify.push(0);
        } else {
            bad_colors.push(user_colors[i]);
            index_verify.push(1);
        }
    });
    if(response.length === gen_colors.length) {
        this.success = true;
    }
    gen_colors.forEach((color, i) => {
        bad_colors.forEach((b_color) => {
            if(b_color === color) {
                if(index_verify[i] === 1) {
                    response.push("white");
                    index_verify[i] = 0;
                }
            }
        });
    });
    return response;
  }

}
